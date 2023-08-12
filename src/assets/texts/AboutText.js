
import { View, Text, Image,StyleSheet, ScrollView } from "react-native"
import { useTranslation } from 'react-i18next';

function AboutText() {
    const {t} = useTranslation()

    return(

    <ScrollView>

        <Text style={styles.title}>{t('about-header')}</Text>
        <View style={styles.seperator} />


        <Text style={[styles.textContent]}>{t('about1')} </Text>
        <Text style={styles.textContent}> {t('about2')}  </Text>
        <Text style={styles.textContent}> {t('about3')}  </Text>
        <Text style={styles.textContent}> {t('about4')}  </Text>
        <Text style={[styles.textContent,{marginBottom:'10%'}]}> {t('about5')} </Text>



    </ScrollView>

)

}


const styles = StyleSheet.create({

    title:{
        fontSize:25,
        fontWeight:'bold',
        margin:10,
        padding:5,

    },

    textContent: {
        margin:10,
        padding:5,
        fontSize:17,
        color:'#4a4849',
        textAlign:'left'
    },
    seperator:{
        borderWidth:0.9,
        marginHorizontal:10,
        marginBottom:10,
        borderColor:'#a8a2a5'
        
    }


})

export default AboutText

