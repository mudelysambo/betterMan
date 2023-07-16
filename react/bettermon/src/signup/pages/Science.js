import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function Science(){
return(
<div>
   <header>
   <NavBar />
   </header>
   
   
   <h1>Science</h1>

    <Stack>
    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Stem Fields
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    AP Highschool
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    University Engineering 101
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    AP University Level
    </Button>

    </Stack>

<footer>
   <Footer />
</footer>
</div>
)

}

export default Science;