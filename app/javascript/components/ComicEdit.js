import React from "react";

const ComicEdit = (props) => {
    return (
        <div>
            <h1>Edit {props.comic.title}</h1>
            <a href={`/comics/${props.comic.id}`}>Back to comic</a>
            <form action={`/comics/${props.comic.id}`} method="post">
                <input type="hidden" name="_method" value="patch" />
                <p>Comic title:</p>
                <input name="comic[title]" defaultValue={props.comic.title} />
                <p>Comic author:</p>
                <input name="comic[author]" defaultValue={props.comic.author} />
                <p>Comic summary:</p>
                <input name="comic[sum]" defaultValue={props.comic.sum} />
                <p>Comic synopsis:</p>
                <input name="comic[syn]" defaultValue={props.comic.syn} />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default ComicEdit;