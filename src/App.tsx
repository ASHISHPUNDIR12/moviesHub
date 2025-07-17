import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Layout2 from "./pages/Layout2"

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/search" element={<Layout2/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
