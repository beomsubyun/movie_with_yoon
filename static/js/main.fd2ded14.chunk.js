(this.webpackJsonpmovie_with_yoon=this.webpackJsonpmovie_with_yoon||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),d=r(4),c=r.n(d),n=r(3),s=r.n(n),o=r(5),b=r(6),v=r(7),_=r(10),l=r(9),h=r(8),u=(r(16),r(0));var g=function(e){e.id;var t=e.poster,r=e.title,a=e.avgRating;return Object(u.jsxs)("div",{className:"highmovies__container",children:[Object(u.jsx)("img",{src:t,alt:r}),Object(u.jsx)("h5",{children:r}),Object(u.jsxs)("div",{className:"rate__container",children:[Object(u.jsx)("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M7.21468 0.878116C7.30449 0.601722 7.69551 0.601722 7.78532 0.878115L9.1165 4.97508C9.15666 5.09868 9.27185 5.18237 9.40182 5.18237H13.7096C14.0002 5.18237 14.1211 5.55426 13.886 5.72508L10.4009 8.25714C10.2957 8.33353 10.2517 8.46894 10.2919 8.59255L11.6231 12.6895C11.7129 12.9659 11.3965 13.1957 11.1614 13.0249L7.67634 10.4929C7.57119 10.4165 7.42881 10.4165 7.32366 10.4929L3.83858 13.0249C3.60347 13.1957 3.28712 12.9659 3.37693 12.6895L4.70811 8.59255C4.74827 8.46894 4.70428 8.33353 4.59913 8.25714L1.11405 5.72508C0.878932 5.55426 0.999764 5.18237 1.29038 5.18237H5.59818C5.72815 5.18237 5.84334 5.09868 5.8835 4.97508L7.21468 0.878116Z",fill:"#9E9EA4"})}),Object(u.jsxs)("p",{children:[a,"/5"]})]})]})};r(18);var m=function(e){e.id;var t=e.backgroundPoster,r=e.title,a=e.avgRating,i=e.genre,d={backgroundImage:"url(".concat(t,")")},c=i.slice(0,2);return Object(u.jsxs)("div",{className:"movies__container",style:d,children:[Object(u.jsx)("div",{className:"gradation"}),Object(u.jsxs)("div",{className:"movies__info",children:[Object(u.jsx)("h2",{className:"movies__title",children:r}),Object(u.jsxs)("div",{className:"movies__info__sub",children:[Object(u.jsx)("p",{children:"".concat(c[0],", ").concat(c[1])}),Object(u.jsxs)("div",{className:"rate__container",children:[Object(u.jsx)("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M7.21468 0.878116C7.30449 0.601722 7.69551 0.601722 7.78532 0.878115L9.1165 4.97508C9.15666 5.09868 9.27185 5.18237 9.40182 5.18237H13.7096C14.0002 5.18237 14.1211 5.55426 13.886 5.72508L10.4009 8.25714C10.2957 8.33353 10.2517 8.46894 10.2919 8.59255L11.6231 12.6895C11.7129 12.9659 11.3965 13.1957 11.1614 13.0249L7.67634 10.4929C7.57119 10.4165 7.42881 10.4165 7.32366 10.4929L3.83858 13.0249C3.60347 13.1957 3.28712 12.9659 3.37693 12.6895L4.70811 8.59255C4.74827 8.46894 4.70428 8.33353 4.59913 8.25714L1.11405 5.72508C0.878932 5.55426 0.999764 5.18237 1.29038 5.18237H5.59818C5.72815 5.18237 5.84334 5.09868 5.8835 4.97508L7.21468 0.878116Z",fill:"#9E9EA4"})}),Object(u.jsxs)("p",{children:[a,"/5"]})]})]})]})]})},w=(r(19),function(e){Object(_.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,i=new Array(a),d=0;d<a;d++)i[d]=arguments[d];return(e=t.call.apply(t,[this].concat(i))).state={movies:[],highMovies:[]},e.getMovies=Object(o.a)(s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.movies;case 2:r=t.sent,e.setState({movies:r}),e.getHighMovies(r);case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(r,[{key:"getHighMovies",value:function(e){var t=e.sort((function(e,t){var r=(e.bbs+e.dys)/2;return(t.bbs+t.dys)/2-r})).slice(0,10);this.setState({highMovies:t})}},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,r=e.highMovies;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"\ubcf8 \uc601\ud654"}),Object(u.jsxs)("section",{className:"highmovies",children:[Object(u.jsx)("h3",{children:"\ud83c\udfc6 \ud3c9\uc810 \uba85\uc608\uc758 \uc804\ub2f9"}),Object(u.jsx)("div",{className:"highmovies__item",children:r.map((function(e){return Object(u.jsx)(g,{id:e.id,poster:e.poster,title:e.title,avgRating:(e.bbs.rate+e.dys.rate)/2},e.id)}))})]}),Object(u.jsx)("section",{className:"movies",children:t.map((function(e){return Object(u.jsx)(m,{id:e.id,backgroundPoster:e.background_post,title:e.title,avgRating:(e.bbs.rate+e.dys.rate)/2,genre:e.genre},e.id)}))})]})}}]),r}(i.a.Component));c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"movies":[{"id":1,"poster":"http://t1.daumcdn.net/movie/2db5bfece60741fb80b3ef614862e4991546396452879","background_header":"","background_footer":"","background_post":"http://t1.daumcdn.net/cfile/1520181A4BDEF19E65","title":"\ub4dc\ub798\uace4 \uae38\ub4e4\uc774\uae30 1","date":{"year":2010,"month":5,"day":20},"genre":["\uc560\ub2c8\uba54\uc774\uc158","\uc5b4\ub4dc\ubca4\ucc98"],"bbs":{"rate":5,"review_title":"","review_desc":""},"dys":{"rate":4,"review_title":"","review_desc":""}},{"id":2,"poster":"http://t1.daumcdn.net/cfile/275F8A38528EC2D825","background_header":"","background_footer":"","background_post":"http://t1.daumcdn.net/cfile/2257564B53BAE5F716","title":"\ub4dc\ub798\uace4 \uae38\ub4e4\uc774\uae30 2","date":{"year":2014,"month":7,"day":23},"genre":["\uc560\ub2c8\uba54\uc774\uc158","\uc561\uc158","\uc5b4\ub4dc\ubca4\ucc98"],"bbs":{"rate":5,"review_title":"","review_desc":""},"dys":{"rate":2,"review_title":"","review_desc":""}},{"id":3,"poster":"http://t1.daumcdn.net/movie/4e05a94bc1df41d39b921d20cd74a0347800acc7","background_header":"","background_footer":"","background_post":"","title":"\ubbf8\ub4dc\ub098\uc787 \uc120","date":{"year":2018,"month":6,"day":21},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c","\ub4dc\ub77c\ub9c8"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":3,"review_title":"","review_desc":""}},{"id":4,"poster":"https://t1.daumcdn.net/movie/a6c1c741b14f0914b85b170c38b405c1c16d4061","background_header":"","background_footer":"","background_post":"","title":"\ub178\ud2b8\ubd81","date":{"year":2004,"month":11,"day":26},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c","\ub4dc\ub77c\ub9c8"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":1,"review_title":"","review_desc":""}},{"id":6,"poster":"http://t1.daumcdn.net/movie/915389db41e5ea5a6990ff6573f2435680ad249b","background_header":"","background_footer":"","background_post":"","title":"\ubbf8 \ube44\ud3ec \uc720","date":{"year":2016,"month":6,"day":1},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":2,"review_title":"","review_desc":""}},{"id":7,"poster":"https://t1.daumcdn.net/movie/355cd8a765ae6ce5e3afe5da5c1edc671ebe7353","background_header":"","background_footer":"","background_post":"","title":"\ud50c\ub9bd","date":{"year":2017,"month":7,"day":12},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c"],"bbs":{"rate":5,"review_title":"","review_desc":""},"dys":{"rate":4,"review_title":"","review_desc":""}},{"id":8,"poster":"https://t1.daumcdn.net/movie/9ab1a372dd93ced3c357eabb8e01f3f5d6003267","background_header":"","background_footer":"","background_post":"","title":"\ubcf4\uc2a4 \ubca0\uc774\ube44 2","date":{"year":2021,"month":7,"day":21},"genre":["\uc560\ub2c8\uba54\uc774\uc158","\uac00\uc871","\uc5b4\ub4dc\ubca4\ucc98"],"bbs":{"rate":3,"review_title":"","review_desc":""},"dys":{"rate":1,"review_title":"","review_desc":""}},{"id":9,"poster":"https://t1.daumcdn.net/movie/71454256ae63506a7fee5e03cf929b9b65a4f433","background_header":"","background_footer":"","background_post":"","title":"\uc18c\uc6b8","date":{"year":2021,"month":1,"day":20},"genre":["\uc560\ub2c8\uba54\uc774\uc158","\ud310\ud0c0\uc9c0"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":2,"review_title":"","review_desc":""}},{"id":10,"poster":"http://t1.daumcdn.net/movie/82538397e9c053be0a5b791cc5d202cbb9a7d280","background_header":"","background_footer":"","background_post":"","title":"\uc548\ub155, \ub098\uc758 \uc18c\uc6b8\uba54\uc774\ud2b8","date":{"year":2017,"month":12,"day":7},"genre":["\ub4dc\ub77c\ub9c8"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":5,"review_title":"","review_desc":""}},{"id":11,"poster":"https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9509f8790818777a727c53216cef5c35c60c844c","background_header":"","background_footer":"","background_post":"","title":"\uc0bc\uc9c4\uadf8\ub8f9 \uc601\uc5b4\ud1a0\uc775\ubc18","date":{"year":2020,"month":10,"day":21},"genre":["\ub4dc\ub77c\ub9c8"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":3,"review_title":"","review_desc":""}},{"id":12,"poster":"http://t1.daumcdn.net/movie/82125428787a97d115b0c010062ef1374e45b400","background_header":"","background_footer":"","background_post":"","title":"\ube44\ud3ec \uc120\ub77c\uc774\uc988","date":{"year":1996,"month":3,"day":16},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c","\ub4dc\ub77c\ub9c8"],"bbs":{"rate":3,"review_title":"","review_desc":""},"dys":{"rate":2,"review_title":"","review_desc":""}},{"id":13,"poster":"https://t1.daumcdn.net/movie/a0fa0de4d943ad43edcae85122d8ee7e52ef60ea","background_header":"","background_footer":"","background_post":"","title":"\ud06c\ub8e8\uc5d8\ub77c","date":{"year":2021,"month":5,"day":26},"genre":["\ub4dc\ub77c\ub9c8","\ubc94\uc8c4","\ucf54\ubbf8\ub514"],"bbs":{"rate":5,"review_title":"","review_desc":""},"dys":{"rate":2,"review_title":"","review_desc":""}},{"id":14,"poster":"https://t1.daumcdn.net/movie/9a1e99704b646ae3e63aaa47fea57a7bc95494b9","background_header":"","background_footer":"","background_post":"","title":"\uc870\uc81c, \ud638\ub791\uc774 \uadf8\ub9ac\uace0 \ubb3c\uace0\uae30\ub4e4","date":{"year":2004,"month":10,"day":29},"genre":["\ub85c\ub9e8\uc2a4","\uba5c\ub85c","\ub4dc\ub77c\ub9c8"],"bbs":{"rate":3,"review_title":"","review_desc":""},"dys":{"rate":3,"review_title":"","review_desc":""}},{"id":15,"poster":"http://t1.daumcdn.net/movie/2ca8b0c23d864ca4b8e94ae8230d8a1b1564966791763","background_header":"","background_footer":"","background_post":"","title":"\ubc8c\uc0c8","date":{"year":2019,"month":8,"day":29},"genre":["\ub4dc\ub77c\ub9c8"],"bbs":{"rate":3,"review_title":"","review_desc":""},"dys":{"rate":4,"review_title":"","review_desc":""}},{"id":16,"poster":"http://t1.daumcdn.net/movie/3673a8a0c5ff4f5c8c25cc959fd6985b1558662957684","background_header":"","background_footer":"","background_post":"","title":"\uc54c\ub77c\ub518","date":{"year":2019,"month":5,"day":23},"genre":["\uc5b4\ub4dc\ubca4\ucc98","\ud310\ud0c0\uc9c0","\uac00\uc871","\ubba4\uc9c0\uceec"],"bbs":{"rate":4,"review_title":"","review_desc":""},"dys":{"rate":4,"review_title":"","review_desc":""}}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.fd2ded14.chunk.js.map