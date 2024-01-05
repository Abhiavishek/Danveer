package org.jsp.Danveer.service;

import java.util.Optional;

import org.jsp.Danveer.dao.HelperDao;
import org.jsp.Danveer.dto.Helper;
import org.jsp.Danveer.dto.ResponseStructure;
import org.jsp.Danveer.exception.InvalidCredentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class HelperService {
	@Autowired
	private HelperDao hdao;
	
	public ResponseEntity<ResponseStructure<Helper>> saveHelper(Helper h){
		ResponseStructure<Helper> structure = new ResponseStructure<>();
		structure.setData(hdao.saveHelper(h));
		structure.setMessage("Helper saved Successfully");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Helper>>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<Helper>>verifyByEmail(String email, String password){
		ResponseStructure<Helper>structure = new ResponseStructure<>();
		Optional<Helper>recUser = hdao.VerifyByEmail(email, password);
		if(recUser.isPresent()) {
			structure.setData(recUser.get());
			structure.setMessage("User Found");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Helper>>(structure, HttpStatus.OK);
		}
		throw new InvalidCredentialException();
	}
	
	

}
