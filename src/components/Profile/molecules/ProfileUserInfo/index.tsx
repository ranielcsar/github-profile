import ProfileName from '../../atoms/ProfileName'
import ProfileUsername from '../../atoms/ProfileUsername'
import ProfileBio from '../../atoms/ProfileBio'

import './styles.scss'

type Props = {
  name: string
  username: string
  bio: string
}

function ProfileUserInfo({ name, username, bio }: Props) {
  return (
    <section className="profile-user-info">
      <ProfileName name={name} />
      <ProfileUsername username={username} />
      <ProfileBio bio={bio} />
    </section>
  )
}

export default ProfileUserInfo
