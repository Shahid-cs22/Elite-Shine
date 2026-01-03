import React, { useState } from "react";
import * as yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await contactSchema.validate(formData, { abortEarly: false });
      setErrors({});
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <Container>
        <div className="text-center mb-5">
          <span className="contact-tag">GET IN TOUCH</span>
          <h2 className="contact-title">Contact For Any Query</h2>
        </div>

        <Row>
          {/* LEFT INFO */}
          <Col md={4} className="mb-4">
            <div className="contact-info">
              <h4>Quick Contact Info</h4>

              <div className="info-box">
                <span>🕒</span>
                <div>
                  <h6>Opening Hour</h6>
                  <p>Mon – Sat, 8:00 – 9:00</p>
                </div>
              </div>

              <div className="info-box">
                <span>📞</span>
                <div>
                  <h6>Call Us</h6>
                  <p>+91 70101 81206</p>
                </div>
              </div>

              <div className="info-box">
                <span>✉️</span>
                <div>
                  <h6>Email Us</h6>
                  <p>seyadabu887@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* FORM */}
          <Col md={8}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}

              <button type="submit" className="btn btn-custom">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
