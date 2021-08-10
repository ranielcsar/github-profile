import { ProfileProps } from '../../types'
import ProfileImage from './atoms/ProfileImage'
import ProfileStatus from './atoms/ProfileStatus'
import ProfileName from './atoms/ProfileName'
import ProfileUsername from './atoms/ProfileUsername'

type Props = {
  data?: ProfileProps
}

function Profile({ data }: Props) {
  return (
    <>
      <ProfileImage image={'https://avatars.githubusercontent.com/u/20558676?v=4'} name="Raniel">
        <ProfileStatus icon={'🚀'} status={'muita nave pra pouco universo'} />
      </ProfileImage>

      <ProfileName name="Raniel" />
      <ProfileUsername username="ranielcsar" />
    </>
  )
}

export default Profile
