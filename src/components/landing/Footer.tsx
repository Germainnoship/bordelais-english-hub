
export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-gradient-to-t from-blue-100 via-white to-white">
      <div className="container max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 mx-auto text-sm text-gray-700">
        <div>
          <b>Bordelais English Hub</b> <span className="ml-2">| Bordeaux</span>
        </div>
        <div>
          Contact : <a href="mailto:contact@english-hub.fr" className="text-blue-700 underline hover:text-violet-700 transition">contact@english-hub.fr</a>
        </div>
        <div className="text-gray-400">&copy; {new Date().getFullYear()} Tous droits réservés</div>
      </div>
    </footer>
  );
}
