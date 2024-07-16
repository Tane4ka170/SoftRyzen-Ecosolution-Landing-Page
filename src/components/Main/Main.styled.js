import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "../../img/arrow-right.svg";

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

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 14px;
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 767px) {
    width: 50%;
    padding-right: 53px;
  }
`;

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
    margin-bottom: 24px;
    width: 320px;
  }
  @media screen and (min-width: 767px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const DescriptionContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding-left: 11px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 161px;
    padding-right: 96px;
    margin-top: 24px;
  }
`;

export const Description = styled.p`
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media screen and (min-width: 767px) {
    margin-bottom: 43px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 3.5px 16px;
  height: 39px;
  min-width: 100px;
  border-radius: 20px;
  border: 1px solid #97d28b;
  cursor: pointer;
  background-color: inherit;
  color: #000;

  &:hover,
  &:focus {
    color: #97d28b;
    background-color: #173d33;
    border: none;
  }
`;

export const ArrowIcon = styled(ArrowSvg)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  flex-shrink: 0;
  fill: currentColor;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid #000;
  margin: 24px 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const Adress = styled.span`
  display: block;
  color: inherit;
  margin-bottom: 8px;
  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

export const Mail = styled.span`
  display: block;
  color: inherit;
  margin-bottom: 8px;
  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

export const Copyright = styled.span`
  display: block;
  color: inherit;
  text-align: center;
  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
  @media screen and (max-width: 766px) {
    margin-top: 8px;
  }
`;

export const WindmillImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1200px;
  display: block;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;
