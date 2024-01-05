package org.jsp.Danveer.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Helper {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false, unique = true)
	private String phone;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	private String district;
	@Column(nullable = false)
	private String state;
	@Column(nullable = false)
	private int pincode;
	@Column(nullable = false)
	private String country;
	@Column(nullable = false)
	private String password;

}
