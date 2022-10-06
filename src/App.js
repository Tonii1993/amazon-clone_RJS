import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from './components/Firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operation go in here
      unsubscribe();
    };
  }, []);

  //console.log("useeer", user);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
