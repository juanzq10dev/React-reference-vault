import Fetch from "./Fetch"

type GithubUserResponse = {
    name: string,
    avatar_url: string,
    location: string,
    login: string
}

export default function GitHubUser({
    login
}: {
    login: string
}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        ></Fetch>
    )
}
function UserDetails({
    data
}: {
    data: GithubUserResponse
}) {
    return (
        <div>
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{
                    width: 200
                }}
            ></img>
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    )
}