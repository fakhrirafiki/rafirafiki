import { withRouter } from 'react-router-dom';
import Routes from './config/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default withRouter(App);

