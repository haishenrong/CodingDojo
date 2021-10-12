package com.hsr.pandc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hsr.pandc.models.Category;
import com.hsr.pandc.models.Product;
import com.hsr.pandc.repositories.CategoryRepository;
import com.hsr.pandc.repositories.ProductRepository;

@Service
public class ProdCatService {
	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	
	public ProdCatService(ProductRepository productRepository, CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}
	
	public List<Product> allProducts() {
		return productRepository.findAll();
	}
	
	public List<Category> allCategories() {
		return categoryRepository.findAll();
	}
	
	public List<Category> categoriesBelongTo(Product product){
		return categoryRepository.findAllByProducts(product);
	}
	
	public List<Category> categoriesNotBelongTo(Product product){
		return categoryRepository.findByProductsNotContains(product);
	}
	
	public List<Product> productsBelongTo(Category category){
		return productRepository.findAllByCategories(category);
	}
	
	public List<Product> productsNotBelongTo(Category category){
		return productRepository.findByCategoriesNotContains(category);
	}
	
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}
	public Category createCategory(Category category) {
		return categoryRepository.save(category);
	}
	public Product findProductById(Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if(optionalProduct.isPresent()) {
            return optionalProduct.get();
        } else {
            return null;
        }
    }
	public Category findCategoryById(Long id) {
        Optional<Category> optionalCat = categoryRepository.findById(id);
        if(optionalCat.isPresent()) {
            return optionalCat.get();
        } else {
            return null;
        }
    }
	public void addRelation(Long categoryId,Long productId) {
	    // retrieve an instance of a category using another method in the service.
		Category thisCategory = findCategoryById(categoryId);
	    // retrieve an instance of a product using another method in the service.
	    Product thisProduct = findProductById(productId);
	    // add the product to this category's list of products
	    thisCategory.getProducts().add(thisProduct);
	    // Save thisCategory, since you made changes to its product list.
	    categoryRepository.save(thisCategory);	
	}

}
