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
      title: "Веб-приложение Dashboard",
      description: "Минималистичное веб-приложение с фокусом на пользовательский опыт",
      image: "https://cdn.poehali.dev/projects/57f11e74-b7e1-43b6-88c9-0ee462c175ce/files/74c657c4-b4fb-412a-9a00-4543302d59e2.jpg"
    },
    {
      title: "Мобильное приложение",
      description: "Современный интерфейс для управления данными",
      image: "https://cdn.poehali.dev/projects/57f11e74-b7e1-43b6-88c9-0ee462c175ce/files/3a4245f7-41a0-46db-9d50-2f4cb67b67ab.jpg"
    },
    {
      title: "E-commerce платформа",
      description: "Адаптивный дизайн для мобильных устройств",
      image: "https://cdn.poehali.dev/projects/57f11e74-b7e1-43b6-88c9-0ee462c175ce/files/4f847f2c-9a38-4235-8f76-67382360ac1a.jpg"
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
          <div className="grid md:grid-cols-2 gap-0 border border-black">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Иван Сидоров</h1>
              <p className="text-xl md:text-2xl font-light text-muted-foreground">Developer / Designer</p>
            </div>
            <div className="border-l border-black">
              <img 
                src="https://cdn.poehali.dev/projects/57f11e74-b7e1-43b6-88c9-0ee462c175ce/files/5838678b-ce07-497b-9710-c3023a76974a.jpg" 
                alt="Portfolio" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
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
              <Card key={index} className="border border-black rounded-none overflow-hidden hover:translate-x-2 transition-transform">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover min-h-[200px]"
                    />
                  </div>
                  <div className="md:col-span-2 p-8 border-l border-black">
                    <h3 className="text-2xl font-light mb-3">{project.title}</h3>
                    <p className="text-muted-foreground font-light">{project.description}</p>
                    <Button 
                      variant="outline" 
                      className="mt-6 rounded-none border-black hover:bg-black hover:text-white transition-colors"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
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