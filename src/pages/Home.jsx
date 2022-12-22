import * as React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import folder from "../pics/folder.png";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "react-query";
import { API } from '../config/API';
import ModalDelete from '../components/ModalDelete';


function Home() {
    let navigate = useNavigate();

    const [dataVehicles,setDataVehicles] = React.useState([])

    //GET DATA
    let getVehicles = async()=>{
        try{
            const response = await API.get("/vehicle");
            setDataVehicles(response.data)
        }catch(err){
            console.log(err);
        }
    }
    function handleDetail(id) {
        navigate("/detail-vehicle/" + id);
    };

    function handleUpdate(id) {
        navigate("/edite-vehicle/" + id);
    };

    //SEARCH
    const [form,setForm]= React.useState({
        searchByName : "",
        searchByNoRegistrasi : ""
    })
    const [data,setData] = React.useState()

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        setData(null);
      };

    const handleSearch = async (e) => {
        try {
          e.preventDefault();
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const response = await API.post("/vehicle/search", form, config);

          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
            console.log(error);
        }
      };

      React.useEffect(() => {
        setData();
      }, []);
    
      React.useEffect(() => {
        setData();
      }, [dataVehicles]);


    //DELETE
    const [confirmDelete, setConfirmDelete] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClose = () =>{
        setShow(false);
        setConfirmDelete(false)
    } 
        
    const handleShow = () => setShow(true);

    const deleteById = async (id) => {
        try {
            await API.delete(`/vehicle/${id}`);
            getVehicles()
        } catch (error) {
            console.log(error);
        }
    };

    const [deleteId,setDeleteId]=React.useState(null)
    const handleDelete = (id) => {
        handleShow();
        setDeleteId(id);
    };

    React.useEffect(()=>{
        getVehicles()
        if (confirmDelete) {
            handleClose()
            deleteById(deleteId)
            setConfirmDelete(false)
        }
    },[confirmDelete])
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
                <div className="bg-warning w-100 text-start d-flex justify-content-start ps-4">
                    <Form className='w-50 ms-5'
                        onSubmit={handleSearch}
                    >
                        <Form.Group className="mb-3" >
                            <Form.Label className='fw-bold'>No Registrasi</Form.Label>
                            <Form.Control 
                            onChange={handleChange}
                            name="searchByNoRegistrasi"
                            type="text" placeholder="No Registrasi" />
                        </Form.Group>
                        <Form.Group className="mb-3 fw-bold" >
                            <Form.Label>Nama Pemilik</Form.Label>
                            <Form.Control 
                            onChange={handleChange}
                            name="searchByName"
                            type="text" placeholder="Nama Pemilik" />
                        </Form.Group>
                        <Button
                            onClick={() => handleSearch}
                            className='fw-bold my-3 me-4' variant="primary" type="submit">
                            Search
                        </Button>
                        <Button className='fw-bold my-3 px-4' variant="primary"
                            onClick={() => navigate("/add-vehicle")}
                        >
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
                        {data == null || ""? (
                            dataVehicles?.map((item, index) => (
                                <tr key={index}>
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
                                            onClick={(e) => handleDelete(item.id)}
                                            className='text-danger border-0 fw-bold'>Delete</button>

                                    </td>
                                </tr>
                            ))
                        ):(
                                data?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1} </td>
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
                                            onClick={() => handleDelete(item.id)}
                                            className='text-danger border-0 fw-bold'>Delete</button>

                                    </td>
                                </tr>
                                   ))
                        )}
                            

                        </tbody>
                    </Table>
                </div>

            </div>
            <ModalDelete
            setConfirmDelete={setConfirmDelete}
            show={show}
            handleClose={handleClose}
            />
        </div>
    )
}

export default Home;