import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function WebD(){
return(
  <div>
   <header>
    <NavBar />
   </header>

<h1> Stem Fields </h1> 
<h3>Math Component</h3>
  
    <Stack>
    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    HTML
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    CSS
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Vanilla Javascript
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Javascript Framework
    </Button>
    
    <Button href="" variant="primary" size="lg">
    Node.js
    </Button>
    
    </Stack>


<footer> 
  <Footer />
</footer>

</div>
)
}

export default WebD;