"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[468],{196:function(e,t,n){n.d(t,{r:function(){return s}});var i=n(87),a={trendsGalleryItem:"GalleryItem_trendsGalleryItem__1xVnx","trendsGalleryItem-image":"GalleryItem_trendsGalleryItem-image__uifo2"},r=n(184),c=function(e){var t=e.images,n=e.name,c=e.title,o=e.id,s="https://image.tmdb.org/t/p/w300"+t;if(null!==t)return(0,r.jsx)("li",{className:a.trendsGalleryItems,children:(0,r.jsxs)(i.rU,{to:"/movies/".concat(o),children:[(0,r.jsx)("img",{src:s,alt:n||c}),(0,r.jsx)("p",{children:n||c})]},o)})},o="Gallery_trendsGallery__y9sv-";function s(e){var t=e.movies;return(0,r.jsx)("ul",{className:o,children:t.map((function(e,t){var n=e.id,i=e.name,a=e.title,o=e.backdrop_path;return(0,r.jsx)(c,{id:n,images:o,name:i,title:a,index:t},t)}))})}},468:function(e,t,n){n.r(t);var i=n(433),a=n(439),r=n(952),c=n(196),o=n(791),s=n(184),u=new r.b;t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,o.useEffect)((function(){u.getTrending().then((function(e){e.data.results.map((function(e){var t=e.id,a=e.name,c=e.title,o=e.backdrop_path;return!n.some((function(e){return e.id===t}))&&r((function(e){return[].concat((0,i.Z)(e),[{id:t,name:a,title:c,backdrop_path:o}])}))}))})).catch((function(e){return alert(e)}))}),[n]),(0,s.jsx)(c.r,{movies:n})}},952:function(e,t,n){n.d(t,{b:function(){return o}});var i=n(144),a=n(671),r=n(243),c="3adc469534739232a382da2060386ef5",o=(0,i.Z)((function e(){(0,a.Z)(this,e),this.getTrending=function(){return r.Z.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(c))},this.getById=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c))},this.getSearchMovie=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1"))},this.getCredits=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"))},this.getReview=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}}))}}]);
//# sourceMappingURL=468.2f6225ca.chunk.js.map