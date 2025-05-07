import React from "react";
import betImg from "../../assets/cert.jpeg";
import "./Cert.css";
const Cert = () => {
  return (
    <div>
      <div
        className="primaryText yPaddings"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <p>Certification</p>{" "}
      </div>

      <div className="cert-div-img">
        <img src={betImg} />
      </div>
    </div>
  );
};

export default Cert;
