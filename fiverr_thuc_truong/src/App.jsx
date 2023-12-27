import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./Routes/path";
import ClientLayout from "./Layouts/ClientLayout";
import Home from "./Modules/Home";
import { UserProvider } from "./Contexts/useContext/useContext";
import SignUp from "./Modules/Auth/SignUp/SignUp";
import SignIn from "./Modules/Auth/SignIn/SignIn";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path={PATH.SIGNUP} element={<SignUp />} />
            <Route path={PATH.SIGNIN} element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
