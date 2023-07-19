sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("visaproject.controller.TermsandCondition", {
            onInit: function () {
                var oDataControl = {
                    consentToTC: false,
                    consentToSD: false
                };
                var oMdlCtrl = new JSONModel(oDataControl);
                this.getView().setModel(oMdlCtrl, "oModelControl");
            },
            onConfirmTC: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("home", {}, true);
            }
        });
    });
