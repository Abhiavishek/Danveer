package org.jsp.Danveer.repository;

import java.util.List;

import org.jsp.Danveer.dto.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecipientRepo extends JpaRepository<Recipient, Integer> {
	@Query("select r from Recipient r where r.verified=?1")
  public List<Recipient> listofRecipient(boolean verified);
}
