function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div>
            <h3>Implied return</h3>
            forTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4,5)}
        </div>
    )
}

export default ImpliedReturn


