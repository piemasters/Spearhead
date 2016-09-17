describe('The Navbar', function () {

    var navbar = require('./navbar.conf.js');
    var functions = require('../../functions.conf.js');
    var _ = require('lodash');
    _.extend(navbar, functions);

    beforeEach(function () {
        navbar.go();
    });

    it('opening the about page makes the navbar link active', function () {
        navbar.getElementText("navabout").click();
        expect(navbar.getElementText("active")).toEqual('Docs');
    });

});
