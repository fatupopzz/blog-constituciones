import React from "react";
import GlassCard from "../GlassCard";
import ComparisonTable from "../ComparisonTable";
import ImagePlaceholder from "../ImagePlaceholder";

function Presidencia() {
  const headers = ["Aspecto", "Constitución de 1945", "Constitución de 1956"];

  const rows = [
    [
      "Periodo presidencial",
      "6 años sin reelección inmediata",
      "5 años con posibilidad de reelección posterior",
    ],
    [
      "Poderes de emergencia",
      "Limitados y sujetos a aprobación del Congreso",
      "Más amplios, incluyendo suspensión de garantías",
    ],
    [
      "Control sobre fuerzas armadas",
      "Presidente es Comandante en Jefe, pero con límites institucionales",
      "Mayor control ejecutivo sobre el ejército como 'garante del orden'",
    ],
  ];

  return (
    <GlassCard>
      <h2>
        La Presidencia de la República en las Constituciones de 1945 y 1956
      </h2>

      <p>
        La figura presidencial y sus atribuciones son elementos centrales en
        cualquier sistema político. Al comparar cómo se definió la Presidencia
        en las constituciones de 1945 y 1956, encontramos diferencias
        reveladoras sobre la concepción del poder ejecutivo.
      </p>

      <ImagePlaceholder caption="Imagen: El Palacio Nacional, sede del poder ejecutivo" />

      <ComparisonTable headers={headers} rows={rows} />

      <h3>Análisis crítico</h3>
      <p>
        La Constitución de 1945 fue diseñada para evitar la concentración de
        poder que había caracterizado a las dictaduras previas. Por ello,
        estableció un sistema de contrapesos institucionales que limitaban la
        autoridad presidencial y favorecían el equilibrio entre los tres poderes
        del Estado.
      </p>
      <p>
        En contraste, la Constitución de 1956 fortaleció significativamente la
        figura presidencial, otorgándole mayores facultades discrecionales,
        especialmente en situaciones de emergencia.
      </p>

      <h3>Impacto en la historia reciente</h3>
      <p>
        La ampliación de poderes presidenciales en la Constitución de 1956 sentó
        precedentes que facilitarían posteriormente el surgimiento de gobiernos
        autoritarios respaldados por las fuerzas armadas. Este desequilibrio de
        poder tuvo consecuencias duraderas.
      </p>
    </GlassCard>
  );
}

export default Presidencia;
