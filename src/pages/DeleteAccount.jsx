import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

// TODO (pendiente antes de publicar): confirmar con el equipo cuántos
// días retienen los respaldos. pgBackRest está configurado por número
// de backups, no por días, así que este número todavía no está
// verificado y la política de privacidad tiene que declarar el real.
const DIAS_RETENCION_RESPALDOS = 30;

const CORREO = "privacidad@tspeak.app";

const Seccion = ({ titulo, children }) => (
  <section className="mt-10">
    <h2 className="font-rammetto text-xl text-gray-900">{titulo}</h2>
    <div className="mt-3 space-y-3 text-gray-700">{children}</div>
  </section>
);

const DeleteAccount = () => {
  const asunto = encodeURIComponent("Solicitud de eliminación de cuenta");
  const cuerpo = encodeURIComponent(
    "Hola,\n\nSolicito la eliminación de mi cuenta de Tspeak y de todos mis datos.\n\n" +
      "Correo de la cuenta: \n\n" +
      "Entiendo que la eliminación es inmediata e irreversible.\n"
  );

  return (
    <Layout>
      <div className="container mx-auto px-6 md:w-9/12 pt-32 pb-20 font-wellfleet">
        <h1 className="font-rammetto text-3xl md:text-4xl text-gray-900">
          Eliminar tu cuenta de Tspeak
        </h1>
        <p className="mt-4 text-gray-700">
          Tspeak, desarrollada por Inmersi, te permite eliminar tu cuenta y
          todos los datos asociados. Puedes hacerlo desde la aplicación o
          escribiéndonos, sin necesidad de instalar ni reinstalar nada.
        </p>

        <div className="mt-6 border-l-4 border-primary bg-blue-50 p-5 rounded-r">
          <p className="text-gray-900">
            <strong>La eliminación es inmediata e irreversible.</strong> No hay
            periodo de gracia ni forma de recuperar la cuenta ni el contenido
            después de confirmarla. Si quieres conservar tu material, expórtalo
            desde la aplicación antes de continuar.
          </p>
        </div>

        <Seccion titulo="Cómo solicitar la eliminación">
          <p>
            <strong>Desde la aplicación:</strong> abre el <em>Menú</em>, entra en{" "}
            <em>Eliminar cuenta</em>, revisa lo que se va a borrar, exporta tu
            contenido si lo necesitas y confirma con tu contraseña.
          </p>
          <p>
            <strong>Desde la web:</strong> escríbenos desde el correo con el que
            registraste tu cuenta y la eliminaremos por ti.
          </p>
          <div className="mt-5">
            <a
              href={`mailto:${CORREO}?subject=${asunto}&body=${cuerpo}`}
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300"
            >
              Solicitar la eliminación por correo
            </a>
            <p className="mt-2 text-sm text-gray-600">
              O escribe directamente a{" "}
              <a className="underline" href={`mailto:${CORREO}`}>
                {CORREO}
              </a>
              .
            </p>
          </div>
        </Seccion>

        <Seccion titulo="Qué datos se eliminan">
          <ul className="list-disc pl-6 space-y-1">
            <li>Tu cuenta: correo, nombre y los datos de tu perfil.</li>
            <li>
              El contenido que creaste: categorías, materiales y rutinas.
            </li>
            <li>
              Los archivos asociados: fotos, pictogramas, videos y audio.
            </li>
            <li>Los perfiles que administras y tus vínculos con ellos.</li>
            <li>Tus sesiones abiertas en todos los dispositivos.</li>
            <li>Las notificaciones pendientes de envío.</li>
          </ul>
          <p>
            El contenido de un perfil compartido con otra persona no se elimina
            mientras esa persona siga vinculada a él: solo desaparece tu acceso.
            Cuando ya no queda nadie vinculado, ese contenido también se elimina.
          </p>
        </Seccion>

        <Seccion titulo="Qué se conserva y por qué">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Un registro de que la eliminación se realizó, con identificadores
              internos y fechas. No permite reconstruir quién eras y existe para
              poder demostrar el cumplimiento.
            </li>
            <li>
              Copias en respaldos cifrados del sistema, hasta que rotan, como
              máximo {DIAS_RETENCION_RESPALDOS} días.
            </li>
          </ul>
        </Seccion>

        <Seccion titulo="Plazo">
          <p>
            La eliminación se ejecuta de inmediato. En cuanto la confirmas dejas
            de poder iniciar sesión y tus datos se eliminan de nuestros sistemas.
            Las solicitudes recibidas por correo se atienden dentro de los
            siguientes días hábiles.
          </p>
        </Seccion>

        <Seccion titulo="Contacto">
          <p>
            Cualquier duda sobre tus datos:{" "}
            <a className="underline" href={`mailto:${CORREO}`}>
              {CORREO}
            </a>
            . Puedes revisar también nuestra{" "}
            <Link className="underline" to="/privacy-policy">
              Política de Privacidad
            </Link>
            .
          </p>
        </Seccion>
      </div>
    </Layout>
  );
};

export default DeleteAccount;
