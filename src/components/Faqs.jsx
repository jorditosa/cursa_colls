import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown } from '@styled-icons/boxicons-solid'
 
export default function Faqs() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className='flex justify-between'>
          <ChevronDown size={40} />
          Hi ha servei de guarda-roba?
        </AccordionHeader>
        <AccordionBody>
         Sí, al mateix molí de mar i fins mitja hora abans de la primera Cursa disposareu de servei de guarda-roba.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        <ChevronDown size={40} />
          Hi haurà pàrking?
        </AccordionHeader>
        <AccordionBody>
          Com a cursa no podem habilitar una zona com a tal, però si us recomanem i proporcionem llocs on podreu aparcar el vostre vehicle.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        <ChevronDown size={40} />
          A quina hora és la recollida de Dorsals?
        </AccordionHeader>
        <AccordionBody>
          <ul className="text-center">
            <li>Dissabte 08, al Molí de Mar de 17:30h a 20h.</li>
            <li>Diumenge 09, al Molí de Mar de 8h fins les 09h.</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        <ChevronDown size={40} />
          Hi ha servei de dutxes?
        </AccordionHeader>
        <AccordionBody>
          Les dutxes quedaran habilitades al complex esportiu Aqua Sports club, a uns 10min a peu desde la sortida habilitada per la cursa.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        <ChevronDown size={40} />
          Tindré jalar al acabar?
        </AccordionHeader>
        <AccordionBody>
          La botifarra, la cervesa o la opció veggie son indispensables i ho tindràs al acabar la cursa. Arribat el dia que no poguem oferir-ho, cancel·larem la cursa!
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}