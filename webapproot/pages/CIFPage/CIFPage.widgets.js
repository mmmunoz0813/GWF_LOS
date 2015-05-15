CIFPage.widgets = {
	navIndCustomerList: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"IndCustomerListPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navIndCustomer: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"IndividualCustomerPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCorpCustomerList: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CorpCustomerListPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCorpCustomer: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CorporateCustomerPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"CIF Menu","height":"30px","padding":"4","styles":{},"width":"408px"}, {}]
		}],
		panel4: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label2: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Individual Customer","height":"43px","padding":"20","styles":{"fontSize":"14px","color":"#f05252"},"width":"408px"}, {}]
		}],
		panel2: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"111px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":" Customer List","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":82,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navIndCustomerList"}],
			button2: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Setup Customer","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":54,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navIndCustomer"}]
		}],
		panel5: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label3: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Corporate Customer","height":"43px","padding":"20","styles":{"fontSize":"14px","color":"#f05252"},"width":"408px"}, {}]
		}],
		panel3: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"111px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			button3: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":" Customer List","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":82,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navCorpCustomerList"}],
			button4: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"  Setup Customer","desktopHeight":"69.73334px","height":"69.73334px","iconUrl":undefined,"imageIndex":54,"imageList":"app.silkIconList","margin":"4","styles":{"backgroundColor":"#ffffff","color":"#430f0f","fontSize":"15px"},"width":"198.73334px"}, {"onclick":"navCorpCustomer"}]
		}]
	}]
}