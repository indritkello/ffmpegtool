app.directive('dragAndDropTarget', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        $scope: {
            onDrop: '&',
            fileName: '=',
            fileDropped: '&'
        },
        link: function (scope, el, attrs, controller) {

            el.bind("drop", function (e) {

                e.preventDefault();
                e.stopPropagation();

                console.log('dropped');

                // capture file
                var dt = e.dataTransfer;
                var files = dt.files;
                var file = files[0];

                console.log(dt);

                scope.input.fileName = file.name;
                if (scope.automaticOutputFilename) {
                    scope.refreshOutputFilename();
                }

                scope.$apply();
                
                console.log(scope.fileName);
            });

        }
    }
}]);