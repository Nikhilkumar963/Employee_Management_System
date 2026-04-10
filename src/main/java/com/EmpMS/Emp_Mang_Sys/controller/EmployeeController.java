package com.EmpMS.Emp_Mang_Sys.controller;


import com.EmpMS.Emp_Mang_Sys.dto.EmployeeDto;
import com.EmpMS.Emp_Mang_Sys.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add or create Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmp(@RequestBody EmployeeDto empdto){
        EmployeeDto savedemp=employeeService.createEmploye(empdto);
        return new ResponseEntity<>(savedemp, HttpStatus.CREATED);
    }

    //Build Get Employee REST API
    @GetMapping("{id}")
    public  ResponseEntity<EmployeeDto> getEmpByID(@PathVariable("id") Long emid){
        EmployeeDto re = employeeService.getEmployeeById(emid);

        return  ResponseEntity.ok(re);
    }
    //Build Get All Employee REST API

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmp(){
        List<EmployeeDto> employees = employeeService.getAllEmp();
        return ResponseEntity.ok(employees);
    }

    //Build Update or edit Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updatedEmploye(@PathVariable("id") Long empId,
                                                      @RequestBody EmployeeDto updatedEmp){
        EmployeeDto empDto = employeeService.updateEmp(empId,updatedEmp);

        return ResponseEntity.ok(empDto);
    }

    //Build Delete or remove Employee REST API
    @DeleteMapping("{id}")

    public ResponseEntity<String> deleteEmp (@PathVariable("id") Long empId){
        employeeService.deleteEmployee(empId);
        return ResponseEntity.ok("Employee Deleted Sucessfully");
    }

}
