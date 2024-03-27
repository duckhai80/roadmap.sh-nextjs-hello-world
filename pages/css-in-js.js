import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function CSSJS(props) {
  return <Title>Hello world!</Title>;
}

export default CSSJS;
