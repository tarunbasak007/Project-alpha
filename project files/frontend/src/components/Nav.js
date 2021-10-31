import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navMainMenu" class="navbar-collapse collapse">
        <div class="navbar-nav ml-auto">
          <div>
            <select class=" bg-warning">
              <option selected value="doctor">
                Doctor type
              </option>
              <option value="neuorolog">Neuorology</option>
              <option value="anesthesiologists">Anesthesiologists</option>
              <option value="cardiologists">Cardiologists</option>
              <option value="dermatologists">Dermatologists</option>
            </select>
            <select class="bg-primary">
              <option selected value="availability">
                Availability
              </option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
            <select>
              <option Selected value="City">
                Select city
              </option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="banglore">Benglure</option>
              <option value="chenni">Chenni</option>
              <option value="hydrabed">Hydrabad</option>
            </select>
          </div>
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/tweets" className="nav-item nav-link">
            Tweets
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
