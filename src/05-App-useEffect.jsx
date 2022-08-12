import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = (props) => {
    const [list, setList] = useState([]);
    // 1.useEffect是一个副作用函数，客户以执行数据的请求
    // 问题，数据改变之后，数据请求一直不停，数据改变，引起视图改变
    // useEffect(() => {  // 相当于componentDidmount , componentDidUpdate,
    //     fetch("http://121.89.205.189:3001/api/pro/list")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res.data);
    //             setList(res.data);
    //         });
    // });

    // 2.useEffect第二个参数是一个依赖项，如果设置为[],表明，useEffect只会执行一次
    // useEffect(() => {  // 相当于componentDidmount，
    //     fetch("http://121.89.205.189:3001/api/pro/list")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res.data);  // 只打印一次
    //             setList(res.data);
    //         });
    // },[]);

    // 3.useEffect可以根据第二个参数值的变化去判断是否需要再次执行
    // 相当于在vue中监听了数据的变化的操作
    // const [count, setCount] = useState(10);
    // useEffect(() => {
    //     // 相当于componentDidmount，componentDidUpdate
    //     fetch("http://121.89.205.189:3001/api/pro/list")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res.data); // 只要count的值发生改变，useEffect就会重新执行
    //             setList(res.data);
    //         });
    // }, [count]);

    // 4.useEffect内返回了一i个函数，相当于componentWillUnmount
    // 假设count为17 就销毁组件
    const [count, setCount] = useState(10);
    useEffect(() => {
        // 相当于componentDidmount，componentDidUpdate,componentWillUnmount(返回函数才会生效)
        fetch("http://121.89.205.189:3001/api/pro/list")
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data); // 只要count的值发生改变，useEffect就会重新执行,状态改变，引起函数式组件重新渲染
                setList(res.data);
            });

            // // 判断count值
            // if(count === 17){
            //   props.root.unmount()
            // }

        return () => {
            // componentWillUnmount(返回函数才会生效);
            console.log("销毁了组件");
        };
    }, [count]);

          useEffect(() => {
              if (count === 17) {
                  props.root.unmount();
              }
          }, [count, props.root]);  // 添加了useEffect中的依赖项

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>加</button> {count}
            <ul>
                {list &&
                    list.map((item) => {
                        return <li key={item.proid}> {item.proname} </li>;
                    })}
            </ul>
        </div>
    );
};

export default App;