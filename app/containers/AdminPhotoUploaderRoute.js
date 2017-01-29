import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import * as AdminActions from '../actions/admin';

class AdminPhotoUploaderRoute extends Component {
    static fetchData({store, params, history}) {
        return store.dispatch(AdminActions.loadUploadImageData())
    }

    constructor(props) {
        super(props);

        this.handleImagesChange = this.handleImagesChange.bind(this);
        this.upload = this.upload.bind(this);
    }

    render() {
        let imagesFormElements =


        return (
            <div className="home">
                <Helmet
                    title="Admin Photo Uploader Page"
                />

                <form onSubmit={this.upload} encType="multipart/form-data">
                    <div>
                        <input type="file" placeholder="image" multiple="true" ref='filesInput'
                               onChange={this.handleImagesChange}/>
                    </div>

                    <div>

                    </div>
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        );
    }

    handleImagesChange(e) {
        let files = e.target.files;

        if (files && files.length > 0) {
            let readFile = () => {
                let reader = new FileReader();
                reader.onloadend = (e) => {
                    this.setState({images: Object.assign({}, this.state.images.push(e.target.result))});
                };

                reader.readAsDataURL(file);
            };

            readFile()
        }
    }

    upload() {
        this.props.dispatch(AdminActions.uploadAdminImages({
            imagesData: {
                photo: {isFile: true, data: this.state.file},
                description: this.state.description
            },
            afterSuccess: () => {
                this.toggleUploadForm();
            }
        }));
    }
}

function mapStateToProps(state) {
    return {gallery: state.gallery};
}

export {AdminPhotoUploaderRoute};
export default connect(mapStateToProps)(AdminPhotoUploaderRoute)
