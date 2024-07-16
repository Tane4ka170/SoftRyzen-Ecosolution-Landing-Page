import styled from "styled-components";

export const ValuesSection = styled.div`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f4f4f4;
  @media screen and (min-width: 767px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 100px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 75px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 124px;
  }
`;

export const Header = styled.h2`
  display: block;

  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  @media screen and (max-width: 767px) {
    padding-right: 97px;
    margin-bottom: 32px;
    max-width: 440px;
  }
  @media screen and (min-width: 767px) {
    padding-right: 82px;
    width: 50%;
    border-right: 1px solid #97d28b;
    font-size: 36px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    padding-right: 254px;
  }
`;

export const Description = styled.p`
  @media screen and (min-width: 767px) {
    width: 50%;
    padding-left: 11px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  div {
    background-color: #eaedf1;
    padding: 20px;
    text-align: center;
    position: relative;

    h3 {
      margin-bottom: 12px;
      padding-bottom: 33px;
      font-family: Oswald;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      text-transform: uppercase;
      border-bottom: 1px solid #97d28b;
      @media screen and (min-width: 767px) {
        padding-bottom: 51px;
        font-size: 18px;
      }
      @media screen and (min-width: 1280px) {
        margin-bottom: 24px;
        padding-top: 24px;
        padding-bottom: 94px;
        font-size: 32px;
      }
    }

    p {
      font-size: 14px;
      @media screen and (min-width: 1280px) {
        font-size: 16px;
      }
    }

    @media (max-width: 768px) {
      img {
        display: none;
      }
    }
  }
`;
