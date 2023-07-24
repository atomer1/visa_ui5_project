sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("visaproject.controller.App", {
      onInit() {
        // var oData = {
        //   tcVisible: false
        // };
        // var oModel = new JSONModel(oData);
        // sap.ui.getCore().setModel(oModel, "appView");
      },
      onClickNavigate: function(sNaviateName) {
        debugger;
        var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo(sNaviateName, {}, true);
      },
    });
  }
);
