package com.ratedpower.demo.service.impl;

import com.ratedpower.demo.repository.FuelCustomerGroupCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class FuelCustomerGroupCompanyService implements com.ratedpower.demo.service.FuelCustomerGroupCompanyService {

    @Autowired
    private final FuelCustomerGroupCompanyRepository fuelCustomerGroupCompanyRepository;

    public FuelCustomerGroupCompanyService(FuelCustomerGroupCompanyRepository fuelCustomerGroupCompanyRepository) {
        this.fuelCustomerGroupCompanyRepository = fuelCustomerGroupCompanyRepository;
    }

    public Double getPrecioByFechaAndCompanyId(Date fecha, Long companyId) {
        return fuelCustomerGroupCompanyRepository.findPrecioByFechaAndCompanyId(fecha, companyId);
    }
}
