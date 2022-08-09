import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <div className="container">
      <div className=" text-center mt-5 ">
        <h1>Contact Us</h1>
      </div>
      <div className="row ">
        <div className="col-lg-7 mx-auto">
            <form id="contact-form">
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Firstname</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Firstname"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Lastname</label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        className="form-control"
                        placeholder="Lastname"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your email *"
                      />
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Write your message here."
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div id="contactsubmit" className="col-md-12">
                    <input
                      type="submit"
                      className="btn btn-success btn-send  pt-2 btn-block
                        "
                      value="Submit"
                    />
                  </div>
                </div>
              </div>
            </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
