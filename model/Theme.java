package com.example.bbash.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Table;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="theme")
public class Theme {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String tname;
    private String image;
    private String phdetails;
    private String videtails;
    private String gift;
    private String cost;
    private String description;

    
}
