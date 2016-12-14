import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';


class UploadFile extends Component {
    constructor(props) {
        super(props);

        this.toggleUploadForm = this.toggleUploadForm.bind(this);
        this.upload = this.upload.bind(this);

        this.imageUploadChange = this.imageUploadChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
    }

    render() {
        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.toggleUploadForm}></div>
                <div className="gallery-item-popup-content">
                    <div>
                        <h3>Upload Image</h3>
                        <form onSubmit={this.upload}>
                            <input type="file" placeholder="image" onChange={this.imageUploadChange}/>

                            <textarea placeholder="Your description" onChange={this.descriptionChange}></textarea>
                            <input type="submit" value="Upload"/>
                        </form>
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

    imageUploadChange(e) {
        this.setState({img: e.target.value});
    }

    descriptionChange(e) {
        this.setState({description: e.target.value});
    }

    toggleUploadForm() {
        this.props.dispatch(GlobalActions.toggleUploadForm());
    }

    upload(e) {
        e.preventDefault();

        this.props.dispatch(GlobalActions.uploadImage({
            img: this.state.img,
            description: this.state.description
        }));
    }
}

UploadFile.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {UploadFile};

export default connect(mapStateToProps)(UploadFile)

