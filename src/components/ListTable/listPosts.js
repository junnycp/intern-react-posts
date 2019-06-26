import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListPosts extends Component {

    handleDelete(post) {
        if (prompt('Are you sure? Type "OK" to delete!')==='OK') {
            this.props.onDelete(post);
            alert('The post has been deleted!');
        }
    }
    handleEdit(post) {
        this.props.onEdit(post);
    }

    render() {
        return (
            <div>
                <div className="listTopics">
                    <h2 className="mainTitle text-center">List Topics</h2>
                    <table className="table table-dark table-hover">
                        <thead>
                        <tr>
                            <th><i className="fas fa-sort-amount-down"/> No</th>
                            <th><i className="fas fa-comment-alt"/> Title</th>
                            <th><i className="fas fa-file-contract"/> Content</th>
                            <th><i className="fas fa-at"/> Author</th>
                            <th><i className="fas fa-at"/> Active Status</th>
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
                                        <td className="text-center">
                                            <input  type={'checkbox'} checked={item.active} />
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <Link to={`/${item.id}/edit`} className="btn btn-warning" onClick={this.handleEdit.bind(this, item)}>Edit</Link>
                                                <button className="btn btn-danger" onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
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