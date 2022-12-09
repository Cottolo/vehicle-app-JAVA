package com.domain.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.models.entities.Vehicle;
import com.domain.services.VehicleService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public Vehicle create(@RequestBody Vehicle vehicle){
        return vehicleService.save(vehicle);
    }

    @GetMapping
    public Iterable <Vehicle> findAll(){
        return vehicleService.findAll();
    }

    @GetMapping("/{id}")
    public Vehicle findOne(@PathVariable("id") Long id){
        return vehicleService.findOne(id);
    }

    @PutMapping
    public Vehicle update(@RequestBody Vehicle vehicle){
        return vehicleService.save(vehicle);
    }


    @DeleteMapping("/{id}")
    public void removeOne(@PathVariable("id") Long id){
        vehicleService.removeOne(id);
    }
}
