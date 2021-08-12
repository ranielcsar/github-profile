import ProfilePersonalInfo from '../../atoms/ProfilePersonalInfo'

import { FiMapPin, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'

import './styles.scss'

type Props = {
  location: {
    city: string
    uf: string
    country: string
  }
  email: string
  linkedin?: string
  twitter?: string
}

function ProfilePersonalInfos({ location, email, linkedin, twitter }: Props) {
  return (
    <section className="profile-personal-infos">
      <ProfilePersonalInfo
        icon={FiMapPin}
        info={`${location.city} - ${location.uf} - ${location.country}`}
      />
      <ProfilePersonalInfo icon={FiMail} info={email} />
      <ProfilePersonalInfo icon={FiLinkedin} link={linkedin} />
      <ProfilePersonalInfo icon={FiTwitter} link={twitter} />
    </section>
  )
}

export default ProfilePersonalInfos
