"use strict";
angular.module("angularJsTypewriteSiteApp", ["angularTypewrite"]), angular.module("angularJsTypewriteSiteApp").controller("MainCtrl", ["$scope", function(a) {
    var b = new Date,
        c = new Date(b);
    c.setDate(b.getDate() - 1), a.date = c.toString(), a.stuff = ["Hi!", "Did you check this directive?", "useful?", "not really", "but it looks good :)", "Want more? scroll down!", ""], a.open = !1, setTimeout(function() {
        a.open = !0
    }, 50), a.title = !1, a.activateTitle = function() {
        a.title = !0, setTimeout(function() {
            a.open = !1, angular.element(document.querySelector(".top")).removeClass("open")
        }, 50)
    }, a.checkIfOpen = function() {
        return a.open
    }
}]);
