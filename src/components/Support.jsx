import logopedas from "../assets/images/logopedas.png";

const Support = () => {

  return (
    <div id="que-es" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
  <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center gap-8">
    {/* Thumbnail */}
    <div className="flex justify-center w-full md:w-1/3">
      <img
        src={logopedas}
        alt="Video Placeholder"
        className="w-100 h-auto rounded-xl" // Ajuste del tamaño de la imagen
      />
    </div>
    {/* Text Content */}
    <div className="flex items-center justify-center md:w-2/3">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ¿Quién prepara el contenido que usa tu niño?
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-justify">
          Lo preparan neuropediatras, logopedas y otros especialistas en salud. Cada material se arma pensando en lo que el profesional está trabajando con tu hijo, para que puedas acompañar ese trabajo también en casa.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Support;
