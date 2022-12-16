import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/API';
import folder from '../pics/folder.png'

function AddVehile() {
    const navigate = useNavigate()

    //ADD VEHICLE
    const [formData, setFormData]= React.useState({
        no_registrasi : "",
        nama_pemilik : "",
        merk_kendaraan : "",
        alamat : "",
        tahun_pembuatan : "",
        kapasitas_silinder : "",
        warna_kendaraan : "",
        bahan_bakar : "",
    });

    function handleOnchange(e){
        setFormData({
            ...formData,
            [e.target.id] :
            e.target.id === "tahun_pembuatan"? e.target.value.slice(0,4): e.target.value

        });
    };

    const handleOnsubmit = async(e)=>{
        try{
            e.preventDefault();
            const response = await API.post("/vehicle",formData);
            navigate("/")
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <nav className="navbar bg-warning px-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <div className="d-flex align-items-center">
                            <img
                                src={folder}
                                alt="Logo"
                                width="30"
                                height="24"
                                className="d-inline-block align-text-top me-3"
                            />
                            <h3>
                                Aplikasi Data Kendaraan
                            </h3>
                        </div>
                    </a>
                </div>
            </nav>
            <form className='mx-5 mt-3'
            onSubmit={handleOnsubmit}
            >
                <h2 className='text-start'>Tambah Data kendaraan</h2>
                <div className='d-flex gap-5'>
                    <div className='LEFT w-50 '>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="no_registrasi" className="form-label">No Registrasi</label>
                            <input type="text" className="form-control border-dark" id="no_registrasi" 
                            required
                            onChange={handleOnchange}
                            value={formData.no_registrasi}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="nama_pemilik" className="form-label">Nama Pemilik</label>
                            <input type="text" className="form-control border-dark" id="nama_pemilik"
                            required
                            onChange={handleOnchange}
                            value={formData.nama_pemilik}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="merk_kendaraan" className="form-label">Merk Kendaraan</label>
                            <input type="text" className="form-control border-dark" id="merk_kendaraan"
                            required
                            onChange={handleOnchange}
                            value={formData.merk_kendaraan}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="alamat" className="form-label">Alamat Pemilik Kendaraan</label>
                            <textarea maxLength={500} rows="4" type="text-area" className="form-control border-dark" id="alamat" 
                            required
                            onChange={handleOnchange}
                            value={formData.alamat}
                            />
                        </div>
                    </div>

                    <div className='RIGHT w-50'>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="tahun_pembuatn" className="form-label">Tahun Pembuatan</label>
                            <input type="number" maxLength="4" className="form-control border-dark" id="tahun_pembuatan"
                            required
                            onChange={handleOnchange}
                                value={formData.tahun_pembuatan}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="kapasitas_silinder" className="form-label">Kapasitas Silinder</label>
                            <input type="text" className="form-control border-dark" id="kapasitas_silinder" 
                            required
                            onChange={handleOnchange}
                            value={formData.kapasitas_silinder}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="nama_kendaraan" className="form-label">Warna Kendaraan</label>
                            <select className="form-select form-select-md mb-3 border-dark" aria-label=".form-select-lg example"
                            required
                            id="warna_kendaraan"
                            onChange={handleOnchange}
                            value={formData.warna_kendaraan}
                            >
                                <option selected hidden>Pilih Warna</option>
                                <option value="Merah">Merah</option>
                                <option value="Hitam">Hitam</option>
                                <option value="Biru">Biru</option>
                                <option value="Abu-Abu">Abu-Abu</option>
                            </select>
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="bahan_bakar" className="form-label">Bahan Bakar</label>
                            <input className="form-control border-dark" id="bahan_bakar" 
                            required
                            onChange={handleOnchange}
                            value={formData.bahan_bakar}
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-start gap-3 mb-3 '>
                    <button className='btn bg-primary fw-bold' type='submit'>Simpan</button>
                    <button className='btn bg-danger fw-bold'
                    onClick={()=>navigate("/")}
                    >Kembali</button>
                </div>


            </form>

        </div>
    )
}

export default AddVehile