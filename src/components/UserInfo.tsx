function UserInfo({fullName, userName}: {fullName: string, userName: string}) {
  return (
    <>
      <div className="tw-followCard-info">
        <strong>{fullName}</strong>
        <span className="tw-followCard-infoUserName">@{userName}</span>
      </div>
    </>
  )
}

export default UserInfo