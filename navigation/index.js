import { createStackNavigator } from "@react-navigation/stack";
import PhysicalQuestion from "../onboarding_screens/Physical_Question";
import Screen1 from "../onboarding_screens/onboarding1";
import MindQuestion from "../onboarding_screens/Mind_Question";
import CharismaQuestion from "../onboarding_screens/Charisma_Question";
import PerceptionQuestion from "../onboarding_screens/Perception_Question";
import WillpowerQuestion from "../onboarding_screens/Willpower_Question";
import DailyQuests from "../onboarding_screens/Daily_Quests";
import MainScreen from "../main-app/main-screen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from "../Profile";


const Stack = createStackNavigator ();
const Tab = createBottomTabNavigator();

function HomeScreen () {
    return(
        <Tab.Navigator initialRouteName="Main">
            <Tab.Screen name="Main" component={MainScreen} options={{title: "HOME",
            tabBarIcon:({name, size, color}) => (
                <Entypo name="home" size={24} color={"blue"}/>
            )
        }}
             />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: "PROFILE",
            tabBarIcon:({name, size, color}) => (
                <MaterialCommunityIcons name="face-man-profile" size={24} color={"black"}/>
            )
        }}
        />
        </Tab.Navigator>
    )
            
}

function MyStack (props) {


    return(
        <Stack.Navigator>
            <Stack.Screen name = "Welcome!" component={Screen1} options={{headerShown:false}}/>
            <Stack.Screen name = "Q1" component={PhysicalQuestion} options={{headerShown:false}}/>
            <Stack.Screen name = "Q2" component={MindQuestion} options={{headerShown:false}}/>
            <Stack.Screen name = "Q3" component={CharismaQuestion} options={{headerShown:false}}/>
            <Stack.Screen name = "Q4" component={PerceptionQuestion} options={{headerShown:false}}/>
            <Stack.Screen name = "Q5" component={WillpowerQuestion} options={{headerShown:false}}/>
            <Stack.Screen name = "Daily Quest" component={DailyQuests} options={{headerShown:false}}/>
            <Stack.Screen name = "Main Screen" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



export default MyStack;