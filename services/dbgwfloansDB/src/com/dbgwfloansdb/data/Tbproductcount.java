
package com.dbgwfloansdb.data;

import java.math.BigDecimal;


/**
 *  dbgwfloansDB.Tbproductcount
 *  04/24/2015 16:58:16
 * 
 */
public class Tbproductcount {

    private Integer id;
    private String productcode;
    private Integer loancount;
    private Float defaultIr;
    private BigDecimal defaultLoanableAmt;
    private BigDecimal minTerm;
    private BigDecimal maxTerm;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductcode() {
        return productcode;
    }

    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }

    public Integer getLoancount() {
        return loancount;
    }

    public void setLoancount(Integer loancount) {
        this.loancount = loancount;
    }

    public Float getDefaultIr() {
        return defaultIr;
    }

    public void setDefaultIr(Float defaultIr) {
        this.defaultIr = defaultIr;
    }

    public BigDecimal getDefaultLoanableAmt() {
        return defaultLoanableAmt;
    }

    public void setDefaultLoanableAmt(BigDecimal defaultLoanableAmt) {
        this.defaultLoanableAmt = defaultLoanableAmt;
    }

    public BigDecimal getMinTerm() {
        return minTerm;
    }

    public void setMinTerm(BigDecimal minTerm) {
        this.minTerm = minTerm;
    }

    public BigDecimal getMaxTerm() {
        return maxTerm;
    }

    public void setMaxTerm(BigDecimal maxTerm) {
        this.maxTerm = maxTerm;
    }

}
