export default function Star({
    filled,
    onClick
}) {
    return (
        <span
            onClick={onClick}
            style={{
                fontSize: '100px',
                cursor: 'pointer',
                color: filled ? 'gold' : 'gray',
            }}
        >
            *
        </span>
    )
}