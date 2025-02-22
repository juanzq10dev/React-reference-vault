import { useEffect } from "react"
import { useIterator } from "../hooks/useIterator"

export default function RepoMenu({
    repositories,
    onSelect = f => f
}: {
    repositories: any[],
    onSelect: (selected: any) => void
}) {
    const [{ name }, previous, next] = useIterator(repositories)

    useEffect(() => {
        if (!name) return
        onSelect(name)
    }, [name, repositories])

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