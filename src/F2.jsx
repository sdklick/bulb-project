import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const F2 = () => {
  const [data, setdata] = useState(undefined);

  return (
    <>
      <div className="card-body m-5 text-center ">
        {data == undefined || data == "off" ? (
          <button
            onClick={() => setdata("on")}
            className="btn btn-warning mt-5"
          >
            <i className="fas fa-toggle-on" style={{ fontSize: "50px" }}></i>
          </button>
        ) : (
          <button
            onClick={() => setdata(undefined)}
            className="btn btn-light mt-5"
          >
            <i className="fas fa-toggle-off" style={{ fontSize: "50px" }}></i>
          </button>
        )}
        <div
          className="card mb-3 "
          style={{ maxWidth: "1080px", backgroundColor: "black" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              {data == undefined ? (
                <img
                  src="src\assets\off.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              ) : (
                <img
                  src="src\assets\on.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default F2;
