import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { contactInfo, socialLinks } from "@/lib/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema)
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pela sua mensagem! Entrarei em contato em breve.",
      });
      reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Ocorreu um erro. Tente novamente.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vamos Trabalhar Juntos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estou sempre interessado em novos projetos e oportunidades. Entre em contato para discutirmos como posso ajudar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{info.title}</h4>
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-slate-900 mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                  >
                    <i className={`${social.icon} text-white text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Assunto da mensagem"
                  {...register("subject")}
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Sua mensagem..."
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
