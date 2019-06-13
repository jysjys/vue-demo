import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

let WinRouter =  new Router({
  routes: [
    { path: '/testone', 
      component: () => import ('./test'),
    }
  ],
});


export default WinRouter;

