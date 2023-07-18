import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container  from 'react-bootstrap/Container';
import './stem.css';

function It(){
    return(
    <div>
<header>

</header>
<h1>Information Technology</h1>
 
<Container>
<Stack direction="horizontal"  gap={3} className='d-grid gap-2'>
<Button  href='web' variant='info' size='md'  className='p-2'>
       Web Development
      </Button>

      <Button href='businessintelli' size='md' variant='info'    className='p-2'>
        Business Intelligence
      </Button>
      
      <Button href='' size='md'  variant='info'   className='p-2'>
        Programming Basics
    </Button>
</Stack>
</Container> 

<footer>
  
</footer>

    </div>

    );
}
export default It;