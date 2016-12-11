import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';
import GalleryItem from './GalleryItem';
import GalleryItemPopup from './GalleryItemPopup';

class GalleryList extends Component {
    constructor(props) {
        super(props);

        this.openDetails = this.openDetails.bind(this);
        this.closeItem = this.closeItem.bind(this);

        this.state = {
            selectedItem: null
        };
    }

    render() {
        let detailView;
        if (this.state.selectedItem) {
            detailView = (<GalleryItemPopup item={this.state.selectedItem} closePopupHandler={this.closeItem}/>)
        }

        return (
            <div className="gallery-list">
                {
                    this.props.items.map((item)=> {
                        let id = item.get('id');
                        return (
                            <div key={id} onClick={() => {
                                this.openDetails(item)
                            }}>
                                <GalleryItem item={item}/>
                            </div>
                        )
                    })
                }

                {detailView}
            </div>
        )
    }

    openDetails(item) {
        this.setState({selectedItem: item});
    }

    closeItem() {
        this.setState({selectedItem: null});
    }
}

GalleryList.propTypes = {
    items: PropTypes.instanceOf(List).isRequired
};

export default GalleryList;
