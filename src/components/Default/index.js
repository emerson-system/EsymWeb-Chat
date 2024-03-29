import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>EsymWeb-Chat</C.Title>
      <C.Info>
        Agora você pode enviar e receber mensagens sem precisar manter seu
        dispositivo conectado à internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;
