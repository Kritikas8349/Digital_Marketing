import React from "react";
import "./Contact.css";
import contact_wave from "../assets/about-bottom-wave.png";
import contact from "../assets/contact_image.png";

const Contact = () => {
    return (
        <>
            <section className="contact">

                {/* TEXT CONTENT */}
                <div className="contact__content">
                    <h1>Contact <span>Us</span></h1>

                    <p className="subtitle">
                        Let’s start a conversation that leads to something meaningful. <br />
                        Whether you have a project in mind, need expert guidance, or just want
                        to explore ideas we’re here to help.
                    </p>

                    <button className="contact__btn">Let's Connect</button>
                </div>

                {/* MAIN PNG IMAGE (FULL ILLUSTRATION) */}
                <div className="contact__image">
                    <img src={contact} alt="contact" />
                </div>

                {/* WAVE IMAGE */}
                <div className="contact__wave">
                    <img src={contact_wave} alt="wave" />
                </div>

            </section>

            <section className="why">

                <h2 className="why__heading">Why Reach Out to Us</h2>

                <div className="why__container">
                    <div className="why__card">
                        Quick and transparent communication
                    </div>

                    <div className="why__card">
                        Personalized solutions (not templates)
                    </div>

                    <div className="why__card">
                        Creative + strategic approach
                    </div>

                    <div className="why__card">
                        We actually listen before we suggest
                    </div>
                </div>

            </section>


        </>
    );
};

export default Contact;