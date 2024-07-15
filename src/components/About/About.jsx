import {
  Description,
  Header,
  ValueItem,
  ValuesGrid,
  ValuesSection,
} from "./About.styled";

const About = () => {
  return (
    <ValuesSection>
      <Header>MAIN VALUES OF OUR COMPANY</Header>
      <Description>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </Description>
      <ValuesGrid>
        <ValueItem>
          <h3>Openness</h3>
          <p>to the world, people, new ideas and projects</p>
        </ValueItem>
        <ValueItem>
          <h3>Responsibility</h3>
          <p>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </p>
        </ValueItem>
        <ValueItem>
          <img src="../../../src/img/wind-farms-fields1.png" alt="Expertise" />
        </ValueItem>
        <ValueItem>
          <img
            src="../../../src/img/man-worker-firld-by-solar-panels1.png"
            alt="Expertise"
          />
        </ValueItem>
        <ValueItem>
          <h3>Innovation</h3>
          <p>
            we use the latest technology to implement non-standard solutions
          </p>
        </ValueItem>
        <ValueItem>
          <h3>Quality</h3>
          <p>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </p>
        </ValueItem>
      </ValuesGrid>
    </ValuesSection>
  );
};

export default About;
