const Index = () => {
  const projects = [
    {
      title: "Project 01",
      year: "2024"
    },
    {
      title: "Project 02",
      year: "2024"
    },
    {
      title: "Project 03",
      year: "2023"
    },
    {
      title: "Project 04",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <header className="mb-32">
          <h1 className="text-6xl md:text-8xl font-light mb-4">Alex Smith</h1>
          <p className="text-xl font-light text-gray-600">Designer</p>
        </header>

        <section className="mb-32">
          <h2 className="text-sm uppercase tracking-widest mb-12 text-gray-400">Selected Work</h2>
          <div className="space-y-1">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="py-6 border-b border-gray-200 flex justify-between items-center hover:opacity-50 cursor-pointer transition-opacity"
              >
                <span className="text-2xl font-light">{project.title}</span>
                <span className="text-lg font-light text-gray-400">{project.year}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-gray-200">
          <div className="flex gap-8 text-sm font-light text-gray-600">
            <a href="mailto:hello@example.com" className="hover:text-black transition-colors">Email</a>
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
