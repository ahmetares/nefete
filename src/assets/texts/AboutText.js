
import { View, Text, Image,StyleSheet, ScrollView } from "react-native"

function AboutText() {

    return(

    <ScrollView>

        <Text style={styles.title}>Hakkımızda</Text>
        <View style={styles.seperator} />


        <Text style={[styles.textContent, {marginTop:0,paddingTop:0}]}>Nefete, NFT ve Metaverse alanını büyütmek isteyen bir haber platformudur.
            Gelişen dijital dünyada, NFT'ler ve Metaverse kavramları büyük ilgi görmektedir.
            Nefete, bu heyecan verici yeni deneyimleri ve teknolojileri takip ederek,
            okuyucularına en güncel bilgileri sunmayı hedeflemektedir.
        </Text>



        <Text style={styles.textContent}>
            Nefete, NFT'lerin ve Metaverse'in birbirleriyle nasıl etkileşimde olduğunu, bu teknolojilerin
            sanat, eğlence, ticaret ve diğer alanlardaki potansiyelini araştırmaktadır. Haber platformu,
            sanatçıların NFT'ler aracılığıyla eserlerini nasıl satabileceğini, oyun dünyasının nasıl
            Metaverse'e entegre olduğunu, dijital ticaretin nasıl bir dönüşüm geçirdiğini ve Metaverse'in
            gelecekte nasıl şekilleneceğini ele almaktadır.

        </Text>



        <Text style={styles.textContent}>
           Aynı zamanda Nefete, okuyucularına bu heyecan verici alanları anlatırken, yeni projeleri, işbirliklerini ve
            teknolojik gelişmeleri de aktarmaktadır. Örneğin, NFT'lerin müzik endüstrisindeki kullanımını,
            sanat dünyasında gerçekleşen dijital sergileri veya Metaverse üzerindeki büyüyen dijital ekonomiyi
            incelemektedir. Bu şekilde, Nefete okuyucularına NFT ve Metaverse dünyasında yaşanan ilgi çekici
            olayları, yeni fırsatları ve gelecek trendlerini takip etme imkanı sunmaktadır.

        </Text>



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
        margin:5,
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

