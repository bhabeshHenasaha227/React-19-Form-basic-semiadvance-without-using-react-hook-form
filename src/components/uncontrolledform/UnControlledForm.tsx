import { useRef, type FormEvent } from "react";

function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Name", nameRef.current?.value);
    console.log("Email", emailRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <input type="text" placeholder="Name" ref={nameRef} />
      <br />
      <input type="email" placeholder="Email" ref={emailRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;