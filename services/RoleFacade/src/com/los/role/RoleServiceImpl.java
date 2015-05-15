package com.los.role;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.dbgwfloansdb.data.Tbrole;
import com.los.branch.BranchServiceImpl;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class RoleServiceImpl implements RoleService {
	
	private static final Logger logger = Logger.getLogger(BranchServiceImpl.class);
	private static final String hqlGetRoleList = "FROM Tbrole";
	private static final String hqlGetRoleToDelete = "FROM Tbrole WHERE roleId=:roleid";
	
	@Override
	public void saveRole(String role, String desc, String id) {
		// TODO save Role
		
		Tbrole role1 = new Tbrole();
		DBService dbService = new DBServiceImpl();
		
		try {
			if(id!=null)
				role1.setRoleId(Integer.valueOf(id));
			role1.setRoledesc(desc);
			role1.setRolename(role);
			dbService.saveOrUpdate(role1);
			
			logger.info("Saving Role Done!");
			
		} catch (Exception e) {
			
			logger.info(e);
			
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbrole> getRoleList() {
		// TODO Auto-generated method stub
		
		List<Tbrole>  roleList = new ArrayList<Tbrole>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		try {
			
			roleList = (List<Tbrole>) dbService.executeListHQLQuery(hqlGetRoleList, params);
			
		} catch(Exception e) {
			
			logger.info(e);
		}
		
		return roleList;
	}

	@Override
	public void deleteRole(String id) {
		// TODO Auto-generated method stub
		
		Tbrole role1 = new Tbrole();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("roleid", id);
		role1 = (Tbrole) dbService.executeUniqueHQLQuery(hqlGetRoleToDelete, params);
		
		if(role1!=null) {
			dbService.delete(role1);
		}
		
	}
	
	
	
}
