DocumentRequirementsSetup.widgets = {
	navUserSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"UserAccountSetup\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	svSaveDocument: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveDocument","service":"DocumentsFacade"}, {"onSuccess":"svGetDocsList"}, {
		input: ["wm.ServiceInput", {"type":"saveDocumentInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"id"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"document"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"remarks"}, {}]
			}]
		}]
	}],
	svGetDocsList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getDocsList","service":"DocumentsFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getDocsListInputs"}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel3: ["wm.Panel", {"autoScroll":true,"border":"1","height":"100%","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"Document Requirements Setup","height":"30px","padding":"4","styles":{},"width":"466px"}, {}]
				}],
				panel5: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"181px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"text1","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","showing":false}, {}],
					text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Document:","captionSize":"150px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","width":"479px"}, {}],
					largeTextArea1: ["wm.LargeTextArea", {"_classes":{"domNode":["GWF1"]},"border":"0","caption":"Remarks:","captionAlign":"right","captionPosition":"left","captionSize":"150px","dataValue":undefined,"desktopHeight":"65px","displayValue":"","height":"65px","width":"478px"}, {}],
					panel7: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"10,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						button1: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New Document","margin":"4","width":"121.73334px"}, {"onclick":"button1Click"}],
						button2: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","margin":"4","styles":{}}, {"onclick":"svSaveDocument"}]
					}]
				}],
				panel6: ["wm.Panel", {"height":"300px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["GWF1Grid"]},"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"13px","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"DocId: \" + ${docId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Document: \" + ${document}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Remarks: \" + ${remarks}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"docId","title":"DocId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"document","title":"Document","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onCellDblClick":"dojoGrid1CellDblClick"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetDocsList","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}