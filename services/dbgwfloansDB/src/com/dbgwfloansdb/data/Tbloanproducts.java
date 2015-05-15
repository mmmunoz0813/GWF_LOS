
package com.dbgwfloansdb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  dbgwfloansDB.Tbloanproducts
 *  04/24/2015 16:58:16
 * 
 */
public class Tbloanproducts {

    private String prodCode;
    private String productName;
    private String productType;
    private Float minIr;
    private Float maxIr;
    private BigDecimal minLoanAmount;
    private BigDecimal maxLoanAmount;
    private BigDecimal minDprequired;
    private Boolean comakerrequired;
    private String interestbaseyear;
    private Date lastupdated;
    private String productgroup;

    public String getProdCode() {
        return prodCode;
    }

    public void setProdCode(String prodCode) {
        this.prodCode = prodCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Float getMinIr() {
        return minIr;
    }

    public void setMinIr(Float minIr) {
        this.minIr = minIr;
    }

    public Float getMaxIr() {
        return maxIr;
    }

    public void setMaxIr(Float maxIr) {
        this.maxIr = maxIr;
    }

    public BigDecimal getMinLoanAmount() {
        return minLoanAmount;
    }

    public void setMinLoanAmount(BigDecimal minLoanAmount) {
        this.minLoanAmount = minLoanAmount;
    }

    public BigDecimal getMaxLoanAmount() {
        return maxLoanAmount;
    }

    public void setMaxLoanAmount(BigDecimal maxLoanAmount) {
        this.maxLoanAmount = maxLoanAmount;
    }

    public BigDecimal getMinDprequired() {
        return minDprequired;
    }

    public void setMinDprequired(BigDecimal minDprequired) {
        this.minDprequired = minDprequired;
    }

    public Boolean getComakerrequired() {
        return comakerrequired;
    }

    public void setComakerrequired(Boolean comakerrequired) {
        this.comakerrequired = comakerrequired;
    }

    public String getInterestbaseyear() {
        return interestbaseyear;
    }

    public void setInterestbaseyear(String interestbaseyear) {
        this.interestbaseyear = interestbaseyear;
    }

    public Date getLastupdated() {
        return lastupdated;
    }

    public void setLastupdated(Date lastupdated) {
        this.lastupdated = lastupdated;
    }

    public String getProductgroup() {
        return productgroup;
    }

    public void setProductgroup(String productgroup) {
        this.productgroup = productgroup;
    }

}
