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
		}, fnSupplierChangeColor: function (sStatus) {
			switch (sStatus) {
				case "ONBOARDING ERROR":
					return "Warning";
				case "ACCEPTS CARD PAYMENTS":
				case "ONBOARDED TO VBIP":
					return "Success";
				case "NOT ONBOARDED":
					return "Error";
			}
		}, fnSapCustomerChangeColor: function (sStatus) {
			switch (sStatus) {
				case "YES":
					return "Success";
			}
		}
	};
});