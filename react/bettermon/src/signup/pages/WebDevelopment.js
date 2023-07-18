import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './stem.css';
import Container from 'react-bootstrap/Container';

function WebD(){
return(
  <div>
   <header>
   
   </header>

<h1> Stem Fields </h1> 
<h3>Math Component</h3>
  
<Container>
    <Stack direction="horizontal"  gap={3} className='d-grid gap-2'>
    <Button href='' variant='info' size='md'  className='p-2' >
   HTML
    </Button>

    <Button href="" variant='info' size='md'  className='p-2'  >
    CSS
    </Button>

    <Button href="" variant='info' size='md'  className='p-2' >
    Vanilla Javascript
    </Button>

    <Button href="" variant='info' size='md' className='p-2' >
    Javascript Framework
    </Button>
    
    <Button href="" variant='info' size='md'  className='p-2' >
    Node.js
    </Button>
    
    </Stack>
</Container>


<footer> 
 
</footer>

</div>
)
}

export default WebD;