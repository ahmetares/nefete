import {useState,useEffect} from 'react'
import { Image, Text, View ,SectionList,Dimensions,ScrollView,FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { setCurrentDrawer } from '../store/generalSlice/generalSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import CustomLinearGradient from '../components/CustomLinearGradient';
import FastImage from 'react-native-fast-image';
import { FlashList } from '@shopify/flash-list';
import { SvgUri } from 'react-native-svg';
import { useTranslation } from 'react-i18next';


function MarketList(props) {

    const {t} = useTranslation()

   

    const RenderList = () => {
        
        if(props.list === 'nfts') {

            return(
            
            <View style={styles.container}>
                
                <Text style={styles.index}>{props.number}</Text>

                <Text style={styles.header}>{props.collection}</Text>
                <Text style={{color:'black',marginVertical:5}}>{props.name}</Text>
                <Text style={styles.priceETH}>{props.value} ETH </Text>
                
                <View style={{flexDirection:'row'}}>
                <Text style={styles.info}>{t('market-nft-priceChange')}</Text>
                <Text style={[styles.priceChange, {color: props.priceChangeUsd >= 0 ? 'green' : 'red'} ]}>{props.priceChangeUsd ? props.priceChangeUsd + ' $' : t('market-nft-firstMint')}  </Text>
                </View>

                <View style={styles.imageContainer}>
                <FastImage style={styles.image} source={props.image} />
                </View>

              </View>

            )

        }


        if(props.list === 'collections') {


            return(

                <View style={styles.container}>
                <Text style={styles.index}>{props.number}</Text>

                <Text style={styles.header}>{props.name}</Text>
                <Text>{props.categories}  </Text>


                <View style={{flexDirection:'row'}}>
                <Text style={styles.infoCollection}>{t('market-collection-volume')} ($): </Text>
                <Text style={styles.collectionStat}>{props.volume_usd} $</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={styles.infoCollection}>{t('market-collection-volume')} (ETH): </Text>
                <Text style={styles.collectionStat}>{props.volume_eth} ETH  </Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={styles.infoCollection}>{t('market-collection-floor')} </Text>
                <Text style={styles.collectionStat}>{props.floorETH} ETH</Text>
                </View>
        
                <View style={styles.imageContainer}>
                <FastImage style={styles.image} source={props.logo} />
                </View>              
                
                </View>

            )
        }

        if(props.list === 'market'){

            return (

                <View style={styles.container}>

                <Text style={styles.index}>{props.number}</Text>
                <Text style={styles.header}>{props.name}</Text>

                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.infoMarket}>{t('market-marketplace-seller')} </Text>
                    <Text style={styles.marketStat}>{props.seller} </Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.infoMarket}>Trader: </Text>
                    <Text style={styles.marketStat}> {props.trader} </Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.infoMarket}>{t('market-marketplace-volume')} ($):</Text>
                    <Text style={styles.marketStat}> {props.volume_usd} $</Text>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.infoMarket}>{t('market-marketplace-volume')} (ETH): </Text>
                    <Text style={styles.marketStat}> {props.volume_eth} ETH</Text>
                    </View>

                            <SvgUri
                        width="50%"
                        height="50%"
                        uri={props.marketplace}
                    />
                        </View>

            )

        }

    }


    return (
          <RenderList/>
    );
  }


  export default MarketList


  const styles = StyleSheet.create({
    container:{
        height: Dimensions.get("screen").height/2.5,
        width: Dimensions.get("screen").width/1.3,
        marginVertical:20,
        borderWidth:0,
        borderColor:'black',
        alignItems:'center',
        borderRadius:15,
        margin:5,
        flex:1,
        paddingHorizontal:10
    },
    index:{
        position:'absolute',
        top:-10,
        left:0,
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    },
    info:{
        fontWeight:'bold',
        fontSize:15,
        color:'black',
        marginBottom:7
    },

    infoCollection:{
        fontWeight:'bold',
        flex:1,
        fontSize:15,
        color:'black',
        marginVertical:5
    },
    infoMarket:{    
        fontWeight:'bold',
        flex:1,
        fontSize:15,
        marginVertical:5,
        color:'black'

    },

    collectionStat:{
        fontSize:16,
        color:'black',
        marginVertical:5
    },

    marketStat:{
        fontSize:16,
        color:'black',
        marginVertical:5,
        color:'black'
    },

    priceChange:{
        fontSize:15,

    },
    header:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:10
    },
    priceETH:{
        color:'black',
        fontSize:20,
    },
   
    image:{
      width:175, 
      height:200, 
      marginHorizontal:10, 
      borderRadius:10,
      resizeMode:'contain'
    }
  })