import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function BusinessIntelli(){
    return(
    <div>


    <header>
      <NavBar />
    </header>


    <h1> Stem Fields </h1>
    <h3>Business Intelligence</h3> 
  

    <Stack>
    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Stem Fields
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    AP Highschool
    </Button>

    <Button href="" variant="primary" size="md" style={{color: 'teal'}}>
    University Engineering 101
    </Button>

    <Button href="" variant="primary" size="md"  style={{color: 'teal'}}>
    AP University Level
    </Button>

    </Stack>


<footer> 
    <Footer />
</footer>

</div>
);
}

export default BusinessIntelli;