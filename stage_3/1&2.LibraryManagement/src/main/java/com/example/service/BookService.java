package com.example.service;

import com.example.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBook() {
        System.out.println(bookRepository.getBookDetails());
    }
}

