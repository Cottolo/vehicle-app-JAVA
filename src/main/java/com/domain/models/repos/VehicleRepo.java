package com.domain.models.repos;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.domain.models.entities.Vehicle;


public interface VehicleRepo extends CrudRepository <Vehicle, Long>{

    // List <Vehicle> findByNo_RegisterContains(String no_register);

    // @Query("SELECT v FROM Vehicle v WHERE v.nama_pemilik = :nama_pemilik")
    // public List<Vehicle> findByNamaPemilik(@Param("nama_pemilik") String nama_pemilik);

    @Query("SELECT v FROM Vehicle v WHERE v.nama_pemilik LIKE :nama_pemilik%")
    public List<Vehicle> findByNamaPemilikLike(@Param("nama_pemilik") String nama_pemilik);

    // @Query("SELECT v FROM Vehicle v WHERE v.no_registrasi = :no_registrasi")
    // public List<Vehicle> findByNomorRegistrasi(@Param("no_registrasi") String no_registrasi);

    @Query("SELECT v FROM Vehicle v WHERE v.no_registrasi LIKE :no_registrasi%")
    public List<Vehicle> findByNomorRegistrasiLike(@Param("no_registrasi") String no_registrasi);

    @Query("SELECT v FROM Vehicle v WHERE v.nama_pemilik LIKE :nama_pemilik% AND v.no_registrasi LIKE :no_registrasi%")
    public List<Vehicle> searchByNamaPemilikAndNomorRegistrasi(@Param("nama_pemilik") String nama_pemilik,
    @Param("no_registrasi") String no_registrasi);

}