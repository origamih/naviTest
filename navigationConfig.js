import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Screen from './Screen';

const extra = {
  defaultNavigationOptions: {
    gestureResponseDistance: {
      horizontal: 300
    }
  },
  headerMode: 'none',
  mode: 'card',
  cardShadowEnabled: false,
  cardOverlayEnabled: true,
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: '#fff',
      shadowOpacity: 0,
      shadowOffset: { height: 0 },
      shadowRadius: 0,
      elevation: 0
    }
  })
};
const DashboardScreens = createStackNavigator(
  {
    Dashboard: { screen: Screen('Dashboard', 'Invoices') },
    Invoices: { screen: Screen('Invoice', 'Dashboard') }
  },
  {
    initialRouteName: 'Dashboard',
    ...extra
  }
);

const CustomerSupportScreens = createStackNavigator(
  {
    CustomerSupportChat: { screen: Screen('CustomerSupport', 'CustomerSupportChat') }
  },
  {
    initialRouteName: 'CustomerSupportChat',
    ...extra
  }
);

const BillCameraScreens = createStackNavigator(
  {
    Scan: { screen: Screen('CameraScreen', 'ImageViewer') },
    ImageViewer: { screen: Screen('ImageViewer', 'Scan') }
  },
  {
    initialRouteName: 'Scan',
    ...extra
  }
);

const OptionScreens = createStackNavigator(
  {
    Option: { screen: Screen('Options', 'Login') },
    Login: { screen: Screen('Login', 'Option') },
  },
  {
    initialRouteName: 'Option',
    ...extra
  }
);

const Tabs = createBottomTabNavigator(
  {
    DashboardScreens,
    CustomerSupportScreens,
    BillCameraScreens,
    OptionScreens
  },
  {
    mode: 'card',
    initialRouteName: 'DashboardScreens',
    tabBarOptions: {
      showLabel: true
    }
  }
);

const Main = createStackNavigator(
  {
    Dashboard: { screen: Tabs }
  },
  {
    ...extra,
    initialRouteName: 'Dashboard',
    cardStyle: {
      shadowOpacity: 0,
      shadowOffset: { height: 0 },
      shadowRadius: 0,
      elevation: 0,
      backgroundColor: '#fff'
    }
  }
);

export default createAppContainer(Main);
