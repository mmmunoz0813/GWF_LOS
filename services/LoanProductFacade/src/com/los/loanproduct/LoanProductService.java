package com.los.loanproduct;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.dbgwfloansdb.data.Tbloanproducts;
import com.dbgwfloansdb.data.Tbproductcount;

public interface LoanProductService {

	void saveLoanProduct(String productCode, String productName, String productType, float minIR, float maxIR, BigDecimal minLoanAmt, BigDecimal maxLoanAmt, BigDecimal minDPrequired, Boolean comakerRequired, String interestbaseyear, Date lastupdated, String productGroup);
	List<Tbloanproducts> getProductList();
	void saveLoanProductCount(String prodCode, int loancount, float defaultIR, BigDecimal maxLoanAmt, BigDecimal minTerm, BigDecimal maxTerm, String id);
	List<Tbproductcount> getProductCountList(String product);
	int getNextLoanCount(String prodCode);
}
