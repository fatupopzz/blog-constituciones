import React from "react";

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "home", label: "Inicio" },
    { id: "garantias", label: "Garantías Individuales" },
    { id: "presidencia", label: "Presidencia" },
    { id: "ejercito", label: "Ejército" },
    { id: "conclusion", label: "Conclusiones" },
  ];

  return (
    <nav className="nav-glass">
      <div className="nav-links">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
