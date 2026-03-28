// Mock data para SGP Construções

export const companyInfo = {
  name: "SGP - Construções, Lda.",
  tagline: "Construindo o seu futuro com qualidade e confiança",
  address: "R. Madrid, 2415-000 Leiria",
  phone: "915966433",
  email: "sgpcontrucoes24@gmail.com",
  nif: "215 988 787",
  schedule: {
    weekdays: "Segunda a Sexta-feira: 9:30 - 18:30",
    weekend: "Sábado e Domingo: Encerrado"
  },
  logo: "https://customer-assets.emergentagent.com/job_2dba2286-a4aa-4bc4-bca0-89f9a4d46df6/artifacts/tn053dku_Captura%20de%20ecr%C3%A3%202026-03-24%20222946.png"
};

export const services = [
  {
    id: 1,
    title: "Pintura de Edifícios",
    description: "Serviços profissionais de pintura exterior e interior para edifícios residenciais e comerciais. Utilizamos materiais de alta qualidade para garantir durabilidade e acabamento perfeito.",
    image: "https://images.unsplash.com/photo-1759406066673-f76869a4e6db",
    features: [
      "Pintura exterior e interior",
      "Preparação de superfícies",
      "Materiais de qualidade premium",
      "Acabamento profissional",
      "Garantia de trabalho"
    ]
  },
  {
    id: 2,
    title: "Pavimentação e Drenagem",
    description: "Especialistas em pavimentação e instalação de sistemas de drenagem. Soluções completas para estradas, estacionamentos e canais de drenagem eficientes.",
    image: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/opwk3eqf_475438775_543367105392519_2870825394312428195_n.jpg",
    features: [
      "Canais de drenagem",
      "Pavimentos de betão",
      "Estacionamentos",
      "Soluções de escoamento",
      "Trabalhos em pedra"
    ]
  },
  {
    id: 3,
    title: "Lavagem e Tratamento de Telhados",
    description: "Limpeza profissional e tratamento de telhados. Removemos musgos, líquenes e sujidade, prolongando a vida útil do seu telhado e melhorando a estética do edifício.",
    image: "https://images.unsplash.com/photo-1635424710918-d5c138981922",
    features: [
      "Lavagem de telhados",
      "Remoção de musgos",
      "Tratamento anti-humidade",
      "Impermeabilização",
      "Manutenção preventiva"
    ]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Pintura Edifício Residencial",
    category: "Pintura",
    afterImage: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/bbubilki_475461958_543366968725866_2261055939045929780_n.jpg",
    description: "Pintura exterior completa de edifício residencial",
    hasBeforeAfter: false
  },
  {
    id: 2,
    title: "Pavimentação e Sistema de Drenagem",
    category: "Pavimentação",
    afterImage: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/opwk3eqf_475438775_543367105392519_2870825394312428195_n.jpg",
    description: "Pavimentação com canal de drenagem integrado",
    hasBeforeAfter: false
  },
  {
    id: 3,
    title: "Lavagem e Tratamento de Telhado",
    category: "Telhados",
    beforeImage: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/fcufoiw4_475971976_544896985239531_4366768517566800410_n.jpg",
    afterImage: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/r682b2qj_475790344_544897061906190_2448852269852246652_n.jpg",
    description: "Lavagem profunda e tratamento anti-humidade de telhado",
    hasBeforeAfter: true
  },
  {
    id: 4,
    title: "Pintura Fachada de Edifício",
    category: "Pintura",
    afterImage: "https://customer-assets.emergentagent.com/job_build-modern-leiria/artifacts/6gzg2dyr_475056686_541438622252034_9172766005836072019_n.jpg",
    description: "Renovação completa da fachada de edifício",
    hasBeforeAfter: false
  }
];

export const stats = [
  { number: "15+", label: "Anos de Experiência" },
  { number: "500+", label: "Projetos Concluídos" },
  { number: "100%", label: "Clientes Satisfeitos" },
  { number: "24/7", label: "Suporte Disponível" }
];

export const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "Proprietário",
    text: "Excelente trabalho na pintura do meu edifício. Equipa profissional e pontual. Recomendo!",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Gestora de Condomínio",
    text: "A SGP fez um trabalho impecável na pavimentação e drenagem. Muito satisfeita com o resultado.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Pereira",
    role: "Proprietário",
    text: "Serviço de lavagem de telhados excelente. O meu telhado ficou como novo!",
    rating: 5
  }
];

export const heroImages = [
  "https://www.gettyimages.pt/detail/foto/portrait-of-engineer-reading-plans-on-construction-imagem-royalty-free/1311801651"
];

// Mock para mensagens de contacto (frontend only)
export const mockContactSubmissions = [];

export const addContactSubmission = (data) => {
  const submission = {
    id: Date.now(),
    ...data,
    timestamp: new Date().toISOString()
  };
  mockContactSubmissions.push(submission);
  return submission;
};
