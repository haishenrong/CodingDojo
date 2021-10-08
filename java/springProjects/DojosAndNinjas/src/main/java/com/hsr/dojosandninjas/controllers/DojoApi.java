package com.hsr.dojosandninjas.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hsr.dojosandninjas.models.Dojo;
import com.hsr.dojosandninjas.models.Ninja;
import com.hsr.dojosandninjas.services.DojoService;
import com.hsr.dojosandninjas.services.NinjaService;

@RestController
public class DojoApi {
    private final DojoService dojoService;
    private final NinjaService ninjaService;
    
    //@Autowired
    public DojoApi(DojoService dojoService, NinjaService ninjaService){
        this.dojoService = dojoService;
        this.ninjaService = ninjaService;
    }
    
    @RequestMapping("/api/dojos")
    @ResponseBody
    public List<Dojo> dojos() {
        return dojoService.allDojos();
    }
    
    @RequestMapping("/api/ninjas")
    @ResponseBody
    public List<Ninja> ninjas() {
        return ninjaService.allNinjas();
    }
    
    @RequestMapping("/api/dojos/{id}")
    public Dojo show(@PathVariable("id") Long id) {
        Dojo dojo = dojoService.findDojo(id);
        return dojo;
    }

    @RequestMapping(value="/api/dojos", method=RequestMethod.POST)
    public Dojo createDojo(@RequestParam(value="name") String name) {
        Dojo dojo = new Dojo(name);
        return dojoService.createDojo(dojo);
    }

    @RequestMapping(value="/api/dojos2", method=RequestMethod.POST)
    public Dojo createDojo2(@RequestBody Map<String, Object> body) {
        Dojo dojo = new Dojo((String)body.get("name"));
        return dojoService.createDojo(dojo);
    }
    
    @RequestMapping(value="/api/ninjas", method=RequestMethod.POST)
    public Ninja createNinja(@RequestParam(value="firstName") String firstName, 
        @RequestParam(value="lastName") String lastName, 
        @RequestParam(value="age") Integer age, 
        @RequestParam(value="dojoId") Long dojoId) {
    	Dojo dojo = dojoService.findDojo(dojoId);
        Ninja ninja = new Ninja(firstName, lastName, age, dojo);
        return ninjaService.createNinja(ninja);
    }

    @RequestMapping(value="/api/ninjas2", method=RequestMethod.POST)
    public Ninja createNinja2(@RequestBody Map<String, Object> body) {
    	Integer id = (Integer) body.get("dojoId");
    	Dojo dojo = dojoService.findDojo(Long.valueOf(id.longValue()));
        Ninja ninja = new Ninja((String)body.get("firstName"),(String)body.get("lastName"),(Integer)body.get("age"), dojo);
        return ninjaService.createNinja(ninja);
    }
}
