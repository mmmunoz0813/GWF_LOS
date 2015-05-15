dojo.declare("IndividualCustomerPage", wm.Page, {
	start: function() {
		//this.accordionLayers1.decorator.deactivateLayer(this.layer2);
        //this.accordionLayers2.decorator.deactivateLayer(this.layer3);
       // this.accordionLayers3.decorator.deactivateLayer(this.layer4);
        //this.accordionLayers4.decorator.deactivateLayer(this.layer5);
        //this.accordionLayers5.decorator.deactivateLayer(this.layer7);
        //this.accordionLayers6.decorator.deactivateLayer(this.layer8);
	},
	"preferredDevice": "desktop",

	text2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(this.text2.getDataValue() !== null) {
            var inputStr = this.text2.getDataValue();
            this.text2.setDataValue(inputStr.toUpperCase());
        }
	},
	text3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(this.text3.getDataValue() !== null) {
            var inputStr = this.text3.getDataValue();
            this.text3.setDataValue(inputStr.toUpperCase());
        }
	},
	text4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(this.text4.getDataValue() !== null){
            var inputStr = this.text4.getDataValue();
            this.text4.setDataValue(inputStr.toUpperCase());
        }
	},
	_end: 0
});