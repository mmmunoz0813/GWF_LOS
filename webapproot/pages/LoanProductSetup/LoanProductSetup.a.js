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

LoanProductSetup.widgets = {
svLoanProductList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProductList","service":"LoanProductFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getProductListInputs"}, {}]
}],
svSaveLoanProduct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveLoanProduct","service":"LoanProductFacade"}, {"onSuccess":"svLoanProductList"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel4","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"saveLoanProductInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"productCode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"productName"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"number1.dataValue","targetProperty":"minIR"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"number2.dataValue","targetProperty":"maxIR"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"number3.dataValue","targetProperty":"minLoanAmt"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"number4.dataValue","targetProperty":"maxLoanAmt"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"number5.dataValue","targetProperty":"minDPrequired"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"checkbox1.dataValue","targetProperty":"comakerRequired"}, {}],
wire10: ["wm.Wire", {"expression":"new Date()","targetProperty":"lastupdated"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.codevalue","targetProperty":"productType"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"selectMenu2.selectedItem.codevalue","targetProperty":"interestbaseyear"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"selectMenu3.selectedItem.codevalue","targetProperty":"productGroup"}, {}]
}]
}]
}],
svProductType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PRODUCTTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svBaseYear: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu2.selectedItem","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BASEYEAR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svProductGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu3.selectedItem","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
}]
}]
}],
svGetLoanCountList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProductCountList","service":"LoanProductFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"designableDialog1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getProductCountListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"product"}, {}]
}]
}]
}],
svGetNextCount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getNextCount","service":"LoanProductFacade"}, {"onSuccess":"svGetNextCountSuccess"}, {
input: ["wm.ServiceInput", {"type":"getNextCountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"prodCode"}, {}]
}]
}]
}],
svSaveProdCount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveProductCount","service":"LoanProductFacade"}, {"onSuccess":"svSaveProdCountSuccess"}, {
input: ["wm.ServiceInput", {"type":"saveProductCountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"prodCode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"number6.dataValue","targetProperty":"loancount"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"number8.dataValue","targetProperty":"defaultIR"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"number7.dataValue","targetProperty":"maxLoanAmt"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"number9.dataValue","targetProperty":"minTerm"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"number10.dataValue","targetProperty":"maxTerm"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"text4.dataValue","targetProperty":"id"}, {}]
}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"styles":{},"title":"Product Loan Count Settings","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {"onShow":"svGetLoanCountList"}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"142.36666px","horizontalAlign":"left","margin":"2,2,2,2","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text3: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Product Code:","captionSize":"150px","displayValue":"","height":"30px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
panel10: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"141px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel11: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
number6: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Loan Count:","captionSize":"150px","displayValue":"","height":"30px","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetNextCount.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
number8: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Default Interest Rate:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"30px","width":"200px"}, {}],
number7: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Max Loanable Amt:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"30px","width":"250px"}, {}]
}],
panel12: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
number9: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Min Term:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"30px","width":"200px"}, {}],
number10: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Max Term:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"30px","width":"200px"}, {}],
text4: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"text4","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"30px","showing":false,"width":"200px"}, {}]
}]
}]
}],
panel9: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,20,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Save","margin":"4"}, {"onclick":"svSaveProdCount"}],
btnClose: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Close","margin":"4"}, {"onclick":"designableDialog1.hide"}]
}],
panel13: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"202px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid2: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"productcode","title":"Productcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"loancount","title":"Loancount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"defaultIr","title":"DefaultIr","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"defaultLoanableAmt","title":"DefaultLoanableAmt","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"minTerm","title":"MinTerm","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"maxTerm","title":"MaxTerm","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Loancount: \" + ${loancount} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"DefaultIr: \" + ${defaultIr}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"DefaultLoanableAmt: \" + ${defaultLoanableAmt}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MinTerm: \" + ${minTerm}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MaxTerm: \" + ${maxTerm}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.dbgwfloansdb.data.Tbproductcount","height":"150px","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onCellDblClick":"dojoGrid2CellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetLoanCountList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"900px"}, {}, {
panel3: ["wm.Panel", {"border":"1","height":"551px","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Loan Product Setup","height":"30px","padding":"4","styles":{}}, {}]
}],
panel5: ["wm.Panel", {"height":"215px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Product Code:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"styles":{}}, {"onchange":"svGetLoanCountList","onchange1":"svGetNextCount"}],
text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Product Name:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"width":"362px"}, {}],
number1: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"applyPlacesWhileTyping":true,"caption":"Min Interest Rate:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","minimum":0,"places":2}, {}],
number2: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"applyPlacesWhileTyping":true,"caption":"Max Interest Rate:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","minimum":0,"places":2}, {}],
number3: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"applyPlacesWhileTyping":true,"caption":"Min Loanable Amount:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","minimum":0,"places":2}, {}],
number4: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"applyPlacesWhileTyping":true,"caption":"Max Loanable Amount:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","minimum":0,"places":2}, {}]
}],
panel7: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Product Type:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","dataValue":undefined,"desktopHeight":"30px","displayField":"codedesc1","displayValue":"","height":"30px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProductType","targetProperty":"dataSet"}, {}]
}]
}],
number5: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"caption":"Minimum DP Required:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px"}, {}],
checkbox1: ["wm.Checkbox", {"_classes":{"domNode":["GWF1"]},"caption":"Co-maker Required?","captionSize":"150px","dataValue":false,"desktopHeight":"30px","displayValue":false,"height":"30px"}, {}],
selectMenu2: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Interest Base Year:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","dataValue":undefined,"desktopHeight":"30px","displayExpression":"${codevalue} + \" - \" + ${codedesc1}","displayField":"codedesc1","displayValue":"","height":"30px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBaseYear","targetProperty":"dataSet"}, {}]
}]
}],
selectMenu3: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Product Group:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","dataValue":undefined,"desktopHeight":"30px","displayField":"codedesc1","displayValue":"","height":"30px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProductGroup","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"850undefined"}, {}, {
btnLoanCountDetails: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Loan Count","hint":"Clear Fields","margin":"4","styles":{},"width":"108.73334px"}, {"onclick":"designableDialog1.show"}],
btnNewCode: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New Product","hint":"Clear Fields","margin":"4","styles":{},"width":"108.73334px"}, {"onclick":"btnNewCodeClick"}],
btnSaveCode: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","hint":"Save Code","margin":"4"}, {"onclick":"svSaveLoanProduct"}]
}],
panel2: ["wm.Panel", {"height":"202px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"125px","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"ProdCode: \" + ${prodCode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"ProductName: \" + ${productName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Lastupdated: \" + ${wm.runtimeId}.formatCell(\"lastupdated\", ${lastupdated}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"prodCode","title":"ProdCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"productName","title":"ProductName","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"productType","title":"ProductType","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"minIr","title":"MinIr","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"maxIr","title":"MaxIr","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"minLoanAmount","title":"MinLoanAmount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"maxLoanAmount","title":"MaxLoanAmount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"minDprequired","title":"MinDprequired","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"comakerrequired","title":"Comakerrequired","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"interestbaseyear","title":"Interestbaseyear","width":"147px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"lastupdated","title":"Lastupdated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"productgroup","title":"Productgroup","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"900px"}, {"onCellDblClick":"dojoGrid1CellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svLoanProductList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

LoanProductSetup.prototype._cssText = '';
LoanProductSetup.prototype._htmlText = '';