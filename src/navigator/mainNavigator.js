import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013308Navigator from '../features/BlankScreen013308/navigator';
import CopyOfBlankScreen013307Navigator from '../features/CopyOfBlankScreen013307/navigator';
import CopyOfBlankScreen013306Navigator from '../features/CopyOfBlankScreen013306/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013308: { screen: BlankScreen013308Navigator },
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
