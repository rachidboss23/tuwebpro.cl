import {
  BarChart3,
  FileText,
  Globe,
  MessageSquare,
  Repeat,
  Table2,
  type LucideIcon,
} from "lucide-react";

export type Problem = {
  /** Texto corto para el botón de respuesta rápida (móvil) */
  short: string;
  /** Frase completa del cliente */
  client: string;
  solution: string;
  benefit: string;
  icon: LucideIcon;
};

export const problems: Problem[] = [
  {
    short: "Mi web no me trae clientes",
    client: "Mi web no me trae clientes",
    solution: "Un sitio profesional con SEO, formularios y WhatsApp.",
    benefit: "Una puerta de entrada clara para quienes te buscan.",
    icon: Globe,
  },
  {
    short: "Se me pierden cotizaciones",
    client: "Se me pierden las cotizaciones y los seguimientos",
    solution: "Registro de contactos y cotizaciones con recordatorios de seguimiento.",
    benefit: "Menos oportunidades olvidadas.",
    icon: FileText,
  },
  {
    short: "Me preguntan lo mismo",
    client: "Me preguntan lo mismo todo el día",
    solution:
      "Formularios, respuestas automáticas y, cuando corresponde, asistentes con IA o bots de WhatsApp.",
    benefit: "Menos tiempo en tareas repetitivas.",
    icon: MessageSquare,
  },
  {
    short: "Todo en Excel y WhatsApp",
    client: "Tengo todo en Excel y WhatsApp",
    solution: "Un sistema que centraliza clientes, solicitudes e historial.",
    benefit: "Todo en un solo lugar, fácil de consultar.",
    icon: Table2,
  },
  {
    short: "Copio datos en 3 lugares",
    client: "Copio los mismos datos en tres lugares",
    solution: "Integraciones y automatizaciones entre tus herramientas.",
    benefit: "Menos errores y menos trabajo manual.",
    icon: Repeat,
  },
  {
    short: "No sé cómo va mi negocio",
    client: "No sé en qué va cada trabajo ni cómo va mi negocio",
    solution:
      "Un panel con el estado de cada trabajo y su historial. Dashboards con indicadores y reportes.",
    benefit:
      "Claridad sin tener que preguntar a nadie. Decisiones con la información a mano.",
    icon: BarChart3,
  },
];
