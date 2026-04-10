import React,{use, useEffect, useState} from 'react'
import { deletEmp, listEmp } from '../Service/ems_service'
import { useNavigate } from 'react-router-dom'
 
const EmsListComponents = () => {

    const[emp, setemp ] = useState([])

    const navigate = useNavigate();
    useEffect(()=>{
       getAllEmp()
    },[] )

    function getAllEmp(){
             listEmp().then((response)=> {
            setemp(response.data);
        }).catch(e =>{
            console.error(e);
        })
    }
    
    function newEmployee(){
           navigate('/add-new-employee')
    }
    
    function updateEmp(id){
        navigate(`/edit-employee/${id}`)

    }

    function removeEmp(id){
        console.log(id);
        deletEmp(id).then((response) =>{
            
            getAllEmp();    
        }).catch(error =>{
            console.error(error)
        })
    }
    
  return (
    <div className='container'>
        <h2 className='text-center'>Employee data</h2>

            <button className='btn btn-info  mb-3' onClick={newEmployee}> Add Employee </button>
        <table className='table table-striped table-bordered  table-hover'>
            <thead className='table-dark'>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>Changes</th>
                </tr>
            </thead>

            <tbody>
                {
                    emp.map(ems =>
                        <tr key={ems.id}>
                            <td>{ems.id}</td>
                            <td>{ems.firstName}</td>
                            <td>{ems.lastName}</td>
                            <td>{ems.email}</td>
                            <td>
                                <button className='btn btn-link' onClick={() => updateEmp(ems.id)}>Update</button>

                                <button className='btn btn-danger' onClick={() => removeEmp(ems.id)} style={{marginLeft: '10px'}}> Delete</button>
                            </td>
                        </tr>
                        
                    )
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default EmsListComponents