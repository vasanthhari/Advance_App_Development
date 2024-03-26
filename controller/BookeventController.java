package com.example.bbash.controller;

import com.example.bbash.model.Bookevent;
import com.example.bbash.service.BookeventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class BookeventController {

    private final BookeventService bookeventService;

    @Autowired
    public BookeventController(BookeventService bookeventService) {
        this.bookeventService = bookeventService;
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<List<Bookevent>> getAllEvents() {
        List<Bookevent> events = bookeventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Bookevent> getEventById(@PathVariable("id") long id) {
        Optional<Bookevent> event = bookeventService.getEventById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Bookevent> createEvent(@RequestBody Bookevent bookevent) {
        Bookevent createdEvent = bookeventService.saveEvent(bookevent);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Void> deleteEventById(@PathVariable("id") long id) {
        bookeventService.deleteEventById(id);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Bookevent> updateEvent(@PathVariable("id") long id, @RequestBody Bookevent updatedEvent) {
        Optional<Bookevent> existingEventOptional = bookeventService.getEventById(id);
        
        if (existingEventOptional.isPresent()) {
            Bookevent existingEvent = existingEventOptional.get();
            // Update the existing event with the new data
            existingEvent.setAname(updatedEvent.getAname());
            existingEvent.setAddress(updatedEvent.getAddress());
            existingEvent.setMobilenum(updatedEvent.getMobilenum());
            existingEvent.setEventname(updatedEvent.getEventname());
            existingEvent.setDateofevent(updatedEvent.getDateofevent());
            existingEvent.setTime(updatedEvent.getTime());
            existingEvent.setNoofpeople(updatedEvent.getNoofpeople());
            
            // Save the updated event
            Bookevent updated = bookeventService.saveEvent(existingEvent);
            
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
