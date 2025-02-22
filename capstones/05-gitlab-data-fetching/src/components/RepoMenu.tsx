import { useEffect } from "react"
import { useIterator } from "../hooks/useIterator"
import RepositoryReadme from "./RepositoryReadme"

export default function RepoMenu({
    repositories,
    login,
    onSelect = f => f
}: {
    repositories: any[],
    login: string
    onSelect: (selected: any) => void
}) {
    const [{ name }, previous, next] = useIterator(repositories)

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name])

    return (
        <>
            <div style={{
                display: "flex"
            }}>
                <button
                    onClick={previous}
                >&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    )
}