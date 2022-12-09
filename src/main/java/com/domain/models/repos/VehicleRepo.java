package com.domain.models.repos;

// import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.domain.models.entities.Vehicle;


public interface VehicleRepo extends CrudRepository <Vehicle, Long>{

    // List <Vehicle> findByNo_RegisterContains(String no_register);
}