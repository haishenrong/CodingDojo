import './App.css';
import PersonCard from './components/FormData';
import ReduxPC from './components/ReduxPC';
import ReactDOM from 'react-dom'
import {createStore} from 'redux';

const initialState = {
      firstName: {
          value: '',
          error: null
      },
      lastName: {
          value: '',
          error: null
      },
      email: {
          value: '',
          error: null
      }
  };
  
const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FNAME':
          let changedPartF = state.firstName;
          changedPartF.value=action.data;
          changedPartF.error = changedPartF.value.length >= 2 
          ? null
          : "Name must be atleast 2 characters"
          return {...state, firstName:changedPartF};
      case 'UPDATE_LNAME':
          let changedPartL = state.lastName;
          changedPartL.value=action.data;
          changedPartL.error = changedPartL.value.length >= 2 
          ? null
          : "Name must be atleast 2 characters"
          return {...state, firstName:changedPartL};
      case 'UPDATE_EMAIL':
        let changedPartE = state.email;
          changedPartE.value=action.data;
          if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email.value))
              return state;
          changedPartE.error = "Not a valid email.";
          return  {...state, firstName:changedPartE};
      default:
          return state;
  }
}

const store = createStore(userReducer)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard />
        <ReduxPC store={store} />
      </header>
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp);

export default App;
