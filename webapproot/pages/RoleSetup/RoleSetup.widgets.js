RoleSetup.widgets = {
	svSaveRole: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveRole","service":"RoleFacade"}, {"onSuccess":"notSaveRoleSuccess","onSuccess1":"svGetRoleList"}, {
		input: ["wm.ServiceInput", {"type":"saveRoleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"role"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"desc"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"id"}, {}]
			}]
		}]
	}],
	svGetRoleList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getRoleList","service":"RoleFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getRoleListInputs"}, {}]
	}],
	serviceVariable1: ["wm.ServiceVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	notSaveRoleSuccess: ["wm.NotificationCall", {"operation":"toast"}, {}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Saving of Role Successful!\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel3: ["wm.Panel", {"autoScroll":true,"border":"1","height":"100%","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Role Setup","height":"30px","padding":"4","styles":{}}, {}],
					text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"text2","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px"}, {}]
				}],
				panel5: ["wm.Panel", {"height":"161px","horizontalAlign":"left","padding":"10,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Role Name:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","required":true,"styles":{},"width":"412px"}, {}],
					largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["GWF1"]},"caption":"Description:","captionAlign":"right","captionPosition":"left","captionSize":"150px","dataValue":undefined,"desktopHeight":"60px","displayValue":"","height":"60px","width":"600px"}, {}],
					panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"600px"}, {}, {
						btnNewRole: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New Role","hint":"Clear Fields","margin":"4","width":"95px"}, {"onclick":"btnNewRoleClick"}],
						btnSaveRole: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","margin":"4"}, {"onclick":"svSaveRole"}]
					}]
				}],
				panel6: ["wm.Panel", {"height":"202px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"RoleId: \" + ${roleId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Rolename: \" + ${rolename}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Roledesc: \" + ${roledesc}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"roleId","title":"RoleId","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"rolename","title":"Rolename","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"roledesc","title":"Roledesc","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onCellDblClick":"dojoGrid1CellDblClick"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoleList","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}