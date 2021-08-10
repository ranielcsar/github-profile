import { ProfileProps } from '../../types'
import ProfileImage from './atoms/ProfileImage'
import ProfileStatus from './atoms/ProfileStatus'
import ProfileName from './atoms/ProfileName'
import ProfileUsername from './atoms/ProfileUsername'
import ProfileBio from './atoms/ProfileBio'
import EditProfileButton from './atoms/EditProfileButton'

type Props = {
  data?: ProfileProps
}

function Profile({ data }: Props) {
  return (
    <section className="profile">
      <ProfileImage image={'https://avatars.githubusercontent.com/u/20558676?v=4'} name="Raniel">
        <ProfileStatus icon={'🚀'} status={'muita nave pra pouco universo'} />
      </ProfileImage>

      <ProfileName name="Raniel" />
      <ProfileUsername username="ranielcsar" />
      <ProfileBio bio="music // code" />

      <EditProfileButton title={'Edit profile'} />
    </section>
  )
}

export default Profile
