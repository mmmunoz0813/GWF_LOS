package com.los.documents;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.dbgwfloansdb.data.Tbdocuments;
import com.los.common.impl.DBServiceImpl;
import com.los.common.service.DBService;
import com.los.common.util.HQLUtil;

public class DocumentServiceImpl implements DocumentService {

	private static final String hqlDocsList = "FROM Tbdocuments";
			
	@Override
	public void saveDocument(String id, String docs, String remarks) {
		// TODO Auto-generated method stub
		
		Tbdocuments docu = new Tbdocuments();
		DBService dbService = new DBServiceImpl();		
		Map<String, Object> params = HQLUtil.getMap();
    	
		if(id!=null)
			docu.setDocId(Integer.valueOf(id));
		docu.setDocument(docs);
		docu.setRemarks(remarks);
		
		dbService.saveOrUpdate(docu);
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbdocuments> docsList() {
		// TODO Auto-generated method stub
		 List<Tbdocuments> docs = new ArrayList<Tbdocuments>();
		 DBService dbService = new DBServiceImpl();			
		 Map<String, Object> params = HQLUtil.getMap();
	    	
		 docs = (List<Tbdocuments>) dbService.executeListHQLQuery(hqlDocsList, params);
		 
		return docs;
	}
	
	

	
}
