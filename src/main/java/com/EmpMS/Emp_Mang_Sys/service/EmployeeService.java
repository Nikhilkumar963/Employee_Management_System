package com.EmpMS.Emp_Mang_Sys.service;

import com.EmpMS.Emp_Mang_Sys.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmploye(EmployeeDto empdto);

    EmployeeDto getEmployeeById(Long emid);

    List<EmployeeDto> getAllEmp();

    EmployeeDto updateEmp(Long empID, EmployeeDto updatedEmp);

    void deleteEmployee (Long empId);
}
