import React, { useRef } from "react"

// Uncontrolled component
export default function AddColorForm({
    onNewColor = f => f
}: {
    onNewColor: (title: string, hexColor: string) => void
}) {
    const txtTile = useRef<HTMLInputElement>(null)
    const hexColor = useRef<HTMLInputElement>(null)

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (txtTile.current && hexColor.current) {
            const title = txtTile.current.value
            const color = hexColor.current.value
            onNewColor(title, color)
            txtTile.current.value = ""
            hexColor.current.value = ""
        }
    }
    return (
        <form onSubmit={submit}>
            <input
                ref={txtTile}
                type="text"
                placeholder="color title..."
                required
            ></input>
            <input
                ref={hexColor}
                type="color"
                required
            >
            </input>
            <button>ADD</button>
        </form>
    )
}