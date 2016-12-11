import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class GalleryItem extends Component {
    render() {
        let item = this.props.item;
        let social = this.props.item.get('social');
        return (
            <div className="gallery-item">
                <img src={item.get('imgUrl')} alt={item.get('description')}/>
                <div className="social">
                    <div>{social.get('likes')}</div>
                    <div>{social.get('shares')}</div>
                    <div>{social.get('comments').length}</div>
                </div>
            </div>
        )
    }
}

GalleryItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default GalleryItem;
