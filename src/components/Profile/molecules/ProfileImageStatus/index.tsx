import ProfileImage from '../../atoms/ProfileImage'
import ProfileStatus from '../../atoms/ProfileStatus'

import './styles.scss'

type Props = {
  image: string
  statusIcon: string
  status: string
  name: string
}

function ProfileImageStatus({ image, statusIcon, status, name }: Props) {
  return (
    <section className="profile-image-status">
      <ProfileImage image={image} name={name}>
        <ProfileStatus icon={statusIcon} status={status} />
      </ProfileImage>
    </section>
  )
}

export default ProfileImageStatus
