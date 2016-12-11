import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {addComment} from '../../actions/gallery';

class GalleryItemPopup extends Component {
    constructor(props) {
        super(props);

        this.sendNewComment = this.sendNewComment.bind(this);
    }

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
                        <div className={`comment ${this.props.myProfile.get('authToken') ? '' : 'display-none'}`}>
                            <div className="comment-profile">
                                <img src={this.props.myProfile.get('profileImgUrl')}
                                     alt={this.props.myProfile.get('name')}/>
                            </div>
                            <div className="comment-data">
                                <textarea rows="3" placeholder="Your comment..."></textarea>

                                <button onClick={this.sendNewComment}>Enter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    sendNewComment() {
        this.props.dispatch(addComment(this.props.item.get('id'), {test: 123}));
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

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {GalleryItemPopup};

export default connect(mapStateToProps)(GalleryItemPopup)

