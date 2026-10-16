import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (<>
    <StatusBar style="light" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategoris" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}