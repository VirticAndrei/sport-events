package com.social.sport.events.controller;

import com.social.sport.events.entities.Event;
import com.social.sport.events.servicies.api.EventsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomePageController {

    private EventsService eventsService;

    public HomePageController(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    @GetMapping("/index")
    public String home(HttpServletRequest request) {

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
