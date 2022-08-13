import { useEffect } from "react"
import { useReducer } from "react"

// 1.创建初始化数据
const initialState = {
  count: 10,
  proList: []
}
// 2.设置reducer---------唯一改变数据的方式就是通过reducer实现的
  const reducer = (state,action) => {  //action { type,payload }
    switch (action.type) {
      case 'add':
        return Object.assign({},state,{count:state.count + action.payload})
      case 'change_proList':
        return Object.assign({},state,{proList:action.payload})

      default:
        return state
    }
  }


// 有了useReducer，就不需要usestate,但是企业里项目一般不这么去使用
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
        fetch("http://121.89.205.189:3001/api/pro/list")
            .then((res) => res.json())
            .then(res => {
              dispatch({
                  type: "change_proList",
                  payload: res.data
              });
            });
  },[])

  return (
      <div>
          {state.count}
          <button
              onClick={() => {
                  dispatch({
                      type: "add",
                      payload: 5,
                  });
              }}
          >
              加5
          </button>

          <ul>
              {state.proList &&
                  state.proList.map((item) => {
                      return <li key={item.proid}> {item.proname} </li>;
                  })}
          </ul>
      </div>
  );
};

export default App;