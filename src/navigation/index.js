import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Question from '../screens/Question';
import Result from '../screens/Result';
import SelectQuestion from '../screens/SelectQuestion';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
    return(
        
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen' 
                component={Home} 
                options={{header: props => null}}
            />
            <Stack.Screen 
                name='SelectQuestionScreen' 
                component={SelectQuestion} 
                options={{header: props => null}}
            />
            <Stack.Screen 
                name='QuestionScreen' 
                component={Question}
                options={{header: props => null}}
            />
            <Stack.Screen 
                name='ResultScreen' 
                component={Result}
                options={{header: props => null}}
            />
        </Stack.Navigator>
    )
}

