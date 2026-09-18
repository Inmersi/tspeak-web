import imageBg from "../assets/images/main.png";
import GooglePlayButton from "./GooglePlayButton";

const MainSection = () => {
  return (
    <div id="inicio" className="relative bg-cover bg-center">
      <div className="container mx-auto h-full flex flex-col justify-center items-center mt-44">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-9/12 gap-8">

          {/* Columna izquierda */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl text-gray-800 leading-tight pb-5">
            <span className="text-primary font-rammetto text-5xl">TSpeak</span>{" "}
            <span className="font-bold">
              Apoyo a la intervención terapéutica para niños de 3 a 9 años
            </span>
          </h1>

            <p className="text-base sm:text-lg text-gray-600 pb-5">
              Una herramienta que acompaña el trabajo de terapeutas y familias en
              tres áreas: lenguaje, conducta y emociones, y aprendizaje. Reúne en
              un solo lugar el material que el especialista prepara para cada niño.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <GooglePlayButton />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="md:w-1/2 flex justify-end items-center">
            <img
              src={imageBg}
              alt="Niño usando TSpeak en una tableta"
              className="w-100 h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainSection;
