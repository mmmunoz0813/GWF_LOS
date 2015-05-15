dojo.declare("LoanProductSetup", wm.Page, {
	start: function() {
		this.svLoanProductList.update();
        this.svProductType.update();
        this.svBaseYear.update();
        this.svProductGroup.update();
	},
	"preferredDevice": "desktop",

	btnNewCodeClick: function(inSender) {
		this.text1.clear();
        this.text2.clear();
        this.number1.clear();
        this.number2.clear();
        this.number3.clear();
        this.number4.clear();
        this.number5.clear();
        this.selectMenu1.clear();
        this.selectMenu2.clear();
        this.selectMenu3.clear();
        this.checkbox1.clear();
	},
	dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.text1.setDataValue(this.dojoGrid1.selectedItem.getData().prodCode);
        this.text2.setDataValue(this.dojoGrid1.selectedItem.getData().productName);
        this.number1.setDataValue(this.dojoGrid1.selectedItem.getData().minIr);
        this.number2.setDataValue(this.dojoGrid1.selectedItem.getData().maxIr);
        this.number3.setDataValue(this.dojoGrid1.selectedItem.getData().minLoanAmount);
        this.number4.setDataValue(this.dojoGrid1.selectedItem.getData().maxLoanAmount);
        this.number5.setDataValue(this.dojoGrid1.selectedItem.getData().minDprequired);
        this.checkbox1.setDataValue(this.dojoGrid1.selectedItem.getData().comakerrequired);
        this.selectMenu1.setDataValue(this.dojoGrid1.selectedItem.getData().productType);
        this.selectMenu2.setDataValue(this.dojoGrid1.selectedItem.getData().interestbaseyear);
        this.selectMenu3.setDataValue(this.dojoGrid1.selectedItem.getData().productgroup);
        
	},
	btnLoanCountDetailsClick: function(inSender) {
	  this.btnNewCodeClick(inSender);
	},
  dojoGrid2CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.text3.setDataValue(this.dojoGrid2.selectedItem.getData().productcode);
        this.number6.setDataValue(this.dojoGrid2.selectedItem.getData().loancount);
        this.number8.setDataValue(this.dojoGrid2.selectedItem.getData().defaultIr);
        this.number7.setDataValue(this.dojoGrid2.selectedItem.getData().defaultLoanableAmt);
        this.number9.setDataValue(this.dojoGrid2.selectedItem.getData().minTerm);
        this.number10.setDataValue(this.dojoGrid2.selectedItem.getData().maxTerm);
        this.text4.setDataValue(this.dojoGrid2.selectedItem.getData().id);
            
	},
	svSaveProdCountSuccess: function(inSender, inDeprecated) {
	    this.number6.clear();
        this.number8.clear();
        this.number7.clear();
        this.number9.clear();
        this.number10.clear();
        this.text4.clear();
        this.svGetNextCount.update();
	},

	_end: 0
});