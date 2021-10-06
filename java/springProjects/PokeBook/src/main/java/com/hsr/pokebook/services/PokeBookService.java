package com.hsr.pokebook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.hsr.pokebook.models.PokeBook;
import com.hsr.pokebook.repositories.PokeBookRepository;
@Service
public class PokeBookService {
    // adding the book repository as a dependency
    private final PokeBookRepository pokebookRepository;
    
    public PokeBookService(PokeBookRepository pokebookRepository) {
        this.pokebookRepository = pokebookRepository;
    }
    // returns all the books
    public List<PokeBook> allEntries() {
        return pokebookRepository.findAll();
    }
    // creates a book
    public PokeBook createEntry(PokeBook pb) {
        return pokebookRepository.save(pb);
    }
    // retrieves a book
    public PokeBook findEntry(Long id) {
        Optional<PokeBook> optionalEntry = pokebookRepository.findById(id);
        if(optionalEntry.isPresent()) {
            return optionalEntry.get();
        } else {
            return null;
        }
    }
    public PokeBook updateEntry(Long id, String expense, String vendor, Double amount, String desc) {
    	PokeBook entry = new PokeBook(expense,vendor, amount,desc);
    	entry.setId(id);
    	return pokebookRepository.save(entry);
    }
    public PokeBook updateEntry(PokeBook entry) {
    	return pokebookRepository.save(entry);
    }
    public void deleteEntry(Long id) {
    	pokebookRepository.deleteById(id);
    }
}