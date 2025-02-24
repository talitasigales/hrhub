import React from 'react';
import { Search, Users } from 'lucide-react';
import { consultants } from './data';
import { ConsultantCard } from './components/ConsultantCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Users className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">HR.Hub</h1>
      </div>
      <a
        href="https://typeform.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        SER UM PARTNER
      </a>
    </div>
  </div>
</nav>


      {/* Hero Search Section */}
      <section className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blog.ipog.edu.br/wp-content/uploads/2017/06/shutterstock-164063837-16416161-920x368.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-950/95 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
          A conexão entre os seus desafios de gestão de pessoas e os melhores consultores de RH do país
          </h2>
          <p className="text-xl text-blue-100 mb-8">
          Encontre o profissional certo para impulsionar os resultados da sua empresa.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquise pelo seu desafio de RH (ex: desenvolvimento de líderes, recrutamento, turnover)."
                className="w-full px-6 py-4 text-lg border-0 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white/10 backdrop-blur-md text-white placeholder-gray-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-blue-100">
              <span>Buscas populares:</span>
              <button className="hover:text-white transition-colors">Recrutamento</button>
              <span>•</span>
              <button className="hover:text-white transition-colors">Desenvolvimento de Líderes</button>
              <span>•</span>
              <button className="hover:text-white transition-colors">Gestão de Desempenho</button>
              <span>•</span>
              <button className="hover:text-white transition-colors">Turnover</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Consultores em Destaque</h2>
          <p className="text-gray-800 max-w-3xl">
            Conecte-se com consultores de RH experientes e que podem ajudar a transformar sua organização.
            Nossos parceiros são especialistas em diversas áreas de gestão de recursos humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((consultant) => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 HR.Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;