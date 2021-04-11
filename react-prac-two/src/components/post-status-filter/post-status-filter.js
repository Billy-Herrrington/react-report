import React from 'react';
import './post-status-filter.css'

const PostStaturFilter = () =>{
    return (
        <div className="btn-group">
            <button className="btn btn-info">Все</button>
            <button className="btn btn-outline-secondary">Понравились</button>
        </div>
    )
}
export default PostStaturFilter;