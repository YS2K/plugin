/**机器人服务层 */
import axios  from 'axios';

import {getlocalStorage} from '../utils/tool'
/**得到引导机器人语 */
export async function  messageCode(Code,url,authorizationCode) {
       if(!url){
           return;
       }
        const pars =url+'/'+Code;
        const authorizt ='bearer '+ getlocalStorage(authorizationCode);
        console.log('re',pars);
        console.log('authorizt',authorizt);
        return new Promise(function(resolev,reject){
            axios.get(pars,{params:{},headers:{
                'Authorization':authorizt
            }
        }).then((res) => {
                const data = res.data.data;
                resolev(data);
                reject();
            });
        });
}