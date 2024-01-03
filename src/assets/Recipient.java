package org.jsp.Danveer.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Recipient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

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

    @Column(nullable = false, unique = true)
    private String upiId;

    @Column(nullable = false, unique=true)
    private String bankAccountNumber;

    @Column(nullable = false)
    private String ifscCode;

    @Column(columnDefinition = "BIT DEFAULT 0")
    private boolean verified;

    private String status;

    @OneToOne
    @JoinColumn
    private ImageData imagedata;
}
