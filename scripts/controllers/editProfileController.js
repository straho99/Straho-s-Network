socialNetwork.controller('EditProfileController',
    function EditProfileController($scope, $location, authentication, notify) {
        authentication.getUserFullData(authentication.getUserName())
            .then(
            function successHandler(data) {
                $scope.profileImageData = data.profileImageData;
                $scope.name = data.name;
                $scope.email = data.email;
                $scope.coverImageData = data.coverImageData;
                $scope.gender.male = data.gender === 1 ? true : false;
                $scope.gender.female = data.gender === 2 ? true : false;
                $scope.gender.other = data.gender === 3 ? true : false;

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
            //TODO: implement.

            //$location.path('/users/' + authentication.getUserName());
        };
    });