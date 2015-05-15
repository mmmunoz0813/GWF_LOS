
package com.dbgwfloansdb.data;



/**
 *  dbgwfloansDB.Tbproductdocs
 *  04/24/2015 16:58:16
 * 
 */
public class Tbproductdocs {

    private Integer id;
    private String prodCode;
    private Integer docId;
    private String remarks;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProdCode() {
        return prodCode;
    }

    public void setProdCode(String prodCode) {
        this.prodCode = prodCode;
    }

    public Integer getDocId() {
        return docId;
    }

    public void setDocId(Integer docId) {
        this.docId = docId;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

}
