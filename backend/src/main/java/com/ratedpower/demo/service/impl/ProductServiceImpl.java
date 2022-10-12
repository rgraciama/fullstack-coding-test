package com.ratedpower.demo.service.impl;

import com.ratedpower.demo.dao.ProductDAO;
import com.ratedpower.demo.domain.Product;
import com.ratedpower.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDAO productDAO;

    @Override
    public List<Product> findAll() {
        List<Product> listProducts= productDAO.findAll();
        return listProducts;
    }

    @Override
    public Product findById(int id) {
        Product product = productDAO.findById(id);
        return product;
    }

    @Override
    public void save(Product product) {
        productDAO.save(product);
    }

    @Override
    public void deleteById(int id) {
        productDAO.deleteById(id);
    }

}
