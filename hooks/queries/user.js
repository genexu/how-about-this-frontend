import { useQuery } from 'react-query';
import { useAbility } from '@casl/react';
import { AbilityContext, Subject } from '@/utils/ability';
import { getUserMe } from '@/api/user';

export const useUserMe = () => {
  const ability = useAbility(AbilityContext);
  const enabled = !!ability.can('manage', Subject.AuthRequiredFeature);

  return useQuery(
    ['users', 'me'],
    async () => {
      const res = await getUserMe();
      return res.data;
    },
    { enabled },
  );
};
