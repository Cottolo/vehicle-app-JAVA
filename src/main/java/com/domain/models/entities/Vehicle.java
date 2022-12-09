package com.domain.models.entities;


import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_vehicle")
public class Vehicle implements Serializable{

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String no_registrasi;

    private String nama_pemilik;

    @Column(length = 500)
    private String alamat;

    private String merk_kendaraan;

    @Column(length = 4)
    private int tahun_pembuatan;

    private int kapasitas_silinder;

    private String warna_kendaraan;

    private String bahan_bakar;

    public Vehicle() {
    }

    public Vehicle(Long id, String no_registrasi, String nama_pemilik, String alamat, String merk_kendaraan,
            int tahun_pembuatan, int kapasitas_silinder, String warna_kendaraan, String bahan_bakar) {
        this.id = id;
        this.no_registrasi = no_registrasi;
        this.nama_pemilik = nama_pemilik;
        this.alamat = alamat;
        this.merk_kendaraan = merk_kendaraan;
        this.tahun_pembuatan = tahun_pembuatan;
        this.kapasitas_silinder = kapasitas_silinder;
        this.warna_kendaraan = warna_kendaraan;
        this.bahan_bakar = bahan_bakar;
    }

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNo_registrasi() {
        return no_registrasi;
    }

    public void setNo_registrasi(String no_registrasi) {
        this.no_registrasi = no_registrasi;
    }

    public String getNama_pemilik() {
        return nama_pemilik;
    }

    public void setNama_pemilik(String nama_pemilik) {
        this.nama_pemilik = nama_pemilik;
    }

    public String getAlamat() {
        return alamat;
    }

    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    public String getMerk_kendaraan() {
        return merk_kendaraan;
    }

    public void setMerk_kendaraan(String merk_kendaraan) {
        this.merk_kendaraan = merk_kendaraan;
    }

    public int getTahun_pembuatan() {
        return tahun_pembuatan;
    }

    public void setTahun_pembuatan(int tahun_pembuatan) {
        this.tahun_pembuatan = tahun_pembuatan;
    }

    public int getKapasitas_silinder() {
        return kapasitas_silinder;
    }

    public void setKapasitas_silinder(int kapasitas_silinder) {
        this.kapasitas_silinder = kapasitas_silinder;
    }

    public String getWarna_kendaraan() {
        return warna_kendaraan;
    }

    public void setWarna_kendaraan(String warna_kendaraan) {
        this.warna_kendaraan = warna_kendaraan;
    }

    public String getBahan_bakar() {
        return bahan_bakar;
    }

    public void setBahan_bakar(String bahan_bakar) {
        this.bahan_bakar = bahan_bakar;
    }

    
    
}