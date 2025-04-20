import React from "react";
import GlassCard from "../GlassCard";
import ImagePlaceholder from "../ImagePlaceholder";
import Timeline from "../Timeline";

function Home() {
  return (
    <>
      <GlassCard>
        <h2>¿Por qué es importante comparar estas dos constituciones?</h2>
        <p>
          El análisis comparativo de las constituciones de 1945 y 1956 en
          Guatemala nos permite entender un periodo crucial de transición
          política en el país. Estas constituciones representan dos visiones
          contrastantes sobre el papel del Estado, los derechos ciudadanos y la
          organización social.
        </p>
        <p>
          La Constitución de 1945 surgió de un movimiento revolucionario que
          buscaba modernizar Guatemala y establecer garantías democráticas tras
          décadas de gobiernos autoritarios. Por otro lado, la Constitución de
          1956 fue producto de un giro político hacia el conservadurismo y el
          anticomunismo en el contexto de la Guerra Fría.
        </p>

        <ImagePlaceholder caption="Imagen: Contexto histórico de Guatemala (1944-1956)" />
      </GlassCard>

      <GlassCard>
        <Timeline />
      </GlassCard>

      <GlassCard>
        <h2>Contexto histórico</h2>

        <h3>La Revolución de 1944</h3>
        <p>
          El 20 de octubre de 1944, un movimiento cívico-militar derrocó al
          dictador Jorge Ubico, iniciando un periodo conocido como la "Primavera
          Democrática" en Guatemala.
        </p>

        <ImagePlaceholder caption="Imagen: Revolución de 1944" />

        <h3>La Contrarrevolución de 1954</h3>
        <p>
          En junio de 1954, una operación respaldada por la CIA de Estados
          Unidos derrocó al gobierno de Árbenz, poniendo fin al periodo
          revolucionario.
        </p>

        <ImagePlaceholder caption="Imagen: Contrarrevolución de 1954" />
      </GlassCard>
    </>
  );
}

export default Home;
