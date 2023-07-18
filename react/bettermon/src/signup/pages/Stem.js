import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Container from 'react-bootstrap/Container';


function Stem(){
return(
  <div>

<header>
 <NavBar />
</header>


<h1> Stem Fields </h1> 

<Container>
   <Stack  direction="horizontal"  gap={3} className='d-grid gap-2'>
      <Button  href='science' variant='info' size='sm' className='p-2'>
        Science
      </Button>

      <Button href='engineering' size='sm' variant='info'   className='p-2'>
        Engineering
      </Button>
      
      <Button href='math' size='sm'  variant='info'  className='p-2'>
        Math
      </Button>
   </Stack>
</Container>

<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F5260349-illustration-vector-graphic-cartoon-character-of-business-education&psig=AOvVaw3wamPTgbG2MFhVchiwXaQR&ust=1689772619258000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCNDOufyvmIADFQAAAAAdAAAAABAO'></img>
<footer> 
   <Footer />
</footer>

</div>
)
}

export default Stem;