package com.hsr.pokebook.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hsr.pokebook.models.PokeBook;
import com.hsr.pokebook.services.PokeBookService;

@Controller
@RequestMapping("/entries")
public class PokeBookController {
    private final PokeBookService pokebookService;
    
    public PokeBookController(PokeBookService pokebookService) {
        this.pokebookService = pokebookService;
    }
    
	@RequestMapping("/")
	public String index(Model model, @ModelAttribute("entry") PokeBook entry) {
		List<PokeBook> entries = pokebookService.allEntries();
		model.addAttribute("entries", entries);
		return "index.jsp";
	}
	
	@RequestMapping("/{id}")
	public String single(Model model, @PathVariable("id") Long id) {
		PokeBook entry = pokebookService.findEntry(id);
		model.addAttribute("entry", entry);
		return entry == null ? "none.jsp": "one.jsp";
	}
	
    @RequestMapping(value="", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("entry") PokeBook entry, BindingResult result) {
        if (result.hasErrors()) {
            return "index.jsp";
        } else {
            pokebookService.createEntry(entry);
            return "redirect:/entries/";
        }
    }
    
    @RequestMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model) {
        PokeBook entry = pokebookService.findEntry(id);
        model.addAttribute("entry", entry);
        return "edit.jsp";
    }
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("entry") PokeBook entry, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            pokebookService.updateEntry(entry);
            return "redirect:/entries/";
        }
    }
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        pokebookService.deleteEntry(id);
        return "redirect:/entries/";
    }
}
