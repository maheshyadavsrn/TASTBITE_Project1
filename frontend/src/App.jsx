import "./App.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Sucess from "./Pages/Sucess"
import NotFound from "./Pages/NotFound"

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sucess" element={<Sucess/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Router>
}

export default App