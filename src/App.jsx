import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <Login />
      
      <div>
        <h2>{localStorage.getItem("name")}</h2>
        <h2>{localStorage.getItem("email")}</h2>
        <img src={localStorage.getItem("photo")} />
      </div>
    </>
  );
}

export default App;
