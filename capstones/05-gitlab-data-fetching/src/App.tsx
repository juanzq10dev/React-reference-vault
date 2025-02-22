import { useState } from 'react'
import './App.css'
import GitHubUser from './components/GitHubUser'
import UserRepositories from './components/UserRepositories'
import RepositoryReadme from './components/RepositoryReadme'

function App() {
  const [login, setLogin] = useState("juanzq10dev")
  const [repo, setRepo] = useState("")
  return (
    <>
      <GitHubUser
        login="juanzq10dev"
      ></GitHubUser>
      <UserRepositories
        login={login}
        onSelect={setRepo}
      ></UserRepositories>

      <RepositoryReadme
        login={login}
        repo={repo}
      >
      </RepositoryReadme>
    </>
  )
}

export default App
