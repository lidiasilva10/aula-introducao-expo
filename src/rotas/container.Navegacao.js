import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividades from '../atividades';
import Sobre from '../sobre/index';

import Drawer from './drawer';

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

export default Drawer;