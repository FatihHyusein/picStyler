import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getTagGroups, addTagGroupToItem} from '../../../actions/gallery';

class NewTagGroupPopup extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(getTagGroups(this.props.item.get('id')));

        this.addSelected = this.addSelected.bind(this);
        this.selectedTagGroupChanged = this.selectedTagGroupChanged.bind(this);
    }

    render() {
        let tagsGroups;
        if (this.props.tagGroups) {
            tagsGroups = this.props.tagGroups.valueSeq().map((tagGroup)=> {
                let id = tagGroup.get('id');
                return (
                    <option key={id} className="tag-group">{tagGroup.get('name')}</option>
                )
            });
        }


        return (
            <div className="gallery-item-popup">
                <div className="close-icon" onClick={this.props.closePopupHandler.bind(this)}></div>
                <div className="gallery-item-popup-content">
                    <select onChange={this.selectedTagGroupChanged}>
                        {tagsGroups}
                    </select>

                    <div>
                        <button onClick={this.addSelected}>Select</button>
                    </div>
                </div>
            </div>
        )
    }

    addSelected() {
        this.props.dispatch(addTagGroupToItem({
            itemId: this.props.item.get('id'),
            selected: this.state.selectedTagGroup
        }));

        this.props.closePopupHandler.call(this);
    }

    selectedTagGroupChanged(e) {
        this.setState({selectedTagGroup: e.target.value});
    }
}

NewTagGroupPopup.propTypes = {
    item: PropTypes.object.isRequired,
    closePopupHandler: React.PropTypes.func,
};

function mapStateToProps(state) {
    return {tagGroups: state.tagGroups}
}
export {NewTagGroupPopup};

export default connect(mapStateToProps)(NewTagGroupPopup)


