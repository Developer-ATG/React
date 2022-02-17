import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
	return (
		<Fragment>
			<Layout>
				<Cart />
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
