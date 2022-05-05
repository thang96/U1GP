import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import PendingView from './PendingView';
function CameraUI(props) {
  const [pausePreview, setPausePreview] = useState(false);
  const {navigation, router} = props;
  const {navigate, goBack} = navigation;
  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    const source = data.uri;
    if (source) {
      await camera.pausePreview();
      // console.log('picture source', data);

      setPausePreview(!pausePreview);
    }
  };

  const resumePicture = async function (camera) {
    await camera.resumePreview();
    navigate('RegisterToCompete01');
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
                  <Text>Aceptar</Text>
                </TouchableOpacity>
              ) : null}

              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.button}>
                <Text style={{fontSize: 14}}> Chụp </Text>
              </TouchableOpacity>
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
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default CameraUI;
