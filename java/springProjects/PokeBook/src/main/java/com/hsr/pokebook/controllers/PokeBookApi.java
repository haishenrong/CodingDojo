package com.hsr.pokebook.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hsr.pokebook.models.PokeBook;
import com.hsr.pokebook.services.PokeBookService;


@RestController
public class PokeBookApi {
    private final PokeBookService pokebookService;
    public PokeBookApi(PokeBookService pokebookService){
        this.pokebookService = pokebookService;
    }
    @RequestMapping("/api/pokebook")
    @ResponseBody
    public List<PokeBook> index() {
        return pokebookService.allEntries();
    }
    
    @RequestMapping(value="/api/pokebook", method=RequestMethod.POST)
    public PokeBook create(@RequestParam(value="expense") String expense, @RequestParam(value="vendor") String vendor, @RequestParam(value="amount") Double amount, @RequestParam(value="description") String desc) {
        PokeBook entry = new PokeBook(expense, vendor, amount, desc);
        return pokebookService.createEntry(entry);
    }
    
    @RequestMapping(value="/api/pokebooks2", method=RequestMethod.POST)
    public PokeBook create2(@RequestBody Map<String, Object> body) {
        PokeBook entry = new PokeBook((String)body.get("expense"),(String)body.get("vendor"),(Double)body.get("amount"), (String) body.get("description"));
        return pokebookService.createEntry(entry);
    }
    
    @RequestMapping("/api/pokebooks/{id}")
    public PokeBook show(@PathVariable("id") Long id) {
        PokeBook entry = pokebookService.findEntry(id);
        return entry;
    }
    
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.PUT)
    public PokeBook update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="expense") String expense, 
    		@RequestParam(value="description") String desc, 
    		@RequestParam(value="vendor") String vendor,
    		@RequestParam(value="amount") Double amount) {
        PokeBook book = pokebookService.updateEntry(id, expense, vendor, amount, desc);
        return book;
    }
    
    
    @RequestMapping(value="/api/books2/{id}", method=RequestMethod.PUT)
    public PokeBook update2(
            @PathVariable("id") Long id, @RequestBody Map<String, Object> body) {
        PokeBook book = pokebookService.updateEntry(id, (String)body.get("expense"),(String)body.get("vendor"),(Double)body.get("amount"),(String) body.get("description"));
        return book;
    }

    @RequestMapping(value="/api/books/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        pokebookService.deleteEntry(id);
    }
}