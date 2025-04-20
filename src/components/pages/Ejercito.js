import React from "react";
import GlassCard from "../GlassCard";
import ComparisonTable from "../ComparisonTable";
import ImagePlaceholder from "../ImagePlaceholder";

function Ejercito() {
  const headers = ["Aspecto", "Constitución de 1945", "Constitución de 1956"];

  const rows = [
    [
      "Definición y función",
      "Institución para mantener independencia y paz",
      "Institución con rol en seguridad interior y exterior",
    ],
    [
      "Participación política",
      "Prohibida la deliberación o ejercicio colectivo del derecho de petición",
      "Mantenía la prohibición pero añadía rol como 'guardián del orden constitucional'",
    ],
    [
      "Subordinación",
      "Estrictamente al poder civil",
      "Mayor autonomía como institución con funciones de seguridad interior",
    ],
  ];

  return (
    <GlassCard>
      <h2>El Ejército en las Constituciones de 1945 y 1956</h2>

      <p>
        El papel de las fuerzas armadas en la vida política guatemalteca ha sido
        históricamente significativo. Las constituciones de 1945 y 1956 reflejan
        dos concepciones distintas sobre el rol del ejército en la sociedad.
      </p>

      <ImagePlaceholder caption="Imagen: Desfile militar en Guatemala, años 50" />

      <ComparisonTable headers={headers} rows={rows} />

      <h3>Análisis crítico</h3>
      <p>
        La Constitución de 1945, redactada tras la caída de dictaduras
        militares, estableció claramente la subordinación del ejército al poder
        civil. Esta constitución concebía a las fuerzas armadas como una
        institución profesional, apolítica y enfocada en la defensa externa.
      </p>
      <p>
        En contraste, la Constitución de 1956 amplió significativamente el papel
        del ejército en la vida nacional. El nuevo texto constitucional otorgaba
        a las fuerzas armadas un rol explícito en la seguridad interior y en la
        defensa del orden constitucional.
      </p>

      <h3>Consecuencias históricas</h3>
      <p>
        La redefinición del papel del ejército en la Constitución de 1956 tuvo
        profundas consecuencias para Guatemala. Proporcionó el marco
        constitucional para la creciente militarización de la sociedad y la
        política guatemalteca durante las décadas siguientes.
      </p>

      <ImagePlaceholder caption="Imagen: Impacto del militarismo en Guatemala" />
    </GlassCard>
  );
}

export default Ejercito;
