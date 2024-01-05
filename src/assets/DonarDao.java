package org.jsp.Danveer.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.Danveer.dto.Donar;
import org.jsp.Danveer.repository.DonarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DonarDao {
	@Autowired
	private DonarRepo repository;
	
	public Donar saveDonar(Donar d) {
		return repository.save(d);
	}
	
	public Donar updateDonar(Donar d) {
		return repository.save(d);
	}
	
	public boolean deleteDonar(int id) {
		Optional<Donar>recDonar = findById(id);
		if(recDonar.isPresent()) {
			repository.delete(recDonar.get());
			return true;
		}
		else {
			return false;
		}
	}
	
	public Optional<Donar>verifyByEmail(String email, String password){
		return repository.verifyByEmail(email, password);
	}
	
	public List<Donar> verifiedDonar(boolean verified){
		return repository.ListofDonar(verified);
	}
	
	public Optional<Donar> findById(int id) {
		return repository.findById(id);
	}

}
