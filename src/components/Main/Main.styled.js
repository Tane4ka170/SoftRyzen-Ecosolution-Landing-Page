import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  text-align: left;
  background-color: #f5f5f5;
  margin-top: 200px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

export const TextContainer = styled.div`
  max-width: 50%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
  max-width: 50%;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
`;

export const LearnMoreButton = styled.button`
  width: 141px;
  height: 39px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 500px 0 0 0;
  border: 1px solid #97d28b;
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

export const ArrowIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 1200px;
  border: 0;
  border-top: 1px solid #ddd;
  margin: 2rem 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  font-size: 0.875rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
`;

export const WindmillImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1200px;
`;
