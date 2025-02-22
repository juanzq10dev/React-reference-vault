import { useEffect, useState } from "react";

export function useFetch<T>(uri: string) {
    const [data, setData] = useState<T>()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!uri) return
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri])

    return {
        loading,
        data,
        error
    }
} 