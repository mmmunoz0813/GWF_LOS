dojo.declare("UserList", wm.Page, {
start: function() {
this.svGetBranchList.update();
this.svGetUsers.update();
},
"preferredDevice": "desktop",
_end: 0
});

UserList.widgets = {
svGetUsers: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUsers","service":"UserFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getUsersInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.dataValue","targetProperty":"branch"}, {}]
}]
}]
}],
navUserSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"UserAccountSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
svGetBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchList","service":"BranchFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel5","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getBranchListInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"autoScroll":true,"border":"1","height":"100%","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Users","height":"30px","padding":"4","styles":{}}, {}]
}],
panel5: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Search Branch:   ","captionSize":"120px","dataField":"brcode","dataType":"com.dbgwfloansdb.data.Tbbranch","dataValue":"001","desktopHeight":"30px","displayExpression":"${brcode} + \" - \" + ${brname}","displayField":"brname","displayValue":"","height":"30px","width":"316px"}, {"onchange":"svGetUsers"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBranchList","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel6: ["wm.Panel", {"height":"300px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"13px","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"No.: \" + ${userId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Username: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${wm.runtimeId}.formatCell(\"Name\", ${Name}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Role: \" + ${role}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Status: \" + ${status}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch: \" + ${branch}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"lastlogindate","title":"Lastlogindate","width":"27px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"userId","title":"No.","width":"100px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"username","title":"Username","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"password","title":"Password","width":"163px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"Name","title":"Name","width":"100%","align":"left","editorProps":null,"expression":"${lastname} + \", \" + ${firstname} + \" \" + ${middlename}","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"lastname","title":"Lastname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"firstname","title":"Firstname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"middlename","title":"Middlename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"role","title":"Role","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"status","title":"Status","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"expirydate","title":"Expirydate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"branch","title":"Branch","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onCellDblClick":"navUserSetup"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetUsers","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel4: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"10,20,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Setup User","margin":"4","styles":{},"width":"119.73334px"}, {"onclick":"navUserSetup"}]
}]
}]
}]
}]
};

UserList.prototype._cssText = '';
UserList.prototype._htmlText = '';