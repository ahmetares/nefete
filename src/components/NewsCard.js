import { View,Text, StyleSheet, Image,TouchableOpacity } from "react-native";


function NewsCard({news}) {

  

    return(
        <TouchableOpacity style={styles.container}>
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
        margin:10,
        padding:5
    },

    newsContainer:{
        flexDirection:"row",
        
    },
    image: {
        width:50,
        height:50
    },
    textsContainer:{
        marginLeft:10,
        flexDirection:"column",
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }

})

export default NewsCard