import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requiresGuest:true
      }
    
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        requiresGuest:true
      }
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta:{
        requiresAuth:true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  //Check for requiredAuth Guard
  if(to.matched.some(record=>record.meta.requiresAuth)){
    //Check if not loggedin
    if(!firebase.auth().currentUser){
        next({
          path: '/login',
          query:{
            redirect: to.fullPath
          }
        })
    }else{
      next();
    }
  }else if(to.matched.some(record=>record.meta.requiresGuest)){
    //check if login, we want to redirect them to the dashboard
    if(firebase.auth().currentUser){
      
      next({
        path: '/',
        query:{
          redirect: to.fullPath
        }
      })
  }else{
    next();
  }
  }else{
    next();
  }


})
//Nav Guard

export default router;