import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Incidents from './pages/Incidents';
import Details from './pages/Details';

const AppStack = createStackNavigator();

export default function Routes() {
    return (

        <NavigationContainer>
            <AppStack>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Details" component={Details} />
            </AppStack>
        </NavigationContainer>
    );
}