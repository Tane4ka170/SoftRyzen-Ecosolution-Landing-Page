import styled from "styled-components";

export const ValuesSection = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Header = styled.h2`
  flex: 1;
  font-size: 24px;
  position: relative;
  margin: 0;

  &::after {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 0;
    right: -20px;

    @media (max-width: 768px) {
      width: 100%;
      height: 2px;
      top: auto;
      right: auto;
      left: 0;
      bottom: -10px;
    }
  }
`;

export const Description = styled.p`
  flex: 2;
  margin: 0;
  padding-left: 40px;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
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
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    position: relative;

    h3 {
      margin: 0 0 10px;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: #000;
        margin: 10px auto;
      }
    }

    p {
      margin: 0;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto 10px;
    }

    @media (max-width: 768px) {
      img {
        display: none;
      }
    }
  }
`;
