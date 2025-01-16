import Home from "./pages/Home";
import ConfirmSignup from "./pages/ConfirmSignup";
import Future from "./pages/Future";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>  
       <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/confirm-signup" element={<ConfirmSignup />} />
                <Route path="/future" element={<Future />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
