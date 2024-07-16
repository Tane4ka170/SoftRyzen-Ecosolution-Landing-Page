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
  ArrowIcon,
  Adress,
  Mail,
  Copyright,
} from "./Main.styled";
import WindmillSrc from "../../img/wind-turbine-clean-energy.png"; // Завантажуємо зображення

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
        <Adress>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Adress>
        <Mail>office@ecosolution.com</Mail>
        <Copyright>ecosolution © 2023</Copyright>
      </ContactInfo>
      <WindmillImage src={WindmillSrc} alt="windmill" />
    </Section>
  );
};

export default Main;
