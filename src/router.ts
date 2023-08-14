import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import GameAudio from './views/works/GameAudio.vue'
import Music from './views/works/Music.vue'
import ReSoundDesign from './views/works/ReSoundDesign.vue'
import LinearAudio from './views/works/LinearAudio.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Works},
  { path: '/works/music', component: Music},
  { path: '/works/game-audio', component: GameAudio},
  { path: '/works/re-sound-design', component: ReSoundDesign},
  { path: '/works/linear-audio', component: LinearAudio},
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router