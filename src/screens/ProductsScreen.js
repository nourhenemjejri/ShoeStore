
import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';


const ProductsScreen = ({ navigation }) => {
  const dispatch=useDispatch();
 const products =useSelector(state=>state.products.products)
  return (
    <FlatList data={products} renderItem={({ item }) =>
    (<Pressable onPress={() =>{
      //update product  selected 
      dispatch(productsSlice.actions.setSelectedProduct(item.id))
      
      navigation.navigate('Product Detail')}} style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </Pressable>)
    }
      numColumns={2} // Définit toujours 2 colonnes
      key={2} // Utilisez une clé statique pour éviter les changements dynamiques
      keyExtractor={(item) => item.id} // Assurez-vous que chaque élément a un id unique

    />
  );
}
const styles = StyleSheet.create({

  image: {
    width: "100%", aspectRatio: 1
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  }
});
export default ProductsScreen;