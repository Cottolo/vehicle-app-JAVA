import * as React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import folder from "../pics/folder.png";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "react-query";
import { API } from '../config/API';


function Home() {
    let navigate = useNavigate();

    let { data: dataVehicles, refetch } = useQuery("vehicleChache", async () => {
        const response = await API.get("/vehicle");
        return response.data;
    });
    console.log(dataVehicles);

    const [filter, setFilter] = React.useState("");
    let searchData = (e) => {
        setFilter(e.target.value);
    };

    let dataFilter = dataVehicles?.filter((item) => {
        if (filter === "") {
            return item;
        } else if (
            item.no_registrasi.toLowerCase().includes(filter.toLowerCase())
        ) {
            return item;
        } else if (item.nama_pemilik.toLowerCase().includes(filter.toLowerCase())) {
            return item
        }

    })

    function handleDetail(id) {
        navigate("/detail-vehicle/" + id);
    };

    function handleUpdate(id) {
        navigate("/edit-vehicle/" + id);
    };


  


    return (
        <div>
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
                <div className="bg-warning w-100 mx-auto">
                    <Form className='w-50 mx-auto'

                    >
                        <Form.Group className="mb-3" >
                            <Form.Label className='fw-bold'>No Registrasi</Form.Label>
                            <Form.Control type="text" placeholder="No Registrasi" />
                        </Form.Group>
                        <Form.Group className="mb-3 fw-bold" >
                            <Form.Label>Nama Pemilik</Form.Label>
                            <Form.Control type="text" placeholder="Nama Pemilik" />
                        </Form.Group>
                        <Button
                            onClick={() => handle}
                            className=' my-3 me-4' variant="primary" type="submit">
                            Search
                        </Button>
                        <Button className=' my-3 px-4' variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </div>
                <div className='w90 mx-auto'>
                    <Table striped bordered hover
                        className='mt-5 mx-auto border-dark'
                    >
                        <thead className='bg-primary'>
                            <tr>
                                <th>No</th>
                                <th>No registrasi</th>
                                <th>Nama Pemilik</th>
                                <th>Merk Kendaraan</th>
                                <th>Tahun Pembuatan</th>
                                <th>Kapasitas Silinder</th>
                                <th>Warna Kendaraan</th>
                                <th>Bahan Bakar</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataFilter?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.no_registrasi}</td>
                                    <td>{item.nama_pemilik}</td>
                                    <td>{item.merk_kendaraan}</td>
                                    <td>{item.tahun_pembuatan}</td>
                                    <td>{item.kapasitas_silinder} cc</td>
                                    <td>{item.warna_kendaraan}</td>
                                    <td>{item.bahan_bakar}</td>
                                    <td>
                                        <button 
                                        onClick={() => handleDetail(item.id)}
                                        className='text-warning border-0 fw-bold'>Detail</button>
                                        <button 
                                        onClick={() => handleUpdate(item.id)}
                                        className='text-primary border-0 fw-bold'>Edite</button>
                                        <button 
                                        
                                        className='text-danger border-0 fw-bold'>Delete</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default Home;