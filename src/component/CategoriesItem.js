import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CategoriesItem extends Component {
    render() {
        // console.log('this.props.categories', this.props.categories)
        return (
            <>
                <Text style={styles.categoriesText}>{this.props.categories.id}</Text>
            </>
        )
    }
}

const styles = StyleSheet.create({
    categoriesText: {
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 10
    },
})
