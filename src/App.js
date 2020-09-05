import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // Definit State
  const [resumen, setResumen] = useState({});

  const { datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />

        {datos ? <Resumen datos={datos} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
