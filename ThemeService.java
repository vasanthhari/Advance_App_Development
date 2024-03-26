package com.example.bbash.service;

import com.example.bbash.model.Theme;
import com.example.bbash.repository.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ThemeService {

    @Autowired
    private ThemeRepository themeRepository;

    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }

    public Theme getThemeById(long id) {
        Optional<Theme> themeOptional = themeRepository.findById(id);
        return themeOptional.orElse(null);
    }

    public Theme createTheme(@NonNull Theme theme) {
        return themeRepository.save(theme);
    }

    public Theme updateTheme(long id, Theme updatedTheme) {
        Optional<Theme> themeOptional = themeRepository.findById(id);
        if (themeOptional.isPresent()) {
            updatedTheme.setId(id);
            return themeRepository.save(updatedTheme);
        } else {
            return null;
        }
    }

    public void deleteTheme(long id) {
        themeRepository.deleteById(id);
    }
}
