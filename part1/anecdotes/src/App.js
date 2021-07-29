import React, {useState} from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

    const getRandomNumber = () => Math.floor(Math.random() * 6)

    const incrementVotes = (index) => {
        const copy = [...votes]
        copy[index] += 1
        console.log(copy)
        return copy
    }

    const biggestIndex = (array) => {
        return array.indexOf(Math.max.apply(null, array))
    }

    const Quote = ({title, anecdote, votes}) => {
        if (votes === 1) {
            return (
                <div>
                    <h1>{title}</h1>
                    <p>{anecdote}</p>
                    <p> has 1 vote</p>
                </div>
            )
        } else return (
            <div>
                <h1>{title}</h1>
                <p>{anecdote}</p>
                <p> has {votes} votes</p>
            </div>
        )
    }

    const Button = ({clickHandler, text}) => {
        return (
            <button onClick={clickHandler}>
                {text}
            </button>
        )
    }

    return (
        <>
            <Quote
                title={"Anecdote of the Day"}
                anecdote={anecdotes[selected]}
                votes={votes[selected]}
            />
            <Button
                clickHandler={() => setVotes(incrementVotes(selected))}
                text={"vote"}
            />
            <Button
                clickHandler={() => setSelected(getRandomNumber())}
                text={"next anecdote"}
            />
            <Quote
                title={"Anecdote with Most Votes"}
                anecdote={anecdotes[biggestIndex(votes)]}
                votes={votes[biggestIndex(votes)]}
            />
        </>
    )
}

export default App