import React, { useState, useEffect } from "react";
import { sendPhishing } from "../services/apiPhishingLogs";
import { PhishingList } from "./Phishing";
import { Navbar } from "./Navbar";
import { getPhishingLogs } from "../services/apiPhishingLogs";
import { Input } from "../ui/Input";

export function Main() {
  const [email, setEmail] = useState("");
  const [phishingList, setPhishingList] = useState([]);

  useEffect(() => {
    fetchPhishingList();
  }, []);

  const fetchPhishingList = async () => {
    const response = await getPhishingLogs();
    setPhishingList(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendPhishing(email);
    setEmail("");
    fetchPhishingList();
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <h2>Enter Your Email</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
            placeholder="Enter email"
            className="form-input"
          />
          <button type="submit" className="form-button">
            Send Email
          </button>
        </form>
        <PhishingList phishingList={phishingList} />
      </div>
    </>
  );
}
