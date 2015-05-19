socialNetwork.controller('EditProfileController',
    function EditProfileController($scope, $location, authentication, notify) {
        authentication.getDataAboutMe()
            .then(
            function successHandler(data) {
                $scope.data = data;
                if (!data.profileImageData) {
                    document.getElementById('profileImagePreview').src = "img/noavatar.jpg";
                }
                if (!data.coverImageData) {
                    document.getElementById('coverImagePreview').src = "img/nocover.png";
                }
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.getProfileImage = function () {
            $('#profileImageSelector').click()
                .on('change', function () {
                    var file = this.files[0];
                    if (file.type.match(/image\/.*/)) {
                        var reader = new FileReader();
                        reader.onload = function () {
                            $('#profileImagePreview')
                                .text(file.name)
                                .attr('src', reader.result);
                            $scope.data.profileImageData = reader.result;
                        };
                        reader.readAsDataURL(file);
                    } else {
                        notify.error("Invalid file format.");
                    }
                });
        };

        $scope.getCoverImage = function () {
            $('#coverImageSelector').click()
                .on('change', function () {
                    var file = this.files[0];
                    if (file.type.match(/image\/.*/)) {
                        var reader = new FileReader();
                        reader.onload = function () {
                            $('#coverImagePreview')
                                .text(file.name)
                                .attr('src', reader.result);
                            $scope.data.coverImageData = reader.result;
                        };
                        reader.readAsDataURL(file);
                    } else {
                        notify.error("Invalid file format.");
                    }
                });
        };

        $scope.cancelSave = function () {
            $location.path('/users/' + authentication.getUserName());
        };

        $scope.editProfile = function (profileData, editProfileForm) {
            if (editProfileForm.$valid) {
                authentication.editUserProfile(profileData)
                    .then(
                    function successHandler(data) {
                        authentication.setName(data.name);
                        authentication.setProfileImageData(data.profileImageData);
                        authentication.setCoverImageData(data.coverImageData);
                        notify.info("Profile change successful.");
                        $location.path('/users/' + authentication.getUserName());
                    },
                    function errorHandler(error) {
                        notify.error("Profile change failed.");
                    }
                )
            }
        };
    });