package com.ratedpower.demo.service;

import com.ratedpower.demo.domain.Product;

import java.util.List;

public interface ProductService {

    public List<Product> findAll();

    public Product findById(int id);

    public void save(Product product);

    public void deleteById(int id);
}
