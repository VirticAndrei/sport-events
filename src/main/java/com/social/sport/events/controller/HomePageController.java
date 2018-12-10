package com.social.sport.events.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomePageController {

    @GetMapping("/index")
    public String home(HttpServletRequest request) {

        return "index";

    }
}
