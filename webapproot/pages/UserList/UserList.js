dojo.declare("UserList", wm.Page, {
	start: function() {
        this.svGetBranchList.update();
        this.svGetUsers.update();
	},
	"preferredDevice": "desktop",
	_end: 0
});