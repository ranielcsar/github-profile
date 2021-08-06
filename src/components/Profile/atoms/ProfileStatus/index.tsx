import './styles.scss'

type Props = {
  icon: string
  status: string
}

function ProfileStatus({ icon, status }: Props) {
  return (
    <div className="profile-status-container">
      <figure style={{ backgroundImage: `url(${icon})` }}></figure>
      <p>{status}</p>
    </div>
  )
}

export default ProfileStatus
