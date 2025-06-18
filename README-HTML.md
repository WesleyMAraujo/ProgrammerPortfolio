# Wesley Monteiro - Portfolio HTML/CSS/JS

Portfolio profissional convertido para HTML, CSS e JavaScript puro, mantendo o mesmo design e funcionalidades.

## 🚀 Arquivos Principais

- `index.html` - Estrutura principal do site
- `styles.css` - Estilos e design responsivo
- `script.js` - Funcionalidades interativas

## ✨ Funcionalidades

- Design responsivo e moderno
- Navegação suave entre seções
- Filtros de projetos funcionais
- Formulário de contato com validação
- Animações CSS e JavaScript
- Sistema de notificações (toast)
- Menu mobile responsivo

## 🛠️ Como Usar

### Opção 1: Servidor Local
```bash
# Python 3
python3 -m http.server 8000

# Node.js (se instalado)
npx serve .

# PHP (se instalado)
php -S localhost:8000
```

### Opção 2: Hospedar Online
1. Faça upload dos arquivos para qualquer hosting
2. Funciona em: GitHub Pages, Netlify, Vercel, etc.

## 📁 Estrutura

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
└── README-HTML.md      # Documentação
```

## 🌐 Deploy Gratuito

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

### Netlify
1. Arraste a pasta para netlify.com
2. Site fica online instantaneamente

### Vercel
1. Conecte o repositório GitHub
2. Deploy automático

## 📱 Responsivo

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Personalização

### Cores (CSS Variables)
```css
:root {
    --primary-color: #3b82f6;
    --text-primary: #1e293b;
    --bg-light: #f8fafc;
}
```

### Projetos (JavaScript)
Edite o array `projects` em `script.js`:
```javascript
const projects = [
    {
        title: "Seu Projeto",
        description: "Descrição...",
        technologies: ["Tech1", "Tech2"],
        category: "web", // web, mobile, api
        githubUrl: "https://github.com/...",
        liveUrl: "https://..."
    }
];
```

### Informações Pessoais
Edite diretamente no `index.html`:
- Links sociais
- Informações de contato
- Textos e descrições

## 💻 Compatibilidade

- Chrome/Edge: 100%
- Firefox: 100%
- Safari: 100%
- IE11: Parcial (sem algumas animações)

Todas as funcionalidades funcionam sem dependências externas, exceto Font Awesome para ícones.