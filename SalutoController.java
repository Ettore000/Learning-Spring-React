package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SalutoController {

    @GetMapping("/ciao")
    public String saluta() {
        return "Ciao da Spring Boot!";
    }
}
