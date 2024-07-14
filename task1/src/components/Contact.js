import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="contact-main">
        <form
          className="contact-form"
          method="post"
          encType="multipart/form-data"
          action="https://getform.io/f/pamqmnoa"
        >
          <h2>Contact Me</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
