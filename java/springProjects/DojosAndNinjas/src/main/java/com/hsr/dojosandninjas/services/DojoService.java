package com.hsr.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hsr.dojosandninjas.models.Dojo;
import com.hsr.dojosandninjas.repositories.DojoRepository;
import com.hsr.dojosandninjas.repositories.NinjaRepository;

@Service
public class DojoService {
    private final DojoRepository dojoRepository;
    private final NinjaRepository ninjaRepository;
    //@Autowired
    public DojoService(DojoRepository dojoRepository, NinjaRepository ninjaRepository) {
        this.dojoRepository = dojoRepository;
        this.ninjaRepository = ninjaRepository;
    }

    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }

    public Dojo createDojo(Dojo dojo) {
        return dojoRepository.save(dojo);
    }

    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(id);
        if(optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }
    public Dojo updateDojo(Long id, String name) {
    	Dojo dojo = new Dojo(name);
    	dojo.setId(id);
    	return dojoRepository.save(dojo);
    }

    public Dojo updateEntry(Dojo dojo) {
    	return dojoRepository.save(dojo);
    }

    public void deleteDojo(Long id) {
    	dojoRepository.deleteById(id);
    }
}
