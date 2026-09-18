import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

// Requisito de Google Play: esta pagina tiene que ser publica, abrirse
// sin iniciar sesion y decir quien desarrolla la app, que datos se
// borran, cuales se conservan y por cuanto tiempo.
const APP = "TSpeak";
const DESARROLLADOR = "TSPEAK S.A.C.S.";
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
    `Hola,\n\nSolicito la eliminación de mi cuenta de ${APP} y de todos mis datos.\n\n` +
      "Correo de la cuenta: \n\n" +
      "Entiendo que la eliminación es inmediata e irreversible.\n"
  );

  return (
    <Layout>
      <div className="container mx-auto px-6 max-w-3xl pt-32 pb-20 font-wellfleet">
        <h1 className="font-rammetto text-3xl md:text-4xl text-gray-900">
          Eliminar tu cuenta de {APP}
        </h1>
        <p className="mt-4 text-gray-700">
          {APP} es una aplicación desarrollada por <strong>{DESARROLLADOR}</strong>.
          Aquí te explicamos cómo eliminar tu cuenta y todos los datos asociados.
          Puedes hacerlo desde la propia aplicación o escribiéndonos, sin
          necesidad de instalar ni reinstalar nada.
        </p>

        <div className="mt-6 border-l-4 border-primary bg-blue-50 p-5 rounded-r">
          <p className="text-gray-900">
            <strong>La eliminación es inmediata y no se puede deshacer.</strong>{" "}
            No hay periodo de gracia ni forma de recuperar la cuenta ni el
            contenido después de confirmarla. Si quieres conservar tu material,
            expórtalo desde la aplicación antes de continuar.
          </p>
        </div>

        <Seccion titulo="Cómo eliminar tu cuenta desde la aplicación">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Inicia sesión en {APP} con la cuenta que quieres eliminar.</li>
            <li>
              Abre el <em>Menú</em> y entra en <em>Eliminar cuenta</em>.
            </li>
            <li>
              Revisa la lista de lo que se va a borrar y exporta tu contenido si
              lo necesitas.
            </li>
            <li>Confirma con tu contraseña.</li>
          </ol>
          <p>
            En cuanto confirmas, la cuenta se cierra en todos tus dispositivos y
            los datos se eliminan de nuestros sistemas.
          </p>
        </Seccion>

        <Seccion titulo="Cómo solicitarlo por correo">
          <p>
            Si no puedes acceder a la aplicación, escríbenos desde la dirección
            de correo con la que registraste tu cuenta y la eliminaremos por ti.
            Necesitamos que el mensaje venga de ese correo para confirmar que la
            cuenta es tuya.
          </p>
          <div className="mt-5">
            <a
              href={`mailto:${CORREO}?subject=${asunto}&body=${cuerpo}`}
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-full hover:opacity-80 transition-all duration-300"
            >
              Solicitar la eliminación por correo
            </a>
            <p className="mt-2 text-sm text-gray-600">
              O escribe directamente a{" "}
              <a className="text-primary-dark underline" href={`mailto:${CORREO}`}>
                {CORREO}
              </a>
              . Respondemos dentro de los siguientes días hábiles.
            </p>
          </div>
        </Seccion>

        <Seccion titulo="Qué datos se eliminan">
          <ul className="list-disc pl-6 space-y-1">
            <li>Tu cuenta: correo, nombre y los datos de tu perfil.</li>
            <li>
              Los perfiles de los niños que administras y tus vínculos con ellos.
            </li>
            <li>Las rutinas y actividades que hayas creado o asignado.</li>
            <li>
              El contenido que creaste: categorías, materiales y pictogramas.
            </li>
            <li>Las fotos, los videos y los audios que hayas subido o grabado.</li>
            <li>Tus sesiones abiertas en todos los dispositivos.</li>
            <li>Las notificaciones pendientes de envío.</li>
          </ul>
          <p>
            El contenido de un perfil que compartes con otra persona no se
            elimina mientras esa persona siga vinculada a él: solo desaparece tu
            acceso. Cuando ya no queda nadie vinculado, ese contenido también se
            elimina.
          </p>
        </Seccion>

        <Seccion titulo="Qué se conserva y por cuánto tiempo">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Copias de seguridad.</strong> Los datos pueden seguir
              apareciendo en las copias de seguridad cifradas del sistema hasta
              que se sobrescriben en su ciclo normal de rotación. Estas copias no
              se usan para restaurar cuentas eliminadas.
            </li>
            <li>
              <strong>Registros de seguridad.</strong> Guardamos un registro de
              que la eliminación se realizó, con identificadores internos y
              fechas. No contiene datos que permitan saber quién eras y existe
              para poder demostrar que atendimos tu solicitud.
            </li>
            <li>
              <strong>Documentación exigida por ley.</strong> Si alguna norma nos
              obliga a conservar determinada documentación, la mantenemos solo
              durante el plazo que esa norma exija.
            </li>
          </ul>
        </Seccion>

        <Seccion titulo="Contacto">
          <p>
            Cualquier duda sobre tus datos:{" "}
            <a className="text-primary-dark underline" href={`mailto:${CORREO}`}>
              {CORREO}
            </a>
            . Puedes revisar también nuestra{" "}
            <Link className="text-primary-dark underline" to="/privacy-policy">
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
