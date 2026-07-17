import { newbieProjects } from './newbie';
import { juniorProjects } from './junior';
import { intermediateProjects } from './intermediate';
import descriptions from './descriptions.json';

const normalizeDescription = (entry) => {
  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  if (typeof entry === 'string') return [entry];
  if (Array.isArray(entry.bullets)) return entry.bullets;
  if (entry.title) return [entry.title];
  return [];
};

const withMeta = (projects) => {
  let markedFeatured = false;
  return projects.map((p) => {
    const isFeatured = !markedFeatured;
    markedFeatured = true;
    return {
      ...p,
      description: normalizeDescription(descriptions[p.href]),
      descriptionTitle: descriptions[p.href]?.title || '',
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
