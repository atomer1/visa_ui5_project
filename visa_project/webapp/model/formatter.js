sap.ui.define([], function () {
	"use strict";
	return {
		fnChangeColor: function (sStatus) {
			switch (sStatus) {
				case "PENDING":
					return "Warning";
				case "COMPLETED":
					return "Success";
			}
		}
	};
});