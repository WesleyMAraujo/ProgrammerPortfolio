import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skills, socialLinks } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre em busca de aprender e aplicar as melhores práticas no desenvolvimento de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern coding environment" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Experiência & Paixão</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Como desenvolvedor full stack, trabalho com uma ampla gama de tecnologias para criar soluções completas e eficientes. Minha jornada no desenvolvimento me permite oferecer desde o design da interface até a implementação do backend.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Estou sempre explorando novas tecnologias e metodologias para entregar projetos de alta qualidade que excedem as expectativas dos clientes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${skill.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{skill.category}</h4>
                  <p className="text-slate-600 text-sm">{skill.technologies}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
