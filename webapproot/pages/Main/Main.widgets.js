Main.widgets = {
	navBranchSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BranchSetup\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCodesSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CodeSetup\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navUserRole: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"RoleSetup\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navUserSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire: ["wm.Wire", {"expression":"\"UserList\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navDocumentsRequirements: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"DocumentRequirementsSetup\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navSystem: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"SystemPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCIF: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CIFPage\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"800px"}, {}, {
		TitleBar: ["wm.Panel", {"_classes":{"domNode":["titlebar"]},"border":"0,0,4,0","height":"82px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"8","styles":{"backgroundColor":"#521818"},"verticalAlign":"top","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"aspect":"h","deviceType":null,"height":"60px","imageIndex":0,"imageList":undefined,"source":"resources/images/logos/GWF/globewest_logo.png","styles":{},"width":"81px"}, {}],
			appNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"caption":"Loan Origination System","height":"62px","margin":"0,0,0,10","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontStyle":"normal","fontFamily":"arial"},"width":"100%"}, {}],
			panel3: ["wm.Panel", {"border":"1","height":"100%","styles":{},"width":"222px"}, {}, {
				SecurityComponents: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"300px"}, {}, {
					templateUserNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"20px","padding":"4","styles":{"color":"#ffffff"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Welcome, \" + ${templateUsernameVar.dataValue}","targetProperty":"caption"}, {}]
						}]
					}],
					templateLogoutButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"1","borderColor":"#666666","caption":"Log Out","margin":"4"}, {"onclick":"templateLogoutVar"}]
				}],
				panel4: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					label1: ["wm.Label", {"display":undefined,"padding":"4","styles":{"color":"#ebb2b2"},"width":"100%"}, {"onclick":"label1Click"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"caption"}, {}]
						}]
					}]
				}]
			}]
		}],
		panel1: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#6a6565"},"verticalAlign":"top","width":"100%"}, {}, {
			dojoMenu2: ["wm.DojoMenu", {"fullStructure":[
{"label":"CIF","separator":undefined,"defaultLabel":"CIF","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCIF","children":[]}
],"localizationStructure":{},"width":"50px"}, {}],
			dojoMenu1: ["wm.DojoMenu", {"fullStructure":[
{"label":"System","separator":undefined,"defaultLabel":"System","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navSystem","children":[]}
],"localizationStructure":{}}, {}]
		}],
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
		}],
		Footer: ["wm.Panel", {"_classes":{"domNode":["toolbar"]},"height":"30px","horizontalAlign":"center","padding":"2","verticalAlign":"middle","width":"100%"}, {}, {
			footerLabel: ["wm.Label", {"align":"center","caption":"Copyright 2012 Eteligent","height":"100%","padding":"4","width":"100%"}, {}]
		}]
	}]
}