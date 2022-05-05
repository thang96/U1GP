import React, {useRef, useState} from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import stylesRegisterCompete01 from '../resource/styles/registerCompete01Style';
import IconCameraChildren from '../resource/icon/icon-camera-children.svg';
import IconCameraSuccess from '../resource/icon/icon-camera-success.svg';
import constant from "../constants/constant";
import colors from '../constants/colors';
import ButtonCustomComponent from "../components/ButtonCustomComponent";
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import common from "../utils/common";
import {useDispatch} from "react-redux";
import {navigateAction} from "../actions/navigationActions";
import ProgressiveImage from "../components/ProgressiveImage";


function RegisterToCompete01(props) {
  const actionSheetIsImage = useRef(null);
  const dispatch = useDispatch();

  const checkCamera = () => 
    albumImage.imageOne.imgActive==false&&
    albumImage.imageTwo.imgActive==false&&
    albumImage.imageThree.imgActive==false&&
    albumImage.imageFour.imgActive==false&&
    albumImage.imageFive.imgActive==false&&
    albumImage.imageSix.imgActive==false
  

  const [albumImage, setAlbumImage] = useState({
    imageOne: {
      key: 'imageOne',
      img: null,
      imgActive: false,
    },
    imageTwo: {
      img: null,
      key: 'imageTwo',
      imgActive: false,
    },
    imageThree: {
      img: null,
      key: 'imageThree',
      imgActive: false,
    },
    imageFour: {
      img: null,
      key: 'imageFour',
      imgActive: false,
    },
    imageFive: {
      img: null,
      key: 'imageFive',
      imgActive: false,
    },
    imageSix: {
      img: null,
      key: 'imageSix',
      imgActive: false,
    },
  });

  const [isDoubleClick, setIsDoubleClick] = useState(true);

  const renderActionSheet = () => {
    const optionsIsImage = [
      '写真を撮る',
      'ライブラリから選ぶ',
      'キャンセル',
    ];
    return (
      <ActionSheet
        useNativeDriver={true}
        ref={actionSheetIsImage}
        options={optionsIsImage}
        cancelButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 0:
              isDoubleClick ? openCamera() : null;
              break;
            case 1:
              isDoubleClick ? openGallery() : null;
              break;
            default:
              break;
          }
        }}
      />
    );
  };

  const openCamera =  () => {
    setIsDoubleClick(false);
    common.pickImageFromCamera(
      async result => {
        await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const openGallery = () => {
    setIsDoubleClick(false);
    common.pickImageFromGallery(
      async result => {
       await addNewImage(result);
      },
      onFalse => {
        setIsDoubleClick(true);
      },
    );
  };

  const addNewImage = async result => {
    const newAlbum = {...albumImage};
    const imageConverted = await common.resizeImageNotVideo(result);

    const isImgActive = Object.values(newAlbum).find(value => value.imgActive);
    if (imageConverted?.uri) {
      isImgActive.img = imageConverted;
    }
    setAlbumImage(newAlbum);
    setIsDoubleClick(true);
  };

  const checkShowImage = (key) => {
    const newAlbum = {...albumImage};
    let imageActive =  Object.values(newAlbum).find(value => value.imgActive === true);

    return [imageActive?.img?.uri, imageActive?.img?.uri]
  };

  const showActionSheet = () => {
    if (actionSheetIsImage.current === null) {
      return;
    }
    actionSheetIsImage.current.show();

  };

  const handleImage = keys => {
    const newAlbum = {...albumImage};
    Object.keys(albumImage).forEach(key => {
      newAlbum[key].imgActive = keys === key;
    });
    setAlbumImage(newAlbum);
  };

  const checkImageInList = (key) => {
    const newAlbum = {...albumImage};
    const isImgActive = Object.values(newAlbum).find(value => value.key === key);
    console.log(isImgActive, 'isImgActive');
    return [!isImgActive?.img, isImgActive?.img?.uri];
  };

  return (
    <SafeAreaView style={stylesRegisterCompete01.container}>
      <View style={{alignItems: 'center', flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingTop: 20}}>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 19 : 14, fontWeight: 'bold', color: colors.colorPageText}} >参戦するバイクのことを教えてください</Text>
        </View>
        <ScrollView style={{ flex: 1, width: '100%'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              handleImage('imageCommon');
              showActionSheet();
            }}
            style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20, height: constant.HEIGHT / 2.5}}>
            {
              checkShowImage()[0] ? (
                <ProgressiveImage
                  thumbnailStyle={styles.whPercent100}
                  source={{uri: checkShowImage()[1]}}
                  containerStyle={styles.whPercent100}
                />
              ) : (
                <Text style={{fontSize: Platform.OS === 'ios' ? 19 : 16, fontFamily: 'meiryo', color: colors.colorPageText}}>メイン写真</Text>
              )
            }
          </TouchableOpacity>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              flex: 1,
              alignItems: 'flex-start',
              marginHorizontal: 0.5,
            }}>
            {
              Object.values(albumImage).map((value, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleImage(value.key);
                      showActionSheet();
                    }}
                    key={index.toString()}
                    underlayColor={'#f7f7f7'}
                    style={[
                      styles.rootImage,
                      {
                        width: '33.3333333333%',
                        height: 80,
                        borderWidth: 1,
                        borderLeftWidth: value.key === 'imageOne' ||  value.key === 'imageFour'  ? 1 : 0,
                        borderTopWidth: ['imageFour', 'imageFive', 'imageSix'].includes(value.key) ? 0 : 1,
                        // backgroundColor: value?.key === 'imageOne' ? '#FFEFD6' : 'white'
                        backgroundColor:'white'
                      },
                    ]}>
                    {checkImageInList(value?.key)[0] ? (
                      <View style={{ top: value.key === 'imageOne' ? 5 : 0, alignItems: 'center',
                        justifyContent: 'center'}}>
                      <IconCameraChildren width={40} height={40} />
                        {/* {
                          value.key === 'imageOne' ?
                            <Text style={{
                              width: '100%',
                              textAlign: 'center',
                              fontSize: 11,
                              fontFamily: 'meiryo',
                              color: colors.colorPageText,
                              top: 2,
                            }}
                            >メイン写真</Text>
                            : null
                        } */}
                        </View>
                    ) : (
                      <ProgressiveImage
                        thumbnailStyle={styles.whPercent100}
                        source={{uri: checkImageInList(value?.key)[1]}}
                        containerStyle={styles.whPercent100}
                      />
                    )}
                  </TouchableOpacity>
                );
              })
            }
          </View>
          <View style={{ marginTop: 50, backgroundColor: colors.white}}>
          <TouchableOpacity
              disabled={checkCamera() == true}
              style={{
                backgroundColor:checkCamera()==true? colors.btnNext:'#509BE6',
                width: constant.WIDTH / 3,
                alignSelf: 'center',
                marginVertical: 20,
                borderRadius: 5,
                marginTop: 12,
                padding: 6,
              }}
              onPress={() => {
                dispatch(navigateAction({name: 'RegisterToCompete03', params: {
                    albumImage : albumImage,
                  }}));
              }}
            >
              <Text style={{
            fontSize: constant.HEIGHT > 700 ? 24 : 14,
            paddingVertical: Platform.OS === 'ios' ? 5 : 0,
            alignSelf:'center',
            color: colors.white,
            fontWeight: 'bold',
          }}>次へ</Text>
        </TouchableOpacity>
               
            
          </View>
        </ScrollView>
      </View>
      {renderActionSheet()}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  rootImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  whPercent100: {
    width: '100%',
    height: '100%',
  },
});

export default RegisterToCompete01;
