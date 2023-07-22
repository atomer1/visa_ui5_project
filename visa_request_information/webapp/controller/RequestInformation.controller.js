sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("visarequestinformation.controller.RequestInformation", {
            onInit: function () {
                var oData = {
                    sapCustomer: "0",
                    acmeCorporation: "0",
                }
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModelControl");
            }
        });
    });
