import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import Header from "./components/Header";
import ListPosts from "./components/ListTable/listPosts";
import AddPost from "./components/addPost";
import EditPost from "./components/editPost";
import Home from "./components/Home";

const DEFAULT_POSTS = [
    {
        id: 1,
        title: "Post 1",
        content: "This is the content of post 1",
        author: "Nam Giang",
        active: false
    },
    {
        id: 2,
        title: "Post 2",
        content: "This is the content of post 2",
        author: "Nam Giang",
        active: true
    },
    {
        id: 3,
        title: "Post 3",
        content: "This is the content of post 3",
        author: "Văn Quang",
        active: true
    },
    {
        id: 4,
        title: "Post 4",
        content: "This is the content of post 4",
        author: "Nam Giang",
        active: true
    },
    {
        id: 5,
        title: "Post 5",
        content: "This is the content of post 5",
        author: "Văn Quang",
        active: true
    },
    {
        id: 6,
        title: "Post 6",
        content: "This is the content of post 6",
        author: "Nam Giang",
        active: true
    },
    {
        id: 7,
        title: "Post 7",
        content: "This is the content of post 7",
        author: "Văn Quang",
        active: true
    },
    {
        id: 8,
        title: "Post 8",
        content: "This is the content of post 8",
        author: "Nam Giang",
        active: true
    },
    {
        id: 9,
        title: "Post 9,",
        content: "This is the content of post 9",
        author: "Văn Quang",
        active: true
    },
    {
        id: 10,
        title: "Post 10",
        content: "This is the content of post 10",
        author: "Nam Giang",
        active: true
    }];

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [...DEFAULT_POSTS],
            post: {id: '', title: '', content: '', author: '', active: 1},
            redirect: false
        };
    }

    onSetPost = (data) => {
        this.setState({posts: data});
    };

    onDelete(id) {
        let prevItems = this.state.posts;
        let posts = prevItems.filter((item) => {
            return item.id !== id
        });
        this.setState({
            posts
        });
    }

    onEditItem(itemInput) {
        let {posts} = this.state;
        let newPost = posts.map(item => {
            if (itemInput.id === item.id) {
                item.title = itemInput.title;
                item.content = itemInput.content;
                item.author = itemInput.author;
                item.active = itemInput.active;
            }
            return item;
        });
        this.setState({post: {id: '', title: '', content: '', author: '', active: 1}, posts: newPost});
    }

    onEdit(post) {
        this.setState({
            post,
        });
    }

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div id="mySidenav" className="sidenav">
                        <h3 className="mainTitle text-center">MENU</h3>
                        <hr/>
                        <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>×</a>
                        <li><Link to="/"><i className="fas fa-home"
                                            style={{fontSize: '18px'}}/> Home</Link></li>
                        <li><Link to="/list"><i className="fas fa-list"
                                                style={{fontSize: '18px'}}/> List</Link></li>
                        <li><Link to="/add"><i className="fas fa-plus-circle"
                                               style={{fontSize: '18px'}}/> Add new post</Link></li>
                    </div>
                    <br/>
                    <div id="main">
                        <Header/>
                        <span style={{fontSize: '30px', cursor: 'pointer'}}
                              onClick={() => this.openNav()} className="mainTitle">☰MENU</span>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route path="/list" component={() => <ListPosts listPosts={this.state.posts}
                                                                        onDelete={this.onDelete.bind(this)}
                                                                        onEdit={this.onEdit.bind(this)}/>}/>
                        <Route path="/add"
                               component={() => <AddPost onSetPost={this.onSetPost}
                                                         listPosts={this.state.posts}/>}/>
                        <Route path="/:id/edit" component={() => <EditPost post={this.state.post}
                                                                           onEditItem={this.onEditItem.bind(this)}/>}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;