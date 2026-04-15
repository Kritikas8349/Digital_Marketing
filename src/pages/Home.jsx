
import React, { useState,useEffect } from "react";
import "./Home.css";

import BgShape from "../assets/home-bg.png";     // background shape image
import HeroRight from "../assets/hero-right.png"; // full right side single image

// import AboutBg from "../assets/about-bg.png";     // background image
import about1 from "../assets/about1.png";   // left top icon
import about2 from "../assets/about2.png";    // right center icon
import about3 from "../assets/about3.png";   // left bottom icon\

import CenterGirl from "../assets/service-center.png";
import LeftGirl from "../assets/service-left.png";
import RightGirl from "../assets/service-right.png";

import BulbImg from "../assets/bulb.png";

import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";



const faqData = [
    {
        question: "What services does The Soul Solution offer?",
        answer:
            "We offer end-to-end digital marketing services including social media management, branding, content creation, performance marketing, and website design — everything your brand needs to grow online."
    },
    {
        question: "How is The Soul Solution different from other agencies?",
        answer:
            "We focus on creative strategy, real results, and personalized growth plans instead of one-size-fits-all marketing."
    },
    {
        question: "How long does it take to see results?",
        answer:
            "It depends on your goals, but most clients begin noticing momentum within the first few weeks."
    },
    {
        question: "Do you provide customized strategies?",
        answer:
            "Yes, every business is unique, so we create custom strategies based on your niche and audience."
    },
    {
        question: "Do you work with small businesses or startups?",
        answer:
            "Absolutely. We love helping startups and small businesses grow from the ground up."
    }
];

