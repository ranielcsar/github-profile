import './styles.scss'

type Props = {
  image: string
  name: string
  children: any
}

function ProfileImage({ image, name, children }: Props) {
  return (
    <figure className="image-container" style={{ backgroundImage: `url(${image})` }}>
      <img src="" alt={`Foto de: ${name}`} />
      {children}
    </figure>
  )
}

export default ProfileImage
