import styled from '@emotion/styled'

const TextoError = styled.div`
    background-color: #b7322c;
    width: 70%;
    color: #fff;
    margin: 0 auto 20px auto;
    padding: 10px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;

`

const Error = ({children}) => {
  return (
    <TextoError>
      {children}
    </TextoError>
  )
}

export default Error
