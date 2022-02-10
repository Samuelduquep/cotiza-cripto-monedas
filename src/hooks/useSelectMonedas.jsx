import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "lato";
  font-weight: 700;
  font-size: 20px;
  margin: 10px auto 10px auto;
  text-align: center;
`;

const Select = styled.select`
  width: 70%;
  margin: 20px auto 20px auto;
  padding: 10px;
  display: block;
  border-radius: 5px;
  font-family: "lato";
  text-align: center;
  font-size: 15px;
  background-color: #acc2cc;
  color: #50575a;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMonedas;
