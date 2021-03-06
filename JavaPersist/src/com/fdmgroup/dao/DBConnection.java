package com.fdmgroup.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DBConnection {

	private static final String persistenceName = "FincFSM";
	
	private EntityManagerFactory emf = null;
	
	private DBConnection(){
		init();
	}
	
	private void init(){
		if(emf == null || !emf.isOpen()){
			emf = Persistence.createEntityManagerFactory(persistenceName);
		}
	}
	
	public EntityManager getEntityManager(){
		init();
		return emf.createEntityManager();
	}
	
	public void close(){
		if(emf != null && emf.isOpen()){
			emf.close();
		}
	}
	
}