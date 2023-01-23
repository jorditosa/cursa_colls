import styled from "styled-components"

const Texto = styled.p`
    background-color: #b7322c;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 15px 0;
`

function Error({children}) {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error