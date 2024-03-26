package com.example.bbash.controller;

import com.example.bbash.model.Theme;
import com.example.bbash.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin/theme")
public class ThemeController {

    @Autowired
    private ThemeService themeService;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public List<Theme> getAllThemes() {
        return themeService.getAllThemes();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public Theme getThemeById(@PathVariable long id) {
        return themeService.getThemeById(id);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public Theme createTheme(@NonNull @RequestBody Theme theme) {
        return themeService.createTheme(theme);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Theme updateTheme(@PathVariable long id, @RequestBody Theme theme) {
        return themeService.updateTheme(id, theme);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void deleteTheme(@PathVariable long id) {
        themeService.deleteTheme(id);
    }
}
