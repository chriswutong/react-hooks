import { useEffect,useContext } from 'react';
import { createContext, useReducer } from "react";

const MyContext = createContext()
const initialState = {
  bannerList : [],
  proList: []
}

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "change_bannerList":
            return Object.assign({}, state, { bannerList: payload }); //assign的合并方式
        case "change_proList":
            return { ...state, proList: payload }; // 对象的合并方式
        default:
            return state;
    }
};

const Child1 = () => {
  const { state, dispatch } = useContext(MyContext);
  useEffect(() => {
      fetch("http://121.89.205.189:3001/api/pro/list?limitNum=15")
          .then((res) => res.json())
          .then((res) => {
              dispatch({ type: "change_proList", payload: res.data });
          });
  }, [dispatch]);
  return(
    <div>
      {
         state.proList && state.proList.map(item => {
          return (<p key={item.proid} > {item.proname} </p>)
         })
      }
    </div>
  )
}

const Child2 = () => {
    const { state } = useContext(MyContext);
    return (
        <div>
            {state.proList &&
                state.proList.map((item) => {
                    return <p key={item.proid}> {item.proname} </p>;
                })}
        </div>
    );
};


 const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <MyContext.Provider value={{ state, dispatch }}>
                <Child1 />
                <hr/>
                <Child2 />
            </MyContext.Provider>
        </div>
    );
}

export default App;