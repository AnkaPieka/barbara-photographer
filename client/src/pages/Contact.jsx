import React, { PureComponent } from "react";

import "../styles/global.css";
import "../styles/contact.css";

export class Contact extends PureComponent {
  render() {
    return (
      <div>
        <section className="body-page">
          <div className="grid-container-contact">
            <div className="text">
              <div className="title padding-contact">
                <h3>Need to contact me ?</h3>
              </div>
              <div className="body padding-contact">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eleifend rutrum nunc, quis elementum nulla consectetur vel.
                  Morbi dignissim tincidunt vehicula. Quisque porta nisl vel
                  eros feugiat, eu rutrum justo faucibus. In dictum pharetra
                  ipsum, nec rutrum nisi ullamcorper in. Etiam at tortor
                  porttitor, dignissim ipsum vel, dictum augue. Morbi lorem
                  sapien, sodales quis lacinia vel, pulvinar et odio. Maecenas
                  dolor felis, vestibulum non luctus ac, pellentesque ac turpis.
                  In fringilla ligula eu odio pharetra sollicitudin. Duis
                  hendrerit mi commodo, congue nisl nec, congue nisi.
                </p>
              </div>
            </div>
            <div className="info">
              <div className="mail-tel padding-contact center-info">
                <p>barbara@mail.com</p>
                <p>01 23 45 67 89</p>
              </div>
              <div className="social-net padding-contact center-info">
                <div className="social-icons">
                  <i class="fab fa-instagram"></i>
                  <img
                    className="social-imgs"
                    src="https://i.pinimg.com/originals/d7/aa/38/d7aa387ceb1577d59a8d7dc6d64a0c82.png"
                    alt="insta"
                  />
                  <img
                    className="social-imgs"
                    src="https://findicons.com/files/icons/2779/simple_icons/2048/facebook_2048_black.png"
                    alt="insta"
                  />
                  <img
                    className="social-imgs"
                    src="https://image.flaticon.com/icons/png/512/60/60580.png"
                    alt="insta"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
