import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import ReviewList from '../components/ReviewList.vue';
import AddReview from '../components/AddReview.vue';
import SingleReview from '../components/SingleReview.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/review', component: ReviewList },
  { path: '/add', component: AddReview },
  {
    path: '/view/:id', component: SingleReview,
    name: 'view',
    props: true,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
