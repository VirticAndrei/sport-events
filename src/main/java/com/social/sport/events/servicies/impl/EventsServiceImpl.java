package com.social.sport.events.servicies.impl;


import com.social.sport.events.entities.Event;
import com.social.sport.events.servicies.api.EventsService;

public class EventsServiceImpl implements EventsService{
    @Override
    public Event organizeEvent(Event event) {
        return new Event();
    }
}
