package com.hsr.fl.controllers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hsr.fl.models.Item;

@Controller
public class ItemController {
 
 @RequestMapping("/")
 public String index(Model model) {
     
     ArrayList<Item> fruits = new ArrayList<Item>();
     fruits.add(new Item("Kiwi", 1.5));
     fruits.add(new Item("Mango", 2.0));
     fruits.add(new Item("Goji Berries", 4.0));
     fruits.add(new Item("Guava", .75));
     
     HashMap<String, ArrayList<Item>> map = new HashMap<>();
     map.put("fruits", fruits);
     // Add fruits your view model here
     model.addAllAttributes(map);
     
     return "index.jsp";
 }
}

