import React from 'react';
import Sidebar from './sidebar/sidebar';
import Jobpost from './Jobpost/Jobpost';
import './student.css'



function Student() {
  return (
    <div classname='student'>
        <h1 className='head1'>HELLO, STUDENT</h1>
        <Sidebar/>
        <Jobpost />
    </div>
  )
}
export default Student;