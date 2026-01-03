import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { useEffect, useRef, useState } from "react"


import "swiper/css"
import "swiper/css/effect-fade"
import carousel1 from "../../assets/carousel-1.jpg"
import carousel2 from "../../assets/carousel-2.jpg"
import carousel3 from "../../assets/carousel-3.jpg"
import about1 from "../../assets/about11.jpg"
import service01 from "../../assets/car-wash.png"
import service02 from "../../assets/car-wash2.png"
import service03 from "../../assets/car-wash3.png"
import service04 from "../../assets/car-wash4.png"
import service05 from "../../assets/car-wash5.png"
import service06 from "../../assets/car-wash6.png"
import service07 from "../../assets/car-wash7.png"
import service08 from "../../assets/car-wash8.png"
import "./Home.css"
import { Col, Row } from 'react-bootstrap'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Contact from '../contactpg/Contact'
import whatsapp from "../../assets/whatsapp.png"
import phone from "../../assets/phone.png"

const slides = [
    {
        img: carousel1,
        tag: "WASHING & DETAILING",
        title: "Keep Your Car Newer",
        desc: "Professional car wash and detailing services."
    },
    {
        img: carousel2,
        tag: "PREMIUM SERVICE",
        title: "Quality Service For You",
        desc: "We provide high-quality interior and exterior care."
    },
    {
        img: carousel3,
        tag: "EXPERT CARE",
        title: "Exterior & Interior Washing",
        desc: "Advanced tools with expert professionals."
    }
]

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true

                    let start = 0
                    const increment = Math.ceil(end / (duration / 16)) // smooth 60fps

                    const counter = setInterval(() => {
                        start += increment
                        if (start >= end) {
                            setCount(end)
                            clearInterval(counter)
                        } else {
                            setCount(start)
                        }
                    }, 16)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return <h1 ref={ref}>{count}+</h1>
}








