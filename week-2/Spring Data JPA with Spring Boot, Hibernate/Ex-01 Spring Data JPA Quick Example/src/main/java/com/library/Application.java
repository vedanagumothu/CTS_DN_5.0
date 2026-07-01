package com.library;

import com.library.model.Employee;
import com.library.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    EmployeeRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {

        repository.save(new Employee(101, "Bhanu", "Java"));
        repository.save(new Employee(102, "Rahul", "Python"));

        repository.findAll().forEach(System.out::println);
    }
}