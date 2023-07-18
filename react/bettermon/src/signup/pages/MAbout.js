import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container  from 'react-bootstrap/Container';


function About(){
return(
  <div>

   <header>

   </header>
<h1> Stem Fields </h1> 

<Container>
    <Stack>
    <Button href='' variant='info' size='md'  className='p-2' >
   HTML
    </Button>

    <Button href="" variant='info' size='md' className='p-2'  >
    CSS
    </Button>

    <Button href="" variant='info' size='md'  className='p-2' >
    Vanilla Javascript
    </Button>

    <Button href="" variant='info' size='md'  className='p-2' >
    Javascript Framework
    </Button>
    
    <Button href="" variant='info' size='md' className='p-2' >
    Node.js
    </Button>
    
    </Stack>
</Container>
   



<footer> 
 
</footer>

 </div>
);
}

export default About;