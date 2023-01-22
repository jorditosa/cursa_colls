import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

function InfoUtil() {
  return (
    <>
      <section className='w-full pt-20 py-10 md:pt-24'>
          <h2 className="text-center text-dark py-5 text-4xl bg-gradient-to-r from-light/5 to-secondary/75">
            Faq's ( preguntes freqüents )
          </h2>
        <div className="md:max-w-[1000px] mx-auto font-Poppins p-5 text-xl border-b-primary">
          <Faqs />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InfoUtil