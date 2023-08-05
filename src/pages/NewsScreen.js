import React, {useEffect, useState} from 'react';
import { useWindowDimensions,View} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import NewsCategory from './NewsCategory';
import Header from '../components/Header';

import { useTranslation } from 'react-i18next';


function NewsScreen({navigation}) {

  const {t} = useTranslation()


    const renderScene2 = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <NewsCategory navigation={navigation} categoryName={'all'} />;
          case 'second':
            return <NewsCategory navigation={navigation} categoryName={'nft'} />;
          case 'third':
            return <NewsCategory navigation={navigation} categoryName={'metaverse'} />;
          case 'fourth':
            return <NewsCategory navigation={navigation} categoryName={'music'} />;
          case 'fifth':
            return <NewsCategory navigation={navigation} categoryName={'gaming'} />;
          default:
            return <null/>;
        }
      };

      const layout = useWindowDimensions();

      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
        {key: 'first', title: t('allNews-category')},
        {key: 'second', title:  t('NFT-category')},
        {key: 'third', title:  t('metaverse-category')},
        {key: 'fourth', title:  t('music-category')},
        {key: 'fifth', title:  t('gaming-category')},
      ]);


      const renderTabBar = props => (
        <TabBar
          {...props}
          style={{backgroundColor: 'white'}}
          labelStyle={{color: 'black'}}
          tabStyle={{width:120}}
          scrollEnabled={true}
          indicatorStyle={{backgroundColor: 'grey', height: 2, borderRadius: 10}}

        />
      );

      return (
        <>
        <Header header={'Haberler'} />
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene2}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={renderTabBar}
          />
        </>
      );
}


export default NewsScreen

