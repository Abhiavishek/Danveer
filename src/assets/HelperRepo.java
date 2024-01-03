package org.jsp.Danveer.repository;

import java.util.Optional;

import org.jsp.Danveer.dto.Helper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HelperRepo extends JpaRepository<Helper, Integer> {
	@Query("select h from Helper h where h.email=?1 and h.password=?2")
	public Optional<Helper>verifyByEmail(String email, String password);
}
