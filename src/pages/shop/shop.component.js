import React ,{Component} from "react";

import SHOP_DATA from "./shop.data";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }

    render() {
        return (
            <div>
                {
                this.state.collections.map(({id,...otherObject}) => {
                    return <PreviewCollection key={id} {...otherObject}/>
                })
                
                }
            </div>
        )
    }            
}


export default ShopPage;