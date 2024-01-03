package org.jsp.Danveer.controller;

import java.util.List;

import org.jsp.Danveer.dto.Recipient;
import org.jsp.Danveer.dto.ResponseStructure;
import org.jsp.Danveer.service.RecipientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RecipientController {
	@Autowired
	private RecipientService service;
	@PostMapping("/recipients")
	public ResponseEntity<ResponseStructure<Recipient>>saveRecipient(@RequestBody Recipient r){
		return service.saveRecipient(r);
	}
    @PutMapping("/recipients")
	public ResponseEntity<ResponseStructure<Recipient>>updateRecipient(@RequestBody Recipient r){
		return service.updateRecipient(r);
	}
    @GetMapping("/recipients/verified")
    public ResponseEntity<ResponseStructure<List<Recipient>>> listofRecipient(@RequestParam boolean verified){
    	return service.listofRecipient(verified);
    }

}
