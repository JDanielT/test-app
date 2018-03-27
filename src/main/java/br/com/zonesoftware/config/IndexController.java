package br.com.zonesoftware.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author daniel
 */
@Controller
public class IndexController {

    @RequestMapping(value = "{path:.*}")
    public String handleError404() {
        return "index.html";
    }
}
