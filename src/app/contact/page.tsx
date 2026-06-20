import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name} para oportunidades laborales o proyectos.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Contacto</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          ¿Tienes algún proyecto en mente o quieres trabajar juntos? ¡Escríbeme!
        </p>

        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}