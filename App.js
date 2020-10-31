import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeWorkScreen from './src/screens/HomeWorkScreen';
import ListScreen from  './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Homework: HomeWorkScreen,
    List: ListScreen,
    ImgScrn: ImageScreen 

    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Arda KAPTAN Pill Reminder"
    }
  }
);

export default createAppContainer(navigator);
