package br.com.zonesoftware.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author daniel
 */
@Controller
public class HomeController {
    
    @GetMapping("/")
    public String home(){
        return "index";
    }
    
}
