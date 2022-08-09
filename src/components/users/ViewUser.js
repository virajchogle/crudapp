import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/virajchogle/crudapp-db/users/${id}`);
    console.log(result);
    setUser(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className=" text-center mt-5 ">
        <h1>View User Details</h1>
      </div>
      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="controls">
              <div className="row">
                <div className="col-md-12 mt-4">
                  <div className="form-group">
                    <input
                      style={{ cursor: "default" }}
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="form-group">
                    <input
                      style={{ cursor: "default" }}
                      id="form_username"
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <input
                    style={{ cursor: "default" }}
                    id="form_email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <input
                    style={{ cursor: "default" }}
                    id="form_phone"
                    type="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    value={phone}
                    readOnly
                  />
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-warning btn-send btn-lg btn-block pt-2 col-md-12"
                  value="Update User"
                >
                  Go back to Home
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
