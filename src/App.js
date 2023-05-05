import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import HomePage from "./pages/HomePage";
import SignIn from "./components/Account/SignIn";
import SignUp from "./components/Account/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />
        <div className="mx-auto max-w-screen-full bg-cover bg-[url('https://odtech.club/wp-content/uploads/2022/02/59f1f5fe33a97.jpeg')]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
