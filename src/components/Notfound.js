import React from "react";
import './Notfound.css';

const Notfound = () => {
  return (
    <div id="not-found">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
