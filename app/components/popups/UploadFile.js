import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as GlobalActions from '../../actions/globals';


class UploadFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: '',
            imagePreviewUrl: '',
            description: ''
        };

        this.toggleUploadForm = this.toggleUploadForm.bind(this);
        this.imageUploadChange = this.imageUploadChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);

        this.upload = this.upload.bind(this);
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl}/>);
        }

        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.toggleUploadForm}></div>
                <div className="gallery-item-popup-content">
                    <div>
                        <h3>Upload Image</h3>
                        <form onSubmit={this.upload} encType="multipart/form-data">
                            <div>
                                {$imagePreview}
                                <input type="file" placeholder="image" onChange={this.imageUploadChange}/>
                            </div>


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
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file)
    }

    descriptionChange(e) {
        this.setState({description: e.target.value});
    }

    toggleUploadForm() {
        this.props.dispatch(GlobalActions.toggleUploadForm());
    }

    upload(e) {
        e.preventDefault();
        let imageFormData = new FormData();

        imageFormData.append('imageFile', this.state.file);
        imageFormData.append('description', this.state.description);

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

UploadFile.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {UploadFile};

export default connect(mapStateToProps)(UploadFile)

