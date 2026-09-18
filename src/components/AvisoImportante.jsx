import React from "react";

// Aviso obligatorio antes de publicar: TSpeak acompaña el trabajo de un
// profesional, no lo sustituye. Va en la portada y en lenguaje directo,
// sin tecnicismos, porque tambien lo leen familias.
const PUNTOS = [
  {
    titulo: "No realiza diagnósticos",
    texto:
      "TSpeak no evalúa ni diagnostica a ningún niño. No entrega resultados clínicos ni conclusiones sobre su desarrollo.",
  },
  {
    titulo: "No reemplaza a un profesional de la salud",
    texto:
      "Es un apoyo al trabajo del terapeuta o especialista que acompaña al niño. Las decisiones sobre su atención siempre las toma un profesional.",
  },
  {
    titulo: "No es una aplicación de emergencia",
    texto:
      "Si necesitas ayuda urgente, comunícate con los servicios de emergencia de tu localidad o acude al centro de salud más cercano.",
  },
];

const AvisoImportante = () => (
  <section id="aviso" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="mx-auto w-full md:w-9/12">
      <div className="rounded-xl border-l-4 border-primary bg-blue-50 p-6 md:p-8">
        <h2 className="font-rammetto text-2xl text-gray-900">
          Antes de empezar, es importante que sepas
        </h2>
        <dl className="mt-6 grid gap-6 md:grid-cols-3">
          {PUNTOS.map((punto) => (
            <div key={punto.titulo}>
              <dt className="font-bold text-gray-900">{punto.titulo}</dt>
              <dd className="mt-2 text-gray-700">{punto.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default AvisoImportante;
