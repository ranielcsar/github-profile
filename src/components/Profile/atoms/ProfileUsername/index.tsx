import './styles.scss'

type Props = {
  username: string
}

function ProfileUsername({ username }: Props) {
  return <p className="profile-username">{username}</p>
}

export default ProfileUsername
