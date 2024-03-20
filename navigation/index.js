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
import PriorityStat from "../onboarding_screens/PriorityStat";
import Hobbies from "../onboarding_screens/Hobbies";
import AvatarScreen from "../main-app/avatar";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


const Stack = createStackNavigator ();
const Tab = createBottomTabNavigator();

function HomeScreen () {
    return(
        <Tab.Navigator initialRouteName="Main">
            <Tab.Screen name="QUESTS" component={MainScreen} options={{ title: "QUESTS",
            tabBarIcon:({name, size, color}) => (
                <FontAwesome5 name="gamepad" size={24} color="black" />
            )
            }}
                />
            <Tab.Screen name="AVATAR" component={AvatarScreen} options={{title: "AVATAR",
            tabBarIcon:({name, size, color}) => (
                <FontAwesome6 name="face-laugh" size={24} color="black"/>
            )
            }}
            />
            <Tab.Screen name="PROFILE" component={ProfileScreen} options={{title: "PROFILE",
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
            <Stack.Screen name = "Priority Stat" component={PriorityStat} options={{headerShown:false}}/>
            <Stack.Screen name = "Favorite Hobbies" component={Hobbies} options={{headerShown:false}}/>
            <Stack.Screen name = "Main Screen" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}



export default MyStack;