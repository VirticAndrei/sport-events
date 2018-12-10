package com.social.sport.events.configuration;

import com.social.sport.events.servicies.api.EventsService;
import com.social.sport.events.servicies.impl.EventsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Aida on 12/9/2018.
 */
@Configuration
public class SpringConfiguration {
    @Bean
    public EventsService eventsService(){
        return new EventsServiceImpl();
    }
}
