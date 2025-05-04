import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'
import { Routes,Route,Navigate, useNavigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  const [userLoggedInData,setuserLoggedInData] = useState(null)
  const authData = useContext(AuthContext)
  const navigate = useNavigate()
  

  useEffect(() => {
    setLocalStorage()
    if(authData){

      const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));

      
      if (storedUser) {
        setUser(storedUser.role);
        setuserLoggedInData(storedUser.data)
      }
    }
    }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => email === e.email && password === e.password)
    ) {
      const admin =   authData.admin.find((e) => email === e.email && password === e.password)
      setUser('admin');
      setuserLoggedInData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin',data:admin}));
    } else if (authData) {
     const employee =  authData.employees.find((e) => email === e.email && password === e.password)
      if(employee){
      setUser('employees');
      setuserLoggedInData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employees',data:employee}));
      }
    } else {
      alert('Invalid Credentials');
    }
  };
  
    const handleLogout= () =>{
      localStorage.removeItem("loggedInUser");
      setUser(null)
       navigate("/")
    }
  

  return (

<Routes>
  <Route
    path="/"
    element={
      !user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <Navigate to="/admin" />
      ) : user === "employees" ? (
        <Navigate to="/employee" />
      ) : (
        <div>Unauthorized</div>
      )
    }
  />

  <Route
    path="/admin"
    element={
      user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} data={userLoggedInData} />
      ) : (
        <Navigate to="/" />
      )
    }
  />

  <Route
    path="/employee"
    element={
      user === "employees" ? (
        <EmployeeDashboard handleLogout={handleLogout} data={userLoggedInData} />
      ) : (
        <Navigate to="/" />
      )
    }
  />
</Routes>

  );
};

export default App;
