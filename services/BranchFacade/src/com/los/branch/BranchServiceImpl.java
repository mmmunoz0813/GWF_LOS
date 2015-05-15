package com.los.branch;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.dbgwfloansdb.data.Tbbranch;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class BranchServiceImpl implements BranchService {

	private static final Logger logger = Logger.getLogger(BranchServiceImpl.class);
	
	private static final String hqlGetBranchList = "FROM Tbbranch";
	private static final String hqlGetBranch = "FROM Tbbranch a WHERE a.brcode=:brcode";

	@Override
	public void saveBranch(String brcode, String brname, String braddress,
			String brtype, String brstatus) {
		// TODO Saves branch details to table tbbranch
		
		Tbbranch branch = new Tbbranch();
		DBService dbService = new DBServiceImpl();
		try {
			
			logger.info("Saving Branch Details....");
			
			branch.setBrcode(brcode);
			branch.setBrname(brname);
			branch.setBraddress(braddress);
			branch.setBrtype(brtype);
			branch.setBrstatus(brstatus);
			dbService.saveOrUpdate(branch);
			
			logger.info("Branch " + brcode + " Details Saved!");
			
		} catch (Exception e) {
			
			logger.info("Error in saving branch details...");
			logger.error(e);
			
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbbranch> getBranchList() {
		// TODO Get Branch List
		
		List<Tbbranch> branchList = new ArrayList<Tbbranch>();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		try {
				
			branchList = (List<Tbbranch>) dbService.executeListHQLQuery(hqlGetBranchList, params);
			
		} catch (Exception e) {
	
			logger.error(e);
		
		}
 		
		return branchList;
	}

	@Override
	public void deleteBranch(String brcode) {
		// TODO Auto-generated method stub
		
		Tbbranch branch = new Tbbranch();
    	DBService dbservice = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("brcode", brcode);
		branch = (Tbbranch) dbservice.executeUniqueHQLQuery(hqlGetBranch, params);
		
		dbservice.delete(branch);
		
		logger.info("Branch Deleted!");
	}

}
