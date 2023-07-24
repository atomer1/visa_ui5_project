sap.ui.define([
    "visaproject/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, Models) {
        "use strict";

        return BaseController.extend("visaproject.controller.RegisterNewCard", {
            formatter:formatter,
            onInit: function () {

            }
        });
    });