socialNetwork.controller('EditProfileController',
    function EditProfileController($scope, $location, authentication, notify) {
        authentication.getDataAboutMe()
            .then(
            function successHandler(data) {
                $scope.data = data;
            },
            function errorHandler(error) {
                console.log(error);
            }
        );

        $scope.getProfileImage = function () {
            //TODO: implement.
        };

        $scope.getCoverImage = function () {
            //TODO: implement.
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