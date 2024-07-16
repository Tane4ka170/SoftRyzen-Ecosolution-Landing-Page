import {
  Description,
  Header,
  HeaderWrapper,
  ValuesGrid,
  ValuesSection,
} from "./About.styled";

const About = () => {
  return (
    <ValuesSection>
      <HeaderWrapper>
        <Header>MAIN VALUES OF OUR COMPANY</Header>
        <Description>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&apos;s energy needs.
        </Description>
      </HeaderWrapper>
      <ValuesGrid>
        <div>
          <h3>Openness</h3>
          <p>to the world, people, new ideas and projects</p>
        </div>
        <div>
          <h3>Responsibility</h3>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </div>
        <div>
          <img src="../../../src/img/wind-farms-fields1.png" alt="Wind Farms" />
        </div>
        <div>
          <img
            src="../../../src/img/man-worker-firld-by-solar-panels1.png"
            alt="Solar Panels"
          />
        </div>
        <div>
          <h3>Innovation</h3>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </div>
        <div>
          <h3>Quality</h3>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </div>
      </ValuesGrid>
    </ValuesSection>
  );
};

export default About;
