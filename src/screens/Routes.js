import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Navigation from '../navigation';
import { buildTransitions, expanded, sheet } from '../navigation/transitions';
import { updateTransitionProps } from '../redux/navigation';
import store from '../redux/store';
import { deviceUtils } from '../utils';
import ExpandedAssetScreen from './ExpandedAssetScreen';
import ImportSeedPhraseSheetWithData from './ImportSeedPhraseSheetWithData';
import ProfileScreenWithData from './ProfileScreenWithData';
import QRScannerScreenWithData from './QRScannerScreenWithData';
import ReceiveModal from './ReceiveModal';
import SendQRScannerScreenWithData from './SendQRScannerScreenWithData';
import SendSheetWithData from './SendSheetWithData';
import SettingsModal from './SettingsModal';
import TransactionConfirmationScreenWithData from './TransactionConfirmationScreenWithData';
import WalletScreen from './WalletScreen';
import {
  Cryptokitties,
  LocalEthereum,
  RadarRelay,
  Bounties,
  Peepeth,
  Dharma,
  MetaMultisig,
  Uniswap,
  Gitcoin,
  Synthetix,
  Aragon,
  Wyre,
  Decentraland,
  Foam,
  Veil,
  Augur,
  Fork
} from '../Apps';
import MainApp from '../Main';

const onTransitionEnd = () => store.dispatch(updateTransitionProps({ isTransitioning: false }));
const onTransitionStart = () => store.dispatch(updateTransitionProps({ isTransitioning: true }));

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainApp,
  },
  RadarRelay: {
    screen: RadarRelay,
  },
  Cryptokitties: {
    screen: Cryptokitties,
  },
  LocalEthereum: {
    screen: LocalEthereum,
  },
  Bounties: {
    screen: Bounties,
  },
  Peepeth: {
    screen: Peepeth,
  },
  Dharma: {
    screen: Dharma,
  },
  Augur: {
    screen: Augur,
  },
  Uniswap: {
    screen: Uniswap,
  },
  Gitcoin: {
    screen: Gitcoin,
  },
  Synthetix: {
    screen: Synthetix,
  },
  Aragon: {
    screen: Aragon,
  },
  Wyre: {
    screen: Wyre,
  },
  Decentraland: {
    screen: Decentraland,
  },
  Foam: {
    screen: Foam,
  },
  Veil: {
    screen: Veil,
  },
  Fork: {
    screen: Fork,
  },

},
{
  headerMode: 'none',
});

const SwipeStack = createMaterialTopTabNavigator({
  // eslint-disable-next-line sort-keys
  QRScannerScreen: {
    name: 'QRScannerScreen',
    screen: QRScannerScreenWithData,
  },
  AppNavigator: {
    name: 'AppNavigator',
    screen: AppNavigator,
  },
  WalletScreen: {
    name: 'WalletScreen',
    // screen: Veil,
    screen: WalletScreen,
  },
  ProfileScreen: {
    name: 'ProfileScreen',
    screen: ProfileScreenWithData,
  },

}, {
  headerMode: 'none',
  initialRouteName: 'WalletScreen',
  mode: 'modal',
  tabBarComponent: null,
});

const MainNavigator = createStackNavigator({
  ConfirmRequest: TransactionConfirmationScreenWithData,
  ExpandedAssetScreen: {
    navigationOptions: {
      effect: 'expanded',
      gestureResponseDistance: {
        vertical: deviceUtils.dimensions.height,
      },
    },
    screen: ExpandedAssetScreen,
  },
  ImportSeedPhraseSheet: ImportSeedPhraseSheetWithData,
  ReceiveModal: {
    navigationOptions: {
      effect: 'expanded',
      gestureResponseDistance: {
        vertical: deviceUtils.dimensions.height,
      },
    },
    screen: ReceiveModal,
  },
  SendQRScannerScreen: SendQRScannerScreenWithData,
  SendSheet: SendSheetWithData,
  SettingsModal: {
    navigationOptions: {
      effect: 'expanded',
      gesturesEnabled: false,
    },
    screen: SettingsModal,
  },
  SwipeLayout: SwipeStack,
}, {
  headerMode: 'none',
  initialRouteName: 'SwipeLayout',
  mode: 'modal',
  onTransitionEnd,
  onTransitionStart,
  transitionConfig: buildTransitions(Navigation, { expanded, sheet }),
  transparentCard: true,
});

export default createAppContainer(MainNavigator);
