// import Login from "./pages/Login";

// function App() {

//   return <Login />;

// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import Sessions from "./pages/Sessions";
import About from "./pages/About";


function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/sessions"
          element={
            <MainLayout>
              <Sessions />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

      </Routes>

    </>
  );

}

export default App;