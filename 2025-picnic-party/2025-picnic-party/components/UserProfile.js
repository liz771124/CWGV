import { useTheme } from '@/contexts/ThemeContext'
import { useUser } from '@/contexts/UserContext'

const UserProfile = () => {
  const { theme, toggleTheme } = useTheme()
  const { user, setUser } = useUser()

  return (
    <div
      className={`rounded-md border p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
    >
      <h2>User Profile</h2>
      <p>
        <strong>User:</strong> {user}
      </p>
      <p>
        <strong>Theme:</strong> {theme}
      </p>
      <button onClick={toggleTheme} className="mt-2 rounded bg-blue-500 px-4 py-1 text-white">
        Toggle Theme
      </button>
      <button
        onClick={() => setUser('John Doe')}
        className="ml-2 mt-2 rounded bg-green-500 px-4 py-1 text-white"
      >
        Set User
      </button>
    </div>
  )
}

export default UserProfile