const Home = () => {

    /*-------------------bulb animation------------------------ */

    useEffect(() => {
        const bulb = document.querySelector(".w-bulb");
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    bulb.classList.add("show");
                }
            },
            { threshold: 0.3 }
        );
    
        if (bulb) observer.observe(bulb);
    
        return () => {
            if (bulb) observer.unobserve(bulb);
        };
    }, []);

    /*----------------------------slider---------------------------------*/ 

    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    };



    /*-------------------------------faqs-------------------------------*/

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* ---------------------------------Top------------------------------------- */}

            <section className="home-section">
                <img src={BgShape} alt="" className="bg-shape" />

                <div className="home-container">
                    {/* Left Side */}
                    <div className="home-left">
                        <h1>
                            Empowering Your <br />
                            <span>Digital Growth</span>
                        </h1>

                        <button className="home-btn">Get in touch</button>
                    </div>

                    {/* Right Side Full Single Image */}
                    <div className="home-right">
                        <img src={HeroRight} alt="Hero" className="hero-right-img" />
                    </div>
                </div>
            </section>

            {/* ---------------------------------About------------------------------------ */}

            <section className="about">

                <h2 className="about-title">ABOUT THE SOUL SOLUTION</h2>

                {/* Row 1 */}
                <div className="about-row">
                    <div className="card">
                        <img src={about1} alt="about1" />
                    </div>
                    <div className="text right">
                        <h3>Creators of Digital Excellence</h3>
                        <p>At SoulsSolution, we blend creativity with strategy to craft impactful digital experiences.</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="about-row reverse">
                    <div className="text left">
                        <h3>Innovating the Digital Space</h3>
                        <p>
                            We push boundaries with innovation to keep your brand ahead in the digital world
                        </p>
                    </div>

                    <div className="card">
                        <img src={about2} alt="about2" />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="about-row">
                    <div className="card">
                        <img src={about3} alt="about3" />
                    </div>
                    <div className="text right">
                        <h3>Your Growth, Our Mission</h3>
                        <p>Your growth defines our success. We deliver results driven digital solutions that create real impact.</p>
                    </div>
                </div>
            </section>

            {/* ---------------------------------Service---------------------------------- */}

            <section className="services-section">
            <div className="services-container">

                <h1 className="services-heading">OUR SERVICES</h1>

                <div className="services-grid">

                    {/* Left Button */}
                    <button className="nav-btn left" onClick={prevSlide}>‹</button>

                    {/* Card 1 */}
                    <div className={`service-card small-card ${current === 0 ? "active" : "side"}`}>
                        <h2>SEO</h2>
                        <p>
                            Our strategies and tailored strategies, we drive
                            meaningful results and long-term success.
                        </p>

                        <div className="service-img-box left-img">
                            <img src={LeftGirl} alt="SEO Girl" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={`service-card center-card ${current === 1 ? "active" : "side"}`}>
                        <h2>Social Media Management</h2>
                        <p>
                            Our goal is simple to help your brand grow.
                            Through strong partnerships and tailored strategies,
                            we drive meaningful results and long-term success
                        </p>

                        <div className="service-img-box center-img">
                            <img src={CenterGirl} alt="Social Media Girl" />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className={`service-card small-card ${current === 2 ? "active" : "side"}`}>
                        <h2>Web Development</h2>
                        <p>
                            Our goal is simple to help your brand grow.
                            Through strong partnerships and strategies.
                        </p>

                        <div className="service-img-box right-img">
                            <img src={RightGirl} alt="Web Girl" />
                        </div>
                    </div>

                    {/* Right Button */}
                    <button className="nav-btn right" onClick={nextSlide}>›</button>

                </div>
            </div>
        </section>

            {/*------------------------------ why choose us ---------------------------------*/}

            <section className="w-section">
                <div className="w-container">

                    <div className="w-bulb">
                        <img src={BulbImg} alt="Bulb" />
                    </div>

                    <h1 className="w-heading">Why Choose Us</h1>

                    <p className="w-subtitle">
                        At The Soul Solution, we believe every brand has a story.
                        We turn that story into powerful digital experiences that
                        people actually connect with.
                    </p>

                    <div className="w-grid">

                        <div className="w-card">
                            <h2>Strategy First, Always</h2>
                            <p>
                                We don’t believe in random posting or guesswork.
                                Every move is backed by research, data, and a clear growth plan.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>Creative That Actually Connects</h2>
                            <p>
                                Designs that don’t just look good —
                                they feel right and drive action.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>Results You Can Measure</h2>
                            <p>
                                From engagement to conversions,
                                everything we do is focused on real, trackable results.
                            </p>
                        </div>

                        <div className="w-card">
                            <h2>We Work Like Your Team</h2>
                            <p>
                                Not an agency, an extension of your brand.
                                We grow with you, not just for you.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/*--------------------------------------- FAQ---------------------------- */}

            <section className="faq-section">
                <div className="faq-container">

                    <h1 className="faq-heading">FAQ</h1>

                    <div className="faq-list">
                        {faqData.map((item, index) => (
                            <div
                                className={`faq-item ${openIndex === index ? "active" : ""}`}
                                key={index}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`faq-answer ${openIndex === index ? "show" : ""
                                        }`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/*------------------------------------ Testimonial-------------------------- */}

            <section className="t-section">
                <div className="t-container">

                    <h1 className="t-heading">Testimonials</h1>

                    <div className="t-list">

                        {/* Card 1 */}
                        <div className="t-card left-t">
                            <div className="t-profile">
                                <img src={testimonial1} alt="Priya Mehta" />
                            </div>

                            <div className="t-content">
                                <h2>Priya Mehta, Business Owner</h2>
                                <p>
                                    “They understood what your brand needs.”
                                    <br />
                                    No copy-paste strategies — everything felt
                                    tailored and intentional.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="t-card right-t">
                            <div className="t-content">
                                <h2>Rohit Singh, Startup Founder</h2>
                                <p>
                                    “We saw actual growth, not just promises.”
                                    <br />
                                    Within weeks, our reach and conversions improved
                                    significantly. Highly recommend their approach.
                                </p>
                            </div>

                            <div className="t-profile">
                                <img src={testimonial2} alt="Rohit Singh" />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="t-card left-t">
                            <div className="t-profile">
                                <img src={testimonial3} alt="Neha Deol" />
                            </div>

                            <div className="t-content">
                                <h2>Neha Deol, Brand Owner</h2>
                                <p>
                                    “Real growth. Real strategy. Real results.”
                                    <br />
                                    Loved working with The Soul Solution —
                                    highly professional and creative.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;