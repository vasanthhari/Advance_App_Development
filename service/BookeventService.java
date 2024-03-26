package com.example.bbash.service;

import com.example.bbash.model.Bookevent;
import com.example.bbash.repository.BookeventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookeventService {

    private final BookeventRepository bookeventRepository;

    @Autowired
    public BookeventService(BookeventRepository bookeventRepository) {
        this.bookeventRepository = bookeventRepository;
    }

    public List<Bookevent> getAllEvents() {
        return bookeventRepository.findAll();
    }

    public Optional<Bookevent> getEventById(long id) {
        return bookeventRepository.findById(id);
    }

    public Bookevent saveEvent(Bookevent bookevent) {
        return bookeventRepository.save(bookevent);
    }

    public void deleteEventById(long id) {
        bookeventRepository.deleteById(id);
    }
}
