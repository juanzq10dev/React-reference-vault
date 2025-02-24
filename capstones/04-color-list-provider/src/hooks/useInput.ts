import React, { useState } from "react"

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)
    return [
        { 
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ] as const
}