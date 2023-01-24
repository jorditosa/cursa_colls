import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function Faqs() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.5 },
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Hi ha servei de guarda-roba?
        </AccordionHeader>
        <AccordionBody>
         Sí, al mateix molí de mar i fins mitja hora abans de la primera Cursa disposareu de servei de guarda-roba.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Hi haurà pàrking?
        </AccordionHeader>
        <AccordionBody>
          Com a cursa no podem habilitar una zona com a tal, però si us recomanem i proporcionem llocs on podreu aparcar el vostre vehicle.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Com i quan recullo el dorsal?
        </AccordionHeader>
        <AccordionBody>
          <p>
            La recollida de dorsals és durà a terme de manera presencial, el dia abans i hores prèvies a la primera sortida. En concret els horaris seran:
          </p>
          <ul>
            <li><b>Dissabte 01</b>, al Molí de Mar de 17:30h a 20h.</li>
            <li><b>Diumenge 02</b>, al Molí de Mar de 8h fins les 09h.</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Hi ha servei de dutxes?
        </AccordionHeader>
        <AccordionBody>
          Les dutxes quedaran habilitades al complex esportiu Aqua Sports club, a uns 10min a peu desde la sortida habilitada per la cursa.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Tindré jalar al acabar?
        </AccordionHeader>
        <AccordionBody>
          La botifarra, la cervesa o la opció veggie son indispensables i ho tindràs al acabar la cursa. Arribat el dia que no poguem oferir-ho, cancel·larem la cursa!
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}