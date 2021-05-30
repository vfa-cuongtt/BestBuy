import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
// import {getListItem} from './redux/actions/productAction'


export default class ProductList extends Component {
    state = {
        products : []
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://svcy3.myclass.vn/api/Product',
        }).then((resp) => {
            this.setState({
                products: resp.data.content
            })
        }).catch((err)=> {
            console.log(err)
        });
    }

    _renderItem = ({item}) => {
        console.log('item', item)
        return <ProductItem product={item} />;
    }

    render() {
        return (
            <SafeAreaView style={styles.areaView}>
                <View style={styles.container}>
                    {/* <ProductItem products={this.state.products} /> */}
                    <FlatList 
                        numColumns={2}
                        keyExtractor={(item, index) => `${item.name}_${item.index}`}
                        data={this.state.products}
                        renderItem={this._renderItem}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    areaView: {
        flex: 1,
        backgroundColor: '#dcf1f9',
    },
    container: {
        flex: 1,
        
        paddingHorizontal: 20
    },
    
})

// const mapStateToProps = state => {
//     console.log('state.productReducer.productListItem',state.productReducer.productListItem)
//     return {
//         productListItem:  state.productReducer.productListItem
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getListItem: ()=> dispatch(getListItem())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductList)