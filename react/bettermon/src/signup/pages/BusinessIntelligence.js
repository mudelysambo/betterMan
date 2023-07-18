import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container  from 'react-bootstrap/Container';
import './stem.css';

function BusinessIntelli(){
    return(
    <div>


    <header>
      
    </header>


    <h1> Stem Fields </h1>
    <h3>Business Intelligence</h3> 
  
    <Container>
    <Stack direction="horizontal"  gap={3} className='d-grid gap-2'>
    <Button href="" variant='info' size='md'  className='p-2'>
    Stem Fields
    </Button>

    <Button href="" variant='info' size='md'  className='p-2'>
    AP Highschool
    </Button>

    <Button href="" variant='info' size='md'  className='p-2' >
    University Engineering 101
    </Button>

    <Button href="" variant='info' size='md' style={{backgroundColor:'71AEAE'}} className='p-2' >
    AP University Level
    </Button>

    </Stack>
</Container> 


<footer> 
   
</footer>

</div>
);
}

export default BusinessIntelli;