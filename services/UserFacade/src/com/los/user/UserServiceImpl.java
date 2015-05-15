package com.los.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.dbgwfloansdb.data.Tbrole;
import com.dbgwfloansdb.data.Tbuser;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class UserServiceImpl implements UserService {

	private static final Logger logger = Logger.getLogger(UserServiceImpl.class);
	private static final String hqlGetRoles = "FROM Tbrole";
	private static final String hqlGetUsers = "FROM Tbuser a WHERE a.branch=:br";
	
	@Override
	public void saveUser(String id, String username, String password, String lname,
			String fname, String mname, Date expirydate, Date lastlogindate,
			String branch, String status, String role) {
		// TODO save user account
		
		Tbuser user = new Tbuser();
		DBService dbService = new DBServiceImpl();		
		
		try {
			
			if(id != null) {
				user.setUserId(Integer.valueOf(id));
			}
			user.setUsername(username);
			user.setPassword(password);
			user.setFirstname(fname);
			user.setMiddlename(mname);
			user.setLastname(lname);
			user.setBranch(branch);
			user.setExpirydate(expirydate);
			user.setLastlogindate(lastlogindate);
			user.setStatus(status);
			user.setRole(role);
			dbService.saveOrUpdate(user);
			
		} catch (Exception e) {
			
			logger.info(e);
			
		}
		
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbrole> getRoles() {
		// TODO Auto-generated method stub
		
		List<Tbrole> roles = new ArrayList<Tbrole>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		roles = (List<Tbrole>) dbService.executeListHQLQuery(hqlGetRoles, params);
		
		return roles;
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbuser> getUsers(String branch) {
		// TODO Auto-generated method stub
		
		List<Tbuser> users = new ArrayList<Tbuser>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("br", branch);
		users = (List<Tbuser>) dbService.executeListHQLQuery(hqlGetUsers, params);
		
		return users;
		
	}
	
	

}
