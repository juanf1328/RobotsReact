import React from "react";
import './Card.css';
// import './App.css';

const Card = ({name, email, id}) => {
   
    return(
        <div className="tc dib br4 pa3 ma3 grow bw2 shadow-5 cartas" >
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;