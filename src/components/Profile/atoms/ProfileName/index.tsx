import './styles.scss'

type Props = {
  name: string
}

function ProfileName({ name }: Props) {
  return <p className="profile-name">{name}</p>
}

export default ProfileName
