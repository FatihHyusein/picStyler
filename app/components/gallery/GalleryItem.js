import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class GalleryItem extends Component {
    render() {
        return (
            <div >


                Questions component
                {
                    this.props.questions.map((q)=> {
                        let id = q.get('id')
                        return (
                            <div key={id}>
                                <Link to={`/questions/${id}`}> { q.get('content') }</Link>
                            </div>
                        )
                    })
                }
                <Link to={`/questions/not-found`}> This link would be redirected to Index</Link>
            </div>
        )
    }
}

GalleryItem.propTypes = {
    photo: PropTypes.Object.isRequired
};

export default GalleryItem
