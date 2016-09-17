export function TimeDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/spearhead/shared/navbar/time.view.html',
        controller: TimeController,
        controllerAs: 'time',
        bindToController: true
    };

    return directive;
}

class TimeController {
    constructor(moment, $interval) {
        'ngInject';
         this.updateClock(moment, $interval);
    }

    updateClock(moment, $interval) {
         $interval(() => { this.time = moment().format("DD/MM/YYYY - HH:mm:ss"); }, 1000);
    }
}
