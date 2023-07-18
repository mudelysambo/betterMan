import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import './stem.css';
import Container  from 'react-bootstrap/Container';

function Math(){
return(
<div>
   <header>
   <NavBar />
   </header>
 
   <h1>Math</h1>
  
  <Container>
   <Stack direction="horizontal"  gap={4} className='d-grid gap-2'>
   <Button href='stem' variant='info' size='md'  className='p-2' >
    STEM fields
    </Button>

    <Button href='' variant='info' size='md' className='p-2' >
    AP Highschool
    </Button>

    <Button href=''variant='info' size='md'  className='p-2'>
    University Engineering 101
    </Button>

    <Button href=''  variant='info' size='md'  className='p-2'>
    AP University Level
    </Button>
    
    </Stack>
</Container>

<img src='mathstwo.jpg' />

<footer>
  <Footer />
</footer>
</div>
);

}

export default Math;