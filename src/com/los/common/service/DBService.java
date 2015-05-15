package com.los.common.service;

//--- UTILITIES
import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Framework Database Access Manager.<br>
 * Use this class to execute database related operations (Reference:)
 * http://dev.wavemaker.com/wiki/bin/Dev/Databases
 * 
 * @author elbi
 */
public interface DBService {

	/** Name of the Database Bean */
	public static final String DBNAME = "dbgwfloansDB";

	/**
	 * Use to execute hibernate in native mode to perform select statements on
	 * database tables
	 * 
	 * @param sQuery
	 * @param parameters
	 * @return
	 */
	public Object executeUniqueSQLQuery(String sQuery, Map parameters);

	public List executeListSQLQuery(String sQuery, Map parameters);

	/**
	 * Use to execute hibernate using hibernate query language (hql)
	 * 
	 * @param hql
	 * @param parameters
	 * @return
	 */
	public Object executeUniqueHQLQueryMaxResultOne(String hql, Map parameters);

	public Object executeUniqueHQLQuery(String hql, Map parameters);

	public Object executeListHQLQuery(String hql, Map parameters);

	/**
	 * Use to execute INSERT, UPDATE and DELETE statements on database tables
	 * 
	 * @param query
	 * @return
	 */
	public int executeUpdate(String query, Map paramaters);

	public int executeHQLUpdate(String hqlQuery, Map paramaters);

	/**
	 * Persist an object
	 * 
	 * @param objectToSave
	 * @return true if success(no exception thrown), false otherwise
	 */
	boolean saveOrUpdate(Object objectToSave);

	boolean save(Object objectToSave);

	Serializable saveObject(Object objectToSave);

	boolean update(Object objectToSave);

	boolean delete(Object objectToDelete);

	String changePassword(String strUsername, String strPassword,
			String strNewPassword, String strConfirmPassword);

	String confirmPasswordMatch(String strUsername, String strPassword,
			String strNewPassword, String strConfirmPassword);

}
