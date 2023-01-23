import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Title from "../components/Title";
import heroFaqs from '../assets/sortida.jpg'

function InfoUtil() {
  return (
    <>
      <section className='w-full pt-20 md:pt-24'>
        <Title>
          Faq's ( preguntes freqüents )
        </Title>
        <div className="md:max-w-[1000px] mx-auto font-Poppins p-3 mb-10 text-lg border-b-primary">
          <Faqs />
        </div>
        <img src={heroFaqs} alt="foto corredors" />
      </section>

      <Footer />
    </>
  )
}

export default InfoUtil