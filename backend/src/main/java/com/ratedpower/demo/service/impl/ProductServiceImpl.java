package com.ratedpower.demo.service.impl;

import com.ratedpower.demo.dao.ProductDAO;
import com.ratedpower.demo.model.Product;
import com.ratedpower.demo.repository.ProductRepository;
import com.ratedpower.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDAO productDAO;

    @Autowired
    private ProductRepository productRepository;

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
//        productDAO.save(product);
        this.saveProduct(product);
    }

    @Override
    public void deleteById(int id) {
        productDAO.deleteById(id);
    }

    @Override
    public Boolean saveProduct(Product product) {
        try {
            productRepository.save(product);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}
