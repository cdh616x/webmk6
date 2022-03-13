//jshint esversion:6

import React, { useState } from "react";

export default function ContactForm() {
  const [title, setTitle] = useState("Send me an email!")
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    // console.log(details);

    let response = await fetch("https://kzxrv9xi9f.execute-api.us-east-1.amazonaws.com/default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details)
    });
    setStatus("Submit");
    setTitle("Thank you for your email!");
    let result = await response.json();
    // console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
    <h1 className="emailform">{title}</h1>
      <div>
        <input type="text" id="name" placeholder="Name" required />
      </div>
      <div>
        <input type="email" id="email" placeholder="polyethelene_pam@abbeyroadstudios.com" required />
      </div>
      <div>
        <textarea id="message" placeholder="Please construct your message here!" required />
      </div>
      <button class="submit" type="submit">{status}</button>
    </form>
  );
};
