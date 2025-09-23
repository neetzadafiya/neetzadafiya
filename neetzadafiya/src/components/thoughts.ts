interface Thought {
  title: string;
  description: string;
  icon: 'figma' | 'research' | 'prototype';
}

export const inspirationalThoughts: Thought[] = [
  {
    title: "Human-Centered Design",
    description: "I focus on designing with real users in mind — research-driven, empathetic, and measurable. Great products start with understanding people.",
    icon: "research"
  },
  {
    title: "Pixel-Perfect Visuals",
    description: "I craft clean visual systems and typography that communicate clearly and strengthen brand trust across devices.",
    icon: "figma"
  },
  {
    title: "Rapid Prototyping",
    description: "I iterate fast with interactive prototypes to validate ideas early and reduce development risk.",
    icon: "prototype"
  },
];