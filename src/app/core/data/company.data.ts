import { Branch } from '../models/branch.model';

export const COMPANY_DATA = {
  name: '3 Poderes Centro Automotivo',
  tagline: 'Sua oficina mecânica de confiança em Uberlândia',
  description: 'Na 3 Poderes, seu carro é tratado com seriedade, transparência e qualidade real. Sem empurrar serviço, sem enrolação!',
  yearFounded: 2020,
  mainLogo: '/images/mainLogo.png',
  bannerImage: '/images/hdBanner.jpg',
  aboutBanner: '/images/headerBanner.jpeg',
  videoUrl: '/videos/mainVideo.mp4',
  branches: [
    {
      id: 'canaa',
      name: 'Unidade Canaã',
      badge: 'Unidade 1',
      address: 'Avenida Babel, 121',
      neighborhood: 'Jardim Canaã',
      cityState: 'Uberlândia - MG',
      phoneDisplay: '(34) 99644-1060',
      phoneRaw: '5534996441060',
      whatsappUrl: 'https://wa.me/5534996441060?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20Unidade%20Cana%C3%A3.',
      mapsUrl: 'https://www.google.com/maps/place/Av.+Babel,+121+-+Jardim+Cana%C3%A3,+Uberl%C3%A2ndia+-+MG',
      hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00'
    },
    {
      id: 'tubalina',
      name: 'Unidade Chácaras Tubalina',
      badge: 'Unidade 2',
      address: 'Avenida Dimas Machado, 60',
      neighborhood: 'Chácaras Tubalina',
      cityState: 'Uberlândia - MG',
      phoneDisplay: '(34) 99966-6729',
      phoneRaw: '5534999666729',
      whatsappUrl: 'https://wa.me/5534999666729?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20Unidade%20Tubalina.',
      mapsUrl: 'https://www.google.com/maps/place/Av.+Dimas+Machado,+60+-+Ch%C3%A1caras+Tubalina,+Uberl%C3%A2ndia+-+MG',
      hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00'
    }
  ] as Branch[]
};
