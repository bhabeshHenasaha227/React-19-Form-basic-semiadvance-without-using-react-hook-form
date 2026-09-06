import { useState, type FormEvent } from "react";

export default function SimpleForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleForm(eve: FormEvent<HTMLFormElement>) {
    eve.preventDefault();
    console.log("Name", name);
    console.log("Email", email);
  }

  return (
    <form onSubmit={handleForm}>
      <h2>React Form Example</h2>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
