package com.ratedpower.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "fuelcustomergroupcompany")
public class FuelCustomerGroupCompany {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id")
    private FuelCustomerGroup fuelCustomerGroup;

    @ManyToOne
    @JoinColumn(name = "id")
    private Company company;

    // Resto de los campos, constructores, getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FuelCustomerGroup getFuelCustomerGroup() {
        return fuelCustomerGroup;
    }

    public void setFuelCustomerGroup(FuelCustomerGroup fuelCustomerGroup) {
        this.fuelCustomerGroup = fuelCustomerGroup;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
