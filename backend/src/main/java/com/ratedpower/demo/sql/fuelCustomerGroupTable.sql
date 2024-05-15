-- Crear tabla FuelCustomerGroup
CREATE TABLE FuelCustomerGroup (
                                   id SERIAL PRIMARY KEY,
                                   nombre VARCHAR(100) NOT NULL,
                                   precio DECIMAL(10, 2) NOT NULL,
                                   fecha DATE NOT NULL
);

-- Crear tabla Company
CREATE TABLE Company (
                         id SERIAL PRIMARY KEY,
                         nombre VARCHAR(100) NOT NULL
);

-- Crear tabla FuelCustomerGroupCompany
CREATE TABLE FuelCustomerGroupCompany (
                                          id SERIAL PRIMARY KEY,
                                          fuel_customer_group_id INT NOT NULL,
                                          company_id INT NOT NULL,
                                          FOREIGN KEY (fuel_customer_group_id) REFERENCES FuelCustomerGroup (id),
                                          FOREIGN KEY (company_id) REFERENCES Company (id)
);
