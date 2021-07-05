import { StyleSheet, Dimensions } from "react-native";
const {width: screenWidth} = Dimensions.get('window');

const ProductItemStyles = StyleSheet.create({
    productItem: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: (screenWidth - 60) / 2,
        height: 200,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 20,
        marginHorizontal: 7,
    },
    productImage: {
        width: 140,
        height: 110,
        alignSelf: 'center',
    },
    productHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productPrice: {
        flexDirection: 'row'
    },
    productPriceText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    productName: {
        fontSize: 16,
        fontWeight: '400'
    }
    
})

export default ProductItemStyles;