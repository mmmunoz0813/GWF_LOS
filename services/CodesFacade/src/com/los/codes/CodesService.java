package com.los.codes;

import java.util.List;

import com.dbgwfloansdb.data.Tbcodename;
import com.dbgwfloansdb.data.Tbcodes;

public interface CodesService {
	
	public List<Tbcodename> getCodenameList();
	public void saveCodename(String codename);
	public List<Tbcodes> getCodesList();
	public void saveCode(String codename, String codevalue, String desc1, String desc2, String remarks, String id);
	public List<Tbcodes> getSpecificCodesList(String codename);
	void deleteCode(String id);
}
