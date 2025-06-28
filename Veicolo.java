package com.example.demo;

public class Veicolo {
    private Long id;
    private String marca;
    private String modello;
    private int autonomia;

    public Veicolo(Long id, String marca, String modello, int autonomia) {
        this.id = id;
        this.marca = marca;
        this.modello = modello;
        this.autonomia = autonomia;
    }

    public Long getId() { return id; }
    public String getMarca() { return marca; }
    public String getModello() { return modello; }
    public int getAutonomia() { return autonomia; }
}
