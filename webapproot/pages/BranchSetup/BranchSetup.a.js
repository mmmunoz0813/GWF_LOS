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

BranchSetup.widgets = {
svSaveBranch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveBranch","service":"BranchFacade"}, {"onSuccess":"svGetBranchList"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel2","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"saveBranchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"brcode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"brname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"braddress"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.codevalue","targetProperty":"brstatus"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"radioSet1.selectedItem.codevalue","targetProperty":"brtype"}, {}]
}]
}]
}],
svGetBranchType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BRANCHTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svGetBranchStatus: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BRANCHSTATUS\"","targetProperty":"codename"}, {}]
}]
}]
}],
svGetBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchList","service":"BranchFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getBranchListInputs"}, {}]
}],
svDeleteBranch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteBranch","service":"BranchFacade"}, {"onSuccess":"notDeleteSuccess","onSuccess1":"svGetBranchList","onSuccess2":"svDeleteBranchSuccess2"}, {
input: ["wm.ServiceInput", {"type":"deleteBranchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"brcode"}, {}]
}]
}]
}],
notDelete: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svDeleteBranch"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to delete the branch?\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"\"Yes\"","targetProperty":"OKButtonText"}, {}],
wire2: ["wm.Wire", {"expression":"\"Cancel\"","targetProperty":"CancelButtonText"}, {}]
}]
}]
}],
notDeleteSuccess: ["wm.NotificationCall", {"operation":"toast"}, {}, {
input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Branch Successfully Deleted!\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"autoScroll":true,"border":"1","height":"100%","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Branch Details","height":"30px","padding":"4","styles":{}}, {}]
}],
panel5: ["wm.Panel", {"height":"281px","horizontalAlign":"left","padding":"10,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Branch Code:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"styles":{}}, {}],
text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Branch Name:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"width":"400px"}, {}],
largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["GWF1"]},"caption":"Address:","captionAlign":"right","captionPosition":"left","captionSize":"150px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"600px"}, {}],
radioSet1: ["wm.RadioSet", {"_classes":{"domNode":["GWF1"]},"caption":"Type:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","dataValue":undefined,"desktopHeight":"60px","displayField":"codedesc1","displayValue":"","editorBorder":false,"height":"60px","required":true,"styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBranchType","targetProperty":"dataSet"}, {}]
}]
}],
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Status:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","dataValue":undefined,"desktopHeight":"30px","displayField":"codedesc1","displayValue":"","height":"30px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBranchStatus","targetProperty":"dataSet"}, {}]
}]
}],
panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"600px"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":undefined,"imageIndex":11,"imageList":"app.silkIconList","margin":"4","width":"40px"}, {"onclick":"notDelete"}],
btnNewBranch: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New Branch","hint":"Clear Fields","margin":"4","width":"95px"}, {"onclick":"btnNewBranchClick"}],
btnSaveBranch: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","margin":"4"}, {"onclick":"svSaveBranch"}]
}]
}],
panel6: ["wm.Panel", {"height":"152px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":true,"field":"brcode","title":"Brcode","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"brname","title":"Brname","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"braddress","title":"Braddress","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"brtype","title":"Brtype","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"brstatus","title":"Brstatus","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Brcode: \" + ${brcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Brname: \" + ${brname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Braddress: \" + ${braddress}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Brtype: \" + ${brtype}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Brstatus: \" + ${brstatus}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.dbgwfloansdb.data.Tbbranch","height":"150px","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onCellDblClick":"dojoGrid1CellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBranchList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
};

BranchSetup.prototype._cssText = '';
BranchSetup.prototype._htmlText = '';