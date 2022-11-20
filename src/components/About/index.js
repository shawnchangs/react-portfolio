import React from 'react';
import profileImage from '../../assets/images/';

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Shawn and I am an aspiring developer. I originally joined 
            the coding bootcamp to learn back-end development, but I have really enjoyed
            the front-end web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;