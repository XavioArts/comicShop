import React from "react";

const Comic = (props) => {
    const renderChaps = () => {
        return props.chaps.map((chap) => {
            return (
                <div>
                    <h3><a href={`/comics/${props.comic.id}/chaps/${chap.id}`}>{chap.title}</a></h3>
                    <p>{chap.sum}</p>
                    {/* may add links to delete and edit chapters */}
                </div>
            );
        });
    };
    return (
        <div>
            <h1>{props.comic.title}</h1>
            <h3>By {props.comic.author}</h3>
            <div>
                <a href="/comics">Go back to home</a>
                <a href={`/comics/${props.comic.id}/edit`}>Edit this comic</a>
                <a href={`/comics/${props.comic.id}`} data-method="delete">Delete this comic</a>
            </div>
            <h5>{props.comic.sum}</h5>
            <p>Synposis:</p>
            <p>{props.comic.syn}</p>
            <h2><a href={`/comics/${props.comic.id}/chaps`}>Chapters:</a></h2>
            {renderChaps()}
        </div>
    );
};

export default Comic;