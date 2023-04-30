const prefix = 'USER';
export const userKeyFactory = {
  allUsers: (filter?: number) => [prefix, filter ? filter : 'all'],
  userById: (userId: number) => [prefix, 'id', `${userId}`],
} as const;
