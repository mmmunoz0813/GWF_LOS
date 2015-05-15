dojo.declare("SystemPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

SystemPage.widgets = {
navBranch: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BranchSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navUsers: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"UserList\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navRoles: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"RoleSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navDocuments: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DocumentRequirementsSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navLoanProducts: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"LoanProductSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navParameters: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CodeSetup\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"System Maintenance","height":"30px","padding":"4","styles":{},"width":"408px"}, {}]
}],
panel2: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Branch Setup","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":58,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navBranch"}],
button2: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Users","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":54,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navUsers"}],
button3: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Roles","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":43,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navRoles"}]
}],
panel3: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button4: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Parameters","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":53,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navParameters"}],
button5: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Documents","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":52,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navDocuments"}],
button6: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Loan Products","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":68,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navLoanProducts"}]
}]
}]
};

SystemPage.prototype._cssText = '';
SystemPage.prototype._htmlText = '';