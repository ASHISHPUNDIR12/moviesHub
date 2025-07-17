import MainSection from "../components/MainSection"
import Navbar from "../components/Navbar"


const Layout2 = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-r from-indigo-900 to-indigo-600">
        <Navbar />
        <MainSection/>
       
       </div>
    </>
  )
}

export default Layout2