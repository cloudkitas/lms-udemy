import { useState } from "react";

const register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="ontainer col-md-4 offset-md-4 pb-5">
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
