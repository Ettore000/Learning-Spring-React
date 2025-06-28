package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/veicoli")
@CrossOrigin(origins = "http://localhost:3000")
public class VeicoloController {

    @GetMapping
    public List<Veicolo> getVeicoli() {
        return List.of(
            new Veicolo(1L, "Tesla", "Model 3", 450),
            new Veicolo(2L, "Nissan", "Leaf", 270),
            new Veicolo(3L, "Renault", "Zoe", 300)
        );
    }
}
