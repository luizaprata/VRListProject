const prefix = 'USER';
export const userKeyFactory = {
  allUsers: () => [prefix, 'all'],
  allUsersByName: (searchPhrase: string) => [prefix, 'name', searchPhrase],
  userById: (userId: number) => [prefix, 'id', `${userId}`],
} as const;
