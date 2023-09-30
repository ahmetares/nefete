import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomLinearGradient from '../components/CustomLinearGradient';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { setBackIconVisible } from '../store/generalSlice/generalSlice';

  


function Privacy({navigation}) {

  const { t } = useTranslation()

  const dispatch = useDispatch()

  navigation.addListener('beforeRemove', (e) => {  // swipe ile geri gelme için (ios) back iconunu kaldır
    dispatch(setBackIconVisible(false))
})


  return (
    <CustomLinearGradient>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.mainView}>

          <Text style={styles.mainTitle}>{t('privacy-header')}</Text>
          <Text style={styles.content}>  {t('privacy1')} </Text>
          <Text style={styles.content}>  {t('privacy2')} </Text>
          <Text style={styles.content}>  {t('privacy3')} </Text>
          <Text style={styles.content}>  {t('privacy4')} </Text>

        </View>
      </ScrollView>
    </CustomLinearGradient>
  );

}

const styles = StyleSheet.create({
  mainView: {
    margin: 15,
  },
  mainTitle: {
    fontSize: 16,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 14,
    marginTop: 20,
  },
  subTitle2: {
    fontSize: 13,
    marginTop: 20,
  },
  content: {
    fontSize: 11,
    marginTop: 15,
  },
  list: {
    fontSize: 11,
    // marginTop: 15,
  },
  boldText: {
    fontSize: 11,
  },
});


export default Privacy