CorporateCustomerPage.widgets = {
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
			label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Corporate Customer","height":"30px","padding":"4","styles":{},"width":"408px"}, {}]
		}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
		panel3: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"322px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			tabLayers1: ["wm.TabLayers", {"_classes":{"domNode":["tabs1"]},"border":"2","borderColor":"#3e3838","headerHeight":"30px"}, {}, {
				layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
			}],
			panel4: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,20,0,0","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Back","hint":"CIF Menu","margin":"4","styles":{}}, {"onclick":"navCIFMenu"}]
			}]
		}]
	}]
}