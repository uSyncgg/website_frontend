import React, { useState } from "react";
import CaptainForm from "../League_forms/PurgeCoDFormCaptain";
import IndividualForm from "../League_forms/PurgeCodFormIndividual";
import Footer from "../../../Footer";

export default function PurgeCoDForm() {
  const [selectedForm, setSelectedForm] = useState("");

  const handleSelectChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const styles = {
    label: {
      marginBottom: '0.5rem',
      color: 'rgb(255,255,255)',
      fontWeight: '500',
    },
    input: {
      padding: '0.25rem',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #444',
      backgroundColor: 'rgb(93, 66, 133)',
      color: 'rgb(255,255,255)',
      outline: 'none',
      transition: 'border 0.2s ease-in-out',
      appearance: 'none',
      WebkitAppearance: 'none',    // 🔹 for Safari
      MozAppearance: 'none',       // 🔹 for Firefox
      backgroundImage: 'none',     // 🔹 ensures no arrow image remains
      cursor: 'pointer',
    },
    option: {
      backgroundColor: 'rgb(93, 66, 133)', // same as select for smooth look
      color: '#fff',
      borderRadius: '6px',
      padding: '0.5rem',
    }
  }

  // Container changes position/size depending on state
  const containerStyle = selectedForm
    ? {
        paddingTop: "5rem",
        textAlign: "left",
        transition: "all 0.5s ease-in-out",
      }
    : {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.5s ease-in-out",
      };

  const labelStyle = {
    color: "#fff",
    fontSize: selectedForm ? "1rem" : "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: selectedForm ? "center" : "center",
    gap: "0.5rem",
    transition: "all 0.4s ease-in-out",
  };

  return (
    <>
    <div style={containerStyle}>
      <label style={labelStyle}>
        Choose form
        <select
          value={selectedForm}
          onChange={handleSelectChange}
          style={styles.input}
        >
          <option value="">-- Select --</option>
          <option value="captain">Team Form</option>
          <option value="individual">Individual Form</option>
        </select>
      </label>

      {selectedForm && (
        <div style={{ marginTop: "1.5rem" }}>
          {selectedForm === "captain" && <CaptainForm />}
          {selectedForm === "individual" && <IndividualForm />}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
