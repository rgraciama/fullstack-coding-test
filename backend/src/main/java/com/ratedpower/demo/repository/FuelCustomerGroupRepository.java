package com.ratedpower.demo.repository;

import com.ratedpower.demo.model.FuelCustomerGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FuelCustomerGroupRepository extends JpaRepository<FuelCustomerGroup, Long> {

}

