package com.los.branch;

import java.util.List;

import com.dbgwfloansdb.data.Tbbranch;

public interface BranchService {

	 void saveBranch(String brcode, String brname, String braddress, String brtype, String brstatus);
	 List<Tbbranch> getBranchList();
	 void deleteBranch(String brcode);
}
