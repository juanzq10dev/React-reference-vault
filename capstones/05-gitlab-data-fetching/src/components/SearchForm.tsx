import { ChangeEvent } from "react";

export default function SearchForm({
    value = "",
    onSearch = f => f
}: {
    value: string,
    onSearch: (newValue: string) => void
}) {
    return (
        <form
          
        >
            <input
              type="text"
              value={value}
              onChange={(e) => onSearch(e.target.value)}
            ></input>
        </form>
    )
}