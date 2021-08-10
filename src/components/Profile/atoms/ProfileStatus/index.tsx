import './styles.scss'

type Props = {
  icon: string
  status: string
}

function ProfileStatus({ icon, status }: Props) {
  return (
    <div className="profile-status-container">
      <p className="profile-status-icon">{icon}</p>
      <p className="profile-status-text">{status}</p>
    </div>
  )
}

export default ProfileStatus
