package com.ratedpower.demo.repository;

import com.ratedpower.demo.model.FuelCustomerGroupCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface FuelCustomerGroupCompanyRepository extends JpaRepository<FuelCustomerGroupCompany, Long> {
    @Query("SELECT fcg.precio FROM FuelCustomerGroupCompany fcc " +
            "JOIN fcc.fuelCustomerGroup fcg " +
            "WHERE fcc.company.id = :companyId " +
            "AND fcg.fecha <= :fecha " +
            "ORDER BY fcg.fecha DESC")
    Double findPrecioByFechaAndCompanyId(@Param("fecha") Date fecha, @Param("companyId") Long companyId);
}
