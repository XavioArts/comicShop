import React from "react";

const Chaps = (props) => {
    const renderChaps = () => {
        let count = 0;
        return props.chaps.map((chap) => {
            count++
            return (
                <div>
                    <h3>{count}. <a href={`/comics/${props.comic.id}/chaps/${chap.id}`}>{chap.title}</a></h3>
                    <p>{chap.sum}</p>
                    <a href={`/comics/${props.comic.id}/chaps/${chap.id}/edit`}>Edit</a>
                    <a href={`/comics/${props.comic.id}/chaps/${chap.id}`} data-method="delete">Delete</a>
                </div>
            );
        });
    }
    return (
        <div>
            <h1>{props.comic.title}</h1>
            <h3>Written by {props.comic.author}</h3>
            <p>Synopsis: {props.comic.syn}</p>
            <a href="/comics">Back to home</a>
            <br></br>
            <a href={`/comics/${props.comic.id}/chaps/new`}>Add a new chapter</a>
            {renderChaps()}
        </div>
    );
};

export default Chaps;