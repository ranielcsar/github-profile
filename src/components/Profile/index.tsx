import { ProfileProps } from '../../types'
import ProfileImageStatus from './molecules/ProfileImageStatus'
import ProfileUserInfo from './molecules/ProfileUserInfo'
import ProfilePersonalInfos from './molecules/ProfilePersonalInfos'
import EditProfileButton from './atoms/EditProfileButton'
import ProfileFollowersFollowingStars from './atoms/ProfileFollowersFollowingStars'

import './styles.scss'

type Props = {
  data: ProfileProps
}

function Profile({ data }: Props) {
  const {
    profileImage,
    status,
    statusIcon,
    name,
    username,
    bio,
    followers,
    following,
    stars,
    location,
    email,
    website,
    twitter
  } = data

  return (
    <section className="profile">
      <ProfileImageStatus
        image={profileImage}
        statusIcon={statusIcon}
        status={status}
        name={name}
      />

      <ProfileUserInfo name={name} username={username} bio={bio} />

      <EditProfileButton title={'Edit profile'} />

      <ProfileFollowersFollowingStars followers={followers} following={following} stars={stars} />

      <ProfilePersonalInfos
        location={location}
        email={email}
        linkedin={website}
        twitter={twitter}
      />
    </section>
  )
}

export default Profile
