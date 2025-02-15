import React from "react"
import { useColors } from "../hooks/useColors"
import { useInput } from "../hooks/useInput"

// Controlled component
export default function AddColorForm() {
    const [ titleProps, resetTitle ] = useInput("")
    const [ colorProps, resetColor ] = useInput("#000000")
    const { addColor } = useColors()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (titleProps.value && colorProps.value) {
            addColor(titleProps.value, colorProps.value)
            resetColor()
            resetTitle()
        }
    }
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                placeholder="color title..."
                required
                {...titleProps}
            ></input>
            <input
                type="color"
                required
                {...colorProps}
            >
            </input>
            <button>ADD</button>
        </form>
    )
}