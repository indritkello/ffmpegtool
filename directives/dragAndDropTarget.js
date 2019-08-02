app.directive('dragAndDropTarget', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        $scope: {
            onDrop: '&',
            fileName: '='
        },
        link: function (scope, el, attrs, controller) {

            var id = attrs.id;
            console.log('directive applied to ' + id);

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
                scope.$apply();

                console.log(scope.fileName);
            });

        }
    }
}]);