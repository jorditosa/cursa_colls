
import Footer from "../components/Footer"
import styled from "styled-components"
import { Tree } from '@styled-icons/bootstrap/Tree'
import Corredors from '../assets/corredor.jpg'
import Corredors1 from '../assets/corredor_1.jpg'
import Corredors2 from '../assets/corredor_2.jpg'
import Corredors3 from '../assets/corredor_3.jpg'
import Corredors4 from '../assets/corredor_4.jpg'
import Corredors5 from '../assets/corredor_5.jpg'
import Corredors6 from '../assets/corredor_6.jpg'
import Corredors7 from '../assets/corredor_7.jpg'
import Corredors8 from '../assets/corredor_8.jpg'
import Corredors9 from '../assets/corredor_9.jpg'
import Corredors10 from '../assets/corredor_10.jpg'
import Corredors11 from '../assets/corredor_11.jpg'
import Corredors12 from '../assets/corredor_12.jpg'
import Corredors13 from '../assets/corredor_13.jpg'
import Title from "../components/Title";

const GreenTree = styled(Tree)`
  color: #3ca291;
`;

function Fotos() {
  return (
    <>
        <Title className='block pt-40'>Té fotos!!! en voleu més?? doncs apunteu-vos i en tindreu més!</Title>
        <section className="grid grid-cols-2">
         
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors11} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors1} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors3} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors4} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors5} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors2} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors6} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors7} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors8} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors9} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors10} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors12} alt="" />
            <img className="w-full h-[250px] md:h-[600px] object-cover border-secondary/50 border-4" src={Corredors13} alt="" />
       
        </section>
        <Footer />
    </>
  )
}

export default Fotos