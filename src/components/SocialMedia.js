import { StyleSheet, Linking,FlatList, View, Button, Text, TextInput, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import DiscordIcon from 'react-native-vector-icons/Fontisto'
import DrawerTopComponent from "./DrawerTopComponent";

function SocialMediaComponent({ name, color, iconName,url }) {

    const goToLink = (url) => {
        Linking.openURL(url)
    } 
    
    
    return (
        <TouchableOpacity onPress={() => goToLink(url)} style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.appWrapper}>
                {name === 'Discord' ?
                    <DiscordIcon name={iconName} size={22} color='white' />
                    :
                    <Icon name={iconName} size={22} color='white' />
                }
                <Text style={styles.appName}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}

function SocialMedia() {

    const SocialMediaAccounts = [
        {
            name: 'Twitter',
            color: '#00acee',
            imgLink: require('../assets/socialmedia/twitter.png'),
            iconName: 'twitter',
            url: 'https://twitter.com/NefeteNews'
        },

        {
            name: 'Instagram',
            color: '#e200d8',
            imgLink: require('../assets/socialmedia/instagram.png'),
            iconName: 'instagram',
            url:'https://www.instagram.com/nefetenews/'
        },
        {
            name: 'Threads',
            color: 'black',
            imgLink: require('../assets/socialmedia/threads.jpg'),
            iconName: 'at-sign',
            url:'https://www.threads.net/@nefetenews?igshid=MzRlODBiNWFlZA=='


        },
        {
            name: 'Discord',
            color: '#8d9fff',
            imgLink: require('../assets/socialmedia/discord.jpg'),
            iconName: 'discord',
            url:'https://discord.com/invite/ugMMHhrFHq'
        },
        {
            name: 'Youtube',
            color: '#fe0000',
            imgLink: require('../assets/socialmedia/youtube.jpg'),
            iconName: 'youtube',
            url:'https://www.youtube.com/channel/UCXfWi_fphbRQ_hKRo7K5sAg/featured'

        },
        {
            name: 'Linkedin',
            color: '#0c64c5',
            imgLink: require('../assets/socialmedia/linkedin.png'),
            iconName: 'linkedin',
            url:'https://www.linkedin.com/company/nefete/about/'

        },
  

        

    ]

    return (
        <View >
            <FlatList
                data={SocialMediaAccounts}
                numColumns={2}
                renderItem={({ item }) => <SocialMediaComponent
                    color={item.color} name={item.name} url={item.url} iconName={item.iconName}
                    key={'_'}
                    keyExtractor={item => "_" + item.id} />}
                ItemSeparatorComponent={() => <View style={{ height: 40, width: 1 }} />} />
        </View>
    )
}

const deviceSize = Dimensions.get('window')
//width: deviceSize.width/5.5,
//height: deviceSize.width/5.5,

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 10,
        marginHorizontal: 7
    },
    appWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    img: {
        width: 35,
        height: 35
    },
    appName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14
    }
})

export default SocialMedia