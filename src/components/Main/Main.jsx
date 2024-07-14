import {
  ContactInfo,
  Container,
  Description,
  DescriptionContainer,
  Divider,
  LearnMoreButton,
  Section,
  TextContainer,
  Title,
  WindmillImage,
} from "./Main.styled";
import { ReactComponent as ArrowIcon } from "../../img/arrow-right.svg";

const Main = () => {
  const handleLearnMoreClick = () => {
    const casesSection = document.getElementById("cases-section");
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Container>
        <TextContainer>
          <Title>RENEWABLE ENERGY FOR ANY TASK</Title>
        </TextContainer>
        <DescriptionContainer>
          <Description>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Description>
          <LearnMoreButton onClick={handleLearnMoreClick}>
            Learn more
            <ArrowIcon />
          </LearnMoreButton>
        </DescriptionContainer>
      </Container>
      <Divider />
      <ContactInfo>
        <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
        <span>office@ecosolution.com</span>
        <span>ecosolution © 2023</span>
      </ContactInfo>
      <WindmillImage
        src="../../../src/img/wind-turbine-clean-energy.png"
        alt="windmill"
      />
    </Section>
  );
};

export default Main;
