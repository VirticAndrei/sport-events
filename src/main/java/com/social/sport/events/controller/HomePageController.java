package com.social.sport.events.controller;

import com.social.sport.events.servicies.api.EventsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomePageController {

    private EventsService eventsService;

    public HomePageController(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    @GetMapping("/index")
    public String index(HttpServletRequest request) {

        return "index";

    }

    @PostMapping("/login")
    public String login(HttpServletRequest request) {
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        if(email.equals("user@yahoo.com") && password.equals("parola")){
            return "home";
        } else {
            return "index";
        }


    }

    @GetMapping("/home")
    public String home(HttpServletRequest request) {

        return "home";

    }

    @GetMapping("/account")
    public String account(HttpServletRequest request) {

        return "account";

    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {

        return "index";

    }

  /*  @PostMapping("/organizeEvent")
    @ModelAttribute("organizedEvent")
    public Event organizeEvent(@ModelAttribute Event event, final BindingResult bindingResult, final ModelMap model) {
        if (bindingResult.hasErrors()) {
            return null;
        }
        Event returnedEvent = eventsService.organizeEvent(event);
        return returnedEvent;
    }*/

}
