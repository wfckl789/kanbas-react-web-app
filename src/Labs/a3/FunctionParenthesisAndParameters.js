function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h3>Parenthesis and parameters</h3>
            twoSquared = {twoSquared}<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = {threePlusOne}<br/>
            plusOne = {plusOne(3)}
        </div>
    )
}

export default FunctionParenthesisAndParameters

