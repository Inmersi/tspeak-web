import Home from "./pages/Home";
import ConfirmSignup from "./pages/ConfirmSignup";
import Future from "./pages/Future";
import DeleteAccount from "./pages/DeleteAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToHash from "./components/ScrollToHash";
import { BASE } from "./lib/base";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>  
       {/* basename: en GitHub Pages el sitio cuelga de /tspeak-web y el
           router tiene que ignorar ese prefijo. En tspeak.app vale ""
           y no cambia nada. Ver src/lib/base.ts. */}
       <Router basename={BASE}>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/confirm-signup" element={<ConfirmSignup />} />
                <Route path="/future" element={<Future />} />
                <Route path="/delete-account" element={<DeleteAccount />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                {/* Cualquier otra ruta va a la portada en vez de dejar
                    la pagina en blanco. */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
