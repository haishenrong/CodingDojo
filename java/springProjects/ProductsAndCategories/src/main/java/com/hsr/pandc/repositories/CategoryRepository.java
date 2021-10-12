package com.hsr.pandc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hsr.pandc.models.Category;
import com.hsr.pandc.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	List<Category> findAllByProducts(Product product);
    
	List<Category> findAll();
    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);
    
}
