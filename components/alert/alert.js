import { Notify } from 'notiflix';
import { useContext } from "react";
import UiContext from "../../context/UI/context";



export const Alert = () => {
  let { alert } = useContext(UiContext);

  return (
    <>
      {alert.type === "fail" && Notify.failure(alert.msg)}
      {alert.type === "success" && Notify.success(alert.msg)}
      {alert.type === "warning" && Notify.warning(alert.msg)}

      {/* Loading Alert */}
      {/* {alert.type === "loading" && (
        Loading.standard('Please wait...', {
          backgroundColor: 'rgba(244,247,250,0.7)',
          svgColor:'#1DA1F2',
          svgSize:'100px',
          messageColor:'#1DA1F2'
        })
      )} */}
    </>
  );
};
