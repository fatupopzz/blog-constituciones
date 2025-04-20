import React, { useState } from "react";

function Timeline() {
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineEvents = [
    { year: 1944, title: "Revolución de Octubre" },
    { year: 1945, title: "Constitución Revolucionaria" },
    { year: 1954, title: "Contrarrevolución" },
    { year: 1956, title: "Constitución Anticomunista" },
    { year: 1985, title: "Nueva Constitución" },
  ];

  return (
    <div className="timeline-container">
      <h2>Cronología Constitucional</h2>

      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-events">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <button
                className={`timeline-dot ${activeEvent === index ? "active" : ""}`}
                onClick={() => setActiveEvent(index)}
                aria-label={`Evento de ${event.year}`}
              ></button>
              <span className="timeline-year">{event.year}</span>
              {activeEvent === index && (
                <span className="timeline-title">{event.title}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeEvent !== null && (
        <div className="timeline-detail">
          <h3>
            {timelineEvents[activeEvent].year}:{" "}
            {timelineEvents[activeEvent].title}
          </h3>
          {activeEvent === 1 && (
            <div>
              <p>La Constitución de 1945 estableció:</p>
              <ul>
                <li>Garantías sociales amplias</li>
                <li>Autonomía universitaria</li>
                <li>Límites al poder presidencial</li>
              </ul>
            </div>
          )}
          {activeEvent === 3 && (
            <div>
              <p>La Constitución de 1956 estableció:</p>
              <ul>
                <li>Restricciones ideológicas anticomunistas</li>
                <li>Mayor poder al ejecutivo</li>
                <li>Ampliación del rol del ejército</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Timeline;
