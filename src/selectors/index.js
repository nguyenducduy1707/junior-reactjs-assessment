import { createSelector } from 'reselect';

export const selectSelectedHeroId = createSelector(
  (heroes, selectedId) => heroes[selectedId],
);
