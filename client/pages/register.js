import { useState } from "react";
import axios from "axios";

const register = () => {
  const [name, setName] = useState("Bk");
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("hello");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });

    const { data } = await axios.post(`http://localhost:8000/api/register`, {
      name,
      email,
      password,
    });
    console.log("Axios POST => ", data);
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter Name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            required
          />

          <button type="submit" className="btn btn-primary pt-1 mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default register;
