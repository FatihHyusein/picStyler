import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';


class UploadMultipleFiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: ''
        };

        this.toggleUploadForm = this.toggleUploadForm.bind(this);

        this.upload = this.upload.bind(this);
    }

    render() {
        return (
            <div className="gallery-item-popup user-upload-photo-popup">
                <div className="close-icon" onClick={this.toggleUploadForm}></div>
                <div className="gallery-item-popup-content">
                    <div>
                        <h3>Upload Images</h3>
                        <form onSubmit={this.upload} encType="multipart/form-data">
                            <div>
                                <input type="file" placeholder="image" multiple="true" ref='filesInput'/>
                            </div>

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

    toggleUploadForm() {
        this.props.dispatch(GlobalActions.toggleUploadForm());
    }

    upload(e) {
        e.preventDefault();
        let imageFormData = new FormData();

        let filesList = this.refs.filesInput.files;
        for (let i in filesList) {
            if (filesList.hasOwnProperty(i)) {
                imageFormData.append(`files[${i}]`, filesList[i]);
            }
        }


        var xhr = new XMLHttpRequest();
        xhr.open('post', '/api/upload', true);
        xhr.setRequestHeader("Authorization", this.props.myProfile.get('authToken'));

        let dispatch = this.props.dispatch;
        xhr.onload = function () {
            if (this.status == 200) {
                dispatch(GlobalActions.uploadImageSuccess({
                    response: this.response
                }));

            } else {
            }
        };
        xhr.send(imageFormData);
    }
}

UploadMultipleFiles.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {UploadMultipleFiles};

export default connect(mapStateToProps)(UploadMultipleFiles)

