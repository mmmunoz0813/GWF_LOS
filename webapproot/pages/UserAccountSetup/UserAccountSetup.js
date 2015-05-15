dojo.declare("UserAccountSetup", wm.Page, {
    start: function() {
        this.svBranchList.update();
        this.svGetUserStat.update();
        this.svGetRoles.update();
    },
    "preferredDevice": "desktop",

    text1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if(this.text1.getDataValue() !== null){
            var inputStr = this.text1.getDataValue();
            this.text1.setDataValue(inputStr.toUpperCase());
        }
    },
    text4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.text3.getDataValue() !== null) {
            var inputStr = this.text3.getDataValue();
            if (this.text4.getDataValue() !== inputStr) {
                this.label2.setShowing(true);
                this.label3.setShowing(false);
                this.btnSaveUser.setDisabled(true);
            } else {
                this.label3.setShowing(true);
                this.label2.setShowing(false);
                this.btnSaveUser.setDisabled(false);
            }
        } else {
            this.label2.setShowing(false);
            this.label3.setShowing(false);
        }
        }, 
    btnNewUserClick: function(inSender) {
            this.text1.clear();
            this.text2.clear();
            this.text3.clear();
            this.text4.clear();
            this.text5.clear();
            this.text6.clear();
            this.text7.clear();
            this.selectMenu1.clear();
            //expiry date code
            var startDate = new Date();
            // A day in milliseconds
            var aDay = 24 * 60 * 60 * 1000;
            this.date1.setDataValue(new Date(startDate.getTime() + (aDay * 90)));
            this.date2.clear();
            this.radioSet1.clear();
            this.radioSet2.clear();
        },
        _end: 0
    });