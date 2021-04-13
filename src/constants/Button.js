export function Button(props) {
    return (
        <div>
            <button style={{ backgroundColor: props.color }} style={{ marginBottom: props.marginbtm }}>{props.title}</button>
        </div>
    )
}