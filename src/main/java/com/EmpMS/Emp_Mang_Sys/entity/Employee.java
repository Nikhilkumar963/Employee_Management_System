package com.EmpMS.Emp_Mang_Sys.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="employee")

public class Employee {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	 @Column(name = "First_Name")
	private String firstname;

	 @Column(name = "Last_Name")
	private String lastname;

	 @Column(name = "dept")
	private String dept;

	 @Column(name = "E_Mail",nullable = false,unique = true)
	private String email;
	
}
