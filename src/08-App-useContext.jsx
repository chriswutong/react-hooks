import React, { Component, useContext } from 'react';

const MyContext = React.createContext()
const ColorContext = React.createContext();
MyContext.displayName = 'MyContext';
ColorContext.displayName = 'ColorContext';

const Child1 = () => {
  const my = useContext(MyContext);
  const color = useContext(ColorContext);
  return (
      <div>
          {my}-----{color}
      </div>
  );
}

const Child2 = () => {
    const my = useContext(MyContext);
    const color = useContext(ColorContext);
  return (
      <div>
          {color}-----{my}
      </div>
  );
}

class App extends Component {
  render() {
    return (
        <div>
            <MyContext.Provider value="传家宝">
                <ColorContext.Provider value="红色">
                    <Child1 />
                    <hr/>
                    <Child2 />
                </ColorContext.Provider>
            </MyContext.Provider>
        </div>
    );
  }
}

export default App;