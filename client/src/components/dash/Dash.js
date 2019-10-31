import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react'



const Dash = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  const isOpen = () => {
    if (doorOpen) {
      return <Button onClick={() => setDoorOpen(!doorOpen)}>
        <Button.Content>Close</Button.Content>
      </Button>
    } else {
      return <Button onClick={() => setDoorOpen(!doorOpen)}>
        <Button.Content>Open</Button.Content>
      </Button>
    }
  }

  return(
    <>
      <h1>Dashboard</h1>

      {isOpen()}
    </>

  )
}

export default Dash;