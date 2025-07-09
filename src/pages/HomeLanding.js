import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomeLanding() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: '📞',
      title: 'Appels audio',
      desc: 'Communication claire et stable',
      detail:
        'Grâce au protocole WebRTC et aux serveurs optimisés, nos appels audio offrent une qualité professionnelle sans coupure, même avec des connexions moyennes.',
    },
    {
      icon: '🎥',
      title: 'Appels vidéo HD',
      desc: 'Qualité haute définition garantie',
      detail:
        'Nos appels vidéo HD vous permettent de voir vos clients et collègues en qualité optimale. Idéal pour les réunions à distance.',
    },
    {
      icon: '💬',
      title: 'Chat instantané',
      desc: 'Messages directs ou en groupe',
      detail:
        'Envoyez des messages en temps réel avec accusé de réception, pièces jointes, emojis et plus encore.',
    },
    {
      icon: '🤝',
      title: 'Conférences',
      desc: 'Réunions en ligne puissantes',
      detail:
        'Organisez des conférences avec plusieurs participants avec partages d’écran, notes et modérateurs.',
    },
    {
      icon: '🌍',
      title: 'Traduction IA',
      desc: 'Traduction temps réel',
      detail:
        'Traduisez automatiquement vos conversations dans plus de 30 langues grâce à l’IA intégrée (OpenAI, Whisper, DeepSeek).',
    },
    {
      icon: '🔐',
      title: 'Sécurité',
      desc: 'Chiffrement et confidentialité',
      detail:
        'Toutes vos communications sont protégées avec un chiffrement de bout en bout, conformité RGPD et audits réguliers.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800 overflow-hidden">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-5 shadow bg-white">
        <h1 className="text-2xl font-bold text-indigo-700">B2BNet</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:underline"
          >
            Se connecter
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            S’inscrire
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12 relative">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left z-10"
        >
          <h2 className="text-5xl font-extrabold text-indigo-800 mb-6 leading-tight">
            Connectez, <br /> Collaborez, Innover.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            La plateforme VoIP moderne pour les petites entreprises : appels audio, vidéo HD, chat, conférence, traduction IA en temps réel.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button
              onClick={() => navigate('/signup')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
              
            >
              Démarrer maintenant
            </button>
            <button
              onClick={() => navigate('/login')}
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition"
            >
              Se connecter
            </button>
          </div>
        </motion.div>

        {/* IMAGE animée 3D */}
        <motion.div
          className="relative lg:w-1/2 flex justify-center items-center"
          animate={{
            rotateY: [0, 70, -70, 0],
            rotateX: [0, 10, -10, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'easeInOut',
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src="/gradient-b2b.avif"
            alt="3D B2B"
            className="w-[400px] h-auto shadow-2xl rounded-2xl z-10"
          />

          {/* Icônes flottantes */}
          <motion.img
            src="/youtube.png"
            alt="YouTube"
            className="absolute top-[-20px] left-[-40px] w-12 h-12 opacity-80"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.img
            src="/video-call.png"
            alt="Appel"
            className="absolute bottom-[-30px] right-[-40px] w-14 h-14 opacity-90"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <motion.img
            src="/logo192.png"
            alt="Message"
            className="absolute top-[50%] right-[-50px] w-12 h-12 opacity-70"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
        </motion.div>
      </main>

      {/* FONCTIONNALITÉS */}
      <section className="bg-white py-20 px-6 relative mb-24">
      <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-indigo-800 mb-12">
            Fonctionnalités de B2BNet
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {features.map((feat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveFeature(feat)}
                className="bg-indigo-50 cursor-pointer p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="text-3xl mb-2">{feat.icon}</div>
                <h4 className="text-xl font-semibold mb-1">{feat.title}</h4>
                <p className="text-sm text-gray-600">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
          {/* SECTION AVANTAGES B2BNet */}
          <section className="bg-white py-20 px-6 relative mb-24">
          <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold text-center text-indigo-800 mb-12">
      Pourquoi choisir B2BNet ?
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Partager vos réunions facilement',
          desc: 'Envoyez un lien de réunion à vos collègues ou clients, quelle que soit la plateforme.',
          image: '/Capture1.png',
        },
        {
          title: 'Planifiez gratuitement vos appels',
          desc: 'Jusqu’à 60 minutes de réunion gratuite avec planification ou démarrage instantané.',
          image: '/capture2.png',
        },
        {
          title: 'Sous-titres en direct',
          desc: 'Affichez les paroles en direct dans plus de 40 langues, parfait pour les équipes globales.',
          image: '/capture3.png',
        },


      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
        >
          {/* image modifiable */}
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-indigo-800 mb-1">
            {item.title}
          </h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* MODALE explicative */}
        {activeFeature && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-6 text-center relative">
              <button
                onClick={() => setActiveFeature(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
              >
                ✕
              </button>
              <div className="text-4xl mb-3">{activeFeature.icon}</div>
              <h4 className="text-2xl font-bold text-indigo-700 mb-2">
                {activeFeature.title}
              </h4>
              <p className="text-gray-700">{activeFeature.detail}</p>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-50">
        © {new Date().getFullYear()} B2BNet. Tous droits réservés.
      </footer>
    </div>
  );
}
