import styled from "styled-components";

export const Section = styled.section`
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

export const Heading = styled.div`
  text-align: center;
`;

export const ElectricityLine = styled.div`
  margin: 24px 0;
  width: 50%;
  height: 48px;
  border-right: 1px solid #97d28b;
  @media (min-width: 768px) {
    height: 87px;
  }
  @media (min-width: 1280px) {
    margin: 16px 0;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Numbers = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  color: var(--light-green);

  @media (min-width: 768px) {
    font-size: 100px;
  }

  @media (min-width: 1280px) {
    font-size: 164px;
  }
`;

export const KWh = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #173d33;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;
