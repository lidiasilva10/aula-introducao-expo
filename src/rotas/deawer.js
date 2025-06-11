import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividades from '../atividades';
import Sobre from '../sobre/index';

export default function Drawer() {

    return(
        <Drawer.Navigation>
            <DrawerNavigation.S

        </Drawer.Navigation>
    )
    
};

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

