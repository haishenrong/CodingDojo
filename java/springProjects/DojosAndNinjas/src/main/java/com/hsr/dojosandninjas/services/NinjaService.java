package com.hsr.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hsr.dojosandninjas.models.Dojo;
import com.hsr.dojosandninjas.models.Ninja;
import com.hsr.dojosandninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepository;
    
    //@Autowired
    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }

    public List<Ninja> allNinjas() {
        return ninjaRepository.findAll();
    }

    public Ninja createNinja(Ninja ninja) {
        return ninjaRepository.save(ninja);
    }

    public Ninja findNinja(Long id) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
        if(optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else {
            return null;
        }
    }
    public Ninja updateNinja(Long id, String firstName, String lastName, Integer age, Dojo dojo) {
    	Ninja ninja = new Ninja(firstName, lastName, age, dojo);
    	ninja.setId(id);
    	return ninjaRepository.save(ninja);
    }

    public Ninja updateEntry(Ninja ninja) {
    	return ninjaRepository.save(ninja);
    }

    public void deleteNinja(Long id) {
    	ninjaRepository.deleteById(id);
    }
}
