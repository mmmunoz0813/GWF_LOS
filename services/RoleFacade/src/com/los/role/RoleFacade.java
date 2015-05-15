package com.los.role;

import java.util.ArrayList;
import java.util.List;

import com.dbgwfloansdb.data.Tbrole;
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
public class RoleFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public RoleFacade() {
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
    
    public void saveRole(String role, String desc, String id) {
        
        RoleService roleservice = new RoleServiceImpl();
        
        roleservice.saveRole(role, desc, id);
        
        log(INFO, "Saving Role Exceuted!");
    
    }
    
    public List<Tbrole> getRoleList() {
        
    	List<Tbrole>  roleList = new ArrayList<Tbrole>();
    	RoleService roleservice = new RoleServiceImpl();
    	
    	roleList = roleservice.getRoleList();
    	
    	return roleList;
    }

}
