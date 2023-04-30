const prefix = 'USER';
export const userKeyFactory = {
  allUsers: (searchPhrase: string) => [
    prefix,
    searchPhrase.length > 2 ? searchPhrase : 'all',
  ],
  userById: (userId: number) => [prefix, 'id', `${userId}`],
} as const;
