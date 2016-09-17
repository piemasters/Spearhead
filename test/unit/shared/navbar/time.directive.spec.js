describe('time directive', () => {

    var compile, scope, navbar;

    beforeEach(angular.mock.module('gulp'));

    beforeEach(function () {
        inject(function ($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        });

        navbar = getNavbar();
    });

    function getNavbar() {
        var element = '<time></time>';
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('should have the date and time formatted correctly', function () {
        var date, year, month, day, hours, minutes, seconds;
        date = new Date();
        year = date.getFullYear();
        month = ('0' + (date.getMonth() + 1)).slice(-2);
        day = ('0' + date.getDate()).slice(-2);
        hours = ('0' + date.getHours()).slice(-2);
        minutes = ('0' + date.getMinutes()).slice(-2);
        seconds = ('0' + date.getSeconds()).slice(-2);

        var time = day + "/" + month + "/" + year + " - " + hours + ":" + minutes + ":" + seconds;
        expect(navbar.html()).toContain(time);
    });

});
