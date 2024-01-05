package org.jsp.Danveer.dao;

import java.util.Optional;

import org.jsp.Danveer.dto.Helper;
import org.jsp.Danveer.repository.HelperRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HelperDao {
	@Autowired
	private HelperRepo repository;
	
	public Helper saveHelper(Helper h) {
		return repository.save(h);
	}
	
	public Optional<Helper> VerifyByEmail(String email, String password) {
		return repository.verifyByEmail(email, password);
	}

}