const Home = () => {



    return (
        <>
            <section id="home">
                <div className="hero-carousel">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        speed={1600}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="hero-slide">
                                    <img src={slide.img} alt={slide.title} />

                                    <div className="hero-overlay">
                                        <h3 className="slide-tag">{slide.tag}</h3>
                                        <h1 className="slide-title">{slide.title}</h1>
                                        <p className="slide-desc">{slide.desc}</p>
                                        <a href="#"> <input type="button" value="Explore me" className='btn btn-custom' /></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section id="about">
                <div className="hero-about">
                    <Row className="align-items-center about-section">

                        <Col xs={12} md={6} className="mb-4 mb-md-0">
                            <img
                                src={about1}
                                alt="Car washing"
                                className="img-fluid rounded about-img"
                            />
                        </Col>

                        <Col xs={12} md={6}>
                            <span className="about-tag">ABOUT US</span>
                            <h2 className="about-title">Car Washing And Detailing</h2>

                            <p className="about-desc">
                                At EliteShine, we are committed to keeping your vehicle looking as good as new. With a strong focus on quality, care, and customer satisfaction, we provide professional car washing and detailing services designed to protect your vehicle and enhance its appearance. <br />

                                Our experienced team uses advanced equipment, eco-friendly products, and proven techniques to deliver exceptional results for both interior and exterior cleaning. Whether it’s a quick wash or a complete detailing service, we ensure every corner of your car receives the attention it deserves.
                            </p>

                            <ul className="about-list">
                                <li><CheckCircleOutlineIcon style={{ color: '#e81c2e', fontSize: '18px' }} /> Seats washing</li>
                                <li><CheckCircleOutlineIcon style={{ color: '#e81c2e', fontSize: '18px' }} /> Vacuum cleaning</li>
                                <li><CheckCircleOutlineIcon style={{ color: '#e81c2e', fontSize: '18px' }} /> Interior wet cleaning</li>
                                <li><CheckCircleOutlineIcon style={{ color: '#e81c2e', fontSize: '18px' }} /> Window wiping</li>
                            </ul>

                            <button className="btn btn-custom">Learn More</button>
                        </Col>

                    </Row>
                </div>

                <section className="stats">


                    <div className="box">
                        <Counter end={350} />
                        <p>Engineers & Workers</p>
                    </div>

                    <div className="box">
                        <Counter end={1500} />
                        <p>Happy Clients</p>
                    </div>
                </section>

            </section>

            <section id="services">
                <div className="services-section">
                    <div className="text-center mb-5">
                        <span className="section-tag">WHAT WE DO?</span>
                        <h2 className="section-title">Premium Washing Services</h2>
                    </div>

                    <Row className='row-content'>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service01} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Exterior Washing</h3>
                                <p>Our exterior washing service removes dirt, dust, and road grime to give your vehicle a fresh, spotless look while protecting the paint and finish.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service02} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Interior Washing</h3>
                                <p>Our interior washing service cleans and refreshes your car’s cabin, removing dust, stains, and odors for a comfortable drive.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service03} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Vacuum Cleaning</h3>
                                <p>Our vacuum cleaning service removes dust, crumbs, and debris from carpets and seats to keep your car interior neat and fresh.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service04} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Seats Washing</h3>
                                <p>Our seats washing service removes stains, dust, and odors to restore freshness and comfort to your car seats.</p>
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service05} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Window Wiping</h3>
                                <p>Our window wiping service removes dust, smudges, and streaks to ensure clear visibility and a crystal-clean finish.</p>
                            </div>
                        </Col>

                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service06} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Wet Cleaning</h3>
                                <p>Our wet cleaning service removes tough stains and deep dirt from your car’s interior surfaces, leaving them fresh and hygienic.</p>
                            </div>
                        </Col>

                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service07} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Oil Changing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="text-center mb-4">
                            <div className="">
                                <img src={service08} alt="" />
                            </div>
                            <div className="service-con">
                                <h3>Reparing</h3>
                                <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                            </div>
                        </Col>



                    </Row>
                </div>
            </section>



            <section id='price' className="pricing">
                <span className="about-tag">Washing Plan</span>
                <h2 className="pricing-title">Choose Your Plan</h2>

                <div className="pricing-grid">

                    {/* WASH */}
                    <div className="price-card">
                        <h4>WASH</h4>
                        <h1>₹499</h1>
                        <span>HB & Sedan</span>
                        <span className="sub">SUV – ₹599</span>

                        <ul>
                            <li><CheckCircleIcon /> Interior vacuum & cleaning</li>
                            <li><CheckCircleIcon /> Dashboard clean & shine</li>
                            <li><CheckCircleIcon /> Exterior power wash</li>
                            <li><CheckCircleIcon /> Tyres & alloys clean & shine</li>
                            <li><CheckCircleIcon /> Seats clean & shine</li>
                            <li><CheckCircleIcon /> Exterior plastics shine</li>
                        </ul>

                        <button className='btn btn-custom'>Call Now</button>
                    </div>

                    {/* ULTIMATE */}
                    <div className="price-card">
                        <h4>ULTIMATE</h4>
                        <h1>₹1599</h1>
                        <span>HB & Sedan</span>
                        <span className="sub">SUV – ₹1799</span>

                        <ul>
                            <li><CheckCircleIcon /> Interior vacuum</li>
                            <li><CheckCircleIcon /> Dashboard clean & shine</li>
                            <li><CheckCircleIcon /> Exterior wash</li>
                            <li><CheckCircleIcon /> Tyres & alloys clean & shine</li>
                            <li><CheckCircleIcon /> Seat clean & shine</li>
                            <li><CheckCircleIcon /> Exterior plastics shine</li>
                            <li><CheckCircleIcon /> Clay bar treatment</li>
                            <li><CheckCircleIcon /> Tar & bug removal</li>
                            <li><CheckCircleIcon /> Scratch & swirl mark removal</li>
                            <li><CheckCircleIcon /> 3M rubbing compound & wax polishing</li>
                        </ul>

                        <button className='btn btn-custom'>Call Now</button>
                    </div>


                    {/* SUPER */}
                    <div className="price-card ">
                        <h4>SUPER</h4>
                        <h1>₹799</h1>
                        <span>HB & Sedan</span>
                        <span className="sub">SUV – ₹849</span>

                        <ul>
                            <li><CheckCircleIcon /> Interior vacuum</li>
                            <li><CheckCircleIcon /> Dashboard clean & shine</li>
                            <li><CheckCircleIcon /> Exterior wash</li>
                            <li><CheckCircleIcon /> Tyres & alloys clean & shine</li>
                            <li><CheckCircleIcon /> Seats clean & shine</li>
                            <li><CheckCircleIcon /> Exterior plastics shine</li>
                            <li><CheckCircleIcon /> 3M wax polishing (machine buffing)</li>
                        </ul>

                        <button className='btn btn-custom'>Call Now</button>
                    </div>


                </div>
            </section>

            <div className="whatsapp-section">
                <div className="contact-float">

                    <a
                        href="tel:+917010181206"
                        className="phone-float"
                        aria-label="Call Us"
                    >
                        <img src={phone} alt="Call Us" />
                    </a>

                    <a
                        href="https://wa.me/917010181206?text=Hello%20I%20want%20to%20book%20a%20car%20wash"
                        className="whatsapp-float"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                    >
                        <img src={whatsapp} alt="WhatsApp Chat" />
                    </a>

                </div>
            </div>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default Home
