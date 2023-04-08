import { User } from "../interfaces";
import { Dispatch, SetStateAction } from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import FollowButton from "./FollowButton";

interface FollowCardProps extends User {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

export function FollowCard({id, userName, fullName, isFollowing, users, setUsers}: FollowCardProps) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <Avatar userName={userName}/>
        <UserInfo userName={userName} fullName={fullName}/>
      </header>
      <aside>
        <FollowButton users={users} isFollowing={isFollowing} id={id} setUsers={setUsers}/>
      </aside>
    </article>
  );
}
