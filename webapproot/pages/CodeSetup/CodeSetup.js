dojo.declare("CodeSetup", wm.Page, {
    start: function() {
        this.svCodesList.update();
        this.svGetCodenameList.update();
    },
    "preferredDevice": "desktop",


    btnSaveCodenameClick: function(inSender) {
        if (this.text4.getDataValue() === null) {
            this.notCodenameBlank.update();
        } else {
            this.svSaveCodename.update();
        }
    },
    dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.selectMenu1.setDataValue(this.dojoGrid1.selectedItem.getData().codename);
        this.text1.setDataValue(this.dojoGrid1.selectedItem.getData().codevalue);
        this.text2.setDataValue(this.dojoGrid1.selectedItem.getData().codedesc1);
        this.text3.setDataValue(this.dojoGrid1.selectedItem.getData().codedesc2);
        this.largeTextArea1.setDataValue(this.dojoGrid1.selectedItem.getData().remarks);
        this.text5.setDataValue(this.dojoGrid1.selectedItem.getData().codeId);
    },
    btnNewCodeClick: function(inSender) {
		this.selectMenu1.clear();
        this.text1.clear();
        this.text2.clear();
        this.text3.clear();
        this.largeTextArea1.clear();
        this.text5.clear();
	},
	svDeleteCodeSuccess1: function(inSender, inDeprecated) {
		this.selectMenu1.clear();
        this.text1.clear();
        this.text2.clear();
        this.text3.clear();
        this.largeTextArea1.clear();
        this.text5.clear();
	},
	_end: 0
});