describe('The Homepage', function () {

    var home = require('./home.conf.js');
    var functions = require('../../functions.conf.js');
    var _ = require('lodash');
    _.extend(home, functions);

   beforeEach(function () {
        home.go();
    });

    it('the application loads correctly', function () {
        expect(home.getElementText("title")).toEqual('SPEARHEAD');
    });

});
