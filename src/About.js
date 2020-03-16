import React from "react";
import styled from "styled-components";
class About extends React.Component {
  render() {
    const Div: any = styled.div`
      margin: 20px;
      border: 5px dashed green;
      &:hover {
        background-color: ${(props: any) => props.hoverColor};
      }
    `;
    const Title = styled.h1`
      font-family: Arial;
      font-size: 35px;
      text-align: center;
      color: palevioletred;
    `;
    const Paragraph = styled.p`
      font-size: 25px;
      text-align: center;
      background-color: lightgreen;
    `;
    return (
      <div>
        <Title>Styled Components Example</Title>
        <p></p>
        <Div hoverColor="Orange">
          <Paragraph>Hello JavaTpoint!!</Paragraph>
        </Div>
      </div>
    );
  }
}
export default About;
