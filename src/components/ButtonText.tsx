function ButtonText({isFollowing}: {isFollowing: boolean}) {
  return (
    <>
      <span className="tw-followCard-text">{isFollowing ? "Following" : "Follow"}</span>
      <span className="tw-followCard-stopFollow">Unfollow</span>
    </>
  )
}

export default ButtonText;