import './styles.scss'

type Props = {
  bio: string
}

function ProfileBio({ bio }: Props) {
  return <p className="profile-bio">{bio}</p>
}

export default ProfileBio
