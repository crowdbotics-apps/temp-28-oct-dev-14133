import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013321Navigator from '../features/BlankScreen013321/navigator';
import BlankScreen113310Navigator from '../features/BlankScreen113310/navigator';
import CopyOfBlankScreen013307Navigator from '../features/CopyOfBlankScreen013307/navigator';
import CopyOfBlankScreen013306Navigator from '../features/CopyOfBlankScreen013306/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013321: { screen: BlankScreen013321Navigator },
BlankScreen113310: { screen: BlankScreen113310Navigator },
CopyOfBlankScreen013307: { screen: CopyOfBlankScreen013307Navigator },
CopyOfBlankScreen013306: { screen: CopyOfBlankScreen013306Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
