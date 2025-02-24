import { Consultant } from './types';

export const consultants: Consultant[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Estrategista Sênior de RH',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    specializations: ['Aquisição de Talentos', 'Relações Trabalhistas', 'Iniciativas de D&I'],
    experience: 12,
    linkedIn: 'https://linkedin.com',
    description: 'Especializada em transformar a cultura organizacional e implementar estratégias efetivas de gestão de talentos.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Consultor de Tecnologia em RH',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    specializations: ['Implementação de HRIS', 'Transformação Digital', 'Otimização de Processos'],
    experience: 8,
    linkedIn: 'https://linkedin.com',
    description: 'Especialista em modernização de operações de RH através de soluções tecnológicas e baseadas em dados.',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    title: 'Especialista em Desenvolvimento de Liderança',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    specializations: ['Coaching Executivo', 'Construção de Times', 'Gestão de Mudanças'],
    experience: 15,
    linkedIn: 'https://linkedin.com',
    description: 'Apaixonada por desenvolver futuros líderes e criar equipes de alta performance.',
  }
];