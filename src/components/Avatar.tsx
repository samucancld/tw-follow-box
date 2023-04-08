import { iconUrl }  from '../helpers'

function Avatar({userName}: {userName: string}) {
  return <img className="tw-followCard-avatar" src={iconUrl(userName)} />;
}

export default Avatar;
