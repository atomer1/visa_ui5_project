/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"visa_request_information/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
