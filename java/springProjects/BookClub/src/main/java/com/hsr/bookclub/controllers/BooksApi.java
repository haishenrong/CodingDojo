package com.hsr.bookclub.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hsr.bookclub.models.Book;
import com.hsr.bookclub.services.BookService;

@RestController
public class BooksApi {
    private final BookService bookService;
    public BooksApi(BookService bookService){
        this.bookService = bookService;
    }
    @RequestMapping("/api/books")
    @ResponseBody
    public List<Book> index() {
        return bookService.allBooks();
    }
    
    @RequestMapping(value="/api/books", method=RequestMethod.POST)
    public Book create(@RequestParam(value="title") String title, @RequestParam(value="author") String author, @RequestParam(value="thoughts") String thoughts) {
        Book book = new Book(title, author, thoughts);
        return bookService.createBook(book);
    }
    
    @RequestMapping(value="/api/books2", method=RequestMethod.POST)
    public Book create(@RequestBody Map<String, Object> body) {
        Book book = new Book((String)body.get("title"),(String)body.get("author"),(String) body.get("thoughts"));
        return bookService.createBook(book);
    }
    
    @RequestMapping("/api/books/{id}")
    public Book show(@PathVariable("id") Long id) {
        Book book = bookService.findBook(id);
        return book;
    }
    
    @RequestMapping(value="/api/books/{id}", method=RequestMethod.PUT)
    public Book update(
    		@PathVariable("id") Long id, 
    		@RequestParam(value="title") String title, 
            @RequestParam(value="author") String author,
    		@RequestParam(value="thoughts") String thoughts
            ) {
        Book book = bookService.updateBook(id, title, author, thoughts);
        return book;
    }
    
    
    @RequestMapping(value="/api/books2/{id}", method=RequestMethod.PUT)
    public Book update(
            @PathVariable("id") Long id, @RequestBody Map<String, Object> body) {
        Book book = bookService.updateBook(id, (String)body.get("title"),(String)body.get("author"),(String) body.get("thoughts"));
        return book;
    }

    @RequestMapping(value="/api/books/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }
}
