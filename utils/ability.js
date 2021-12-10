import { createContext } from 'react';
import { AbilityBuilder, Ability, defineAbility } from '@casl/ability';

export const AbilityContext = createContext();

export const Subject = {
  AuthRequiredFeature: 'AuthRequiredFeature',
};

// NOTE: manage and all are special keywords in CASL. manage represents any action and all represents any subject.

export const initAbility = defineAbility((can, cannot) => {
  cannot('manage', Subject.AuthRequiredFeature);
});

export const updateAbilityByUser = (ability, user) => {
  const { can, rules } = new AbilityBuilder(Ability);

  if (user.role === 'Super-Admin') can('manage', 'all');

  ability.update(rules);
};

export const updateAbilityByAuthToken = (ability, token) => {
  const { can, rules } = new AbilityBuilder(Ability);

  can('manage', Subject.AuthRequiredFeature);

  ability.update(rules);
};
