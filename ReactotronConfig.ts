import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '@services/redux';
import { reactotronRedux } from 'reactotron-redux';
import { displayName } from './app.json';

const Reactotron = require('reactotron-react-native').default;

let reactotron: typeof Reactotron | null = null;

if (__DEV__) {
  reactotron = Reactotron.configure({
    name: displayName,
  })
    .useReactNative({
      asyncStorage: AsyncStorage,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: false,
      errors: { veto: () => false },
      overlay: false,
      middleware: [],
    })
    .use(reactotronRedux())
    .connect();

  Reactotron.clear();

  Reactotron.onCustomCommand({
    command: 'dispatchReduxAction',
    handler: (args: { action: string; payload: any }) => {
      store.dispatch({ type: args.action, payload: JSON.parse(args.payload) });
    },
    title: 'Dispatch Redux Action',
    description: 'Dispatch redux actions from Reactotron',
    args: [
      {
        name: 'action',
        type: 'string',
      },
      {
        name: 'payload',
        type: 'any',
      },
    ],
  });
}

export default reactotron;
