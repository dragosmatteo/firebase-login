import { signup, useAuth, logout, login } from "./firebase";
import "./App.css";
import { useRef, useState } from "react";

function App() {
   const [loading, setLoading] = useState(false);
   const email = useRef();
   const password = useRef();
   const currentUser = useAuth();

   async function handleSignup() {
      setLoading(true);
      try {
         await signup(email.current.value, password.current.value);
      } catch {
         alert("Error");
      }
      setLoading(false);
   }

   async function handleLogin() {
      setLoading(true);
      try {
         await login(email.current.value, password.current.value);
      } catch {
         alert("Error");
      }
      setLoading(false);
   }
   async function handleLogout() {
      setLoading(true);
      try {
         await logout();
      } catch {
         alert("Error");
      }
      setLoading(false);
   }

   return (
      <form className="main">
         <h3>Current user is : {currentUser?.email}</h3>

         <div className="field">
            <input placeholder="Your email" ref={email} />
            <input
               type="password"
               autoComplete="on"
               placeholder="Your password"
               ref={password}
            />
         </div>

         <button
            disabled={loading || currentUser != null}
            onClick={handleSignup}
         >
            Sign In
         </button>
         <button
            disabled={loading || currentUser != null}
            onClick={handleLogin}
         >
            Log In
         </button>
         <button disabled={loading} onClick={handleLogout}>
            Log Out
         </button>
      </form>
   );
}

export default App;
