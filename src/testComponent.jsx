import React, {useEffect} from 'react'

const TestComponent = () => {

  useEffect(() => {
    console.log("useEffect hook ran")
  })
  return <div>
    <h1>TestComponent</h1>
  </div>
}

export default TestComponent
