package com.los.documents;

import java.util.List;

import com.dbgwfloansdb.data.Tbdocuments;

public interface DocumentService {

	void saveDocument(String id, String docs, String remarks);
	List<Tbdocuments> docsList();
	
}
