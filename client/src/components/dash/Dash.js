import React, { useState } from 'react';


const Dash = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  return(
    <>
      <h1>Dashboard</h1>

      <button>Open</button>
    </>

  )
}

export default Dash;