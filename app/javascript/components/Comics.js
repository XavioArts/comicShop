import React from "react";

const Comics = (props) => {
    const renderComics = () => {
        return props.comics.map((comic) => {
            return (
                <div>
                    <h2><a href={`/comics/${comic.id}/chaps`}>{comic.title}</a></h2>
                    <h4>By {comic.author}</h4>
                    <p>{comic.sum}</p>
                    <a href={`/comics/${comic.id}`}>Details/Edit/Delete</a>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Welcome to The Comic Shop</h1>
            <h3><a href="/comics/new">Create a new comic here</a></h3>
            <h2>Comics:</h2>
            {renderComics()}
        </div>
    );
};

export default Comics;