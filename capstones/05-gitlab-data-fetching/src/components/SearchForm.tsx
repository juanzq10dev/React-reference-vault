import { FormEvent, useRef } from "react";

export default function SearchForm({
    value = "",
    onSearch = f => f
}: {
    value: string,
    onSearch: (newValue: string) => void
}) {
    const inputValue = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        inputValue.current?.value && onSearch(inputValue.current?.value)
        console.log(value)
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                defaultValue={value}
                ref={inputValue}
                type="text"
            ></input>
            <button
                type="submit"
            >Submit</button>
        </form>
    )
}