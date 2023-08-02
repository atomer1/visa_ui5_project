sap.ui.define([
    "visaproject/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "../model/models",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, formatter, Models, Fragment) {
        "use strict";

        return BaseController.extend("visaproject.controller.DashboardPage", {
            formatter: formatter,
            onInit: function () {

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.attachRouteMatched(this.onRouteMatched, this);
                
                // sap.ui.getCore().getModel("appView").setProperty('/tcVisible', true);
                // debugger
            },
            onRouteMatched: function (oEvent) {
                var sRouteName = oEvent.getParameter('name');
                debugger;
                this._bindView();
            },
            _bindView: function () {
                // var oPaymentStatus = Models.createJSONModelData("/model/PaymentStatus.json")
                // this.getView().setModel(oPaymentStatus, "oModelData");
                var oPaymentStatus = this.getView().getModel('paymentStatusModel').getProperty('/paymentStatus');
                var oData = {
                    count: 0,
                    paymentStatus: oPaymentStatus
                }
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModelControl");
            }
        });
    });
