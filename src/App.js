import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Provider} from 'react-redux'
import store from './utils/store'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
      
{/* 

    head
    body
      sidebar
        menuitems
      mainContainer
        button list
          button
        video container
          videocard
 */}


    </Provider>
  );
}


export default App;
