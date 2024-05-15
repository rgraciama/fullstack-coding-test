package com.ratedpower.demo.repository;

import com.ratedpower.demo.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    // Aquí puedes agregar métodos personalizados para consultas específicas si es necesario
}
