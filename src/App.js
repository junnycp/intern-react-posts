import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import ListPosts from "./components/ListTable/listPosts";
import AddPost from "./components/addPost";
import EditPost from "./components/editPost";
import {BrowserRouter, Route, Link} from "react-router-dom";

const DEFAULT_POSTS = [{
    id: 1,
    title: "Post 1",
    content: "This is the content of post 1",
    author: "Nam Giang"
},
    {
        id: 2,
        title: "Post 2",
        content: "This is the content of post 2",
        author: "Nam Giang"
    },
    {
        id: 3,
        title: "Post 3",
        content: "This is the content of post 3",
        author: "Văn Quang"
    },
    {
        id: 4,
        title: "Post 4",
        content: "This is the content of post 4",
        author: "Nam Giang"
    },
    {
        id: 5,
        title: "Post 5",
        content: "This is the content of post 5",
        author: "Văn Quang"
    },
    {
        id: 6,
        title: "Post 6",
        content: "This is the content of post 6",
        author: "Nam Giang"
    },
    {
        id: 7,
        title: "Post 7",
        content: "This is the content of post 7",
        author: "Văn Quang"
    },
    {
        id: 8,
        title: "Post 8",
        content: "This is the content of post 8",
        author: "Nam Giang"
    },
    {
        id: 9,
        title: "Post 9,",
        content: "This is the content of post 9",
        author: "Văn Quang"
    },
    {
        id: 10,
        title: "Post 10",
        content: "This is the content of post 10",
        author: "Nam Giang"
    }];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [...DEFAULT_POSTS]
        };
    }

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <BrowserRouter>
                        <div id="mySidenav" className="sidenav">
                            <h3 className="mainTitle text-center">MENU</h3>
                            <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>×</a>
                            <a><Link to="/"><i className="fas fa-home"
                                                style={{fontSize: '18px'}}/> Home</Link></a>
                            <a><Link to="/list"><i className="fas fa-list"
                                                    style={{fontSize: '18px'}}/> List</Link></a>
                            <a><Link to="/add"><i className="fas fa-plus-circle"
                                                   style={{fontSize: '18px'}}/> Add new post</Link></a>
                        </div>
                        <br/>
                        <div id="main">
                            <Header/>
                            <span style={{fontSize: '30px', cursor: 'pointer'}}
                                  onClick={() => this.openNav()} className="mainTitle">☰MENU</span>
                            <Route exact path="/" render={() => (<h2 className="mainTitle"> Hello Admin</h2>)}/>
                            <Route path="/list" component={() => <ListPosts listPosts={this.state.posts}/>}/>
                            <Route path="/add" component={AddPost}/>
                            <Route path="/edit" component={EditPost}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
