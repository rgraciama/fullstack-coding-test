package com.ratedpower.demo.service.impl;

import com.ratedpower.demo.model.Product;
import com.ratedpower.demo.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductServiceImplTest {

    @Autowired
    private ProductRepository productRepository;
    @Test
    void findAll() {
        List<Product> lista =  productRepository.findAll();
        assertTrue(!lista.isEmpty());

    }

}