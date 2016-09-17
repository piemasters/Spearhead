export function SidebarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/spearhead/shared/sidebar/sidebar.view.html',
        controller: SidebarController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class SidebarController {
    constructor(moment, $scope, $location) {
        'ngInject';


        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
}
