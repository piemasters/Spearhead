'use strict';

module.exports = {

    read_prop: function (obj, prop) {
        return obj[prop];
    },

    getElementText: function (element) {
        var list = this.elementList;
        var el = this.read_prop(list, element);
        return el.getText();
    },

    go: function () {
        browser.driver.get('http://localhost:3000');
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
    }
};
