/*global QUnit*/

sap.ui.define([
	"visa_request_information/controller/RequestInformation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("RequestInformation Controller");

	QUnit.test("I should test the RequestInformation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
