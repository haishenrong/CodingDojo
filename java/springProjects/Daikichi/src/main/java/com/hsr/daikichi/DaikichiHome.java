package com.hsr.daikichi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

@RequestMapping("/daikichi")
public class DaikichiHome {
    @RequestMapping("")
    public String index(){
      return "Welcome!";
    }
    @RequestMapping("/today")
    public String hello(){
      return "Today you will find luck in all your endeavors!";
    }
    @RequestMapping("/tomorrow")
    public String world(){
      return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }
}
