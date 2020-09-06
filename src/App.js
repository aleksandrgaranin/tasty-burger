import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Chackout from './containers/Checkout/Checkout';

class App extends Component {
  // To tes componentWillUnmount
  //state = {
  //   show: true
  // };

  // componentDidMount() {
  //   setTimeout(()=>{
  //     this.setState({show:false});
  //   },5000);
  // };
  // {this.state.show ? <BurgerBuilder/>:null} IN JSX
  render(){
    return  (
    <div>
      <Layout>
        <BurgerBuilder/>
        <Chackout/>
      </Layout>
    </div>
    );
  }
  
}

export default App;
