Home.widgets = {
	templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"343px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"70%"}, {}, {
				panel4: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					label1: ["wm.Label", {"caption":"LOS Dashboard","height":"100%","padding":"4","styles":{"fontWeight":"bolder","fontSize":"20px","color":"#ab0303"}}, {}]
				}],
				panel6: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
				dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":true}
],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}]
			}],
			panel3: ["wm.Panel", {"border":"1","borderColor":"#e95e5e","height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#c0d0e7"},"verticalAlign":"top","width":"30%"}, {}, {
				panel5: ["wm.Panel", {"height":"44px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					label2: ["wm.Label", {"caption":"LOS Summary","height":"100%","padding":"4","styles":{"fontSize":"14px","textAlign":"center","fontWeight":"bold","color":"#ffffff"},"width":"100%"}, {}]
				}],
				dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":true}
],"height":"197px","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"backgroundColor":"#ffffff"}}, {}]
			}]
		}]
	}]
}