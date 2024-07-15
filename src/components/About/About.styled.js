import styled from "styled-components";

export const ValuesSection = styled.div`
  padding: 20px;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueItem = styled.div`
  background-color: #f5f5f5;
  padding: 20px;

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

export const Header = styled.h2`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;
