(this.webpackJsonpcompasslogon=this.webpackJsonpcompasslogon||[]).push([[0],{306:function(e,t,n){var o={".":64,"./":64,"./index":64,"./index.js":64};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id=306},311:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);n(163),n(236),n(286);var o=n(34),a=n(22),i=n(0),s=n(156),r=n(12),c=n(4),l=n(1);class p extends c.Page{render(){return Object(l.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var d=Object(c.withModel)(p);o.ModelClient;var m=n(103),g=n.n(m);const u=()=>Object(l.jsx)("div",{children:"Error loading chunks!"}),b=(h=e=>Object(l.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}}),x={skeletonHeight:1e3},function(e){return Object(l.jsx)(h,{...x,...e})});var h,x;var j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;return g()(e,{loading:t,error:u})};n(311);class A extends c.Page{get containerProps(){let e=super.containerProps;return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}var O,w;Object(c.MapTo)("compasslogon/components/page")(Object(c.withComponentMappingContext)((O=A,class extends i.Component{render(){let e=this.props.cqPath;return e?(w=w||"html",Object(l.jsx)(r.d,{exact:!0,path:"(.*)"+e+"(."+w+")?",render:e=>Object(l.jsx)(O,{...this.props,...e})},e)):Object(l.jsx)(O,{...this.props})}})));Object(c.MapTo)("compasslogon/components/container")(Object(c.withComponentMappingContext)(c.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(e){return!e||!e.cqItemsOrder||0===e.cqItemsOrder.length}});Object(c.MapTo)("compasslogon/components/experiencefragment")(Object(c.withComponentMappingContext)(c.Container),{emptyLabel:"Experience Fragment",isEmpty:function(e){return!e||!e.configured}});var I,y,v=n(15),S=n(16);const f=S.a.form(I||(I=Object(v.a)(["\nposition: absolute;\nbottom: 35px;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nwidth: 25%;\nheight: ",";\nmin-height: 310px;\nmargin: 7vh 0;\nmargin-left: 5vw;\n@media(max-width: 768px){\n    width: 80%\n}\nh2{\n    color: #FFFFFF;\n    font-size: 1.875rem;\n    margin: 0;\n}\np{\n    color: #E9B425;\n    font-weight: 700;\n    visibility: ",";\n    text-align: center;\n    margin: 0;\n}\ninput{\n    color: #FFFFFF;\n    font-weight: 700;\n    font-size: 1.125rem;\n    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);\n    border-radius: 50px; \n    border: 0;\n    padding: 20px;\n    box-sizing: border-box;\n    text-align: center !important;\n}\n"])),(e=>{var t;return null!==(t=e.height)&&void 0!==t?t:"50%"}),(e=>e.error?"visible":"hidden")),k=S.a.span(y||(y=Object(v.a)(["\nposition: relative;\nwidth: 97%;\nborder: 1px solid ",";\nborder-radius: 50px;\ninput{\n    background: transparent;\n    outline: 0;\n    text-align: left !important;\n}\nimg{\n    position: absolute;\n    right: 3%;\n    bottom: 38%;\n    height: 20px;\n    width: 20px;\n}\n"])),(e=>e.error?"#E9B425":"#FFFFFF"));var F;Object(c.MapTo)("compasslogon/components/content/form")((e=>{let{height:t,url_variable:n}=e;const o=Object(r.k)(),[a,s]=Object(i.useState)(!1),[c,p]=Object(i.useState)(),[d,m]=Object(i.useState)();let g=!1;const u=()=>{g&&o.push(n)};return Object(i.useEffect)((()=>{sessionStorage.getItem("user")&&p(sessionStorage.getItem("user")),sessionStorage.getItem("password")&&m(sessionStorage.getItem("password")),/^[a-zA-Z]+\.[a-zA-Z]+ $/.test(sessionStorage.getItem("user"))&&/^[0-9]$/.test(sessionStorage.getItem("password"))&&(g=!0),setTimeout((()=>{g&&u()}),5e3)}),[]),Object(l.jsxs)(f,{height:t,error:a,onSubmit:e=>{(e=>{e.preventDefault(),/^[a-zA-Z]+\.[a-zA-Z]+$/.test(sessionStorage.getItem("user"))&&/^[0-9]{6,9}$/.test(sessionStorage.getItem("password"))?(g=!0,s(!1),u()):(g=!1,s(!0),sessionStorage.removeItem("user"),sessionStorage.removeItem("password"))})(e)},children:[Object(l.jsx)("h2",{children:"Login"}),Object(l.jsxs)(k,{error:a,children:[Object(l.jsx)("input",{placeholder:"Usu\xe1rio",value:c,onChange:e=>sessionStorage.setItem("user",e.target.value)}),Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBpVTtcYJAED1w9De/nXE8KogdhFQQO8AOLEFSQUwHsYKUIKlAO+CzAAtgIO8ly0xGjhN0Z5hd9uOxt/sOR1kky7Jd0zQBzEBcZ8dx9svl8tBX45icSZJoFH7BXOFJYcf0C7gm8Gw2W8/n80wNkTRNj3gadLhV3a63jDFnEFie568CtuvLYYw5RVE8X8fcaweOtYa6YE5vfYB1XX8wB3ozBFBDnZVFfN+/QKWSawfkl9Xf4O+SDiA2yu50WZZPfUVkAdRKcu2A7XyqqvpEoWcA84RSajqd7m8Ccj4oiKSDU7tJAtGG7yixyMTDPmJ7baEyS6y1fjEFOoDgWIjt8Sg8LhcUA5yaDKAvkBhvUGS7hgR7l1uAJpPAkhcyx3oBWvYT1LQMWwPUpi92A+NAQ77/zpDtU2PQvhopssATTA8z9l1B1kKV0UKaTSaTDQFd1w3dfz+Dg7pTFovFNzH4vySxybVYPS4xsQioW549IoKhfwA9ru7YbdrOQAAAAABJRU5ErkJggg==",alt:"User Icon"})]}),Object(l.jsxs)(k,{error:a,children:[Object(l.jsx)("input",{placeholder:"Senha",type:"password",value:d,onChange:e=>sessionStorage.setItem("password",e.target.value)}),Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEqSURBVHgB7ZXRjYJAEIZ3COGZZ0LCXgVawl0Fd1eB2oEdaAfagVqJlKAVsCSEVymABGeWwRhcNog+mOifTJjs7H4M7OwOCIvSNJ1UVTVF95uHYgDYRlG061oDFtiGYbeLaujMFHM6YAuGKXz+SCmBDNWMTWmO8WXtgSRJfFx4It/zPBkEQXodz7JsVJblAd0CwV+owpqh67ojduM2jBSG4ZFiaD6abMeNn6xTB1A9Yn5v4FC9PlDvMhfwn6j/CdkYTbGZNOZ5erc1iAseuOaW4hnZAcxBKZWgL6mALRlZ5TjOL65fU7YErGiQToJ4QA3nDcvmA3wXoD7ceZ5HYqCwbcjGp6O3F3WbLNiGSN9SdOMANSU83KuulnmHYmT8Xy4EAgtDj+ipoul+Z8u6fw4EtrMXAAAAAElFTkSuQmCC",alt:"Password Icon"})]}),Object(l.jsx)("p",{children:"Ops, usu\xe1rio ou senha inv\xe1lidos."}),Object(l.jsx)("p",{children:"Tente novamente!"}),Object(l.jsx)("input",{value:"Continuar",type:"submit"})]})}));const q=S.a.p(F||(F=Object(v.a)(["\nfont-size: ",";\nfont-weight: ",";\ncolor: ",";\nmargin: 0;\n"])),(e=>e.size),(e=>e.weight),(e=>e.color));var T;Object(c.MapTo)("compasslogon/components/content/text-content")((e=>{let{text:t,size:n,weight:o,color:a}=e;return Object(l.jsx)(q,{size:n||"16px",weight:o,color:a,children:t||"XXXXXXXXXXXXXX"})}));const E=S.a.header(T||(T=Object(v.a)(["\ndisplay: flex;\njustify-content: space-between;\nwidth: 94%;\nmargin: 0 auto;\n.headImg{\n    position: static;\n    max-width: 300px;\n    max-height: 84px;\n    @media (max-width: 768px){\n        width: 50%;\n    }\n}\n"]))),X=["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],Z=["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"];var C;const V=S.a.div(C||(C=Object(v.a)(["\ncolor: ",";\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nh2{\n    font-size: clamp(7.6rem, 8.5vw, 9rem);\n    font-weight: 700;\n    margin: 0;\n}\np{\n    font-size: 0.875rem;\n    margin: 0;\n}\n@media(max-width: 768px){\n    display: none;\n}\n"])),(e=>e.color));var z,M=e=>{let{color:t}=e;const[n,o]=Object(i.useState)("00:00"),[a,s]=Object(i.useState)("Please wait while we load your date and time..."),r=()=>{let e=new Date,t=e.getFullYear(),n=e.getMonth(),a=e.getDate(),i=e.getDay(),r=e.getHours(),c=e.getMinutes();n=X[n],i=Z[i],r<10&&(r="0"+r),c<10&&(c="0"+c),o("".concat(r,":").concat(c)),s("".concat(i,", ").concat(a," de ").concat(n," de ").concat(t))};return Object(i.useEffect)((()=>{setInterval(r,1e3)}),[]),Object(l.jsxs)(V,{color:t,children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:a})]})},R=n(105),G=n.n(R),K=n.p+"static/media/cloud.a7a88a5e.png",P=n.p+"static/media/cloudy.459ea4a1.png",J=n.p+"static/media/raining.ef1aa103.png",N=n.p+"static/media/thunder.35756518.png",U=n.p+"static/media/storm.f40bf552.png",B=n.p+"static/media/sun.4fa41ea0.png";const Y=S.a.div(z||(z=Object(v.a)(["\ncolor: ",";\nmargin-right: 10px;\nspan{\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n}\nh2{\n    font-size: 3rem;\n    font-weight: 700;\n    margin: 0;\n    color: ",";\n}\np{\n    font-size: 0.875rem;\n    color: ",";\n}\n.weatherIcon{\n    width: 30px;\n    height: 30px;\n    min-height: auto;\n    position: static;\n}\n"])),(e=>e.color),(e=>e.color),(e=>e.color));var L=e=>{let{color:t}=e;const[n,o]=Object(i.useState)("Cidade"),[a,s]=Object(i.useState)("UF"),[r,c]=Object(i.useState)("XX"),[p,d]=Object(i.useState)(B),m=()=>{let e=localStorage.getItem("lat"),t=localStorage.getItem("long");const n="https://api.weatherapi.com/v1/current.json?key=288ce9269f9c46699a1185755220202&q=".concat(e,",").concat(t);G.a.get(n).then((e=>{const t=e.data.location.region;s(b(t));let n=e.data.current.condition.icon;const o=e.data.current.condition.text;d(u(n,o));let a=e.data.current.temp_c;a=a.toFixed(0),c(a);const i=localStorage.getItem("lat"),r=localStorage.getItem("long");g(i,r)}))},g=(e,t)=>{localStorage.getItem("city")?o(localStorage.getItem("city")):G.a.get("https://us1.locationiq.com/v1/reverse.php?key=pk.9866ca8f778fce5a705ef63d65b98bc8&lat="+e+"&lon="+t+"&format=json").then((e=>{localStorage.setItem("city",e.data.address.city),o(e.data.address.city)}))},u=(e,t)=>(t.includes("thunder")&&t.includes("rain")?e=U:t.includes("thunder")?e=N:t.includes("rain")||t.includes("drizzle")?e=J:t.includes("Fog")||t.includes("Mist")?e=K:t.includes("Cloudy")||t.includes("Overcast")||t.includes("cloudy")?e=P:(t.includes("Sunny")||t.includes("Clear"))&&(e=B),e),b=e=>{let t="";switch(e){case"Acre":t="AC";break;case"Alagoas":t="AL";break;case"Amap\xe1":t="AP";break;case"Amazonas":t="AM";break;case"Bhaia":t="BA";break;case"Cear\xe1":t="CE";break;case"Esp\xedrito Santo":t="ES";break;case"Goi\xe1s":t="GO";break;case"Maranh\xe3o":t="MA";break;case"Mato Grosso":t="MT";break;case"Mato Grosso do Sul":t="MS";break;case"Minas Gerais":t="MG";break;case"Par\xe1":t="PA";break;case"Para\xedba":t="PB";break;case"Paran\xe1":t="PR";break;case"Pernambuco":t="PE";break;case"Piau\xed":t="PI";break;case"Rio de Janeiro":t="RJ";break;case"Rio Grande do Norte":t="RN";break;case"Rio Grande do Sul":t="RS";break;case"Rond\xf4nia":t="RO";break;case"Roraima":t="RR";break;case"Santa Catarina":t="SC";break;case"S\xe3o Paulo":t="SP";break;case"Sergipe":t="SE";break;case"Tocantins":t="TO"}return t};return Object(i.useEffect)((()=>{localStorage.getItem("lat")&&localStorage.getItem("long")?m():navigator.geolocation&&navigator.geolocation.getCurrentPosition((e=>{let t=e.coords.longitude,n=e.coords.latitude;t.toFixed(20),n.toFixed(20),localStorage.setItem("lat",n),localStorage.setItem("long",t),m()}))}),[]),Object(l.jsxs)(Y,{color:t,children:[Object(l.jsxs)("p",{children:[n," - ",a]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("img",{className:"weatherIcon",draggable:"false",src:p,alt:"Weather Icon"}),Object(l.jsxs)("h2",{children:[r,"\xb0"]})]})]})};var H,W,D;Object(c.MapTo)("compasslogon/components/content/header-container")((e=>{let{color:t}=e;return Object(l.jsxs)(E,{color:t,children:[Object(l.jsx)("img",{className:"headImg",draggable:"false",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABUCAYAAAA4ewptAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABeQSURBVHgB7Z0JmF1FlYBPve5Ok4QAWdnGkEBki4KCiBCBwDDGQcFhhAFBEJxBGbdx9GNEZWkmfoAMjAhuzPgRBZHdAUEFFSGyCQSGHcISmixkISFBsnbee2X9XXW/rnfzlnu730sncv7vO+n37ru3bt26VafOOXXujYiiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKJsrRgYJe76MLq6W/QpGDrBGDpGCGU9tTFmW26J9WNrkvraCPCjPyHxzo/SIoihvezaqwrKXSWfxDdm/YOUk2y4flpFmOxkt7bKNFaegvKx3VVrj/i6zZVkqKwtr5aGykWvbVslN5iJ5SxRFGUwYpSc5GVvj97lObnJSkhaw0RSWPVMmlTpluhlijrYTbaezp0SGudNb8ZLGaTXpMWLfcH9fcH+X2SeMkelt58kv3F8riqIMBp1O7nWyX43f73EyzUlLvKKWKyw7VdpLB8un3IkutNubMWZv8ZecR+UYK/YV9+d5s96ut9e29chXzAWyTBRF2dgwev/o5P01fv+Dk7+XFimsgrQQ+xnpKE6Vi4yYH9pdZYx5n9s4RCS3feSCXGaiM6v2tx3OKjvZWWo32G/KO0RRlLcVLVNYd3dJe3kHOdepmi/b3WyH2d0MzJ5zSs6MdAXs5z50yGFOdV237FzZShRFedvQLi1iSllOtcZ8zdlBpldZNSnqZLZyZe1jpTzLHLh1yV5tr5BjzGdlvfSPEU72cIKjOixsI2j4nBPnhMo6yc92QbYM39c6WexkvmRrBSaR5L6UpDJ4yfaJTsaJV/9c91InrzopNiiXYyc42TYcS7lvOOmWbNc5JPqcNvc7Q71GR/Wi7LnSvzaEoU4mO5kU6kzbzXMyx8kL4pdmEri2ZPKlHcp1yuWe7+BklPgAMu2wysnrTpZI9mDxNk52dLJ1ODfnfSuU8br0nw4nu4hv02pwjjmpbbT5HuHYahA+mV/jt7HhfOPDd+7ty+Lv3ZuyidEShWXPlsmlNjnPdfF2M9n2unRNZawrb4Ir92XzUVlkP+m2zJB8cHNOdXJi+MyNTipJZ2cwzHLyYyf/52R1g/Kw9P7ByQlO3i1+MCQDiIHGjf9/8asnNzj5c52yrnDygfCZWMEXxCuC05wcJ14xbBHtz2B7SXwbXOtkRao8Bvtnnfyjk52kTzFLuM5uJ9c4uUq8Yq0G8YorpU/hftrJI+KVyb86+VAouzO6ZhT1M+Lbj2PfkGxMcPJ5J0eEzyjKtvAb9wYFyIC9OgjlznQyPOzzv04uS5VJP9831HWK+DaJFQLKhnvEQP2dk185eVJkg4mQuhzq5BQn+4ufOGIlkSjq2aGcX4pXrvUUaBqUIHGgkTV+v9HJyaltXM+vw99qnO9kevSd9jzIyZfFB8/pX4ku4N7RHt1O7hTflnPkr5lil1xX7DK2eIvY0qNOZpna8rCTB4M8YurvG8v9rvzznXSZBfas3kGclWPEzx50IttA6IC/dbJbjbJQcoc7eTpjeczeDIRpUttBvifan06I9fdcxrIfFa8wExhc3RmOLYdzHFajToen9v+wk084WZihbIRBe7TUh/Y4VrwVlaVM6vxiqMefo+3/lSp3aNi2LmO5CJPAL5zsGZXDoJ4hfjBnrR+Tx0+kz3rJwk5Oltcp92dVjsGif63OMbGyQiFek6M9sBb/Q/oUGor+oTr73yWV1nhTaXoMq+dsp7GNOQYbwGxnNrSuGFbM40+5lb+ZTu5w8tsgv3Fyj5Mn3XUvsVLX0aPZxvdO+DsU23pn5Cx0ObnOCQH7uGIUhCmc3MQEbtLfOfm9k3elyuK3M8XPopNlQwUU38QE2huFcnuoSy0TPoHZD6W1e42yJVX2PuJnZ+qDUsSa2ynDsSacg2v5oDSGmXmG+IFSrex0+e908nMnX6pRHuc/R/xA+hvJBsdg4TGAt6yxD5bEd5x8VSoHEUqHAc5Eg/WwIlVnrNCPSd9K2NBQt1Okz9oDrMhXQzndTlam6oe7eEKo56bAXuJTEqhTVqUyxsmF4i27kTLINNUltF1ScNPK52zJ3VS6coftU1jMN/OdMup2399y28the1ptvOXFznVfhjnZ2e3CkDNVDBK6tptjC8Ycbbvs+aarptvBwSg1Zoq4w+Hb3xxkTqgBpdJZ/0n8bASLpLIzwulO/lMq25A4wfXirbLuqJZYOqdG5XHMN8S7If8ttRkT/tpQNu7VbeEzbuF7xFuMR0hfS3IMbtHo6HiuE2V0Y6gXbYACxqI5KroG3KofhPrWSxuZFn1eHMrlmrGkUJxMCB8J5W8f9qO+F4mPuf08VR5teZZUuiW0+d3i3ZJ54fqweA4R74KOCNvqTbrse6r0tQ0u8IxwjYvCdwYu8SisaJbjPyq9va7XirgpHIc7fXhULv3sR+JdUq6fiY4plFAA7Yo1yURHrIz7da8MPlwf/TyPN5JA+zEmaLfTZRBpqsJyemaU6/FTex+x2TZSVm4e8lZTsmedFUMTfSBy5OYuu8CKcYF2GVp5kHHzoB3qtq8z7+gpyd+KHzjVIKHiAvEzZcL9Tv5ZfLwhhjgGMZHvOrlEfEDyeOlTQIA1gpsRD7BbxcebFqTKYxBj9fxQvGmeDCCOPS+c61GpD2b2aak6wOPiFSSxOAZQoowPiPZ5Mvz+jFRaEVgFdGAUCwokaRssQAbtT6U+lEWc5jPirYwY3EsUGG14uXiFCgzqS8Vfb9LuBIu/JZVtidX0TdlwoYJ2ZNBgsdB2x0rlBJSGQTYkKhcr7pJUmfQyLKxu8cqReA+TFe2TTFLHR+fBEv+ceOs1XQ6uHP2HvoAbiCVDPKy/i0LNgrpjJQ3E0qPP0i4PS76YXFNpqks4pCwHWOwhmicJgbrogr3P3dfFXG8/g+/LjVjCz+lwcu953G9WOgqmpivDSVFWsdtAJ6Izz5baMAjpcAeL74QJtNnFUhn4ZnATS1lQpzxcEDr696Nt1OlbqbLSPC9+xu6u8TtWAosDKMS0K4aVhEJ6uspvwEC6RfwgjVcZWcho1DdwVenAr9bZZ06o+++jbaxKYV0mHeJs8ZZJwrnig8pJLCsNg4VJgHvzeamvDOIYFJbQ1TXKjGFa/Z74WGLCLtFn+sKvM5RDnBQl8ZQMPsQcj5CBQ59gItlRBommKqx20+temN5SO0yvoWxZS1pjBp5TX3SK6THXR1Zb/9hOb3nunyHWd51C76pNNYjrHBx9p7OzWpQlU57ZNP384uRUeazQnSE+nlEVp1CTq8d1+Lp4JZRAoHuvGocyOLEKVkpjsGbSKh0XbH6GY1mZXBh9x32op0QZ/F+TbMveiUWyKNqGu0TQgNhW7F5i4Vwq2eCuo6ivbbBPAi7kOBk4uI/DZfPivdI4ZkVbZUnpINQwaEnbTVVYxvTmsgeHx8WrnrDeUB6IsuJYmnKuGz93jhJ7vgvLXOLa7NbhvuwwrEzZbGernwkrIA5uYx3Nk/7DYBsRPqNQWPZdmt7JzpKt7WNySGmWnFN+TH7kvifxpJXhmGQwDQllVgOlerdk4xXxyjOB1vlNxmNZCXou+k6r1huUxGWekey8FI5JwMoivsQkkwRyaUsC5HkecGeA/UBqD7R4OZ7rwT3dXfLTHX0mJkc9sy4ObA6w2sqki2WNN7JGNlGaGsMqW+egJQoGB2ixGbiyesb1sz+OErOoygOIl5XEfGKJ2HGriclv4dbdhjqJc6ZQyLH1gkXQKDbTqEb7RN+xqu6Kd1j/iExpa5MuWzZ723J4or13kbvXqb0m7MYqIa5g4grVsg5pxRWSDQbtkug7S/2vSnawPD8UPjdyd26QfNhwzGnhO/1uV/H5a0kPwT2/X/KD4uSej6jyG7llJ0S/oSSJ6RFQJ47GQEVZ4769Gj5XS8Clz0yVvjgfMS3y7h4Un19H2y0JZWDRMoENWpwnJ38SHx5J+g6r6LjwxDe3kU2M1mS6r3Xu2ywXYCoM4A0TPa4f3zZOzNPDQ/C+yhha4c7xY+dZnLJA7I7rhrhd0teDpRC/BoNk0IEEQFGAcU4NFlBFVrOr6elOWR2eOo7KPx59JziLJZEorCRxLz1Y8jZg7JaulzpuahUaZconcC39sVA5hvymxHLDUonjigz0PPXNwgPiF0e6pM+bwNr+oPSlb9hwXpTeY+JXYlGucciAxRxSTL4abaNvHRokKYcyuK9/CuWQy5XFnR8s6F+sUi9JbWdxgzjviZKfgQZ/6tJUl7BQCLPKIuflPLKljzX1h5K75pu3FfPUCGmYJc/7s+7dRkybdWbWBp2DsHy8MkgcpZ+V6oXr+x/x5jNCALIilcJZVz9xZ0inV7zuwrSxy0VHiS0n8nValmzXZBjc/XlkAwUaP9KDko6tkGXSGqvk2+JTP5K0lTR0sKGhPrjmBNxJQzgo2ieJJZLhv7DGeSgHZUxsDuvrSvHW97ukuVQbs0x2bZIf+uHjNX5rtHJdC+KEndIimqqwrLV+ReR1V985w/pXOrf9trFiZjP5ZtMtZoGb7FZ1LDddG3R4rIZYeWwvAyNZcr84CKtOFVaQ2UfuKhcsbsiyvoPsHam6McvHK2PMcM22LloFg3us5Ifj4kB+ekWVx0pa8TA+ShJrh9gVCon7RmyPlVNcwSRLPoE6kGpBWkbsqmM9zRCfGsDiEnEsFgmeFW8drkyVgwIh8RSltbNk5y2p/2oWYmfpWXwb6Z/7Rj/cs8p2yn+P9I/kOc2W0NwOUnBmpHH3bEW7mHmuby5vlMhdheeGi3mSkEMOQ2htm9gV7dWWjwkexoFX4llDpcV07Ct3Fgr245JYUbZiWR92ksoOxqrb5hLzgF0lPyiMWGHNk0rXEiXRso4u3sJDeWAZo3B4XpPHnnD1WPLHNVoe7U9du2TDMYLiYgHhK+Lz1VBK9CuUG7EgknZjSx+L4xuSHZRVvcmL+k6OvmOZnyT9s9BRTCRTj05tZxX8KOkfLKLwBEhLrKymKqxijzOljRuka1yxyP1uTLblUDwou7tH5R+6xh2xuL3Walq8UsaNOUY2As7Smlmwdpo19vi2MRsktJIXEweJN4VM6DwQdM4zG9HPWK1NLAOUB8FvYkZJ7AwL61DZOHBO4mlMKATM7xAfnyL5eG60H8pofIZyUHRYWigyEml5SD12myk3qwXEJPtSnd+3COf5oviUkAulMraWF5KMsSZJesYCnR7KH0jA/V/Er26z4kiuXH9WZqvSVIXVOa7XNH5AtvZeknnULQIt7MwehnNWmVncD8XcUV5ZHNIzs8avBA+TuAM14XGagbqGmTD7ycPt+8r1ZmLFjMm5z4y+4zpmTT/YVMCyODDH/lPCMQmsprG6hqJ+LWxLkkibkSvVX6jTL6PvdMZhkh/u533Rd2KUIzIey+BptFo6QXxqDIr236V+/IqQSL0UlGTlm5QPFNdZGera6O0NxNRQhPRzFj3eL02iuXlYX5J1zv25UkaFhbiiEXOrmzhXZzgN1tWLxCzzx8RtUe7s3GNdrUYkJnB5VPAE8YHz0dIYGnpvaR4MRmJgsevDYxzdsnnBQCZRNUtshixxcqWSgc99IN2AgcQK6/XRvpPD92a5hrj/O+TYn8Eb9wuUB1YU6Rd54na4Z/Ggx2rqqXKuWtwuzXvFMG4wTzI0K+TAwtW/Sb5V5aaFO5oe5Fw6TO6w2657QYaGOi5w9+5XYxpXmcta2o+Yl9jVbSX5ngtq12tAZqPY7eJxFWYnEl2rdRw6OmYt1hmPYUyRgcOqEx0xdnvI12H1aSArl4MFcRvahkz9av2Ibck1xytlxBpRYMk182xfd/T7VPEz/cdk4P2Tx6XIlcIKyRLjIZYVvwYHS5DFAdwvUiTII8uyGkc6QPyoGNccp7+Q74ZiJu3huCrHPxF+GygoSlY9WXSYKc2BscS4uEsGgabnYW13hqyy03u+Xh6/5mcye3hvgNs8PQK14rqCWwwbUSO1iIzTcv4UDltw8aHiTg/4RO+aEGdAAeGb89gJJ0JZkS+D6c7Aw0JjJsWiYlk6fgUNeTkfD/tnhWNZLSSYTBATFyru7KxONXr+cFOG66MteQCa/DYUE7EXlAxBeeIr+0plH+M+kBoQ5zix4HCKeFcseeU1xzFgCcqzYIFLwzOYeawO0gt4NAmLiYA6wWWs2XvEKyLqgtKkj7JSxiSGskruER2VwcnjQ7hJxI6uCJ95/vI+6csts6Hu7w3lTJM+ZcvjWFijyZRNPyApM8lBOyq0R7wwwzGkzEyVDV/hkwfqe2+oH49HcY92kf7DPbk0lEc7sADQyoWSjUfpyK2+X2qfZEvSJ8Ux423xuOG2eG7vi/cq5Tzn2R04tmL/xrLL81Z2y2PyTxTf+dMv2yunJP0bgdn3ST7okG9K9Rf7oaSOlOrW3T3RfuTC5JlUboqOJXicZ+XoO9GxKJHYBUq/wC95PUvWNkS6xV9zNWiHY6qUmQgPHNd6FxPtXO0Ffliy1V6ER92wxlnJQ9msq1Lf9aEcTP5PpsqPy1kfykB6qpRD7PJMqbzP51Yp6/Ia10bcb6lUb5N6Qj2w4NL/5wHKt7uf5THZp5XTKeKtuHrHrgpt2BRakffiCx5pz7GTVv4h3maWDhFzs4tpXeXizi8O9bc4fp3MO1dJjkTZZQUpfcrI7NckO6+I78jM1vG7xk1KErhRzKas6s2S/KTL45x0JGZZOsDm6AoC1hBtgpuUXEOtNsRSwbLB6ritRnmUcVPYZ6Zs2C79yZ6+W7xlO0MqX3FNWcn7RIirDZHK8lGapD7wkDoKiZgjq2dY2WtT5bSHMpD4NdvUHyuOV1N/Wyqvp9rrtms9u4dFhJLP88YH6ohleLJs+CpuHkXChb9Fsvc9YsBcAyvD6YRo8hDxRubK5tuX+7AnbD2yOGLn+5w1VK5qIQ2baIs772CLU0bb4rRtbPHIrWypc+eGllVZJi2xMmmqDAzcGUx1Voa4KSgTVCgdCveQwPBAltlxNbiRKEkUd5dUT9JLg4u1JggKIY+FdV10LM/m5bGwLo6OZbCNiX6r9opkYIDi0jCosQYZ7AwSLEhWurBSPiD5oEwGKc9dYlkxi5EyUGuZHQvr9ajuF1TZh2v5dKjn/eH6sFywgFnZpg/w1gfymeq5OLhnXwj78jwi95dBvDyUyTbeIEH4oNbD4xPC+RJrjP7R6EFq7uMXQ91p3/RrmlGsC8O595LGoLCnip94FofjY2uKsdAt/v5lcSFZhCG+R1wYA2JVKHN9qG/TLKz+zFy5sCN2HF1a3XmpKRVObHy+Gs8MVu7xnOkonmrWdz8kzYHVHAYDriUWJzeQjtyM/6iVVcHEbcgaf5kgfUl3dBwGQtbZi/cUJbERLJuXcxyLCzha+jouAyl57hKF9btoX97MeUfqeKwMlPSQcNxqafyfdzQiyeBGaXdL9ZUpOg3Z54m3wABZWKdM6kcbdYRjuC+JsstjJXCPhoe/iZuZuJiNykEpfiQcR7sukezn5D7xksVx4fwoXhQn8cM3JN+KHG1Hmg0xxwni43RLQ1n0u/SroxvBfSKFY5RUpg7xOqWs11iXlisssNtvP6y0ZNixpmRYEcqSTlCtFGfqmhudG3iGkVcWi7IxyaKwFKXltCyGFWMWLlzdXnr5pwVZ6zS5OceIxZfO+iaCN6Vgryp02IPa5KWTVVkpytuX1rxepgZG5mOyTnfxp+8aMQcXxR7W1lF+ty0WnDtmR4s1+NYrrFj/jqK28u1tpbYHpdw5z5SfbVYinaIomykbVWElGHmJOAMrILfbHl5UuqfzxdeEF191ujjA7NUGC2wAr9NSFOWvj0FRWDHGENR7lpyYTflFZ4qibAJslBiWoihKM1CFpWQh3U82yuqyoqTRjqdkgVyo+D9n5Tm6PP+7jaIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoitIa/gLVqlLq8+PO9QAAAABJRU5ErkJggg==",alt:"Compass Logo"}),Object(l.jsx)(M,{}),Object(l.jsx)(L,{})]})}));const Q=S.a.footer(H||(H=Object(v.a)(["\nposition: absolute;\nwidth: 100%;\nbottom: 0;\nbackground: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);\ndisplay: grid;\ngrid-template-columns: 18.5% 28% 4% 4.5% 12% 19% 7% 7%;\nheight: 10vh;\nz-index: 2;\n@media(max-width: 1444px){\n    grid-template-columns: 9% 35.5% 4% 3.5% 15% 13% 10% 10%;\n\n}\n@media(max-width: 768px){\n    grid-template-columns: 27% 73%;\n}\n.footerText{\n    grid-column: 2;\n    color: white;\n    font-size: 0.75rem;\n    text-align: right;\n    padding-top: 3%;\n    @media(max-width: 1444px){\n        font-size: 0.7rem;\n    }\n    @media(max-width: 768px){\n        display: none;\n    }\n}\nspan{\n    grid-column: 3;\n    text-align: center;\n    color: white;\n    font-size: 4.5rem;\n    padding: 7% 10% 15% 10%;\n    @media(max-width: 1000px){\n        padding: 7% 5%;\n        font-size: 4rem;\n    }\n    @media(max-width: 768px){\n        display: none;\n    }\n}\n"]))),_=S.a.button(W||(W=Object(v.a)(["\nbackground: white;\ncolor: #C13216;\nfont-size: 0.75rem;\nborder: 0;\ngrid-column: 7;\ntext-align: center !important;\n@media(max-width: 768px){\n        grid-column: 2;\n    }\n"]))),$=S.a.button(D||(D=Object(v.a)(["\nbackground: transparent;\nfont-size: 0.75rem;\ncolor: white;\nfont-weight: 700;\nborder: 0;\ngrid-column: 8;\ntext-align: center !important;\n@media(max-width: 768px){\n        position: absolute;\n        width: 27%;\n        height: 100%;\n        grid-column: 1;\n        background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);\n    }\n"])));var ee,te,ne,oe;const ae=S.a.div(ee||(ee=Object(v.a)(["\ndisplay: flex;\njustify-content: space-between;\npadding-top: 3%;\ngrid-column: 5;\n@media(max-width: 768px){\n        display: none;\n    }\ndiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n"]))),ie=S.a.p(te||(te=Object(v.a)(["\nwidth: 50%;\ncolor: white;\nfont-size: 0.75rem;\ntext-align: right;\n"]))),se=S.a.p(ne||(ne=Object(v.a)(["\ncolor: white;\nfont-size: 2.9rem;\nfont-weight: 700;\nmargin: 0;\n"]))),re=S.a.p(oe||(oe=Object(v.a)(["\ncolor: white;\nmargin: 0;\nfont-size: 0.75rem;\n"])));var ce=e=>{let{time:t,url_variable:n}=e;const o=Object(r.k)(),[a,s]=Object(i.useState)(t);let c=parseInt(localStorage.getItem("time"));return Object(i.useEffect)((()=>{localStorage.setItem("time",t),(()=>{c=parseInt(localStorage.getItem("time"));const e=setInterval((()=>{c>0?(c-=1,parseInt(localStorage.getItem("time"))===c+1||parseInt(localStorage.getItem("time"))===c?localStorage.setItem("time",c):c=parseInt(localStorage.getItem("time")),s(localStorage.getItem("time"))):(clearInterval(e),o.push(n))}),1e3)})()}),[]),Object(l.jsxs)(ae,{children:[Object(l.jsx)(ie,{children:"Application refresh in"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(se,{children:a}),Object(l.jsx)(re,{children:"seconds"})]})]})};Object(c.MapTo)("compasslogon/components/content/footer-container")((e=>{let{time:t,url_variable:n}=e;const o=t;return Object(l.jsxs)(Q,{children:[Object(l.jsx)("p",{className:"footerText",children:"Essa janela do navegador \xe9 usada para manter sua sess\xe3o de autentica\xe7\xe3o ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."}),Object(l.jsx)("span",{children:"|"}),Object(l.jsx)(ce,{time:t,url_variable:n}),Object(l.jsx)(_,{onClick:()=>{localStorage.setItem("time",o)},children:"Continuar Navegando"}),Object(l.jsx)($,{onClick:()=>{localStorage.setItem("time","0")},children:"Logout"})]})}));var le=n(161),pe=n(162),de=n(45),me=n(21);const ge=j((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,399)))),ue=j((()=>n.e(5).then(n.t.bind(null,397,7)))),be=j((()=>n.e(6).then(n.t.bind(null,398,7))));Object(c.MapTo)("compasslogon/components/download")(me.DownloadV1,{isEmpty:me.DownloadV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/list")(me.ListV2,{isEmpty:me.ListV2IsEmptyFn}),Object(c.MapTo)("compasslogon/components/separator")(me.SeparatorV1,{isEmpty:me.SeparatorV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/button")(me.ButtonV1,{isEmpty:me.ButtonV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/teaser")(me.TeaserV1,{isEmpty:me.TeaserV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/image")(me.ImageV2,{isEmpty:me.ImageV2IsEmptyFn}),Object(c.MapTo)("compasslogon/components/title")(ue,{isEmpty:pe.TitleV2IsEmptyFn}),Object(c.MapTo)("compasslogon/components/breadcrumb")(me.BreadCrumbV2,{isEmpty:me.BreadCrumbV2IsEmptyFn}),Object(c.MapTo)("compasslogon/components/navigation")(me.NavigationV1),Object(c.MapTo)("compasslogon/components/languagenavigation")(me.LanguageNavigationV1),Object(c.MapTo)("compasslogon/components/tabs")(de.TabsV1,{isEmpty:de.TabsV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/accordion")(de.AccordionV1,{isEmpty:de.AccordionV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/carousel")(be,{isEmpty:le.CarouselV1IsEmptyFn}),Object(c.MapTo)("compasslogon/components/container")(de.ContainerV1,{isEmpty:de.ContainerV1IsEmptyFn});Object(c.MapTo)("compasslogon/components/text")(ge,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});n(330);const he={};document.addEventListener("DOMContentLoaded",(()=>{o.ModelManager.initialize(he).then((e=>{const t=Object(a.a)();Object(s.render)(Object(l.jsx)(r.e,{history:t,children:Object(l.jsx)(d,{history:t,cqChildren:e[o.Constants.CHILDREN_PROP],cqItems:e[o.Constants.ITEMS_PROP],cqItemsOrder:e[o.Constants.ITEMS_ORDER_PROP],cqPath:e[o.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[331,1,2]]]);
//# sourceMappingURL=main.233d8d26.chunk.js.map