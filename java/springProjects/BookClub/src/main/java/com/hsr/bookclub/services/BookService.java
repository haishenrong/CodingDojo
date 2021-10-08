package com.hsr.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hsr.bookclub.models.Book;
import com.hsr.bookclub.models.User;
import com.hsr.bookclub.repositories.BookRepository;

@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book pb) {
        return bookRepository.save(pb);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    public Book updateBook(Long id, String title, String author, String thoughts,User user) {
    	Book book = new Book(title, author, thoughts, user);
    	book.setId(id);
    	return bookRepository.save(book);
    }
    public Book updateBook(Book book) {
    	return bookRepository.save(book);
    }
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    }
}