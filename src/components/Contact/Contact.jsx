import React from "react";
import "./Contact.css";
import Animation from "./Animation - 1699633307129.json";
import Lottie from "lottie-react";
const Contact = () => {
  return (
    <div>
      <section className="contact container section" id="contact">
        <h2 className="section__title">Get in Touch ❤️</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about 0s and 1s✨</h3>
            <p className="contact__details">
              Don't like forms? Send us an email.👋
            </p>
            <p id="animation">
              <Lottie animationData={Animation} />
            </p>
          </div>

          <form action="" className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  required
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                  required
                />
              </div>

              <div className="contact__form-div ">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your subject"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button className="btn">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
