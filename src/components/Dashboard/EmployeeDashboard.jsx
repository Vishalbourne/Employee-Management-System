import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../others/TaskList'

const EmployeeDashboard = ({data,handleLogout}) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header handleLogout={handleLogout} data={data}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard