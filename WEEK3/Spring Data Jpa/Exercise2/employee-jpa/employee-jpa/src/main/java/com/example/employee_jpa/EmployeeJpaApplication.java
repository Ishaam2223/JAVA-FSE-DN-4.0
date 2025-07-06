package com.example.employee_jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeJpaApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(EmployeeJpaApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee e = new Employee();
        e.setName("Alice");
        e.setSalary(7000);
        employeeService.addEmployee(e);

        employeeService.getAllEmployees().forEach(emp ->
                System.out.println("Employee: " + emp.getName() + ", Salary: " + emp.getSalary()));
    }
}
