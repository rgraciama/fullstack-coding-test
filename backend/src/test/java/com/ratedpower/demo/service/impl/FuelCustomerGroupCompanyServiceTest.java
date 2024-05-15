package com.ratedpower.demo.service.impl;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class FuelCustomerGroupCompanyServiceTest {

    @Autowired
    public FuelCustomerGroupCompanyService fuelCustomerGroupCompanyService;
    @Test
    void getPrecioByFechaAndCompanyId() {
        Double result = fuelCustomerGroupCompanyService.getPrecioByFechaAndCompanyId(new Date(), 1L);
        assertTrue(result > 0.0);
    }
}