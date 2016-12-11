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
            selectedItemId: null
        };
    }

    render() {
        let detailView;
        if (this.state.selectedItemId) {

            detailView = (<GalleryItemPopup
                closePopupHandler={this.closeItem}
                item={ this.props.items.find((item) => {
                    if (this.state.selectedItemId == item.get('id')) {
                        return item;
                    }
                })}/>)
        }

        return (
            <div className="gallery-list">
                {
                    this.props.items.map((item)=> {
                        let id = item.get('id');
                        return (
                            <div key={id} onClick={() => {
                                this.openDetails(id)
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

    openDetails(id) {
        this.setState({
            selectedItemId: id
        });
    }

    closeItem() {
        this.setState({selectedItemId: null});
    }
}

GalleryList.propTypes = {
    items: PropTypes.instanceOf(List).isRequired
};

export default GalleryList;
