package com.example;

import com.sun.tools.javac.Main;
import org.junit.Test;
import static org.junit.Assert.*;

public class MainTest {

    @Test
    public void testAdd() {
        Main main = new Main();
        int result = main.add(2, 3);
        assertEquals(5, result);
    }
}
