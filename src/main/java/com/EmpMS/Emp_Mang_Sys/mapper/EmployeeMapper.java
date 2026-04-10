package com.EmpMS.Emp_Mang_Sys.mapper;

import com.EmpMS.Emp_Mang_Sys.dto.EmployeeDto;
import com.EmpMS.Emp_Mang_Sys.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee emp){
        return new EmployeeDto (
                emp.getId(),
                emp.getFirstname(),
                emp.getLastname(),
                emp.getDept(),
                emp.getEmail()
                );
    }

    public static Employee mapToEmployee(EmployeeDto empdto){
        return new Employee(
                empdto.getId(),
                empdto.getFirstName(),
                empdto.getLastName(),
                empdto.getDept(),
                empdto.getEmail()
        );
    }
}