package com.EmpMS.Emp_Mang_Sys.service.impl;

import com.EmpMS.Emp_Mang_Sys.dto.EmployeeDto;
import com.EmpMS.Emp_Mang_Sys.entity.Employee;
import com.EmpMS.Emp_Mang_Sys.exception.UserNotFoundException;
import com.EmpMS.Emp_Mang_Sys.mapper.EmployeeMapper;
import com.EmpMS.Emp_Mang_Sys.repository.EmployeeRepository;
import com.EmpMS.Emp_Mang_Sys.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override

    public EmployeeDto createEmploye(EmployeeDto empdto) {

        Employee employee = EmployeeMapper.mapToEmployee(empdto);
        Employee savedemp = employeeRepository.save(employee); //t 33
        return EmployeeMapper.mapToEmployeeDto(savedemp);
    }

    @Override
    public EmployeeDto getEmployeeById(Long emid) {
        Employee emp = employeeRepository.findById(emid)
                .orElseThrow(()-> new UserNotFoundException("Employee does not exists with : "+ emid));

            return EmployeeMapper.mapToEmployeeDto(emp);
    }

    @Override
    public List<EmployeeDto> getAllEmp() {
       List<Employee> allEmp = employeeRepository.findAll();
        return allEmp.stream().map((employee)-> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmp(Long empID, EmployeeDto updatedEmp) {

       Employee employee = employeeRepository.findById(empID)
                .orElseThrow(()->new UserNotFoundException("Employee does not exists with given id : "+empID));


       employee.setFirstname(updatedEmp.getFirstName());
       employee.setLastname(updatedEmp.getLastName());
       employee.setDept(updatedEmp.getDept());
       employee.setEmail(updatedEmp.getEmail());

       Employee updatedEmployeObj =employeeRepository.save(employee);

       return EmployeeMapper.mapToEmployeeDto(updatedEmployeObj);

    }

    @Override
    public void deleteEmployee(Long empId) {
        Employee employee = employeeRepository.findById(empId)
                .orElseThrow(()->new UserNotFoundException("Employee does not exists with given id : "+empId));

        employeeRepository.deleteById(empId);
    }
}
