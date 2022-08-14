import { useDebugValue, useEffect,useState } from "react";

function usePosition(){
     const [position, setPosition] = useState({ x: 0, y: 0 });

     // useEffect
     useEffect(() => {
         // 相当于componentDidmount,componentDidUpdate,componentWillUnmount
         function moveHandler(event) {
             console.log(event.clientX, event.clientY);

             setPosition({
                 // 修改完毕发现页面中的宽高丢失
                 x: event.clientX,
                 y: event.clientY,
             });
         }
         window.addEventListener("mousemove", moveHandler);
     });

     useDebugValue('xxxx')  // 用于react开发者工具中显示自定义hooks的标签

     return (
        position
     )
}

// useState设置初始化状态的方法,拆分状态，
const APP = () => {

const position = usePosition()

  const [rect, ] = useState({w:100,h:100})
 
    return (
        <div>
            <div>
                元素宽为：{rect.w},高为{rect.h}
            </div>
            <div>
                元素的坐标为{position.x},{position.y}
            </div>
        </div>
    );
};

export default APP;
