import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import PendingView from './PendingView';
import { useNavigation } from '@react-navigation/native';
function CameraUI(props) {
  const [pausePreview, setPausePreview] = useState(false);
  const navigation = useNavigation()
  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    const source = data.uri;
    if (source) {
      await camera.pausePreview();
      setPausePreview(!pausePreview);
    }
  };

  const resumePicture = async function (camera) {
    await camera.resumePreview();
    navigation.goBack()
    setPausePreview(!pausePreview);
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return <View />;
          }
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              {pausePreview ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => resumePicture(camera)}>
                  <Text style={{fontSize: 14,color:'black'}}>保存</Text>
                </TouchableOpacity>
              ) : null}
              {pausePreview==false&&<TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.button}>
                <Text style={{fontSize: 14,color:'black'}}>写真を撮る</Text>
              </TouchableOpacity>}
              
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default CameraUI;
