package org.jsp.Danveer.controller;

import org.jsp.Danveer.dto.Helper;
import org.jsp.Danveer.dto.ResponseStructure;
import org.jsp.Danveer.service.HelperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelperController {
	@Autowired
	private HelperService service;
	@PostMapping("/helpers")
	public ResponseEntity<ResponseStructure<Helper>> saveHelper(@RequestBody Helper h) {
		return service.saveHelper(h);
	}
	@PostMapping("/helpers/verifyByEmail")
	public ResponseEntity<ResponseStructure<Helper>> verifyByEmail(@RequestParam String email, @RequestParam String password) {
		return service.verifyByEmail(email, password);
	}

}
