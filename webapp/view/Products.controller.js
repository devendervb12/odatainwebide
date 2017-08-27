sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZBATCH24ODATA.view.Products", {
      
      onInit: function() {
         
		var url = "/sap/opu/odata/SAP/ZGW_BATCH24_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
		
	}

	});
});