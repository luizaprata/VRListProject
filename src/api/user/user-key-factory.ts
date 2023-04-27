export const userKeyFactory = {
  allUsers: ['users'],
  userById: (userId: number) => [...userKeyFactory.allUsers, `${userId}`],
} as const;
