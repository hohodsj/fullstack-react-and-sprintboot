package com.luv2code.spring_boot_library.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.luv2code.spring_boot_library.entity.Book;

// @CrossOrigin("http://localhost:3000")
public interface BookRepository extends JpaRepository<Book, Long> {
    
}
