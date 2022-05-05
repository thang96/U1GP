import React,{useEffect,useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import LoadingComponent from '../components/LoadingComponent';
import Splash from '../containers/Splash';
import {loadAppStateAction} from '../actions/appStateActions';
import {navigationRef} from '../actions/navigationActions';
import NetworkService, {networkRef} from '../repositories/remote/network';
import TabNavigator from './TabNavigator';

function MainNavigator(props) {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplash(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const renderNavigator = () => {
    const {appState} = props;
    if (!appState.isLoaded) {
    }
    if (appState.isLoggedIn) {
      return <TabNavigator />;
    }
    return splash?<Splash/> : <TabNavigator/>;
  };

  const renderLoading = () => {
    const {appState} = props;
    return <LoadingComponent modalVisible={appState.isLoading} />;
  };

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent backgroundColor="black" barStyle={"light-content"} />
        {renderNavigator()}
        {renderLoading()}
        <NetworkService ref={networkRef} loadAppState={props.loadAppState} />
      </NavigationContainer>
    </>
  );
}

MainNavigator.propTypes = {};

MainNavigator.defaultProps = {
  appState: {},
};

const mapStateToProps = state => ({
  appState: state.appState,
});
const mapDispatchToProps = dispatch => ({
  loadAppState: payload => dispatch(loadAppStateAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
