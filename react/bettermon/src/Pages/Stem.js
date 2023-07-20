import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card  from 'react-bootstrap/Card';


function Stem(){

return(
  <div>

       <main role="main" className="pt-5">
        
          <Container>
          <h1> Stem Fields </h1> 
          </Container>
        
      </main>

<Container fixed className='maincontain'>
  <Row>
    <Col>
<Card className='card'>

    <Card.Img src='https://img.freepik.com/free-vector/science-isometric-concept_1284-16822.jpg?w=740&t=st=1689851387~exp=1689851987~hmac=5501b11d550cbecaf27f58307680a86b6b4d6cdcd98ca4c559b91c78bea12fda' />
    <Card.Body>
    <Card.Title>Science</Card.Title>
    <Card.Text>
View Science content
    </Card.Text>
    <Button href='/science' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
   </Button>

    </Card.Body>
</Card>
    </Col>
    <Col>
<Card className='card'>

    <Card.Img variant='top' src='https://www.shutterstock.com/image-vector/learning-mathematics-education-knowledge-poster-600w-2109627368.jpg' />
    <Card.Body>
    <Card.Title>Math</Card.Title>
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
<Card className='card'>

    <Card.Img variant='top' src='https://img.freepik.com/free-vector/flat-engineering-construction-illustration_23-2148892787.jpg?w=740&t=st=1689873362~exp=1689873962~hmac=a00f8c4c24364947ccd653dbff10ae0063a8cbaf2ad702b37e94f59e5f34341d' />
    <Card.Body>
    <Card.Title>Engineering</Card.Title>
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
)
}

export default Stem;