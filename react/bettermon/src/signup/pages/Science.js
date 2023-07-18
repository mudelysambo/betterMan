import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';



function Science(){
return(
<div>
   <header>
 
   </header>
   
   
   <h1>Science</h1>

    <Container>
    <Stack direction="horizontal"  gap={3} className='d-grid gap-2'>
    <Button href='/stem' variant='info' size='md' className='p-2' >
    STEM fields
    </Button>

    <Button href='' variant='info' size='md'  className='p-2' >
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
<footer>
 
</footer>
</div>
)

}

export default Science;