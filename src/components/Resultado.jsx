import styled from "@emotion/styled";

const Resul = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: "LATO", sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 20px auto 50px auto;

  span {
    font-weight: 900;
    color: #49e234;
  }
`;
const Texto = styled.p``;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 900;
    color: #49e234;
  }
`;
const Imagen = styled.img`
  width: 20%;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Resul>
      <Imagen
        src={`https://www.cryptocompare.com${IMAGEURL}`}
        alt="Imagen Criptomoneda"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Cambio en 24 horas: <span>{CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          Ultima Actualizacón: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resul>
  );
};

export default Resultado;
