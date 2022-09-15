import React from "react";

import { useState } from "react";
import SingUp from "./SingUp";
import Others from "./Others";
import PersonalInfo from "./PersonalInfo";
const Form = () => {
  const [page, setPage] = useState(0);
  const formtitles = ["singup", "porseonalinfo", "others"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    nationality: "",
    others: "",
  });

  const pageDisplay = () => {
    if (page === 0) {
      return <SingUp formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Others formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div></div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1>{formtitles[page]}</h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currpage) => currpage - 1);
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            {page === formtitles.length - 1 ? "submit" : "next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
