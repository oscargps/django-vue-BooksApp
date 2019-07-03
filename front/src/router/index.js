import Vue from 'vue'
import Router from 'vue-router'
import ListBook from '@/components/book/ListBook'
import EditBook from '@/components/book/EditBook'
import HelloWorld from '@/components/HelloWorld'
import DeleteBook from '@/components/book/DeleteBook'
import NewBook from '@/components/book/NewBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    }
  ],
  mode: 'history'
})
