import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function It(){
    return(
    <div>
<header>
  <NavBar />
</header>
<h1>Information Technology</h1>
 
<Stack>
    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Web Development
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}} >
    Business Intelligence
    </Button>

    <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Programming basics
    </Button>
</Stack>

<footer>
    <Footer />
</footer>

    </div>

    );
}
export default It;