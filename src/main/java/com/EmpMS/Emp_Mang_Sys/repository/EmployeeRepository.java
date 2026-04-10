package com.EmpMS.Emp_Mang_Sys.repository;

import com.EmpMS.Emp_Mang_Sys.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository< Employee,Long> {

}
