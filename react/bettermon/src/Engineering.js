import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import Container  from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card  from 'react-bootstrap/Card';

function Engineering(){
return(
  <div>

<main role="main" className="pt-5">
        
        <Container>
        <h1> Engineering</h1> 
        </Container>
      
</main>
  
  <Container fixed className='maincontain'>
  <Row>
    <Col>
<Card className='content'>

    
    <Card.Body>
    <Card.Title>Stem Fields</Card.Title>
    <Card.Text>
View Stem Fields
    </Card.Text>
    <Button href='/stem' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
   </Button>

    </Card.Body>
</Card>
    </Col>
    <Col>
<Card >

  
    <Card.Body>
    <Card.Title>Ap Highschool</Card.Title>
    <Card.Text>
View Math content
    </Card.Text>
    <Button href='/math' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>

    </Card.Body>
</Card>
</Col>

<Col>
<Card >
    <Card.Body>
    <Card.Title>University engineering</Card.Title>
    <Card.Text>
    View Engineering content
    </Card.Text>
    <Button href='/engineering' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>
    </Card.Body>
</Card>
</Col>

<Col>
<Card >
    <Card.Body>
    <Card.Title>AP University Level</Card.Title>
    <Card.Text>
    View Engineering content
    </Card.Text>
    <Button href='/engineering' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>
    </Card.Body>
</Card>
</Col>

</Row>
</Container>



</div>
);
}

export default Engineering;