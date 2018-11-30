package com.social.sport.events.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomePageController {

    @GetMapping("/")
    public String home(HttpServletRequest request){

        return "index";

    }
}
