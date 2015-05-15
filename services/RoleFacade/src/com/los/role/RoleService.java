package com.los.role;

import java.util.List;

import com.dbgwfloansdb.data.Tbrole;

public interface RoleService {

	void saveRole(String role, String desc, String id);
	List<Tbrole> getRoleList();
	void deleteRole(String id);
	
}
