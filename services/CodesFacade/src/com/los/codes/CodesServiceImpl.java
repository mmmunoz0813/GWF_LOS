package com.los.codes;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.dbgwfloansdb.data.Tbcodename;
import com.dbgwfloansdb.data.Tbcodes;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class CodesServiceImpl implements CodesService {

	private static final Logger logger = Logger.getLogger(CodesServiceImpl.class);
	
	private static final String hqlGetCodenameList = "FROM Tbcodename";
	private static final String hqlGetCodesList = "FROM Tbcodes";
	private static final String hqlGetCodesListPerCodename = "FROM Tbcodes a WHERE a.codename=:codename";
	private static final String hqlGetCode = "FROM Tbcodes a WHERE a.id=:id";
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodename> getCodenameList() {
		// TODO Get codenames in tbcodename
		
		List<Tbcodename> lstcodename = new ArrayList<Tbcodename>();
		DBService dbservice = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		lstcodename = (List<Tbcodename>) dbservice.executeListHQLQuery(hqlGetCodenameList, params);
		
		return lstcodename;	
	}

	@Override
	public void saveCodename(String codename) {
		// TODO Add Codename
		
		Tbcodename codename1 = new Tbcodename();
		DBService dbservice = new DBServiceImpl();
				
		try {
			
			logger.info("Saving Codename....");
			codename1.setCodename(codename);
			dbservice.saveOrUpdate(codename1);
			
			logger.info("Saving Codename Executed");
			
		} catch (Exception e) {
			
			logger.info("Error in saving codename...");
			logger.error(e);
		}
 	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodes> getCodesList() {
		// TODO Get List of Codes
				
		List<Tbcodes> lstcodes = new ArrayList<Tbcodes>();
		DBService dbservice = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		lstcodes = (List<Tbcodes>) dbservice.executeListHQLQuery(hqlGetCodesList, params);
		
		return lstcodes;	
	}

	@Override
	public void saveCode(String codename, String codevalue, String desc1,
			String desc2, String remarks, String id) {
		// TODO Save codes / parameters
		
		Tbcodes code = new Tbcodes();
		DBService dbservice = new DBServiceImpl();
		
		try {
			
			logger.info("Saving Code....");
			if(id != null)
				code.setCodeId(Integer.valueOf(id));
			code.setCodename(codename);
			code.setCodevalue(codevalue);
			code.setCodedesc1(desc1);
			code.setCodedesc2(desc2);
			code.setRemarks(remarks);
			dbservice.saveOrUpdate(code);
			
			logger.info("Saving Code Executed");
			
		} catch (Exception e) {
			
			logger.info("Error in saving codename...");
			logger.error(e);
			
		}
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodes> getSpecificCodesList(String codename) {
		// TODO Get specific codes list given the codename
		
		List<Tbcodes> lstcodes = new ArrayList<Tbcodes>();
		DBService dbservice = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("codename", codename);
		
		lstcodes = (List<Tbcodes>) dbservice.executeListHQLQuery(hqlGetCodesListPerCodename, params);
		
		return lstcodes;	
		
	}

	@Override
	public void deleteCode(String id) {
		// TODO Auto-generated method stub
		
		Tbcodes code = new Tbcodes();
		DBService dbservice = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("id", Integer.valueOf(id));
		code = (Tbcodes) dbservice.executeUniqueHQLQuery(hqlGetCode, params);
		
		
		dbservice.delete(code);
		
		logger.info("Code Deleted!");
		
	}
	
	

}
