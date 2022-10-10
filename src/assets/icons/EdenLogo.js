import React from "react";
import logo_svg from "../svgs/eden.svg";

export default function EdenLogo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem auto",
      }}
    >
      <img
        style={{ width: "2.5rem", height: "3rem" }}
        src={logo_svg}
        alt="Eden Logo"
      />
      <span
        style={{ fontSize: "1.7rem", fontFamily: "'Inter'", fontWeight: "600" }}
      >
        Eden
      </span>
    </div>
  );
}
