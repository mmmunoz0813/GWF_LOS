dojo.declare("GWF_LOS", wm.Application, {
	"currencyLocale": "PHP", 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSSLUsed": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha0", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "nothing", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "common.themes.GWF_LOSTheme121", 
	"toastPosition": "cc", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		varUser: ["wm.Variable", {"type":"com.dbgwfloansdb.data.Tbuser"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[userList].dojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
			}]
		}]
	},
	_end: 0
});

GWF_LOS.extend({

	onSessionExpiration: function() {
		
	},
	_end: 0
});