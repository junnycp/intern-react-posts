import React, {Component} from 'react';

class ListPosts extends Component {
    render() {
        return (
            <div>
                <div className="listTopics">
                    <h2 className="mainTitle text-center">List Topics</h2>
                    <table className="table table-dark table-hover">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.listPosts.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.content}</td>
                                        <td>{item.author}</td>
                                        <td>
                                            <div className="form-group">
                                                <button className="btn btn-warning">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPosts;