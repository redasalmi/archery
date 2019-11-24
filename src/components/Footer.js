import React from "react";

const Footer = () => {
  let debutYear = "2019";
  let date = new Date();
  let currentYear = date.getFullYear().toString();
  let year;
  if (debutYear === currentYear) {
    year = "@" + debutYear;
  } else {
    year = "@" + debutYear + "-" + currentYear;
  }

  return (
    <div className="bg-dark mt-auto py-2 text-center">
      <footer className="container text-white">
        <p className="m-0 p-0">{year} Website dedicated to Archery lovers.</p>
      </footer>
    </div>
  );
};

export default Footer;
