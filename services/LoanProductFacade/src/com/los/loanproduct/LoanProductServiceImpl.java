package com.los.loanproduct;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.dbgwfloansdb.data.Tbloanproducts;
import com.dbgwfloansdb.data.Tbproductcount;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class LoanProductServiceImpl implements LoanProductService {

	private static final String hqlGetLoanProductList = "FROM Tbloanproducts";
	private static final String hqlGetProductCountList = "FROM Tbproductcount a WHERE a.productcode=:code";
	
	
	@Override
	public void saveLoanProduct(String productCode, String productName,
			String productType, float minIR, float maxIR,
			BigDecimal minLoanAmt, BigDecimal maxLoanAmt,
			BigDecimal minDPrequired, Boolean comakerRequired,
			String interestbaseyear, Date lastupdated, String productGroup) {
		// TODO Auto-generated method stub
		
		Tbloanproducts prods = new Tbloanproducts();
		DBService dbService = new DBServiceImpl();
		
		prods.setComakerrequired(comakerRequired);
		prods.setInterestbaseyear(interestbaseyear);
		prods.setLastupdated(lastupdated);
		prods.setMaxIr(maxIR);
		prods.setMinIr(minIR);
		prods.setMaxLoanAmount(maxLoanAmt);
		prods.setMinLoanAmount(minLoanAmt);
		prods.setMinDprequired(minDPrequired);
		prods.setProdCode(productCode);
		prods.setProductgroup(productGroup);
		prods.setProductName(productName);
		prods.setProductType(productType);

		dbService.saveOrUpdate(prods);
		
		// save first instance of product loancount
		
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbloanproducts> getProductList() {
		// TODO Auto-generated method stub
		
		List<Tbloanproducts> prodlist = new ArrayList<Tbloanproducts>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		prodlist = (List<Tbloanproducts>) dbService.executeListHQLQuery(hqlGetLoanProductList, params);
		
		return prodlist;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbproductcount> getProductCountList(String product) {
		// TODO Auto-generated method stub
		
		List<Tbproductcount> prodcountlist = new ArrayList<Tbproductcount>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("code", product);
		prodcountlist = (List<Tbproductcount>) dbService.executeListHQLQuery(hqlGetProductCountList, params);
		
		return prodcountlist;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void saveLoanProductCount(String prodCode, int loancount,
			float defaultIR, BigDecimal maxLoanAmt, BigDecimal minTerm,
			BigDecimal maxTerm, String id) {
		// TODO Auto-generated method stub
		
		Tbproductcount pCount = new Tbproductcount();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		List<Tbproductcount> pCountList = new ArrayList<Tbproductcount>();
		
		params.put("code", prodCode);
		
		pCountList = (List<Tbproductcount>) dbService.executeListHQLQuery(hqlGetProductCountList, params);
		
		
		if(id != null)
			pCount.setId(Integer.valueOf(id));
		if(loancount == 0){
			loancount = pCountList.size() + 1;
		}
		pCount.setDefaultIr(defaultIR);
		pCount.setDefaultLoanableAmt(maxLoanAmt);
		pCount.setLoancount(loancount);
		pCount.setMaxTerm(maxTerm);
		pCount.setMinTerm(minTerm);
		pCount.setProductcode(prodCode);
		
		dbService.saveOrUpdate(pCount);
		
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public int getNextLoanCount(String prodCode) {
		// TODO Auto-generated method stub
		
		int nxtCount = 0;
		List<Tbproductcount> pCountList = new ArrayList<Tbproductcount>();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
		
		params.put("code", prodCode);
		pCountList = (List<Tbproductcount>) dbService.executeListHQLQuery(hqlGetProductCountList, params);
		
		nxtCount = pCountList.size() + 1;
				
		return nxtCount;
	
	}

}
