package com.domain.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.dto.searchData;
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

    @PatchMapping
    public Vehicle update(@RequestBody Vehicle vehicle){
        return vehicleService.save(vehicle);
    }


    @DeleteMapping("/{id}")
    public void removeOne(@PathVariable("id") Long id){
        vehicleService.removeOne(id);
    }

    @PostMapping("/search/namapemilik")
    public List<Vehicle> getVehicleByNamaPemilik(@RequestBody searchData searchData) {
        return vehicleService.findByNamaPemilik(searchData.getSearchByName());
    }

    @PostMapping("/search/nomorregkendaraan")
    public List<Vehicle> getByNomorRegistrasi(@RequestBody searchData searchData) {
        return vehicleService.findByNomorRegistrasi(searchData.getSearchByNoRegistrasi());
    }

    @PostMapping("/search/namapemiliklike")
    public List<Vehicle> getByNamaPemilikLike(@RequestBody searchData searchData) {
        return vehicleService.findByNamaPemilikLike(searchData.getSearchByName());
    }

    @PostMapping("/search")
    List<Vehicle> search(@RequestBody searchData searchData) {
        return vehicleService.searchVehicles(searchData.getSearchByName(),
                searchData.getSearchByNoRegistrasi());
    }
}
