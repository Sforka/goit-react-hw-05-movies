"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[468],{196:function(e,t,n){n.d(t,{r:function(){return u}});var i=n(689),a=n(87),r={trendsGalleryItem:"GalleryItem_trendsGalleryItem__1xVnx","trendsGalleryItem-image":"GalleryItem_trendsGalleryItem-image__uifo2"},c=n(184),o=function(e){var t=e.images,n=e.name,o=e.title,s=e.id,u=(0,i.TH)(),l="https://image.tmdb.org/t/p/w300"+t;if(null!==t)return(0,c.jsx)("li",{className:r.trendsGalleryItems,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(s),state:{from:u},children:[(0,c.jsx)("img",{src:l,alt:n||o}),(0,c.jsx)("p",{children:n||o})]},s)})},s="Gallery_trendsGallery__y9sv-";function u(e){var t=e.movies;return(0,c.jsx)("ul",{className:s,children:t.map((function(e,t){var n=e.id,i=e.name,a=e.title,r=e.backdrop_path;return(0,c.jsx)(o,{id:n,images:r,name:i,title:a,index:t},t)}))})}},468:function(e,t,n){n.r(t);var i=n(433),a=n(439),r=n(952),c=n(196),o=n(791),s=n(184),u=new r.b;t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,o.useEffect)((function(){u.getTrending().then((function(e){e.data.results.map((function(e){var t=e.id,a=e.name,c=e.title,o=e.backdrop_path;return!n.some((function(e){return e.id===t}))&&r((function(e){return[].concat((0,i.Z)(e),[{id:t,name:a,title:c,backdrop_path:o}])}))}))})).catch((function(e){return alert(e)}))}),[n]),(0,s.jsx)(c.r,{movies:n})}},952:function(e,t,n){n.d(t,{b:function(){return o}});var i=n(144),a=n(671),r=n(243),c="3adc469534739232a382da2060386ef5",o=(0,i.Z)((function e(){(0,a.Z)(this,e),this.getTrending=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(c))},this.getById=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c))},this.getSearchMovie=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1"))},this.getCredits=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"))},this.getReview=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}}))}}]);
//# sourceMappingURL=468.939c48fd.chunk.js.map