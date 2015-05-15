dojo.declare("Main", wm.Page, {
	start: function() {
		//startTime();
	},
    
    startTime: function () {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        this.label1.setCaption(h+":"+m+":"+s);
        var t = setTimeout(startTime(),500);
    },

    checkTime: function(i) {
        if (i<10) 
            i = "0" + i;
              // add zero in front of numbers < 10
        return i;
    },
	"preferredDevice": "desktop",
	
	_end: 0
});