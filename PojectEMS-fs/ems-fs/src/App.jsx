import './App.css'
import Footer from './allComponents/footer'
import Header from './allComponents/header'
import EmsListComponents from './allComponents/emsListComponents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employee from './allComponents/Employee'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>

    <div className="app-container">
          <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            {/* https://localhost:3000 */}
            <Route path='/' element={<EmsListComponents />} />

            {/* https://localhost:3000/employees */}
            <Route path='/employees' element={<EmsListComponents />} />

            {/* https://localhost:3000/add-new-employee */}
            <Route path='/add-new-employee' element={<Employee />} />

            {/* https://localhost:3000/edit-employee/:id */}
            <Route path='/edit-employee/:id' element={<Employee />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
      
    </>
  )
}

export default App