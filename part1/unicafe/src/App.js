import React, {useState} from 'react'

const Button = ({text, clickHandler}) => {
    return (
        <button onClick={clickHandler}>{text}</button>
    )
}

const Statistic = ({text, value, unit}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value} {unit}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic text={"good"}
                           value={good}/>
                <Statistic text={"neutral"}
                           value={neutral}/>
                <Statistic text={"bad"}
                           value={bad}/>
                <Statistic text={"all"}
                           value={good + neutral + bad}/>
                <Statistic text={"average"}
                           value={(good - bad) / (good + neutral + bad)}/>
                <Statistic text={"positive"}
                           value={(good / (good + neutral + bad)) * 100}
                           unit={"%"}/>
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <h1>Give Feedback</h1>
            <Button
                text={"good"}
                clickHandler={() => setGood(good + 1)}
            />
            <Button
                text={"neutral"}
                clickHandler={() => setNeutral(neutral + 1)}
            />
            <Button
                text={"bad"}
                clickHandler={() => setBad(bad + 1)}
            />
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

export default App