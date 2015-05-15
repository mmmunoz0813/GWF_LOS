Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
			}]
		}]
	}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionSize":"80px","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		headerPanel: ["wm.HeaderContentPanel", {"height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			TitleBar: ["wm.Panel", {"_classes":{"domNode":["titlebar"]},"border":"0,0,4,0","height":"77px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"8","styles":{"backgroundColor":"#521818"},"verticalAlign":"top","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"aspect":"h","deviceType":null,"height":"60px","imageIndex":0,"imageList":undefined,"source":"resources/images/logos/GWF/globewest_logo.png","styles":{},"width":"81px"}, {}],
				appNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px"]},"caption":"Loan Origination System","height":"62px","margin":"0,0,0,10","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontStyle":"normal","fontFamily":"arial"},"width":"100%"}, {}],
				panel3: ["wm.Panel", {"border":"1","height":"100%","showing":false,"styles":{},"width":"222px"}, {}]
			}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"border":"2","desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"206px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":""},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				label1: ["wm.Label", {"align":"center","caption":"User Login","height":"40px","padding":"4","styles":{"color":"#d53232","fontWeight":"bold","fontSize":"16px","backgroundColor":"#f2e6e6"},"width":"100%"}, {}],
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"72px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					usernameInput: ["wm.Text", {"caption":"Username","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Password","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"width":"100%"}, {}],
					hashInput: ["wm.Text", {"dataValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"GWF_LOS\",\"deviceType\":\"desktop\"}}","displayValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"GWF_LOS\",\"deviceType\":\"desktop\"}}","showing":false}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"border":"1","borderColor":"#000000","caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
				}]
			}]
		}]
	}]
}