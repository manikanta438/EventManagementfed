import React from "react";

export default function DemoForm() {
  return (
    <div className="demo-form">
      <h2>Schedule a Demo</h2>
      <form>
        <div className="input-group">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Work email" />
        <input type="text" placeholder="Organization" />
        <input type="text" placeholder="Phone" />
        <select>
          <option>Select Job Function</option>
          <option>Marketing</option>
          <option>IT</option>
          <option>HR</option>
        </select>
        <select>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
        <div className="checkbox-container">
          <input type="checkbox" id="subscribe" />
          <label htmlFor="subscribe">I agree to receive emails.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
