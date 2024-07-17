import {
  Counter,
  ElectricityLine,
  Heading,
  KWh,
  Numbers,
  Section,
} from "./Electricity.styled";

const Electricity = () => {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("de-DE").format(num);
  };

  return (
    <Section>
      <Heading>
        <h2>
          Electricity we produced
          <br />
          for all time
        </h2>
      </Heading>
      <ElectricityLine />
      <Counter>
        <Numbers>{formatNumber(1134147814)}</Numbers>
        <KWh>kWh</KWh>
      </Counter>
    </Section>
  );
};

export default Electricity;
