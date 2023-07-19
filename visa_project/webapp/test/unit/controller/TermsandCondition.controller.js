/*global QUnit*/

sap.ui.define([
	"visa_project/controller/TermsandCondition.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TermsandCondition Controller");

	QUnit.test("I should test the TermsandCondition controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
