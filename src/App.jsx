import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import { connect } from "react-redux";
import { ifAuthStateChangd } from "./redux/actions";
import RequireAuth from "./components/ReqAuth";
import Loader from "./components/Preloader";
function App(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    props.authCanged();
  }, []);
  return (
    <div className="app" id="App">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authCanged: () => dispatch(ifAuthStateChangd()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
