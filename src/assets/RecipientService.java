package org.jsp.Danveer.service;

import java.util.List;

import org.jsp.Danveer.dao.RecipientDao;
import org.jsp.Danveer.dto.Recipient;
import org.jsp.Danveer.dto.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RecipientService {
	@Autowired
	private RecipientDao dao;
	
	public ResponseEntity<ResponseStructure<Recipient>>saveRecipient(Recipient r){
		ResponseStructure<Recipient> structure = new ResponseStructure<>();
		structure.setData(dao.saveRecipient(r));
		structure.setMessage("Recipient saved successfully");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Recipient>>(structure,HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<ResponseStructure<Recipient>>updateRecipient(Recipient r){
		ResponseStructure<Recipient> structure = new ResponseStructure<>();
		structure.setData(dao.saveRecipient(r));
		structure.setMessage("Recipient updated successfully");
		structure.setStatuscode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Recipient>>(structure,HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<List<Recipient>>>listofRecipient(boolean verified){
		ResponseStructure<List<Recipient>>structure = new ResponseStructure<>();
		structure.setData(dao.listofRecipient(verified));
		structure.setMessage("list of Recipient");
		structure.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Recipient>>>(structure,HttpStatus.OK);
		
	}

}
