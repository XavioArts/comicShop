import React from "react";

const ComicNew = (props) => {
    return (
        <div>
            <h1>New Comic Form</h1>
            <a href="/comics">Back to home</a>
            <form action="/comics" method="post">
                {/* <input type="hidden" name="authenticity_token" value={props.authenticity_token} /> */}
                <p>Comic title:</p>
                <input name="comic[title]" placeholder="Title.." />
                <p>Comic author:</p>
                <input name="comic[author]" placeholder="Author.." />
                <p>Comic summary:</p>
                <input name="comic[sum]" placeholder="One senctence summary.." />
                <p>Comic synopsis:</p>
                <input name="comic[syn]" placeholder="Detailed synopsis.." />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ComicNew;