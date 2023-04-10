import { BrowserRouter } from "react-router-dom"
import { About, Hero, Navbar, Contact, Experience, Footer, Feedbacks, Works } from "./components"

const App = () => {
  return (<>
<BrowserRouter>

<div className="relative z-0 bg-primary">
<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
</div>
  <About/>
  <Experience/>
  <div className="relative z-0">
    <Works/>
    <Feedbacks/>
    <Contact/>
  </div>
  <Footer/>
</div>
</BrowserRouter>
  </>
  )
}

export default App