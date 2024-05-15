package com.ratedpower.demo.service;

import com.ratedpower.demo.model.Product;
import com.ratedpower.demo.repository.FuelCustomerGroupCompanyRepository;

import java.util.Date;
import java.util.List;

public interface FuelCustomerGroupCompanyService {
    public Double getPrecioByFechaAndCompanyId(Date fecha, Long companyId);
}
