import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react'

const Dash = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  const isOpen = () => {
    if (doorOpen) {
      return <Button onClick={() => setDoorOpen(!doorOpen)} className="btn btn-default">
        <Button.Content>Close</Button.Content>
      </Button>
    } else {
      return <Button onClick={() => setDoorOpen(!doorOpen)} className="btn btn-default">
        <Button.Content>Open</Button.Content>
      </Button>
    }
  }

  return(
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>Dashboard</h1>
        {isOpen()}
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>

  )
}

export default Dash;