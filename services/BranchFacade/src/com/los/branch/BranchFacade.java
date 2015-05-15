package com.los.branch;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.dbgwfloansdb.data.Tbbranch;
import com.dbgwfloansdb.data.Tbcodes;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class BranchFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public BranchFacade() {
       super(INFO);
    }

    public String sampleJavaOperation() {
       String result  = null;
       try {
          log(INFO, "Starting sample operation");
          result = "Hello World";
          log(INFO, "Returning " + result);
       } catch(Exception e) {
          log(ERROR, "The sample java service operation has failed", e);
       }
       return result;
    }
    
    public void saveBranch(String brcode, String brname, String braddress, String brtype, String brstatus) {
    	
    	BranchService brService = new BranchServiceImpl();
    	
    	brService.saveBranch(brcode, brname, braddress, brtype, brstatus);
    	
    	log(INFO, "Save Branch Executed");
    	
    }
    
    public List<Tbbranch> getBranchList() {
    	
    	List<Tbbranch> branchList = new ArrayList<Tbbranch>();
    	BranchService brService = new BranchServiceImpl();
    	
    	branchList = brService.getBranchList();
    	
    	return branchList;
    }
    
    public void deleteBranch(String brcode) {

    	BranchService brService = new BranchServiceImpl();
    	
    	brService.deleteBranch(brcode);
    	
    	log(INFO, "Delete Branch Executed");
    }

}
