import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  const [modalIsShown, setmodalIsShown] = useState(false);

  const showModalHandler = () => {
    setmodalIsShown(true);
  }

  const hideModalHandler = () => {
    setmodalIsShown(false);
  }

  return (
    <Fragment>
      {modalIsShown && <Cart onCloseFromApp={hideModalHandler} />}
      <Header onCartClick={showModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
