import './styles.scss'
import { FiUsers, FiStar } from 'react-icons/fi'

type Props = {
  followers: number
  following: number
  stars: number
}

const ICON_SIZE = 20

function ProfileFollowersFollowingStart({ followers, following, stars }: Props) {
  return (
    <section className="profile-followers">
      <div className="item">
        <FiUsers size={ICON_SIZE} className="item-icon" />
        <strong>{followers}</strong>
        <p className="item-title">followers</p>
      </div>

      <div className="divider"></div>

      <div className="item">
        <strong>{following}</strong>
        <p className="item-title">following</p>
      </div>

      <div className="divider"></div>

      <div className="item">
        <FiStar size={ICON_SIZE} className="item-icon" />
        <strong>{stars}</strong>
      </div>
    </section>
  )
}

export default ProfileFollowersFollowingStart
