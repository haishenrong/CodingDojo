package com.hsr.bookclub.controllers;


import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hsr.bookclub.models.Book;
import com.hsr.bookclub.models.User;
import com.hsr.bookclub.services.BookService;
import com.hsr.bookclub.services.UserService;

@Controller
public class BooksController {
    private final BookService bookService;
    private final UserService userService;
    
    @Autowired
    public BooksController(BookService bookService, UserService userService) {
        this.bookService = bookService;
        this.userService = userService;
    }
    
	@RequestMapping("/home")
	public String index(Model model, HttpSession session) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		List<Book> books = bookService.allBooks();
		model.addAttribute("user", user);
		model.addAttribute("books", books);
		return "home.jsp";
	}
	
	@RequestMapping("books/{id}")
	public String single(Model model, HttpSession session, @PathVariable("id") Long id) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return book == null ? "none.jsp": "book.jsp";
	}
	
	@RequestMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book, Model model, HttpSession session) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		model.addAttribute("user", user);
        return "newBook.jsp";
    }
	
	@RequestMapping(value="/books", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
	    if (result.hasErrors()) {
	        return "newBook.jsp";
	    } else {
	        bookService.createBook(book);
	        return "redirect:/home";
	    }
	}
	
}