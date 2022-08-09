import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container">
      <div className=" text-center mt-5 ">
        <h1>Edit User</h1>
      </div>
      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="controls">
              <div className="row">
                <div className="col-md-12 mt-4">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-4">
                  <div className="form-group">
                    <input
                      id="form_username"
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={onInputChange}
                  />
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="form-group">
                  <input
                    id="form_phone"
                    type="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    value={phone}
                    onChange={onInputChange}
                  />
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-warning btn-send btn-lg btn-block pt-2 col-md-12"
                  value="Update User"
                >
                  {" "}
                  Update User{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
