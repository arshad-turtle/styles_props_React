import React from 'react'

export default function Home() {


const handleClick = (e) => {
    console.log("Button is Click"+e);
}

  return (
    <div className='home' style={{textAlign:"center"}} >
        <h1>Hello</h1>
        <button onClick={handleClick("Arshad")}>Click Here</button>
        Home</div>
  )
}
