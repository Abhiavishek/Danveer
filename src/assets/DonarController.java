package org.jsp.Danveer.controller;

import java.util.List;

import org.jsp.Danveer.dto.Donar;
import org.jsp.Danveer.dto.ResponseStructure;
import org.jsp.Danveer.service.DonarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class DonarController {
	@Autowired
	private DonarService service;
	@PostMapping("/donars")
	public ResponseEntity<ResponseStructure<Donar>> saveDonar(@RequestBody Donar d) {
		return service.saveDonar(d);
	}
	@PostMapping("/donars/verifyByEmail")
	public ResponseEntity<ResponseStructure<Donar>> verifyByEmail(@RequestParam String email, @RequestParam String password) {
		return service.verifyByEmail(email, password);
	}
	@GetMapping("/donars/verified")
	public ResponseEntity<ResponseStructure<List<Donar>>> verifiedDonar(@RequestParam boolean verified) {
		return service.verifiedDonar(verified);
	}
	@PutMapping("/donars")
	public ResponseEntity<ResponseStructure<Donar>>updateDonar(@RequestBody Donar d){
		return service.updateDonar(d);
	}
	
	@GetMapping("/donars/{id}")
	public ResponseEntity<ResponseStructure<Donar>> findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@DeleteMapping("/donars/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteDonar(@PathVariable int id) {
		return service.deleteDonar(id);
	}

}
