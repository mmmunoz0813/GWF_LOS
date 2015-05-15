dojo.declare("RoleSetup", wm.Page, {
	start: function() {
		this.svGetRoleList.update();
	},
	"preferredDevice": "desktop",

	btnNewRoleClick: function(inSender) {
		this.text1.clear();
        this.largeTextArea1.clear();
        this.text2.clear();
	},
	dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.text1.setDataValue(this.dojoGrid1.selectedItem.getData().rolename);
        this.largeTextArea1.setDataValue(this.dojoGrid1.selectedItem.getData().roledesc);
        this.text2.setDataValue(this.dojoGrid1.selectedItem.getData().roleId);
	},
	_end: 0
});