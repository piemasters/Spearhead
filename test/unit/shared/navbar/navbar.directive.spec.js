describe('navbar directive', () => {
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


    it('should have a title', function () {
        expect(navbar.html()).toContain('Spearhead');
    });

    it('should have a page links', function () {
        expect(navbar.html()).toContain('Home');
        expect(navbar.html()).toContain('Docs');
    });


});
