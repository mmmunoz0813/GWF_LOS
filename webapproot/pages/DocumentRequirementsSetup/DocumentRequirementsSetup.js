dojo.declare("DocumentRequirementsSetup", wm.Page, {
	start: function() {
		this.svGetDocsList.update();
	},
	"preferredDevice": "desktop",

	dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.text1.setDataValue(this.dojoGrid1.selectedItem.getData().docId);
        this.text2.setDataValue(this.dojoGrid1.selectedItem.getData().document);
        this.largeTextArea1.setDataValue(this.dojoGrid1.selectedItem.getData().remarks);
	},
	button1Click: function(inSender) {
		this.text1.clear();
        this.text2.clear();
        this.largeTextArea1.clear();
	},
	_end: 0
});