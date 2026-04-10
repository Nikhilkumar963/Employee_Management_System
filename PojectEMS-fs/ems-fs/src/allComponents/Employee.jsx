import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmp, getEmployee, updateEmployee } from '../Service/ems_service'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify";

const Employee = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const {id} = useParams();
  const [errors, setErrors] = useState({
    firstName : '',
    lastName : '',
    email : ''
  })

  const navi = useNavigate();

  useEffect(()=> {

    if(id){
      getEmployee(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(errors =>{
        console.error(errors);
      })
    }

  },[id])


  function addEmploye(e) {
    e.preventDefault();
  
    if(valadationForm() ){
      const emp = { firstName, lastName, email }
        console.log(emp);

      if(id){
          updateEmployee(id,emp).then((response) =>{
            console.log(response.data)
            toast.info("✏️ Employee updated successfully!");
            
            setTimeout(() => {
            navi('/employees');
          }, 1500);
            
          }).catch(errors => {
            console.error(errors)
          })
      } else {
            createEmp(emp).then((response) => {
            console.log(response.data);
            toast.success("✅ Employee added successfully!");

            setTimeout(() => {
            navi('/employees');
          }, 1500);


          }).catch((error) => {
            console.error("Error creating employee:", error);

            toast.error("❌ Failed to add employee!");
          });
      }
 
    }
  }

  function valadationForm(){
    let valid = true;
    let errrorsCopy = {... errors}

    if(firstName.trim()){
      errrorsCopy.firstName = ''
    } else{
      errrorsCopy.firstName = 'pls enter first name '
      valid =false;
    }

    if(lastName.trim()){
      errrorsCopy.lastName = ''
    } else{
      errrorsCopy.lastName = 'pls enter last name '
      valid =false;
    }

    if(email.trim()){
      errrorsCopy.email = ''
    } else{
      errrorsCopy.email = ' pls enter email '
      valid = false
    }

    setErrors(errrorsCopy);
    return valid;

  }

  function pageChange(){
      if(id){
        return <h3 className="text-center mt-3">Edit Employee</h3>
      } else{
        return <h3 className="text-center mt-3">Add Employee</h3>
      }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card shadow">
            {
              pageChange()
            }

            <div className="card-body">
              <h5 className="card-title">Add Employee Details</h5>

              <p className="card-text">
                Please add verified employee details!! 🤞
              </p>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'> First Name: </label>
                  <input
                    type='text'
                    placeholder='Enter Employee First Name'
                    name='firstName'
                    value={firstName}
                    className = {`form-control ${errors.firstName ? 'is-invalid':''}`}
                    onChange={(e) => setFirstName(e.target.value)}
                  >
                  </input>
                  {
                    errors.firstName && <div  className='invalid-feedback'>{errors.firstName}</div>
                  }

                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'> Last Name: </label>
                  <input
                    type='text'
                    placeholder='Enter Employee Last Name'
                    name='lastName'
                    value={lastName}
                    className = {`form-control ${errors.lastName ? 'is-invalid':''}`}
                    onChange={(e) => setLastName(e.target.value)}
                  >
                  </input>
                  {
                    errors.lastName && <div  className='invalid-feedback'>{errors.lastName}</div>
                  }

                </div>


                <div className='form-group mb-2'>
                  <label className='form-label'> E-Mail: </label>
                  <input
                    type='text'
                    placeholder='Enter Employee E-Mail '
                    name='email'
                    value={email}
                    className = {`form-control ${errors.email ? 'is-invalid':''}`}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                  </input>
                  {
                    errors.email && <div  className='invalid-feedback'>{errors.email}</div>
                  }

                </div>


              </form>
              <button className='btn btn-primary w-100' onClick={addEmploye}>
                Submit
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Employee