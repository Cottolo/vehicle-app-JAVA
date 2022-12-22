package com.domain.services;

import java.util.List;
import java.util.Optional;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

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
    //  public List<Vehicle> findByNamaPemilik(String string) {
    //     return vehicleRepo.findByNamaPemilik(string);
    // }

    public List<Vehicle> findByNamaPemilikLike(String string) {
        return vehicleRepo.findByNamaPemilikLike( string );
    }

    // public List<Vehicle> findByNomorRegistrasi(String no_registrasi) {
    //     return vehicleRepo.findByNomorRegistrasi(no_registrasi);
    // }

    public List<Vehicle> findByNomorRegistrasiLike(String nama_pemilik) {
        return vehicleRepo.findByNomorRegistrasiLike(nama_pemilik );
    }

    public List<Vehicle> searchVehicles(String nama_pemilik, String no_registrasi) {
        List<Vehicle> vehiclesList = null;

        if (no_registrasi.equals("") && StringUtils.hasText(nama_pemilik)) {
            vehiclesList = vehicleRepo.findByNamaPemilikLike(nama_pemilik);
        } else if (StringUtils.hasText(no_registrasi) && nama_pemilik.equals("")) {
            vehiclesList = vehicleRepo.findByNomorRegistrasiLike(no_registrasi);
        } else {
            vehiclesList = vehicleRepo.searchByNamaPemilikAndNomorRegistrasi(nama_pemilik,
                    no_registrasi);
        }

        return vehiclesList;
    }
}
