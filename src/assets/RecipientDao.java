package org.jsp.Danveer.dao;

import java.util.List;

import org.jsp.Danveer.dto.Recipient;
import org.jsp.Danveer.repository.RecipientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RecipientDao {
	@Autowired
	private RecipientRepo repository;
	
	public Recipient saveRecipient(Recipient r) {
		return repository.save(r);
	}
	
	public Recipient updateRecipient(Recipient r) {
		return repository.save(r);
	}
	
	public List<Recipient>listofRecipient(boolean verified){
		return repository.listofRecipient(verified);
	}

}
