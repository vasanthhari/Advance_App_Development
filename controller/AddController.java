package com.example.bbash.controller;

import com.example.bbash.model.Add;
import com.example.bbash.service.AddService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("admin/adds")
public class AddController {

    private final AddService addService;

    @Autowired
    public AddController(AddService addService) {
        this.addService = addService;
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<List<Add>> getAllAdds() {
        List<Add> adds = addService.getAllAdds();
        return ResponseEntity.ok(adds);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Add> getAddById(@PathVariable("id") long id) {
        Optional<Add> add = addService.getAddById(id);
        return add.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Add> createAdd(@RequestBody Add add) {
        Add createdAdd = addService.saveAdd(add);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAdd);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Add> updateAdd(@PathVariable("id") long id, @RequestBody Add updatedAdd) {
        Optional<Add> existingAddOptional = addService.getAddById(id);

        if (existingAddOptional.isPresent()) {
            Add existingAdd = existingAddOptional.get();
            existingAdd.setAname(updatedAdd.getAname());
            existingAdd.setPrice(updatedAdd.getPrice());
            existingAdd.setImage(updatedAdd.getImage());
            
            Add updated = addService.saveAdd(existingAdd);
            
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteAddById(@PathVariable("id") long id) {
        addService.deleteAddById(id);
        return ResponseEntity.noContent().build();
    }
}
