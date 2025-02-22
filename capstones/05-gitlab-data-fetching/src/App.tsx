import { useState } from 'react'
import './App.css'
import GitHubUser from './components/GitHubUser'
import UserRepositories from './components/UserRepositories'
import RepositoryReadme from './components/RepositoryReadme'
import SearchForm from './components/SearchForm'

function App() {
  const [login, setLogin] = useState("juanzq10dev")
  const [repo, setRepo] = useState("")

  return (
    <>
      <SearchForm
        value={login}
        onSearch={setLogin}
      ></SearchForm>
      {
        login && <GitHubUser
          login={login}
        ></GitHubUser>
      }

      {
        login && <UserRepositories
          login={login}
          onSelect={setRepo}
        ></UserRepositories>
      }

      {
        login && repo && <RepositoryReadme
          login={login}
          repo={repo}
        >
        </RepositoryReadme>
      }

    </>
  )
}

export default App
