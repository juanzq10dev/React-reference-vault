import { useCallback, useEffect, useState } from "react"
import ReactMardown from "react-markdown"

export default function RepositoryReadme({
    repo,
    login
}: {
    repo: string,
    login: string
}) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState("");

    const loadReadme = useCallback(async (login: string, repo: string) => {
        setLoading(true)
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`
        const { download_url } = await fetch(uri)
            .then(res => res.status === 200 ? res.json() : "No Readme found")
        const markdown = await fetch(download_url)
            .then(res => download_url ? res.text() : "Markdown not found")

        setMarkdown(markdown)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (!repo || !login) return
        loadReadme(login, repo).catch(setError)
    }, [repo])

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (loading) return <p>Loading ...</p>

    return <ReactMardown>{markdown}</ReactMardown>
}