package com.domain.services;

import java.util.Optional;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.domain.models.entities.Vehicle;
import com.domain.models.repos.VehicleRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class VehicleService {
    
    @Autowired
    private VehicleRepo vehicleRepo;

    public Vehicle save(Vehicle vehicle){
        return vehicleRepo.save(vehicle);
    }

    public Vehicle findOne (Long id){
        Optional<Vehicle>vehicle = vehicleRepo.findById(id);
        if(!vehicle.isPresent()){
            return null;
        } else {
            return vehicle.get();
        }
    }

    public Iterable <Vehicle> findAll(){
        return vehicleRepo.findAll();
    }

    public void removeOne (Long id){
        vehicleRepo.deleteById(id);
    }

    // public List<Vehicle> findByName(String no_register){
    //     return vehicleRepo.findByNo_RegisterContains(no_register);
    // }
}
