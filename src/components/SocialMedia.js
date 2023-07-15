import { StyleSheet, FlatList, View, Button, Text, TextInput, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import DiscordIcon from 'react-native-vector-icons/Fontisto'

function SocialMediaComponent({ name, color, iconName }) {
    
    
    return (
        <TouchableOpacity onPress={null} style={[styles.container, { backgroundColor: color }]}>
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
            iconName: 'twitter'
        },

        {
            name: 'Instagram',
            color: '#e200d8',
            imgLink: require('../assets/socialmedia/instagram.png'),
            iconName: 'instagram',
        },
        {
            name: 'Threads',
            color: 'black',
            imgLink: require('../assets/socialmedia/threads.jpg'),
            iconName: 'at-sign',

        },
        {
            name: 'Discord',
            color: '#8d9fff',
            imgLink: require('../assets/socialmedia/discord.jpg'),
            iconName: 'discord',
        },
        {
            name: 'Youtube',
            color: '#fe0000',
            imgLink: require('../assets/socialmedia/youtube.jpg'),
            iconName: 'youtube',

        },
        {
            name: 'Linkedin',
            color: '#0c64c5',
            imgLink: require('../assets/socialmedia/linkedin.png'),
            iconName: 'linkedin',

        },

        

    ]

    return (
        <View style={{flex:1}}>
            <FlatList
                data={SocialMediaAccounts}
                numColumns={2}
                renderItem={({ item }) => <SocialMediaComponent
                    color={item.color} name={item.name} iconName={item.iconName}
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
        width: 95,
        height: 95,
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