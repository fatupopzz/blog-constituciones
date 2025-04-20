import React from "react";
import GlassCard from "../GlassCard";
import ImagePlaceholder from "../ImagePlaceholder";

function Conclusion() {
  return (
    <GlassCard>
      <h2>
        Conclusiones: El legado constitucional en la Guatemala contemporánea
      </h2>

      <h3>¿Cuál constitución era más adecuada para Guatemala?</h3>
      <p>
        Tras analizar detalladamente las diferencias entre las constituciones de
        1945 y 1956, consideramos que la Constitución de 1945 representaba un
        marco jurídico más adecuado para el desarrollo democrático y social de
        Guatemala por varias razones fundamentales:
      </p>

      <div className="key-points">
        <ul>
          <li>
            <strong>Equilibrio de poderes:</strong> Establecía mecanismos más
            efectivos para evitar la concentración de poder en el ejecutivo.
          </li>
          <li>
            <strong>Inclusión social:</strong> Reconocía derechos sociales,
            laborales y económicos fundamentales para una sociedad con profundas
            desigualdades.
          </li>
          <li>
            <strong>Neutralidad ideológica:</strong> A diferencia de la
            Constitución de 1956, no condicionaba los derechos ciudadanos a
            posiciones ideológicas específicas.
          </li>
        </ul>
      </div>

      <ImagePlaceholder caption="Imagen: Legado constitucional en la Guatemala actual" />

      <h3>Influencia en el rumbo político posterior</h3>
      <p>
        La Constitución de 1945, aunque tuvo una vigencia relativamente corta,
        dejó un legado perdurable en el imaginario político guatemalteco. Sus
        principios de justicia social, democratización y modernización del
        Estado siguieron inspirando a movimientos sociales y políticos en las
        décadas posteriores.
      </p>
      <p>
        Por otro lado, la Constitución de 1956 sentó las bases jurídicas para un
        período de gobiernos autoritarios, militarización de la política y
        persecución ideológica. Su legado más duradero fue la justificación
        constitucional del anticomunismo como política de Estado.
      </p>

      <h3>Reflexión final</h3>
      <p>
        El estudio de estas constituciones nos invita a reflexionar sobre qué
        tipo de sociedad queremos construir para el futuro y qué principios
        constitucionales pueden servir mejor a las necesidades del pueblo
        guatemalteco.
      </p>
    </GlassCard>
  );
}

export default Conclusion;
