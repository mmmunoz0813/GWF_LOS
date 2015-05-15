package com.los.loanproduct;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.dbgwfloansdb.data.Tbloanproducts;
import com.dbgwfloansdb.data.Tbproductcount;
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
public class LoanProductFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public LoanProductFacade() {
    
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
    
    
    public void saveLoanProduct(String productCode, String productName, String productType, float minIR, float maxIR, BigDecimal minLoanAmt, BigDecimal maxLoanAmt, BigDecimal minDPrequired, Boolean comakerRequired, String interestbaseyear, Date lastupdated, String productGroup) {
    
    	LoanProductService prodsrvc = new LoanProductServiceImpl();
    	
    	prodsrvc.saveLoanProduct(productCode, productName, productType, minIR, maxIR, minLoanAmt, maxLoanAmt, minDPrequired, comakerRequired, interestbaseyear, lastupdated, productGroup);
    	
    	log(INFO, "Saved " + productCode + " !");
    	
    }
    
    public List<Tbloanproducts> getProductList() {
    	
    	List<Tbloanproducts> prodlist = new ArrayList<Tbloanproducts>();
    	LoanProductService prodsrvc = new LoanProductServiceImpl();
    	    	    	
    	prodlist = prodsrvc.getProductList();
    	
		return prodlist;
    	
    }
    
    public List<Tbproductcount> getProductCountList(String product) {

    	List<Tbproductcount> prodcountlist = new ArrayList<Tbproductcount>();
    	LoanProductService prodsrvc = new LoanProductServiceImpl();
    	
    	prodcountlist = prodsrvc.getProductCountList(product);
    	
    	return prodcountlist;
    	    	
    }
    
    public void saveProductCount(String prodCode, int loancount,
			float defaultIR, BigDecimal maxLoanAmt, BigDecimal minTerm,
			BigDecimal maxTerm, String id) {
    	
    	LoanProductService prodsrvc = new LoanProductServiceImpl();
    	
    	prodsrvc.saveLoanProductCount(prodCode, loancount, defaultIR, maxLoanAmt, minTerm, maxTerm, id);
    	
    }
    
    public int getNextCount(String prodCode) {
		
    	int nxtcount = 0;
    	
    	LoanProductService prodsrvc = new LoanProductServiceImpl();
    	
    	nxtcount = prodsrvc.getNextLoanCount(prodCode);
    	
    	return nxtcount;
    	
    }
    
     		

}
