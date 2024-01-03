package org.jsp.Danveer.repository;

import java.util.List;
import java.util.Optional;

import org.jsp.Danveer.dto.Donar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DonarRepo extends JpaRepository<Donar, Integer> {
	@Query("select d from Donar d where d.email=?1 and d.password=?2")
	public Optional<Donar>verifyByEmail(String email, String password);
	@Query("select d from Donar d where d.verified=?1")
	public List<Donar>ListofDonar(boolean verified);
}
