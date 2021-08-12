import './styles.scss'

type Props = {
  icon: any
  info?: string
  link?: string
}

function ProfilePersonalInfo({ icon, info, link }: Props) {
  return (
    <div className="profile-personal-info">
      <div className="icon">{icon()}</div>

      {link ? (
        <a href={link} rel="noreferrer" target="_blank" className="info">
          {link}
        </a>
      ) : (
        <p className="info">{info}</p>
      )}
    </div>
  )
}

export default ProfilePersonalInfo
