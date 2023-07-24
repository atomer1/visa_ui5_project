sap.ui.define([
    "visaproject/controller/BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("visaproject.controller.TermsandCondition", {
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
