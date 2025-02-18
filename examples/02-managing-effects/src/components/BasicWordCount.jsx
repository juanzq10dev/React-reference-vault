export default function WordCount({ children = "" }) {
    return (
        <div>
            <h2>Correct word count</h2>
            <p>{children}</p>
            <p>words: {words.toString()}</p>
        </div>
    )
}