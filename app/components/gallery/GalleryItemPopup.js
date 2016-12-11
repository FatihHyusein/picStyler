import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class GalleryItemPopup extends Component {
    render() {
        let item = this.props.item;
        let comments = (
            item.get('social').get('comments').valueSeq().map((comment)=> {
                let id = comment.get('id');
                return (
                    <div key={id} className="comment">
                        <div className="comment-profile">
                            <img src={comment.get('profileImgUrl')} alt={comment.get('name')}/>
                        </div>
                        <div className="comment-data">
                            <div>{comment.get('name')}</div>
                            <div>{comment.get('text')}</div>
                        </div>
                    </div>
                )
            })
        );

        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.props.closePopupHandler.bind(this)}></div>
                <div className="gallery-item-popup-content">
                    <img src={item.get('imgUrl')} alt={item.get('description')}/>
                    <div className="social-container">

                        {comments}
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.classList.add('overflow-hidden');
    }

    componentWillUnmount() {
        document.body.classList.remove('overflow-hidden');
    }
}

GalleryItemPopup.propTypes = {
    item: PropTypes.object.isRequired,
    closePopupHandler: React.PropTypes.func,
};

export default GalleryItemPopup;
