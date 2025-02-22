import Fetch from "./Fetch"
import RepoMenu from "./RepoMenu"

export default function UserRepositories({
    login,
    onSelect
}: {
    login: string,
    onSelect: (name: any) => void
}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    onSelect={onSelect}
                ></RepoMenu>
            )}
        ></Fetch>
    )
}
