import { ButtonHTMLAttributes } from 'react'

import './styles.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

function EditProfileButton({ title, ...props }: Props) {
  return (
    <button className="profile-edit-button" {...props}>
      {title}
    </button>
  )
}

export default EditProfileButton
