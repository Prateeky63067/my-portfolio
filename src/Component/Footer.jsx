import React from 'react';
import Button from '@mui/material/Button';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <footer className='d-flex flex-column mt-auto'>
    <MDBFooter className=' text-center text-white  ' style={{ backgroundColor: '#1b242f' }}>
      <MDBContainer className='p-4 pb-0 '>
        <section className='mb-4 mt-4'>
          <a href="https://github.com/Prateeky63067" target="_blank">
        <Button className='m-2 p-3 bckcolor' variant="contained">
        <FaGithubAlt />
        </Button>
        </a>
        <a href="https://www.linkedin.com/in/prateek-yadav-5a4195211/" target="_blank">
        <Button className='m-2 p-3 bckcolor' variant="contained" >
        <FaLinkedinIn />
        </Button>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100024897900259" target="_blank">
        <Button className='m-2 p-3 bckcolor' variant="contained" >
        <FaFacebookF />
        </Button>
        </a>
        <a href="https://instagram.com/prateekyadav0212?igshid=YmMyMTA2M2Y=" target="_blank">
        <Button className='m-2 p-3 bckcolor' variant="contained">
        <FaInstagram />
        </Button>
        </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         2022 © 
        <a className='text-white' href='#'>
          shubhamy9451@gmail.com
        </a>
      </div>
    </MDBFooter>
    </footer>
  );
}
