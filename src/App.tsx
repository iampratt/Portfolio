import { useState } from "react"
import Intro from "./screens/Intro"
import Layout from "./Layout"

function App() {
  


  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? <Intro setIsLoading={setIsLoading} /> : 
        <Layout/>}
    </>
  )
}

export default App