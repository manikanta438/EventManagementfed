import React, { useState } from "react";

export default function EventVenues() {
  const [selectedVenue, setSelectedVenue] = useState(null);

  const venues = [
    { id: 1, name: "Grand Hyatt", location: "New York, USA" },
    { id: 2, name: "The Ritz-Carlton", location: "London, UK" },
    { id: 3, name: "Taj Mahal Palace", location: "Mumbai, India" },
    { id: 4, name: "Sydney Opera House", location: "Sydney, Australia" },
  ];

  return (
    <div className="venues-container">
      <h1>Event Venues</h1>
      <ul className="venue-list">
        {venues.map((venue) => (
          <li key={venue.id} onClick={() => setSelectedVenue(venue)}>
            {venue.name}
          </li>
        ))}
      </ul>

      {selectedVenue && (
        <div className="venue-details">
          <h2>{selectedVenue.name}</h2>
          <p>Location: {selectedVenue.location}</p>
        </div>
      )}
    </div>
  );
}
