// import "./app.scss";
import Home from "./Pages/home/Home";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/watch/Watch";
import Login from "./Pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    // <Router>
    //   <Switch> 
    //      <Route exact path="/">
    //       {user ? <Home /> : <Redirect to="/register" />}
    //     </Route>
    //     <Route path="/register">
    //       {!user ? <Register /> : <Redirect to="/" />}
    //     </Route>
    //     <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
    //     {user && (
    //       <>
    //         <Route path="/movies">
    //           <Home type="movie" />
    //         </Route>
    //         <Route path="/series">
    //           <Home type="series" />
    //         </Route>
    //         <Route path="/watch">
    //           <Watch />
    //         </Route>
    //       </>
    //     )}
    //   </Switch>
    // </Router>
    <div>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="register" element={ <Register/> } />
    <Route path="watch" element={ <Watch /> } />
    <Route path="login" element={ <Login  /> } />

  </Routes>
  </div>
  );
};

export default App;