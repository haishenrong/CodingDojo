package com.hsr.pandc.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hsr.pandc.models.Category;
import com.hsr.pandc.models.Product;
import com.hsr.pandc.services.ProdCatService;

@Controller
public class ProdCatController {
	private final ProdCatService prodCatService;
	
	public ProdCatController(ProdCatService prodCatService) {
		this.prodCatService = prodCatService;
	}
	
	@RequestMapping("/")
	public String index(Model model) {
		List<Product> products = prodCatService.allProducts();
		model.addAttribute("products", products);
		List<Category> categories = prodCatService.allCategories();
		model.addAttribute("categories", categories);
		return "index.jsp";
	}
	
    @RequestMapping("/category/new")
    public String newCategory(@ModelAttribute("category") Category category) {
        return "newCat.jsp";
    }
    
    @RequestMapping("/product/new")
    public String newProduct(@ModelAttribute("product") Product product) {
        return "newProd.jsp";
    }
    
    @RequestMapping(value="/category", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("category") Category category, BindingResult result) {
        if (result.hasErrors()) {
            return "newCat.jsp";
        } else {
            prodCatService.createCategory(category);
            return "redirect:/";
        }
    }
    
    @RequestMapping(value="/product", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("product") Product product, BindingResult result) {
        if (result.hasErrors()) {
            return "newProd.jsp";
        } else {
            prodCatService.createProduct(product);
            return "redirect:/";
        }
    }
    
	@RequestMapping("product/{id}")
	public String product(Model model, @PathVariable("id") Long id) {
		Product product = prodCatService.findProductById(id);
		List<Category> contains = prodCatService.categoriesBelongTo(product);
		List<Category> notContains = prodCatService.categoriesNotBelongTo(product);
		model.addAttribute("product", product);
		model.addAttribute("contains", contains);
		model.addAttribute("notContains", notContains);
		return"product.jsp";
	}
	
	@RequestMapping(value="/product/connect/{id}", method=RequestMethod.POST)
	public String link(@RequestParam("id") Long categoryId, @PathVariable("id") Long productId) {
		prodCatService.addRelation(categoryId, productId);
		return "redirect:/";
	}
	
	@RequestMapping("category/{id}")
	public String category(Model model, @PathVariable("id") Long id) {
		Category category = prodCatService.findCategoryById(id);
		List<Product> contains = prodCatService.productsBelongTo(category);
		List<Product> notContains = prodCatService.productsNotBelongTo(category);
		model.addAttribute("category", category);
		model.addAttribute("contains", contains);
		model.addAttribute("notContains", notContains);
		return "category.jsp";
	}
	
	@RequestMapping(value="/category/connect/{id}", method=RequestMethod.POST)
	public String link2(@RequestParam("id") Long productId, @PathVariable("id") Long categoryId) {
		prodCatService.addRelation(categoryId, productId);
		return "redirect:/";
	}
}
