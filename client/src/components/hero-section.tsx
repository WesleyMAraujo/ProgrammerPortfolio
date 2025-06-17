import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Olá, eu sou{" "}
              <span className="text-primary">Wesley Monteiro</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Especializado em desenvolvimento web moderno, transformando ideias em experiências digitais excepcionais usando as mais recentes tecnologias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-blue-700">
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">Disponível para projetos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
