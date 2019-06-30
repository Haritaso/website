import React from 'react';
import Footer from './footer';

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="box">
          <h2 className="title">Email</h2>
          <p className="text">
            <a href="mailto:me@haritaso.me">me@haritaso.me</a>
          </p>
        </div>
        <div className="box">
          <h2 className="title">Twitter</h2>
          <p className="text">
            <a href="https://twitter.com/haritaso">@haritaso</a>
          </p>
        </div>
        <div className="box">
          <h2 className="title">Github</h2>
          <p className="text">
            <a href="https://github.com/Haritaso">Haritaso</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
