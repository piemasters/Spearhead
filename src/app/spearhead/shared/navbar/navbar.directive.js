export function NavbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/spearhead/shared/navbar/navbar.view.html',
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;
}

class NavbarController {
    constructor(moment, $scope, $location) {
        'ngInject';
        this.relativeDate = moment().format("DD/MM/YYYY - HH:mm");

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
}
