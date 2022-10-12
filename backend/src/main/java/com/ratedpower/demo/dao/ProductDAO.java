package com.ratedpower.demo.dao;

import com.ratedpower.demo.domain.Product;

import java.util.List;

public interface ProductDAO {

    public List<Product> findAll();

    public Product findById(int id);

    public void save(Product product);

    public void deleteById(int id);
}
