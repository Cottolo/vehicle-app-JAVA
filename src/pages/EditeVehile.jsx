import * as React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../config/API';
import folder from '../pics/folder.png'

function EditeVehicle() {
    const navigate = useNavigate()
    const {id} = useParams()

    //GET DATA
    const [formData, setFormData]= React.useState({});
    let getVehicle = async ()=>{
        try{
            const response = await API.get("/vehicle/"+id)
            setFormData(response.data)
        }catch(err){
            console.log(err);
        }
    }

    //EDITE VEHICLE

    function handleOnchange(e){
        setFormData({
            ...formData,
            // [e.target.id] : e.target.value,
            [e.target.id] :
            e.target.id === "tahun_pembuatan"? e.target.value.slice(0,4): e.target.value

        });
    };

    const handleOnedite = async(e)=>{
        e.preventDefault();
        try{
            e.preventDefault();
            const response = await API.patch("/vehicle",formData);
            navigate("/")

        }
        catch(error){
            console.log(error);

        }
    }

    React.useEffect(()=>{
        getVehicle()
    },[])

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
            onSubmit={handleOnedite}
            >
                <h2 className='text-start'>Tambah Data kendaraan</h2>
                <div className='d-flex gap-5'>
                    <div className='LEFT w-50 '>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="no_registrasi" className="form-label">No Registrasi</label>
                            <input type="text" className="form-control border-dark" id="no_registrasi" 
                            onChange={handleOnchange}
                            defaultValue={formData.no_registrasi}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="nama_pemilik" className="form-label">Nama Pemilik</label>
                            <input type="text" className="form-control border-dark" id="nama_pemilik"
                            onChange={handleOnchange}
                            defaultValue={formData.nama_pemilik}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="merk_kendaraan" className="form-label">Merk Kendaraan</label>
                            <input type="text" className="form-control border-dark" id="merk_kendaraan"
                            onChange={handleOnchange}
                            defaultValue={formData.merk_kendaraan}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="alamat" className="form-label">Alamat Pemilik Kendaraan</label>
                            <textarea maxLength={500} rows="4" type="text-area" className="form-control border-dark" id="alamat" 
                            onChange={handleOnchange}
                            defaultValue={formData.alamat}
                            />
                        </div>
                    </div>

                    <div className='RIGHT w-50'>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="tahun_pembuatn" className="form-label">Tahun Pembuatan</label>
                            <input type="number" maxLength={4} className="form-control border-dark" id="tahun_pembuatan"
                                onChange={handleOnchange}
                                defaultValue={formData.tahun_pembuatan}
                                value={formData.tahun_pembuatan}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="kapasitas_silinder" className="form-label">Kapasitas Silinder</label>
                            <input type="text" className="form-control border-dark" id="kapasitas_silinder" 
                            onChange={handleOnchange}
                            defaultValue={formData.kapasitas_silinder}
                            />
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="nama_kendaraan" className="form-label">Warna Kendaraan</label>
                            <select className="form-select form-select-md mb-3 border-dark" aria-label=".form-select-lg example"
                            id="warna_kendaraan"
                            onChange={handleOnchange}
                            value={formData.warna_kendaraan}
                            >
                                <option value="Merah">Merah</option>
                                <option value="Hitam">Hitam</option>
                                <option value="Biru">Biru</option>
                                <option value="Abu-Abu">Abu-Abu</option>
                            </select>
                        </div>
                        <div className="mb-3 text-start mt-1">
                            <label htmlFor="bahan_bakar" className="form-label">Bahan Bakar</label>
                            <input className="form-control border-dark" id="bahan_bakar" 
                            onChange={handleOnchange}
                            defaultValue={formData.bahan_bakar}
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

export default EditeVehicle