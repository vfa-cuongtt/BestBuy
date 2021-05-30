import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import CategoriesItem from './CategoriesItem';
// import {getListItem} from './redux/actions/productAction'


export default class ProductList extends Component {
    state = {
        products : [],
        categories: [],
    }
    componentDidMount() {
        this.getCategories()
        this.getProductList()    
    }
    getCategories() {
        axios({
            method: 'GET',
            url: 'http://svcy3.myclass.vn/api/Product/getAllCategory'
        }).then((resp) => {
            this.setState({
                categories: resp.data.content
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    getProductList() {
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

    _renderCategoriesItem=({item})=> {
        return <CategoriesItem categories={item}/>;
    }
    _renderItem = ({item}) => {
        return <ProductItem product={item} />;
    }

    render() {
        return (
            <SafeAreaView style={styles.areaView}>
                <View style={styles.boxSearch}>

                </View>
                <View style={styles.boxCategories}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesList}>
                        <FlatList 
                            horizontal={true}
                            keyExtractor={(item)=> `${item.id}`}
                            data={this.state.categories}
                            renderItem={this._renderCategoriesItem}
                        />
                    </View>
                </View>

                <View style={styles.boxCategoriesList}>
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
    boxSearch:{
        flex: 0.5,
        backgroundColor: 'red'
    },
    boxCategories: {
        flex: 0.5,
        paddingHorizontal: 20
    },
    categoriesTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    categoriesList: {
        paddingTop: 20,
        flexDirection: 'row',
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 10
    },
    boxCategoriesList: {
        flex: 3,
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