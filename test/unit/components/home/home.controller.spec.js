describe('home controller', () => {
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
        var element = '<spearhead-navbar />';
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('should have technologies registered', inject(technologies => {
        expect(technologies).not.toEqual(null);
    }));

    it('should have a navbar', function () {
        expect(navbar.html()).toContain('Spearhead');
    });

    it('home should be active on the navbar', function () {
        expect(navbar.find('li.active').text()).toEqual('Home');
    });


});







