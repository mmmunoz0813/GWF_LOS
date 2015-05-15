package com.los.codes;

import java.util.ArrayList;
import java.util.List;

import com.dbgwfloansdb.data.Tbcodename;
import com.dbgwfloansdb.data.Tbcodes;
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
public class CodesFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public CodesFacade() {
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
    
    public List<Tbcodename> getCodenameList() {
		
    	List<Tbcodename> codenameList = new ArrayList<Tbcodename>();
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	codenameList = codeservice.getCodenameList();
    	    	
    	return codenameList;
    	
    }
    
    public void saveCodename(String codename) {
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	codeservice.saveCodename(codename);
    	
    	log(INFO,"Codename " + codename + " Saved!");
    
    }
    
    public List<Tbcodes> getCodesList() {
    	
    	List<Tbcodes> lstCodes = new ArrayList<Tbcodes>();
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	lstCodes = codeservice.getCodesList();
    	
    	return lstCodes;
    }
    
    public void saveCode(String codename, String codevalue, String desc1, String desc2, String remarks, String id) {
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	codeservice.saveCode(codename, codevalue, desc1, desc2, remarks, id);
    	
    }
    
    public List<Tbcodes> getSpecificCodesList(String codename) {

    	List<Tbcodes> lstCodes = new ArrayList<Tbcodes>();
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	lstCodes = codeservice.getSpecificCodesList(codename);
    	
    	return lstCodes;
    	
    }
    
    public void deleteCode(String id) {
    	
    	CodesService codeservice = new CodesServiceImpl();
    	
    	codeservice.deleteCode(id);
    }

}
