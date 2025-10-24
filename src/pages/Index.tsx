import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    { name: "React", icon: "Code" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "UI/UX Design", icon: "Palette" },
    { name: "Node.js", icon: "Server" }
  ];

  const projects = [
    {
      title: "Project One",
      description: "Минималистичное веб-приложение с фокусом на пользовательский опыт"
    },
    {
      title: "Project Two",
      description: "Современный интерфейс для управления данными"
    },
    {
      title: "Project Three",
      description: "Адаптивный дизайн для мобильных устройств"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-black z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-light tracking-wider">PORTFOLIO</a>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-sm hover:opacity-50 transition-opacity">Главная</a>
              <a href="#about" className="text-sm hover:opacity-50 transition-opacity">Обо мне</a>
              <a href="#skills" className="text-sm hover:opacity-50 transition-opacity">Навыки</a>
              <a href="#projects" className="text-sm hover:opacity-50 transition-opacity">Проекты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-black p-12 md:p-20">
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Ваше Имя</h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground">Developer / Designer</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light mb-8 tracking-wide">Обо мне</h2>
          <div className="border-l-2 border-black pl-8">
            <p className="text-lg font-light leading-relaxed mb-4">
              Создаю минималистичные интерфейсы с фокусом на функциональность и эстетику.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Работаю с современными технологиями для создания быстрых и удобных веб-приложений.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light mb-12 tracking-wide">Навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="border border-black p-6 hover:bg-secondary transition-colors">
                <div className="flex items-center gap-4">
                  <Icon name={skill.icon} size={24} />
                  <span className="text-lg font-light">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light mb-12 tracking-wide">Проекты</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="border border-black rounded-none p-8 hover:translate-x-2 transition-transform">
                <h3 className="text-2xl font-light mb-3">{project.title}</h3>
                <p className="text-muted-foreground font-light">{project.description}</p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-none border-black hover:bg-black hover:text-white transition-colors"
                >
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light">© 2024 Portfolio</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
