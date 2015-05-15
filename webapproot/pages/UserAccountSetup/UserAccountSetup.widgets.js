UserAccountSetup.widgets = {
	svBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchList","service":"BranchFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getBranchListInputs"}, {}]
	}],
	svGetUserStat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSpecificCodesList","service":"CodesFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"radioSet1.selectedItem","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getSpecificCodesListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"USERSTATUS\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svSaveUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveUser","service":"UserFacade"}, {"onSuccess":"notSaveSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panel5","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"saveUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"id"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"username"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"password"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"text7.dataValue","targetProperty":"lname"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"text5.dataValue","targetProperty":"fname"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"text6.dataValue","targetProperty":"mname"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"date1.dataValue","targetProperty":"expirydate"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem.brcode","targetProperty":"branch"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"date2.dataValue","targetProperty":"lastlogindate"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"radioSet1.dataValue","targetProperty":"status"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"radioSet2.dataValue","targetProperty":"role"}, {}]
			}]
		}]
	}],
	notSaveSuccess: ["wm.NotificationCall", {"operation":"toast"}, {}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"User Account Saved!\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
				wire3: ["wm.Wire", {"expression":"\"center center\"","targetProperty":"dialogPosition"}, {}]
			}]
		}]
	}],
	svGetRoles: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getRoles","service":"UserFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"radioSet2.dataValue","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getRolesInputs"}, {}]
	}],
	navUserList: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"UserList\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel1: ["wm.Panel", {"border":"0,0,2,0","height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5,5,5,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"_classes":{"domNode":["PageTitle"]},"caption":"User Account Setup","height":"30px","padding":"4","styles":{}}, {}],
				text2: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"text2","captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.userId","targetProperty":"dataValue"}, {}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"autoScroll":true,"border":"1","height":"100%","horizontalAlign":"left","margin":"10","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"587px","horizontalAlign":"left","padding":"10,5,5,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					text1: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Username:","captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","required":true,"styles":{},"width":"400px"}, {"onchange":"text1Change"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.username","targetProperty":"dataValue"}, {}]
						}]
					}],
					text3Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"500px"}, {}, {
						text3: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Password:","captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","password":true,"required":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.password","targetProperty":"dataValue"}, {}]
							}]
						}],
						label2: ["wm.Label", {"caption":"Password not matched!","padding":"4","showing":false,"styles":{"color":"#b05959"}}, {}]
					}],
					text4Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"500px"}, {}, {
						text4: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Confirm Password:","captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","password":true,"required":true}, {"onchange":"text4Change"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.password","targetProperty":"dataValue"}, {}]
							}]
						}],
						label3: ["wm.Label", {"caption":"Password Confirmed!","padding":"4","showing":false,"styles":{"color":"#5ab087"}}, {}]
					}],
					panel7: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						text5: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":"Name:","captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","placeHolder":"Firstname","required":true,"styles":{},"width":"350px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.firstname","targetProperty":"dataValue"}, {}]
							}]
						}],
						text6: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":undefined,"captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","placeHolder":"Middlename","width":"200px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.middlename","targetProperty":"dataValue"}, {}]
							}]
						}],
						text7: ["wm.Text", {"_classes":{"domNode":["GWF1"]},"caption":undefined,"captionSize":"150px","desktopHeight":"30px","displayValue":"","height":"30px","placeHolder":"Lastname","width":"200px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.varUser.lastname","targetProperty":"dataValue"}, {}]
							}]
						}]
					}],
					selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["GWF1"]},"caption":"Branch:","captionSize":"150px","dataField":"brcode","dataType":"com.dbgwfloansdb.data.Tbbranch","desktopHeight":"30px","displayExpression":"${brcode} + \" - \" + ${brname}","displayField":"brname","displayValue":"","height":"30px","required":true,"styles":{},"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svBranchList","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.branch","targetProperty":"dataValue"}, {}]
						}]
					}],
					date1: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"caption":"Expiry Date:","captionSize":"150px","datePattern":"yyyy-MM-dd","desktopHeight":"30px","displayValue":"2015-07-22","height":"30px","styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"var startDate = new Date();\n// A day in milliseconds\nvar aDay = 24 * 60 * 60 * 1000;\nif(${app.varUser.expirydate}!== null)\n${app.varUser.expirydate}\nelse\nnew Date(startDate.getTime() + (aDay * 90));\n","targetProperty":"dataValue"}, {}]
						}]
					}],
					date2: ["wm.Date", {"_classes":{"domNode":["GWF1"]},"caption":"Last Login Date:","captionSize":"150px","dataValue":undefined,"datePattern":"yyyy-MM-dd","desktopHeight":"30px","displayValue":"","height":"30px","showing":false,"styles":{}}, {}],
					panel6: ["wm.Panel", {"_classes":{"domNode":["panel1"]},"height":"202px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						radioSet1: ["wm.RadioSet", {"_classes":{"domNode":["GWF1"]},"caption":"Status:","captionSize":"150px","dataField":"codevalue","dataType":"com.dbgwfloansdb.data.Tbcodes","displayField":"codedesc1","displayValue":"","editorBorder":false,"height":"100%","startUpdate":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetUserStat","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.status","targetProperty":"dataValue"}, {}]
							}]
						}],
						radioSet2: ["wm.RadioSet", {"_classes":{"domNode":["GWF1"]},"caption":"Role:","captionSize":"150px","dataField":"roleId","dataType":"com.dbgwfloansdb.data.Tbrole","desktopHeight":"200px","displayField":"rolename","displayValue":"","editorBorder":false,"height":"200px","mobileHeight":"100%","startUpdate":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUser.role","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}]
			}]
		}],
		panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5","padding":"5,5,5,5","styles":{},"verticalAlign":"top","width":"767.9px"}, {}, {
			btnListOfUsers: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"List of Users","margin":"4","width":"120px"}, {"onclick":"navUserList"}],
			btnNewUser: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"New User","hint":"Clear Fields","margin":"4","styles":{},"width":"120px"}, {"onclick":"btnNewUserClick"}],
			btnSaveUser: ["wm.Button", {"_classes":{"domNode":["GWF1Button"]},"border":"1","caption":"Submit","hint":"Save or Update","margin":"4","width":"120px"}, {"onclick":"svSaveUser"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${label2}.getShowing()==true","targetProperty":"disabled"}, {}]
				}]
			}]
		}]
	}]
}