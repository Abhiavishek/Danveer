package org.jsp.Danveer.service;

import java.util.List;
import java.util.Optional;

import org.jsp.Danveer.dao.DonarDao;
import org.jsp.Danveer.dto.Donar;
import org.jsp.Danveer.dto.ResponseStructure;
import org.jsp.Danveer.exception.IdNotFoundException;
import org.jsp.Danveer.exception.InvalidCredentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DonarService {
    @Autowired
	private DonarDao dao;
    
    public ResponseEntity<ResponseStructure<Donar>>saveDonar(Donar d){
    	ResponseStructure<Donar>structure = new ResponseStructure<>();
    	structure.setData(dao.saveDonar(d));
    	structure.setMessage("Donar saved Successfully");
    	structure.setStatuscode(HttpStatus.CREATED.value());
    	return new ResponseEntity<ResponseStructure<Donar>>(structure, HttpStatus.CREATED);
    }
    
    public ResponseEntity<ResponseStructure<Donar>>verifyByEmail(String email, String password){
    	ResponseStructure<Donar>structure = new ResponseStructure<>();
    	Optional<Donar>recDonar = dao.verifyByEmail(email, password);
    	if(recDonar.isPresent()) {
    		structure.setData(recDonar.get());
    		structure.setMessage("Donar Found");
    		structure.setStatuscode(HttpStatus.OK.value());
    		return new ResponseEntity<ResponseStructure<Donar>>(structure, HttpStatus.OK);
    	}
    	throw new InvalidCredentialException();
    }
    
    public ResponseEntity<ResponseStructure<Donar>> updateDonar(Donar d){
		ResponseStructure<Donar> structure = new ResponseStructure<>();
		structure.setData(dao.updateDonar(d));
		structure.setMessage("Data saved sucessfully");
		structure.setStatuscode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Donar>>(structure, HttpStatus.OK);
	}
    
   public ResponseEntity<ResponseStructure<List<Donar>>>verifiedDonar(boolean verified){
	   ResponseStructure<List<Donar>> structure= new ResponseStructure<>();
	   structure.setData(dao.verifiedDonar(verified));
	   structure.setMessage("List of Donar");
	   structure.setStatuscode(HttpStatus.OK.value());
	   return new ResponseEntity<ResponseStructure<List<Donar>>>(structure,HttpStatus.OK);
   }
   
   public ResponseEntity<ResponseStructure<Donar>>findById(int id){
		ResponseStructure<Donar> structure = new ResponseStructure<>();
		Optional<Donar>recDonar = dao.findById(id);
		if(recDonar.isPresent()) {
			structure.setData(recDonar.get());
			structure.setMessage("Donar is Found");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Donar>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
   
   public ResponseEntity<ResponseStructure<String>>deleteDonar(int id){
   	ResponseStructure<String> structure = new ResponseStructure<>();
   	Optional<Donar> recDonar = dao.findById(id);
   	if(recDonar.isPresent()) {
   		dao.deleteDonar(id);
   		structure.setData("Donar deleted");
   		structure.setMessage("Donar Found");
   	    return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.OK);
   	}
   	throw new IdNotFoundException();
   }
    
}
