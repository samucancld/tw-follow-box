import { Dispatch, SetStateAction } from "react";
import { User } from "../interfaces";
import ButtonText from "./ButtonText";

function FollowButton({users, isFollowing, id, setUsers}: {
  users: User[], isFollowing: boolean, id: number, setUsers: Dispatch<SetStateAction<User[]>>
}) {
  return (
    <button className={isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"} onClick={
      () => setUsers(users.map(user => user.id === id ? { ...user, isFollowing: !isFollowing } : user))
    }><ButtonText isFollowing={isFollowing}/>
    </button>
  )
}

export default FollowButton;