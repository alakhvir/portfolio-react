import React from "react";
import classes from "./Contact.module.css";
import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";

const Contact = () => {
  return (
    <Wrapper>
      <Card>
        <div className={classes.wrapper}>
          <div className={classes.heading}>Holla at me...</div>
          <form className={classes.form}>
            <div className={classes.background}>
              <label>Your Name</label>
              <input type="text" name="name" required />
              <label>Your Email</label>
              <input type="email" name="name" required />
              <label>Your Message</label>
              <textarea rows="10" cols="50" required></textarea>
            </div>
            <div className={classes.button}>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </Card>
    </Wrapper>
  );
};

export default Contact;
