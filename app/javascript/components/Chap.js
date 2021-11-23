import React from "react";

const Chap = (props) => {
    return (
        <div>
            <h1>{props.comic.title}</h1>
            <h2>{props.chap.title}</h2>
            <h4>by {props.comic.author}</h4>
            <p>
                This is where a chapter's pages would show up. A chapter has_many pages and a page has content and a page number.
                A pages content would just be an image and you would be able to view all pages here on this page.
                Maybe a chapter can also have many comments that will show up at the end of the page.
            </p>
            <a href={`/comics/${props.comic.id}/chaps`}>Back to {props.comic.title}'s chapters</a>
        </div>
    )
};

export default Chap;