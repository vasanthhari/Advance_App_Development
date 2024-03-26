package com.example.bbash.service;

import com.example.bbash.model.Add;
import com.example.bbash.repository.AddRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddService {

    private final AddRepository addRepository;

    @Autowired
    public AddService(AddRepository addRepository) {
        this.addRepository = addRepository;
    }

    public List<Add> getAllAdds() {
        return addRepository.findAll();
    }

    public Optional<Add> getAddById(long id) {
        return addRepository.findById(id);
    }

    public Add saveAdd(Add add) {
        return addRepository.save(add);
    }

    public void deleteAddById(long id) {
        addRepository.deleteById(id);
    }
}
