
import Home from "@/pages/home/Home";
import Helpers  from "@/utils/helpers";

const helper = new Helpers();

const generateRoute=(name:string,page:any,title:string,permission?: string)=>{
    return {path:name,exact:true,page:
        {
                        component: page,
                        title: title,
        }
        ,meta:{permission:permission}};
}

const routes= [

generateRoute('/',Home,'Home'),


];

export {routes};


