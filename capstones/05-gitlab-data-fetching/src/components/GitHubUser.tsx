import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import Fetch from "./Fetch"

const loadJSON = (key: string) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

const saveJSON = (key: string, data: any) =>
    localStorage.setItem(key, JSON.stringify(data))

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

    // useEffect(() => {
    //     if (!data) return
    //     console.log(data)
    //     if (data.login === login) return
    //     const {
    //         name,
    //         avatar_url,
    //         location
    //     } = data

    //     saveJSON(`user:${login}`, {
    //         name,
    //         login,
    //         avatar_url,
    //         location
    //     })
    // }, [data])
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