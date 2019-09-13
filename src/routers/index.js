import Vue from "vue";
import Router from "vue-router";
import movieRouter from "./r_movie";
import mineRouter from "./r_mine";
import cinemaRouter from "./r_cinema";

Vue.use(Router);

export default new Router({
  mode: "history",
  //设置根路径
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
});
