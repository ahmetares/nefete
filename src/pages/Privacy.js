import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomLinearGradient from '../components/CustomLinearGradient';
import { useTranslation } from 'react-i18next';

function Privacy() {

  const { t } = useTranslation()


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