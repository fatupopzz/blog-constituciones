import React from "react";
import GlassCard from "../GlassCard";
import ComparisonTable from "../ComparisonTable";
import ImagePlaceholder from "../ImagePlaceholder";

function GarantiasIndividuales() {
  const headers = ["Aspecto", "Constitución de 1945", "Constitución de 1956"];

  const rows = [
    [
      "Libertad de expresión",
      "Ampliamente garantizada sin restricciones ideológicas",
      "Restringida por cláusulas anticomunistas",
    ],
    [
      "Derecho de asilo",
      "Universal para perseguidos políticos",
      "Excluía a personas acusadas de comunismo",
    ],
    [
      "Derecho a la propiedad",
      "Con función social, permitía expropiaciones",
      "Carácter inviolable, dificultaba expropiaciones",
    ],
  ];

  return (
    <GlassCard>
      <h2>Las Garantías Individuales en las Constituciones de 1945 y 1956</h2>

      <p>
        Las garantías individuales representan la columna vertebral de cualquier
        constitución democrática. Al comparar cómo fueron tratadas en las
        constituciones de 1945 y 1956, podemos observar claramente el cambio
        ideológico que experimentó Guatemala en ese periodo.
      </p>

      <ComparisonTable headers={headers} rows={rows} />

      <ImagePlaceholder caption="Imagen: Derechos y garantías ciudadanas" />

      <h3>Análisis crítico</h3>
      <p>
        La Constitución de 1945 reflejaba un espíritu más progresista y
        universalista en cuanto a derechos individuales. En contraste, la
        Constitución de 1956 introdujo restricciones ideológicas explícitas,
        dirigidas principalmente contra el comunismo y otras ideologías
        consideradas "totalitarias".
      </p>

      <blockquote>
        "Se declara ilegal y prohibida toda acción, organización o partido
        comunista, o que propague, divulgue o enseñe la ideología comunista..."
        <cite>— Constitución de Guatemala, 1956</cite>
      </blockquote>
    </GlassCard>
  );
}

export default GarantiasIndividuales;
