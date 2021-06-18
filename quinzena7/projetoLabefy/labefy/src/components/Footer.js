import React from "react";
import styled from "styled-components";

import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";

const FullFooterDiv = styled.div`
  display: flex;
  background-color: #FFFFFF;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
const FooterDiv = styled.div`
  width: 940px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const RightDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 20px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FullFooterDiv>
        <FooterDiv>
          <LeftDiv>
            <p>Diogo Silva</p>
            Projeto - Labenu - 2021
          </LeftDiv>
          <RightDiv>
            <SocialDiv
              onClick={() => window.open("https://facebook.com/", "_blank")}
            >
              <img src={Facebook} alt="facebook" />
            </SocialDiv>
            <SocialDiv
              onClick={() => window.open("https://twitter.com/", "_blank")}
            >
              <img src={Twitter} alt="twitter" />
            </SocialDiv>
            <SocialDiv
              onClick={() => window.open("https://instagram.com/", "_blank")}
            >
              <img src={Instagram} alt="facebook" />
            </SocialDiv>
          </RightDiv>
        </FooterDiv>
      </FullFooterDiv>
    );
  }
}