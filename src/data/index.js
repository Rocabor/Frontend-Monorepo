import { newbieProjects } from './newbie';
import { juniorProjects } from './junior';
import { intermediateProjects } from './intermediate';
import descriptions from './descriptions.json';

const withMeta = (projects) => {
  let markedFeatured = false;
  return projects.map((p) => {
    const isFeatured = !markedFeatured;
    markedFeatured = true;
    return {
      ...p,
      description: descriptions[p.href]?.bullets || [],
      descriptionTitle: descriptions[p.href]?.title || p.title,
      tags: p.technologies || [],
      isFeatured,
    };
  });
};

export const allProjects = {
  Newbie: withMeta(newbieProjects),
  Junior: withMeta(juniorProjects),
  Intermediate: withMeta(intermediateProjects),
  Advanced: [],
};
