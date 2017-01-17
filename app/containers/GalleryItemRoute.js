import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import {loadGalleryItem} from '../actions/gallery';
import {browserHistory} from 'react-router';
import GalleryItemPopup from '../components/gallery/GalleryItemPopup';


class GalleryItemRoute extends Component {
    static fetchData({store, params, history}) {
        let {id} = params;
        return store.dispatch(loadGalleryItem({id, history}))
    }

    constructor(props) {
        super(props);

        this.closeItem = this.closeItem.bind(this);
    }

    componentDidMount() {
        let {id} = this.props.params;
        this.props.loadGalleryItem({id, history: browserHistory})
    }

    render() {
        return (
            <div className="home">
                <Helmet
                    title="Gallery item"/>

                {this.props.galleryDetail.get('galleryItem').size ? <GalleryItemPopup
                    closePopupHandler={this.closeItem}
                    item={this.props.galleryDetail.get('galleryItem')}
                /> : ''}

            </div>
        );
    }

    closeItem() {
        browserHistory.push('/');
    }
}

function mapStateToProps(state) {
    return {galleryDetail: state.galleryDetail};
}

export {GalleryItemRoute};
export default connect(mapStateToProps, {loadGalleryItem})(GalleryItemRoute);
