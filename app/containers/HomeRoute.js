import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import GalleryList from '../components/gallery/GalleryList';
import {loadGallery} from '../actions/gallery';

class HomeRoute extends Component {
    static fetchData({store}) {
        return store.dispatch(loadGallery());
    }

    componentDidMount() {
        this.props.loadGallery();
    }

    render() {
        return (
            <div className="home">
                <Helmet
                    title="Home Page"
                />

                <GalleryList items={this.props.gallery} queryParams={this.props.location.query}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {gallery: state.gallery};
}

export {HomeRoute};
export default connect(mapStateToProps, {loadGallery})(HomeRoute);
