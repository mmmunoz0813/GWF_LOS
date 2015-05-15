dojo.declare("IndividualCustomerPage", wm.Page, {
start: function() {
//this.accordionLayers1.decorator.deactivateLayer(this.layer2);
//this.accordionLayers2.decorator.deactivateLayer(this.layer3);
// this.accordionLayers3.decorator.deactivateLayer(this.layer4);
//this.accordionLayers4.decorator.deactivateLayer(this.layer5);
//this.accordionLayers5.decorator.deactivateLayer(this.layer7);
//this.accordionLayers6.decorator.deactivateLayer(this.layer8);
},
"preferredDevice": "desktop",
text2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(this.text2.getDataValue() !== null) {
var inputStr = this.text2.getDataValue();
this.text2.setDataValue(inputStr.toUpperCase());
}
},
text3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(this.text3.getDataValue() !== null) {
var inputStr = this.text3.getDataValue();
this.text3.setDataValue(inputStr.toUpperCase());
}
},
text4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(this.text4.getDataValue() !== null){
var inputStr = this.text4.getDataValue();
this.text4.setDataValue(inputStr.toUpperCase());
}
},
_end: 0
});

IndividualCustomerPage.widgets = {
navCIFMenu: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CIFPage\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,3,0","height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Individual Customer InformationForm","height":"30px","padding":"4","styles":{},"width":"408px"}, {}],
panel4: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,20,0,0","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
button2: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Save","hint":"CIF Menu","margin":"4","styles":{}}, {"onclick":"navCIFMenu"}],
button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Back","hint":"CIF Menu","margin":"4","styles":{}}, {"onclick":"navCIFMenu"}]
}]
}],
panel2: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"styles":{"backgroundColor":"#f0dcd5"},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"32px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text5: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"CIF No. / Customer Name:","captionSize":"170px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","readonly":true,"styles":{},"width":"150%"}, {}]
}],
panel7: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"32px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
date2: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Originating Branch:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","readonly":true}, {}]
}],
panel25: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"96px"}, {}, {
date3: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Date Enrolled:","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","styles":{}}, {}]
}]
}],
panel3: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"12px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}],
panel9: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"32px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
selectMenu6: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Title:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}]
}],
panel35: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,3,0","height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Customer Name:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Last Name","width":"350px"}, {"onchange":"text2Change"}],
text3: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Middle Name:","captionSize":"0px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"First Name","width":"200px"}, {"onchange":"text3Change"}],
text4: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Last Name:","captionSize":"0px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Middle Name","width":"200px"}, {"onchange":"text4Change"}]
}],
tabLayers1: ["wm.TabLayers", {"_classes":{"domNode":["tabs1"]},"border":"2","borderColor":"#3e3838","headerHeight":"30px","styles":{}}, {}, {
layer1: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Personal Info","horizontalAlign":"left","padding":"10","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel8: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"134px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel10: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"132px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
selectMenu2: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Civil Status:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Gender:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
number1: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Age:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"200px"}, {}],
date1: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Birthdate:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text45: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"City of Birth:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"350px"}, {}]
}],
panel11: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"132px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text6: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"SSS / GSIS No.:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text7: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"TIN:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text8: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Email Address:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text9: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Landline:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text10: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Primary Mobile No.:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}]
}]
}],
accordionLayers2: ["wm.AccordionLayers", {"arrowsOnLeft":true,"defaultLayer":0,"fitToContentHeight":true,"height":"444px","multiActive":true,"styles":{}}, {}, {
layer3: ["wm.Layer", {"borderColor":"","caption":"Customer Addresses","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label2Panel: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"    Present Address","margin":"0,0,0,20","padding":"4","styles":{"fontWeight":"bold","color":"#bc5959","fontSize":"12px","fontStyle":"italic","textDecoration":"underline"},"width":"100%"}, {}]
}],
panel16: ["wm.Panel", {"border":"0,0,2,0","height":"126px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel17: ["wm.Panel", {"height":"124px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text12: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 1:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text13: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 2:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text14: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"City:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text15Panel: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"452px"}, {}, {
text15: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Province:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text16: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Zip Code:","captionSize":"75px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"150px"}, {}]
}]
}],
panel18: ["wm.Panel", {"height":"92px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
selectMenu3: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Home Ownership:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
number2Panel: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"532px"}, {}, {
number2: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Length of Stay:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Year","styles":{},"width":"200px"}, {}],
number3: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","placeHolder":"Month","width":"50px"}, {}]
}],
text17: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Landlord Name:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"350px"}, {}]
}]
}],
label3Panel: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label3: ["wm.Label", {"caption":"    Previous Address","margin":"0,0,0,20","padding":"4","styles":{"fontWeight":"bold","color":"#bc5959","fontSize":"12px","fontStyle":"italic","textDecoration":"underline"},"width":"100%"}, {}]
}],
panel19: ["wm.Panel", {"border":"0,0,2,0","height":"96px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel20: ["wm.Panel", {"height":"92px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text18: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 1:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text19: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 2:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text20: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"City:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}]
}],
panel21: ["wm.Panel", {"height":"94px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text21: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"452px"}, {}, {
text22: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Province:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text23: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Zip Code:","captionSize":"75px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"150px"}, {}]
}],
selectMenu4: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Home Ownership:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
number4: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"532px"}, {}, {
number5: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Length of Stay:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Year","width":"200px"}, {}],
number6: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Month","width":"50px"}, {}]
}]
}]
}],
label4Panel: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label4: ["wm.Label", {"caption":"    Permanent Address","margin":"0,0,0,20","padding":"4","styles":{"fontWeight":"bold","color":"#bc5959","fontSize":"12px","fontStyle":"italic","textDecoration":"underline"},"width":"100%"}, {}],
checkbox1: ["wm.Checkbox", {"_classes":{"domNode":["GWF1"]},"caption":"Same with Present Address","captionAlign":"left","captionPosition":"right","captionSize":"200px","dataValue":false,"desktopHeight":"30px","displayValue":false,"height":"30px","padding":"0,0,0,20","styles":{"color":"#de2d2d"},"width":"100%"}, {}]
}],
panel22: ["wm.Panel", {"border":"0,0,2,0","height":"96px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel23: ["wm.Panel", {"height":"92px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text24: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 1:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text25: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Address Line 2:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
text26: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"City:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}]
}],
panel24: ["wm.Panel", {"height":"94px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text27: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"452px"}, {}, {
text28: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Province:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
text29: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Zip Code:","captionSize":"75px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"150px"}, {}]
}],
selectMenu5: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Home Ownership:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
number7: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"532px"}, {}, {
number8: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Length of Stay:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Year","width":"200px"}, {}],
number9: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","placeHolder":"Month","width":"50px"}, {}]
}]
}]
}]
}]
}],
accordionLayers5: ["wm.AccordionLayers", {"arrowsOnLeft":true,"defaultLayer":0,"fitToContentHeight":true,"height":"607px","multiActive":true,"styles":{}}, {}, {
layer7: ["wm.Layer", {"borderColor":"","caption":"Family Details","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel26: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,1,0","borderColor":"#634f4f","height":"113px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel27: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text30: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Father's Name:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text31: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Occupation:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text34: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Office No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"270px"}, {}]
}],
panel28: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text32: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Mobile No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}],
text33: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Landline No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}]
}]
}],
panel29: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,1,0","borderColor":"#634f4f","height":"112px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel30: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text35: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Mother's Name:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text36: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Occupation:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text39: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Office No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"270px"}, {}]
}],
panel31: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text37: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Mobile No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}],
text38: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Landline No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}]
}]
}],
panel32: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,1,0","borderColor":"#634f4f","height":"112px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel33: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text40: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Sibling's Name:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text41: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Occupation:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text44: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Office No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"270px"}, {}]
}],
panel34: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text42: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Mobile No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}],
text43: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Landline No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}]
}]
}],
panel36: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,1,0","borderColor":"#634f4f","height":"112px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel37: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"142px","horizontalAlign":"left","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text46: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Spouse Name:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text47: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Email Address:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","styles":{},"width":"400px"}, {}],
text49: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Mobile No.:","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"320px"}, {}]
}],
panel38: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"112px","horizontalAlign":"left","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
date4: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Birthdate:","captionSize":"120px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px"}, {}],
largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["GWF1"]},"caption":"Permanent Address:","captionAlign":"right","captionPosition":"left","captionSize":"120px","dataValue":undefined,"desktopHeight":"42px","displayValue":"","height":"42px","width":"362px"}, {}]
}]
}],
panel12: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"128px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label5: ["wm.Label", {"caption":"    Children","margin":"0,0,0,20","padding":"4","styles":{"fontWeight":"bold","color":"#bc5959","fontSize":"12px","fontStyle":"italic","textDecoration":"underline"},"width":"100%"}, {}],
dojoGrid1: ["wm.DojoGrid", {"columnReordering":false,"height":"102px","liveEditing":true,"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}]
}]
}]
}]
}],
layer2: ["wm.Layer", {"borderColor":"","caption":"Work & Finances","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel13: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"234px","horizontalAlign":"left","padding":"10,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label6: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label7: ["wm.Label", {"caption":"    Present Work","margin":"0,0,0,20","padding":"4","styles":{"fontWeight":"bold","color":"#bc5959","fontSize":"12px","fontStyle":"italic","textDecoration":"underline"},"width":"100%"}, {}]
}],
panel14: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"border":"0,0,3,0","height":"117px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel15: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
selectMenu7: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Employment Work:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"26px","width":"350px"}, {}]
}],
panel39: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"82px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel40: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"80px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Employer/Business:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"26px","width":"400px"}, {}],
text11: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Business Address:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"26px","width":"500px"}, {}],
text48: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Nature of Business:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"26px","width":"350px"}, {}]
}],
panel41: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel42: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"80px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
text50: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Business Phone:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
number10: ["wm.Number", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Years of Stay:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"26px","width":"200px"}, {}],
text52: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Position:","captionSize":"150px","dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"350px"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

IndividualCustomerPage.prototype._cssText = '';
IndividualCustomerPage.prototype._htmlText = '';