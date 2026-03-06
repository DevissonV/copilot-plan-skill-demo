export type SlideType =
  | 'cover'
  | 'intro'
  | 'how-it-works'
  | 'generative-ai'
  | 'copilot-tour'
  | 'case-study'
  | 'prompting'
  | 'responsible'
  | 'closing';

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: 'Formación en Inteligencia Artificial',
    subtitle: 'Bienvenido/a — Una introducción práctica y sin tecnicismos',
  },
  {
    id: 2,
    type: 'intro',
    title: '¿Qué es la Inteligencia Artificial?',
    subtitle: 'Programas que aprenden de datos para tomar decisiones',
  },
  {
    id: 3,
    type: 'how-it-works',
    title: '¿Cómo funciona la IA?',
    subtitle: 'Del dato crudo a la respuesta inteligente',
  },
  {
    id: 4,
    type: 'generative-ai',
    title: 'IA Generativa',
    subtitle: 'LLMs, Modelos y Agentes',
  },
  {
    id: 5,
    type: 'copilot-tour',
    title: 'GitHub Copilot Chat',
    subtitle: 'Tu asistente de IA en el entorno de desarrollo',
  },
  {
    id: 6,
    type: 'case-study',
    title: 'Caso Práctico',
    subtitle: 'Ejemplo de uso en vivo con GitHub Copilot',
  },
  {
    id: 7,
    type: 'prompting',
    title: 'Prompting',
    subtitle: 'Cómo hablar con la IA para obtener mejores resultados',
  },
  {
    id: 8,
    type: 'responsible',
    title: 'Uso Responsable de la IA',
    subtitle: 'Buenas prácticas y límites a tener en cuenta',
  },
  {
    id: 9,
    type: 'closing',
    title: '¡Lo has conseguido!',
    subtitle: 'Resumen, recursos y próximos pasos',
  },
];
