import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Nav() {
  const [bg, setbg] = useState('bg-info')
  
    
  return (

    <div style={{ height: "100vh" }} className={bg }>

      <div  className='d-flex  justify-content-center  align-content-center  justify-content-evenly  container  '>
       
      <row>

   
        <Button  onClick={()=>setbg('bg-primary')} className=' btn-primary  border-white border-3 col-6  mt-5  ' >primary</Button>
        <Button  onClick={()=>setbg('bg-secondary')} className='btn-secondary border-white border-3 col-6   mt-5  ' >secondary</Button>
        <Button  onClick={()=>setbg('bg-success')} className='btn-success border-white border-3 col-6 mt-sm-1 mt-5   '  >success</Button>
        <Button  onClick={()=>setbg('bg-warning')} className='btn-warning border-white border-3 col-6 mt-sm-1 mt-5   ' >warning</Button>
        <Button  onClick={()=>setbg('bg-danger')} className='btn-danger border-white border-3 col-6 mt-sm-1  mt-5  ' >danger</Button>
        <Button  onClick={()=>setbg('bg-info')} className='btn-info border-white border-3  col-6 mt-sm-1 mt-sm-1  mt-5  ' >info</Button>
        <Button  onClick={()=>setbg('bg-light')} className='btn-light border-white border-3  col-6 mt-sm-1 mt-sm-1 mt-5   ' >light</Button>
        <Button  onClick={()=>setbg('bg-dark')} className='btn-dark border-white border-3 col-6 mt-sm-1  mt-5  ' >dark</Button>
       
        </row>
      </div>

    </div>

  );
}


export default Nav;
