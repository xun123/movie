export default {
    path:"/movie",
    component:() =>import('@/views/movie'),
    children:[
        {
           path:'city',
           component:()=> import('@/components/c_city') 
        },
        {
            path:'newPlaying',
            component:()=> import('@/components/c_newPlaying') 
         },
         {
            path:'comingSoon',
            component:()=> import('@/components/c_comingSoon') 
         },
         {
            path:'search',
            component:()=> import('@/components/c_search') 
         },
         {
            path:'/movie',
            redirect:'/movie/newPlaying'
         }
    ]
}