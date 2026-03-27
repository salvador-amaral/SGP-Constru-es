# PRD - SGP Construções Website

## Informação da Empresa
**Nome:** SGP - Construções, Lda.  
**Endereço:** R. Madrid, 2415-000 Leiria  
**Telefone:** 915966433  
**Email:** sgpcontrucoes24@gmail.com  
**NIF:** 215 988 787  
**Horário:** Segunda a Sexta-feira: 9:30-18:30 | Sábado e Domingo: Encerrado

## Objetivo do Projeto
Criar um site moderno, rápido e fluído para empresa de prestação de serviços de construção civil, destacando serviços de pintura de edifícios, pavimentação/drenagem e lavagem de telhados.

## User Personas
1. **Proprietários de Imóveis** - Procuram serviços de renovação e manutenção
2. **Gestores de Condomínios** - Necessitam de serviços de construção para edifícios
3. **Empresas Comerciais** - Procuram serviços de pavimentação e construção

## Core Requirements (Static)
- Design profissional e corporativo com cores azuis do logótipo
- Navegação fluída entre secções
- Responsivo para todos os dispositivos
- Galeria de projetos com antes/depois
- Formulário de contacto funcional
- Informações completas da empresa

## What's Been Implemented (24/03/2026)

### Frontend (CONCLUÍDO - Mock Data)
✅ **Estrutura Completa:**
- Header com navegação sticky e top info bar
- Hero Section com slider de imagens e estatísticas
- About Section com valores da empresa
- Services Section com 3 serviços principais
- Portfolio Section com galeria antes/depois e filtros
- Contact Section com formulário e informações
- Footer completo com todas as informações

✅ **Funcionalidades Frontend:**
- Navegação suave entre secções
- Slider automático de imagens no hero
- Filtros de portfolio por categoria
- Modal de visualização de projetos
- Comparação antes/depois (tabs e toggle)
- Formulário de contacto funcional (mock data)
- Design responsivo
- Animações e transições suaves

✅ **Design Implementado:**
- Cores corporativas: Navy Blue (#1e3a5f) e Primary Blue (#4a90e2)
- Tipografia: Inter font
- Componentes Shadcn UI
- Ícones Lucide React
- Micro-animações em hover states

### Mock Data (/app/frontend/src/mock.js)
- Informações da empresa
- 3 serviços principais
- 5 projetos de portfolio
- Estatísticas
- Imagens profissionais do Unsplash/Pexels

## API Contracts (Para Backend)

### Endpoints a Implementar:

#### 1. POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "pending"
}
```

#### 2. GET /api/contact (Admin - Opcional)
**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "subject": "string",
    "message": "string",
    "timestamp": "datetime",
    "status": "pending|read|replied"
  }
]
```

## MongoDB Collections

### contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  timestamp: Date,
  status: String, // 'pending', 'read', 'replied'
  createdAt: Date
}
```

## Frontend-Backend Integration Plan

### Ficheiros a Modificar:
1. **ContactSection.jsx** - Substituir mock por chamada API real
   - Remover: `addContactSubmission` do mock.js
   - Adicionar: `axios.post('${API}/contact', formData)`
   - Adicionar tratamento de erros

## Prioritized Backlog

### P0 (Essencial)
- [ ] Implementar backend para formulário de contacto
- [ ] Conectar frontend ao backend (remover mocks)
- [ ] Testar envio de mensagens e2e

### P1 (Importante)
- [ ] Email notifications quando receber contacto
- [ ] Página de admin para ver mensagens
- [ ] Validação avançada de formulários

### P2 (Nice to Have)
- [ ] Analytics e tracking de visitantes
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Integração com Google Maps real
- [ ] Blog section para notícias
- [ ] Testimonials dinâmicos
- [ ] Upload de imagens de projetos (admin)

## Next Tasks
1. ✅ Frontend completo com mock data
2. Pedir confirmação do utilizador para implementar backend
3. Criar modelos MongoDB para contactos
4. Implementar endpoint POST /api/contact
5. Integrar frontend com backend
6. Testar formulário end-to-end
7. Deploy final

## Technical Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI, Lucide Icons
- **Backend:** FastAPI, Python
- **Database:** MongoDB
- **Deployment:** Emergent Platform

## Design Guidelines Applied
✅ Professional and corporate design (blue colors from logo)
✅ No emojis for icons (using Lucide React)
✅ Inter font (not system-ui)
✅ No dark purple/blue gradients
✅ Smooth transitions and animations
✅ Proper color contrast
✅ Responsive design
✅ Header and Footer implemented
✅ Shadcn UI components used
