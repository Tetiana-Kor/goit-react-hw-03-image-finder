(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2tl1l",Modal:"Modal_Modal__35QZx"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2nnLh",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1YivP"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__BS9jO"}},16:function(e,t,a){e.exports={Button:"Button_Button__19xCi"}},24:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(7),i=a.n(c),s=(a(22),a(23),a(24),a(3)),l=a(4),u=a(6),m=a(5),h=a(8),g=a(9),d=a.n(g),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):h.b.error("Please, enter something!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:d.a.Searchbar,children:Object(n.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(n.jsx)("span",{className:d.a.SearchFormButtonLabel})}),Object(n.jsx)("input",{type:"text",name:"imageName",placeholder:"Search images and photos",className:d.a.SearchFormInput,value:this.state.imageName,onChange:this.handleNameChange})]})})}}]),a}(r.Component),j=a(13),p=a(14),f=a.n(p),v=a(11),y=a.n(v),O=document.querySelector("#modal-root"),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:y.a.Overlay,onClick:this.handleOverlayClick,children:Object(n.jsx)("div",{className:y.a.Modal,children:Object(n.jsx)("img",{src:t,alt:a})})}),O)}}]),a}(r.Component),x=a(12),I=a.n(x),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.largeImageURL,o=this.state.showModal;return Object(n.jsxs)("li",{className:I.a.ImageGalleryItem,children:[Object(n.jsx)("img",{src:t,alt:a,className:I.a.ImageGalleryItemImage,onClick:this.toggleModal}),o&&Object(n.jsx)(S,{onClose:this.toggleModal,src:r,alt:a})]})}}]),a}(r.Component),w=a(15),N=a.n(w);function C(e){var t=e.images;return Object(n.jsx)("ul",{className:N.a.ImageGallery,children:t&&t.map((function(e){return Object(n.jsx)(_,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})}var k={fetchImage:function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("18992166-123806360f211761da038f5eb","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Invalid request"))}))}},M=a(16),F=a.n(M);function L(e){var t=e.onClickLoadMore;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"})})}var B="idle",G="pending",P="resolved",A="rejected",q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:B,error:null,currentPage:1},e.onClickLoadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.imageName,n=this.props.imageName,r=t.currentPage,o=this.state.currentPage;a!==n&&this.setState({images:[],currentPage:1}),a===n&&r===o||this.searchMoreImages(n,o)}},{key:"searchMoreImages",value:function(e,t){var a=this;this.setState({status:G}),k.fetchImage(e,t).then((function(e){if(0===e.total)return h.b.dark("No images. Please try another query!"),void a.setState({status:A});a.setState((function(t){return{images:[].concat(Object(j.a)(t.images),Object(j.a)(e.hits)),status:P}}))})).catch((function(e){return a.setState({error:e,status:A})})).finally((function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)}))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status;return a===B?Object(n.jsx)("div",{style:{margin:"20px auto",textAlign:"center",fontSize:"20px"},children:"Please, enter a query!"}):a===G?Object(n.jsx)(f.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}):a===A?null:a===P?Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{images:t}),Object(n.jsx)(L,{onClickLoadMore:this.onClickLoadMore})]}):void 0}}]),a}(r.Component),D=(a(46),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",page:1},e.handleSearchForm=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imageName,a=e.page;return Object(n.jsxs)("div",{style:{maxWidth:1200,margin:"0 auto",padding:20},children:[Object(n.jsx)(b,{onSubmit:this.handleSearchForm}),Object(n.jsx)(q,{imageName:t,currentPage:a}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component));i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1xA3A",SearchForm:"Searchbar_SearchForm__3Zw6o",SearchFormButton:"Searchbar_SearchFormButton__22zcf",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1GdbL",SearchFormInput:"Searchbar_SearchFormInput__1CCqb"}}},[[47,1,2]]]);
//# sourceMappingURL=main.ef4bdf91.chunk.js.map