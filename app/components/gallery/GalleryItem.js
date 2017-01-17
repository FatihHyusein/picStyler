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
                    <div className="share-icons-container">
                        <i className="cpointer social-icon share-icon"></i>
                        <i className="cpointer social-icon fb-icon"></i>
                    </div>
                    <div>
                        <i className="cpointer social-icon liked-icon"></i>
                    </div>
                </div>

                <div className="additional-info">
                    <div>2 коментара</div>
                    <div>
                        <div>София</div>
                        <div>12.2016</div>
                    </div>
                </div>
            </div>
        )
    }
}

GalleryItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default GalleryItem;
