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
                
            },
            onRouteMatched: function (oEvent) {
                var sRouteName = oEvent.getParameter('name');
                debugger;
                
                this._bindView(sRouteName);
            },
            _bindView: function (sRouteName) {
                var oPaymentStatus = Models.createJSONModelData("/model/PaymentStatus.json")
                this.getView().setModel(oPaymentStatus, "oModelData");
                var oData = {
                    count: 0,
                    sRteName: sRouteName
                }
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModelControl");
            },
            fnNavigateRegisterPage: function () {
                var iCount = this.getView().getModel('oModelControl').getData();
                iCount.count = 1;
                this.getView().getModel('oModelControl').refresh();
            },
            onOnBoardingSupplierPopup: function () {
                if (!this._oDialog) {
                    this._oDialog = new sap.ui.xmlfragment("visaproject.view.fragment.OnBoardingSupplier", this);
                    this.getView().addDependent(this._oDialog);
                }
                this._oDialog.open();
            },
            onClosePopup: function () {
                this._oDialog.close();
            },

            onDialogClosed: function () {
                this._oDialog.destroy();
                this._oDialog = null;
            },
            onEmailPopupOpen: function () {
                this.onDialogClosed();
                if (!this._oEmailDialog) {
                    this._oEmailDialog = sap.ui.xmlfragment("visaproject.view.fragment.EmailTemplate", this);
                    this.getView().addDependent(this._oEmailDialog);
                }

                this._oEmailDialog.open();
            },

            onCloseEmailDialog: function () {
                this._oEmailDialog.close();
            },

            onEmailSend: function () {
               

                this.onCloseEmailDialog();
            },

            onEmailCancel: function () {
                this.onCloseEmailDialog();
            },

            onDialogEmailClosed: function () {
                this._oEmailDialog.destroy();
                this._oEmailDialog = null;
            },
            loadFragments: function (oEvent) {
                debugger;
                var sSelectedKey = oEvent.getParameter("key");
                var sFragmentName = "visaproject.view.fragment." + sSelectedKey;

                Fragment.load({
                    id: this.getView().getId(),
                    name: sFragmentName,
                    controller: this
                }).then(function (oFragment) {
                    var oIconTabBar = this.getView().byId("loadFragment");
                    oIconTabBar.removeAllItems();
                    oIconTabBar.addItem(oFragment);
                }.bind(this));
            }

        });
    });
