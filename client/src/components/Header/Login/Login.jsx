import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/api/auth/local/register",{
        "email": username + "@holl.com",
        "username" : username,
        "password": password,
      }, {
        headers: {
            'content-type': 'application/json'
        }
      });
      console.log(response);
      // redirect to another page
      window.location.href="/"
    } catch (error) {
      console.error(error);
      alert('Error! Invalid Input')
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
