import toast from 'react-hot-toast';

function sToast(msg) {
   return toast(msg,{     
        style: {
          background: 'green',
          color: '#fff',
        },
          duration: 3000,
         }    
       );
}

function eToast(msg) {
    return toast(msg,{     
         style: {
           background: 'red',
           color: '#fff',
         },
           duration: 3000,
          }    
        );
 }

 const Utilis = {sToast, eToast};
 export default Utilis;