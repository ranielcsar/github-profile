import { ProfileProps } from '../../types'
import ProfileImage from './atoms/ProfileImage'
import ProfileStatus from './atoms/ProfileStatus'

type Props = {
  data?: ProfileProps
}

function Profile({ data }: Props) {
  return (
    <>
      <ProfileImage image={'https://avatars.githubusercontent.com/u/20558676?v=4'} name="Raniel">
        <ProfileStatus icon="" status="muita nave pra pouco universo" />
      </ProfileImage>
    </>
  )
}

export default Profile
