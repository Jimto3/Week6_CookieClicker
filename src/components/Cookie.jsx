export default function Cookie({
    counter,
    setCounter,
    clickValue,
    checkNotation,
}) {
    return (
        <div className="cookieBox">
            <h2
                style={{
                    background: "rgb(120,120,120,0.6)",
                    border: "3px solid black",
                }}
            >
                {checkNotation(counter)}
            </h2>
            <img
                src="https://svg-files.pixelied.com/54d4ae2b-271e-4e1e-b9ab-868aea6fe4b6/thumb-256px.png"
                onClick={() => {
                    setCounter(counter + clickValue);
                }}
            />
        </div>
    );
}
