import "./App.css";
import EmailContextProvider from "./context/EmailContext";
import Render from "./components/Render";
import Thanks from './components/Thanks'
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <EmailContextProvider>
        <Routes>
          
          <Route path="/" element={<Render />}></Route>
          <Route path="/thanks" element={<Thanks/>}></Route>
        </Routes>
      </EmailContextProvider>
    </BrowserRouter>
  );
};

export default App;
