export const userKeyFactory = {
  allUsers: ['all-users'],
  userById: (id: number) => [...userKeyFactory.allUsers, id],
} as const;
