package com.los.user;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.dbgwfloansdb.data.Tbrole;
import com.dbgwfloansdb.data.Tbuser;
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
public class UserFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public UserFacade() {
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
    
    public void saveUser(String id, String username, String password, String lname, String fname, String mname, Date expirydate, Date lastlogindate, String branch, String status, String role) {
    	
    	UserService userservice = new UserServiceImpl();
    	
    	userservice.saveUser(id, username, password, lname, fname, mname, expirydate, lastlogindate, branch, status, role);
    	
    	log(INFO, "Save User *" + username + "* Executed");
    	
    }
    
    public List<Tbrole> getRoles() {
    	
    	List<Tbrole> roles = new ArrayList<Tbrole>();
    	
    	UserService usersrvc = new UserServiceImpl();
    	
    	roles = usersrvc.getRoles();
    	
    	return roles;
    }
    
    public List<Tbuser> getUsers(String branch) {
    	
    	List<Tbuser> users = new ArrayList<Tbuser>();
    	
    	UserService usersrvc = new UserServiceImpl();
		
    	users = usersrvc.getUsers(branch);
    	
    	return users;
    	
    }

}
