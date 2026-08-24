import Home from "./pages/Home";
import ConfirmSignup from "./pages/ConfirmSignup";
import Future from "./pages/Future";
import DeleteAccount from "./pages/DeleteAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
                <Route path="/delete-account" element={<DeleteAccount />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
