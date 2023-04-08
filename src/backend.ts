import { User } from "./interfaces";

export const initialUsers: Array<User> = [
    {
      id: 0,
      userName: 'Docker',
      fullName: 'Docker',
      isFollowing: false,
    },
    {
      id: 1,
      userName: 'kubernetespod',
      fullName: 'kubernetespod',
      isFollowing: true,
    },
    {
      id: 2,
      userName: 'taylorswift13',
      fullName: 'Taylor Swift',
      isFollowing: true,
    },
    {
      id: 3,
      userName: 'InstitutoACC',
      fullName: 'Instituto ACC',
      isFollowing: false,
    },
    {
      id: 4,
      userName: 'samucancld',
      fullName: 'samuel',
      isFollowing: true,
    }
  ]