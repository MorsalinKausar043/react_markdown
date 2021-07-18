import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = () => {
    const [Markdown, setMarkdown] = useState("Wellcome To Markdown")
    return (
        <>
            <div className="markdwon">                
                <div className="container">
                    <textarea name="textarea" onChange={(e) => {
                        setMarkdown(e.target.value)
                    }} className="left_site" value={Markdown}></textarea>
                    <div className="right_site"><ReactMarkdown>{Markdown}</ReactMarkdown></div>
                </div>
            </div>
        </>
    )
}

export default Markdown;
