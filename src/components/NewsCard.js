import { View,Text, StyleSheet, Image,TouchableOpacity, Dimensions } from "react-native";


function NewsCard({news,onClick}) {

  

    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={styles.newsContainer}>
                <Image style={styles.image} source={{uri:`https://nefete.com.tr/${news.thumbnail}` }} />

                <View style={styles.textsContainer}>
                    <Text style={styles.title}> {news.title} </Text>
                    <Text style={styles.date}> {news.created_at} </Text>
                </View>
            </View>


        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        marginHorizontal:7,
        paddingHorizontal:8,
        width:Dimensions.get('window').width,
     
    },

    newsContainer:{
        flexDirection:"row",
        
    },
    image: {
        width:100,
        height:100,
        borderRadius:10
    },
    textsContainer:{
        marginLeft:10,
        flexDirection:"column",
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        flex:1

    },


})

export default NewsCard