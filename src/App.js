import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import GarantiasIndividuales from "./components/pages/GarantiasIndividuales";
import Presidencia from "./components/pages/Presidencia";
import Ejercito from "./components/pages/Ejercito";
import Conclusion from "./components/pages/Conclusion";
import "./styles/main.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Función para renderizar el contenido activo
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "garantias":
        return <GarantiasIndividuales />;
      case "presidencia":
        return <Presidencia />;
      case "ejercito":
        return <Ejercito />;
      case "conclusion":
        return <Conclusion />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
