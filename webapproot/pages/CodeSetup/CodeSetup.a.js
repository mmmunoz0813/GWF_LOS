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

CodeSetup.widgets = {
svGetCodenameList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCodenameList","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"designableDialog1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getCodenameListInputs"}, {}]
}],
svSaveCodename: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveCodename","service":"CodesFacade"}, {"onSuccess":"notSaveSuccessful","onSuccess1":"svGetCodenameList"}, {
input: ["wm.ServiceInput", {"type":"saveCodenameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text4.dataValue","targetProperty":"codename"}, {}]
}]
}]
}],
notSaveSuccessful: ["wm.NotificationCall", {"operation":"toast"}, {}, {
input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Codename Saved!\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
}]
}]
}],
notCodenameBlank: ["wm.NotificationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Codename is blank. \"","targetProperty":"text"}, {}]
}]
}]
}],
svSaveCode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveCode","service":"CodesFacade"}, {"onSuccess":"notSaveSuccessful","onSuccess1":"svCodesList"}, {
input: ["wm.ServiceInput", {"type":"saveCodeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.dataValue","targetProperty":"codename"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"desc1"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"desc2"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"remarks"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"text5.dataValue","targetProperty":"id"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"codevalue"}, {}]
}]
}]
}],
svCodesList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCodesList","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel2","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getCodesListInputs"}, {}]
}],
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveCode","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel5","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"saveCodeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.dataValue","targetProperty":"codename"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"codevalue"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"desc1"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"desc2"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"remarks"}, {}]
}]
}]
}],
svDeleteCode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteCode","service":"CodesFacade"}, {"onSuccess":"svCodesList","onSuccess1":"svDeleteCodeSuccess1"}, {
input: ["wm.ServiceInput", {"type":"deleteCodeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text5.dataValue","targetProperty":"id"}, {}]
}]
}]
}],
notDeleteSuccessful: ["wm.NotificationCall", {"operation":"toast"}, {}, {
input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Code Delete Successful!\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","styles":{},"title":"Add Codename","width":"500px"}, {"onShow":"svGetCodenameList"}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"color":"#000000"},"verticalAlign":"top","width":"100%"}, {}, {
text4Panel: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"400px"}, {}, {
text4: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Codename:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","styles":{},"width":"100%"}, {}],
btnSaveCodename: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Add","margin":"4","width":"60px"}, {"onclick":"btnSaveCodenameClick"}]
}],
listSet1: ["wm.ListSet", {"_classes":{"domNode":["GWF1"]},"caption":"Existing Codenames:","captionSize":"150px","dataField":"codename","dataType":"com.dbgwfloansdb.data.Tbcodename","dataValue":[""],"desktopHeight":"289px","displayField":"codename","displayValue":"","height":"289px","width":"399px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetCodenameList","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"border":"1","height":"533px","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Code Setup","height":"30px","padding":"4","styles":{}}, {}],
text5: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"text5","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px"}, {}]
}],
panel5: ["wm.Panel", {"height":"197px","horizontalAlign":"left","padding":"10,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
selectMenu1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"432px"}, {}, {
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Code Name:","captionSize":"150px","dataField":"codename","dataType":"com.dbgwfloansdb.data.Tbcodename","dataValue":undefined,"desktopHeight":"30px","displayField":"codename","displayValue":"","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetCodenameList","targetProperty":"dataSet"}, {}]
}]
}],
button1: ["wm.Button", {"border":"1","caption":undefined,"desktopHeight":"30px","height":"30px","imageIndex":1,"imageList":"app.silkIconList","margin":"4","width":"30px"}, {"onclick":"designableDialog1.show"}]
}],
text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Code Value:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"styles":{}}, {}],
text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Description 1:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"width":"500px"}, {}],
text3: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Description 2:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"500px"}, {}],
largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["GWF1"]},"caption":"Remarks:","captionAlign":"right","captionPosition":"left","captionSize":"150px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"500px"}, {}]
}],
panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"550px"}, {}, {
btnDelete: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":undefined,"hint":"Delete Code","imageIndex":11,"imageList":"app.silkIconList","margin":"4","width":"40px"}, {"onclick":"svDeleteCode","onclick1":"notDeleteSuccessful"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${text5.dataValue}==null","targetProperty":"disabled"}, {}]
}]
}],
btnNewCode: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New Code","hint":"Clear Fields","margin":"4","styles":{}}, {"onclick":"btnNewCodeClick"}],
btnSaveCode: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","hint":"Save Code","margin":"4"}, {"onclick":"svSaveCode"}]
}],
panel2: ["wm.Panel", {"height":"202px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":true,"field":"codeId","title":"CodeId","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"codename","title":"Codename","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"codevalue","title":"Codevalue","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"codedesc1","title":"Codedesc1","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"codedesc2","title":"Codedesc2","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"remarks","title":"Remarks","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"CodeId: \" + ${codeId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codename: \" + ${codename}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codevalue: \" + ${codevalue}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codedesc1: \" + ${codedesc1}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codedesc2: \" + ${codedesc2}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Remarks: \" + ${remarks}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.dbgwfloansdb.data.Tbcodes","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onCellDblClick":"dojoGrid1CellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCodesList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

CodeSetup.prototype._cssText = '';
CodeSetup.prototype._htmlText = '';