dojo.declare("BranchSetup", wm.Page, {
    start: function() {
        this.svGetBranchType.update();
        this.svGetBranchStatus.update();
        this.svGetBranchList.update();
    },
    "preferredDevice": "desktop",

    dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.text1.setDataValue(this.dojoGrid1.selectedItem.getData().brcode);
        this.text2.setDataValue(this.dojoGrid1.selectedItem.getData().brname);
        this.largeTextArea1.setDataValue(this.dojoGrid1.selectedItem.getData().braddress);
        this.radioSet1.setDataValue(this.dojoGrid1.selectedItem.getData().brtype);
        this.selectMenu1.setDataValue(this.dojoGrid1.selectedItem.getData().brstatus);
    },
    btnNewBranchClick: function(inSender) {
        this.text1.clear();
        this.text2.clear();
        this.largeTextArea1.clear();
        this.radioSet1.clear();
        this.selectMenu1.clear();
    },
    svDeleteBranchSuccess2: function(inSender, inDeprecated) {
        this.text1.clear();
        this.text2.clear();
        this.largeTextArea1.clear();
        this.radioSet1.clear();
        this.selectMenu1.clear();

    },
    _end: 0
});