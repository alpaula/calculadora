import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calculadora from '@/components/Calculadora'
import Calculadora2 from '@/components/Calculadora2'
import ConsumindoApi from '@/components/ConsumindoApi'
import PesquisaCep from '@/components/PesquisaCep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/calc',
      name: 'Calculadora',
      component: Calculadora
    },
    {
      path: '/calc2',
      name: 'Calculadora2',
      component: Calculadora2
    },
    {
      path: '/cons',
      name: 'ConsumindoApi',
      component: ConsumindoApi
    },
    {
      path: '/pesquisa',
      name: 'PesquisaCep',
      component: PesquisaCep
    }
  ]
})
