CorpCustomerListPage.widgets = {
	navCIFMenu: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CIFPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Corporate Customer List","height":"30px","padding":"4","styles":{},"width":"408px"}, {}]
		}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
		dojoGrid1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"height":"275undefined","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}],
			panel3: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,20,0,0","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Back","hint":"CIF Menu","margin":"4","styles":{}}, {"onclick":"navCIFMenu"}]
			}]
		}]
	}]
}