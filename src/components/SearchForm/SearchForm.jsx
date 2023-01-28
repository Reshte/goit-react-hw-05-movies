import { useState } from "react";
import { Form } from "react-router-dom";

export function SearchForm () {
    const [searchQuery, setSearchQuery] = useState("")

    const handelInputChange = (e) => {
        setSearchQuery(e.currenTarget.value.trim())
    }
    const handelFormSubmit = (e) => {
        e.preventDefault()
        // должна быть строка на передачу данных их формы для создания фетча
        reset()
        
    }
    const reset = () => {
     setSearchQuery('')
 }

    return (
        <Form onSubmit={handelFormSubmit}>
            <input type="text"
             autoComplete="off"
             name="searchQuery"
             autoFocus
             placeholder="Search images and photos"
            value={searchQuery}
            onChange={handelInputChange}/>
        </Form>
    )
    
}