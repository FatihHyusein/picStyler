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
            <div className="gallery-item-popup user-upload-photo-popup">
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

        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
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
            imageData: {
                imageFile: {isFile: true, data: this.state.file},
                description: this.state.description
            },
            afterSuccess: () => {
                this.toggleUploadForm();
            }
        }));
    }
}

UploadFile.propTypes = {};

function mapStateToProps(state) {
    return {myProfile: state.globals.get('myProfile')}
}
export {UploadFile};

export default connect(mapStateToProps)(UploadFile)

