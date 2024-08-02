import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Country, useGetCountries } from "./model/api/api";
import styles from './countries.module.css'

export const Countries = () => {
  const { data, error } = useGetCountries();

  if(error) {
    return <div>{error}</div>
  }
  return (
    <div className={styles.container}>
      {data.map((item: Country, index: number) => (
        <Accordion key={index} className={styles.container__accordion}>
          <AccordionSummary id={`panel-header-${index}`} aria-controls={`panel-content-${index}`}>
            {item.name.common}
          </AccordionSummary>
          <AccordionDetails>
            <h1>{item.name.official}</h1>
            <h2>{item.population}</h2>
            <h2>{item.region}</h2>
            <img alt={item.name.common} src={item.flags.svg}/>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
