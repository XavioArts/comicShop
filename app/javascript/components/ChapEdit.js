import React from "react";

const ChapEdit = (props) => {
    return (
        <div>
            <h1>Editing chapter "{props.chap.title}"</h1>
            <h2>For {props.comic.title}</h2>
            <h4>By {props.comic.author}</h4>
            <a href={`/comics/${props.comic.id}/chaps`}>Back to chapters</a>
            <form action={`/comics/${props.comic.id}/chaps/${props.chap.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <p>Chapter title:</p>
                <input name="chap[title]" defaultValue={props.chap.title} />
                <p>Chapter summary:</p>
                <input name="chap[sum]" defaultValue={props.chap.sum} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ChapEdit;