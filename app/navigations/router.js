import { Dimensions } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import DrawerMenu from '../screens/drawerMenu';
import { SignIn, SignUp, FootballTeamScreen,DetailPlayerScreen, AddPlayerScreen, TournamentScreen, DetailTournamentScreen , RegisterTournamentScreen } from '../screens';

import RecordScreen from '../screens/records';
import ExpenseScreen from '../screens/expenses';
import SettingScreen from '../screens/settings';


const { width, height } = Dimensions.get('window');

const MainScreenNavigator = createStackNavigator({
    // SignIn: { screen: SignIn },
    // SignUp: { screen: SignUp },

    // FootballTeam: { screen: FootballTeamScreen },
    // AddPlayer: {screen: AddPlayerScreen },
    // DetailPlayer: {screen: DetailPlayerScreen},

    Tournament: { screen: TournamentScreen },
    DetailTournament: {screen: DetailTournamentScreen},
    RegisterTournament : {screen: RegisterTournamentScreen},
    
    Record: { screen: RecordScreen },
    Expense: { screen: ExpenseScreen },
    Setting: { screen: SettingScreen },
   

});


const Drawer = createDrawerNavigator({
    Main: { screen: MainScreenNavigator},
}, {
        contentComponent: DrawerMenu,
        drawerWidth: width / 2.5,
    });

export default Drawer;