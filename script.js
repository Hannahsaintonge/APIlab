"use strict";


$(document).ready (() => {
       $.get('https://www.reddit.com/r/aww/.json', (data) => {

         for(let post of data.data.children) {
            $("body").append(`
             <div>
              <h3>${post.data.title}</h3>
              <img src="${post.data.preview.images["0"].source.url}">
              <a href="${post.data.url}">click me!</a>
             </div>
     `)
    }
        
   });

});












// $(body).append.

// 'use strict';
// $(document).ready(() => {

//     $.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json', (data) => {
//         console.log(data);
//         console.log(data.title);
//         console.log(data.language);
//         console.log(data.posts.length);
//         console.log(data.posts["0"].title);
//         data.posts.forEach(post => {
//             console.log(post.title);
//             data.posts.forEach(post => {
//                 console.log(post.tags);
//             })
//             data.posts.forEach(post => {
//                 console.log(post.date);
//             })
//         })
//     });
