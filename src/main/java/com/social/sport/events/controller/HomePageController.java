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

        return "index";

    }

    @GetMapping("/home")
    public String home(HttpServletRequest request) {

        return "home";

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
