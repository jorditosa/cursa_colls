import Footer from "../components/Footer"
import Title from "../components/Title"
import AltCurta from "../assets/curta8k.jpeg"
import AltLlarga from "../assets/llarga15k.jpg"


function recorreguts() {
  return (
    <>
      <section className="font-Poppins pt-20 md:pt-24">
        <Title>
          recorregut de la Curta
        </Title>
        <div className="w-full lg:max-w-[1000px] mx-auto pb-20 pt-5 px-3 border-l-8 border-l-curta">
          <p className='py-5'>
          La Curta té el recorregut ideal per iniciar-se al Trail running o per donar via lliure a la velocitat dels corredors més ràpids. La sortida es realitzarà des de la platja del far. Només començar trobarem la pujada asfaltada a l’Ermita de Sant Cristòfol, creuarem la via i enfilarem les pistes de terra que ens endinsaran al parc dels Colls Miralpeix.
          </p>
          <p className='py-5'>
          El recorregut te dues pujades no gaire llargues però si que són exigents si voleu córrer! Hi ha trams de baixada que són tècnics i per tant cal anar en compte. A partir del cinquè quilòmetre vorejarem la costa Vilanovina fins arribar a la línia d’arribada altra vegada a la platja del far.
          </p>
          <a 
          href='https://es.wikiloc.com/rutas-carrera-por-montana/cursa-dels-colls-curta-2019-32486083' 
          target='_blank' 
          className="block font-bold text-3xl text-curta text-start my-5"
          >
            Track de la Curta
          </a>
          <img src={AltCurta} alt="altimetria Curta" />
        </div>

        <Title>
          recorregut de la Llarga
        </Title>
        <div className="w-full lg:max-w-[1000px] mx-auto pb-20 pt-5 px-3 border-l-8 border-l-llarga">
          <p className='py-5'>
          La Llarga és una prova que consta de gairebé 15 km amb un desnivell aproximat de 500 metres positius. Un autèntic trencacames que puja i baixa els turons que tenim a tocar del mar entre Vilanova i Sitges. La línia de sortida es realitzarà al costat de la platja del far de Vilanova, una sortida ràpida en asfalt que a partir del primer quilòmetre ja busca les pistes de terra que ens endinsen al parc dels Colls Miralpeix.
          </p>
          <p className='py-5'>
          A partir del tercer quilòmetre el recorregut és tècnic i exigent i seguirem els corriols de pujada i baixada on ja es fan difícils els avançaments. Destaquem la pujada a Miralpeix com la més exigent, llarga i mítica de la prova, us animem a no defallir! A partir del quilòmetre deu podrem anar gaudint d’un paisatge totalment marítim ja que es voreja fins a l’arribada tota la línia de la costa. L’arribada es realitzarà a la Platja del Far de Sant Cristòfol, un paratge protegit impressionant a tocar de la sorra.
          </p>
          <a 
          href='https://es.wikiloc.com/rutas-carrera-por-montana/track-cursa-llarga-colls-2019-32642443' 
          target='_blank'
          className="block font-bold text-3xl text-llarga text-start my-5"
          >
            Track de la Llarga
          </a>
          <img src={AltLlarga} alt="altimetria Llarga" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default recorreguts