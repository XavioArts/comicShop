import React from "react";

const ChapNew = (props) => {
    return (
        <div>
            <h1>New Chapter Form</h1>
            <h2>For {props.comic.title}</h2>
            <h3>By {props.comic.author}</h3>
            <a href={`/comics/${props.comic.id}/chaps`}>Back to {props.comic.title}'s chapters</a>
            <form action={`/comics/${props.comic.id}/chaps`} method="post">
                <p>Chapter title:</p>
                <input name="chap[title]" placeholder="Insert title here.." />
                <p>Chapter summary:</p>
                <input name="chap[sum]" placeholder="Jumping fish hooks superman!.." />
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default ChapNew;