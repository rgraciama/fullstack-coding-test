package com.ratedpower.demo.dao.impl;

import com.ratedpower.demo.dao.ProductDAO;
import com.ratedpower.demo.model.Product;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDAOImpl implements ProductDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Product> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);

        Query<Product> theQuery = currentSession.createQuery("from Product", Product.class);
        List<Product> products = theQuery.getResultList();

        return products;
    }

    @Override
    public Product findById(int id) {
        Session currentSession = entityManager.unwrap(Session.class);

        Product product = currentSession.get(Product.class, id);

        return product;
    }

    @Override
    public void save(Product product) {
        Session currentSession = entityManager.unwrap(Session.class);

        currentSession.saveOrUpdate(product);
    }

    @Override
    public void deleteById(int id) {
        Session currentSession = entityManager.unwrap(Session.class);
        Transaction txn = currentSession.beginTransaction();

        Query<Product> theQuery = currentSession.createQuery("delete from Product where id=:idProduct");

        theQuery.setParameter("idProduct", id);
        theQuery.executeUpdate();
        txn.commit();
    }
}
