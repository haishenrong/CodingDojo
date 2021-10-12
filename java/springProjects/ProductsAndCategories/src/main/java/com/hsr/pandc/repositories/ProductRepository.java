package com.hsr.pandc.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hsr.pandc.models.Category;
import com.hsr.pandc.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product> findAllByCategories(Category category);
	List<Product> findAll();
	List<Product> findByCategoriesNotContains(Category category);
}
