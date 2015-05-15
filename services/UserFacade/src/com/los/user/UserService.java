package com.los.user;

import java.util.Date;
import java.util.List;

import com.dbgwfloansdb.data.Tbrole;
import com.dbgwfloansdb.data.Tbuser;

public interface UserService {

	void saveUser(String id, String username, String password, String lname, String fname, String mname, Date expirydate, Date lastlogindate, String branch, String status, String role);
	List<Tbrole> getRoles();
	List<Tbuser> getUsers(String branch);
}
