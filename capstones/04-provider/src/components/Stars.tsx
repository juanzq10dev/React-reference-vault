import { FaStar } from "react-icons/fa";

export default function Star({
    selected = false,
    onSelect = (f: any) => f
}) { 
    return (
        <FaStar
            color={selected ? "red" : "grey"}
            onClick={onSelect}
        ></FaStar>
    )
}