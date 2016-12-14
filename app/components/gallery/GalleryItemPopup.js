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
        let tagGroupList = (
            item.get('tagGroups').valueSeq().map((tagGroup)=> {
                let id = tagGroup.get('id') + tagGroup.get('name');
                return (
                    <div key={id} className="tag-group">
                        <div className="tag-header">
                            {tagGroup.get('name')}: {tagGroup.get('tags').size}
                        </div>
                        <div className="tags-container">
                            {
                                tagGroup.get('tags').valueSeq().map((tag)=> {
                                    let tagId = tag.get('id') + tag.get('name');
                                    return (
                                        <div key={tagId} className="tag">
                                            <img src={tag.get('imgUrl')} alt={tag.get('name')}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                )
            })
        );


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
                    <div>
                        <img src={item.get('imgUrl')} alt={item.get('description')}/>
                    </div>

                    <div className="basic-info-container">
                        <div className="basic-social-container">
                            <div>
                                liked: {item.get('liked').toString()}
                            </div>
                            <div>
                                share
                            </div>
                        </div>

                        <div className="photograph-container">
                            <div>
                                <div>Фотограф</div>
                                <div>
                                    {item.get('photograph').get('name')}
                                </div>
                                <div>
                                    <Link to={`/profiles/${item.get('photograph').get('id')}`}> Виж профила</Link>
                                </div>
                            </div>

                            <div className="avatar">
                                <img src={item.get('photograph').get('profileImgUrl')}
                                     alt={item.get('photograph').get('name')}/>
                            </div>
                        </div>
                    </div>

                    <div className="tag-groups-container">
                        <div className="tag-group-header">
                            ХАРЕСВАШ ТОЗИ СТИЛ?
                        </div>

                        {tagGroupList}
                    </div>


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

