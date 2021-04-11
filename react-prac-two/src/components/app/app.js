import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStaturFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form'
import './app.css';

const App = () =>{
    return (
        <div className="app">
        <AppHeader></AppHeader>
            <div className="serach-panel d-flex">
                <SearchPanel></SearchPanel>
                <PostStaturFilter></PostStaturFilter>
            </div>
            <PostList></PostList>
            <PostAddForm></PostAddForm>
        </div>

    );
}
export default App;