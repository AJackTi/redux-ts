import React, {useState} from "react";
import {useActions} from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const {searchRepositories} = useActions()


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        searchRepositories(term)
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
}

export default RepositoriesList
