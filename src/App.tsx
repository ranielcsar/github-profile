import Profile from './components/Profile'
import user from './fakedata'

import './styles.scss'

export default function App() {
  return (
    <div className="App">
      <Profile data={user} />
    </div>
  )
}
