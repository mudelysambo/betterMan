import React from 'react';
import './stem.css';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function WebD(){
return(
  <div>
  
  <main role="main" className="pt-5">
        
        <Container>
        <h1> Web Development </h1> 
        </Container>
      
</main>
   
<Container fixed className='maincontain'>
<Row>
    <Col>
<Card className='card'>
    <Card.Body>
    <Card.Title>HTML</Card.Title>
    <Card.Text>
View HTML content
    </Card.Text>
    <Button href='/science' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
   </Button>

    </Card.Body>
</Card>
    </Col>
    <Col>
<Card className='card'>
    <Card.Body>
    <Card.Title>CSS</Card.Title>
    <Card.Text>
View HTML content
    </Card.Text>
    <Button href='/math' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>

    </Card.Body>
</Card>
</Col>

<Col>
<Card className='card'>
    <Card.Body>
    <Card.Title>Vanilla Javascript</Card.Title>
    <Card.Text>
    View Vanilla Javascript content
    </Card.Text>
    <Button href='/engineering' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>
    </Card.Body>
</Card>
</Col>


<Col>
<Card className='card'>
    <Card.Body>
    <Card.Title>Javascript Framework</Card.Title>
    <Card.Text>
    View Javascript Framework  content
    </Card.Text>
    <Button href='/engineering' variant="primary" role="button" className='p-2'>
                Enroll&raquo;
              </Button>
    </Card.Body>
</Card>
</Col>
<Col>
<Card className='card'>
    <Card.Body>
    <Card.Title>Node.js</Card.Title>
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

export default WebD;