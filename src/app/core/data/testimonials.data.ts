import { Testimonial } from '../models/testimonial.model';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    author: 'Carlos Eduardo Mendes',
    avatarText: 'CE',
    rating: 5,
    comment: 'Atendimento nota 10! Levei meu carro com um barulho na suspensão que nenhuma oficina achava. Identificaram na hora e só trocaram a bucha gasta. Preço super justo e transparência!',
    unit: 'Unidade Canaã',
    timeAgo: 'Há 3 semanas'
  },
  {
    id: 2,
    author: 'Mariana Silveira',
    avatarText: 'MS',
    rating: 5,
    comment: 'Oficina de extrema confiança em Uberlândia. Fizeram a revisão completa antes da minha viagem de férias. Atendimento atencioso, equipe educada e serviço entregue antes do prazo.',
    unit: 'Unidade Chácaras Tubalina',
    timeAgo: 'Há 1 mês'
  },
  {
    id: 3,
    author: 'Rafael Nogueira',
    avatarText: 'RN',
    rating: 5,
    comment: 'O alinhamento 3D deles é diferenciado, o carro ficou perfeito. Não empurram serviços desnecessários como outras oficinas fazem. Recomendo de olhos fechados!',
    unit: 'Unidade Canaã',
    timeAgo: 'Há 2 meses'
  }
];
