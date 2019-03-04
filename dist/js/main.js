"use strict";var PAD={};PAD.Data={},PAD.Options={bgColor:40402,skyColor:16767128,hotspotColor:16763395,fog:!0,minDistance:30,maxDistance:80,minPolarAngle:25,maxPolarAngle:55,showLights:!1},PAD.Data.Global={geometry:[{name:"WorldFloor",geometry:new THREE.PlaneGeometry(256,256,1,1),position:[0,0,0],rotation:[-90,0,0]}],sceneLights:[{type:"Ambient",intensity:.5},{type:"Hemisphere",sky:PAD.Options.skyColor,ground:PAD.Options.bgColor,intensity:.5},{type:"Point",color:14644633,position:[1.9,7.5,-5],shadow:!0,intensity:.2},{type:"Point",color:11725047,position:[1.9,20,5.1],shadow:!0,intensity:.3},{type:"Point",color:14644633,position:[1.9,7.5,20],shadow:!0,intensity:.2},{type:"Point",color:14644633,position:[1.9,7.5,-15],shadow:!0,intensity:.2}]},PAD.Data.Site3={models:[{name:"floor",path:"assets/models/site3/site3-floor.json"},{name:"layout",path:"assets/models/site3/site3-layout.json"}],hotspots:[{name:"handwash",position:[8.24,3,21.6],data:{type:"image",url:"https://placekitten.com/1920/1080",caption:"Hello World!"}},{name:"touchscreen",position:[6.5,3,14.34],data:{type:"video",url:"https://player.vimeo.com/video/87651855"}},{name:"waiting-costa",position:[13.92,3,13.74],data:{type:"image",url:"https://placekitten.com/1920/1080",caption:"Hello World!"}},{name:"waiting-bench",position:[11.48,3,2.66],data:{type:"image",url:"https://placekitten.com/1920/1080",caption:"Hello World!"}},{name:"waiting-corner",position:[9.78,3,1.24],data:{type:"image",url:"https://placekitten.com/1920/1080",caption:"Hello World!"}},{name:"toilets",position:[22.38,6,3.18],data:{type:"video",url:"https://www.youtube.com/embed/MbDzrNM5qYg"}},{name:"spiro",position:[-.32,3,23.06],data:{type:"text",title:"Pulmonary Function",description:"So in spirometry you will blow into the machine and they will put a new mouthpiece on so that it’s completely hygienic…you’re touching equipment and you’re going to touch things, naturally door handles, so they squirt some hand sanitizer in your hand and you rub that in…"}},{name:"monday",position:[-8.58,6,6.96],data:{type:"text",title:"Monday Clinic",description:"Different days of the week and different spaces for different bacterial ‘cohorts’",floor:"assets/textures/site3/site3-floor.mp4"}}]},PAD.Data.Pavilion={models:[{name:"beds",path:"assets/models/pavilion/pavilion-beds.json"},{name:"chimney",path:"assets/models/pavilion/pavilion-chimney.json"},{name:"floor",path:"assets/models/pavilion/pavilion-floor.json"},{name:"layout",path:"assets/models/pavilion/pavilion-major.json"}],hotspots:[{name:"ward",position:[1.76,5,5.2],data:{type:"image",url:"https://placekitten.com/1920/1080",caption:"Hello World!"}},{name:"vestible",position:[1.76,5,-4.66],data:{type:"text",url:"https://www.youtube.com/embed/MbDzrNM5qYg",title:"Vestibles",description:"<p>Everyone was infested with head and body lice. But never fear, they had an amazing cure for this: mercury! 18th century Europe had a love affair with mercury. They ate it, they rubbed it on their skin, and then they went batshit crazy and died. On the positive side – at least it killed the lice first!</p><p>Everyone was infested with head and body lice. But never fear, they had an amazing cure for this: mercury! 18th century Europe had a love affair with mercury. They ate it, they rubbed it on their skin, and then they went batshit crazy and died. On the positive side – at least it killed the lice first!</p>"}},{name:"surgery",position:[-9.14,2.52,-9.42],data:{type:"video",url:"https://www.youtube.com/embed/MbDzrNM5qYg"}},{name:"kitchen",position:[5.6,2.18,-10],data:{type:"image",url:"https://placekitten.com/1280/960/",caption:"The PARC Project is exploring antimicrobial resistance and how cross infection is managed in cystic fibrosis clinics, using qualitative methods, including creative visual approaches. It is a multidisciplinary project involving sociologists of medicine and science, an academic architect, micro-biologists and a graphic artist. The research compares the way three outpatient lung infection clinics attempt to control AMR and cross-infection through the design, practices and architectural layout of their built environments. For further information contact Nik Brown (nik.brown@york.ac.uk) or Chrissy Buse (christina.buse@york.ac.uk)."}},{name:"baths",position:[14.28,5,-6.8],data:{type:"text",url:"https://www.youtube.com/embed/MbDzrNM5qYg",title:"18th Century Bathrooms",description:"<p>Everyone was infested with head and body lice. But never fear, they had an amazing cure for this: mercury! 18th century Europe had a love affair with mercury. They ate it, they rubbed it on their skin, and then they went batshit crazy and died. On the positive side – at least it killed the lice first!</p>"}},{name:"porch",position:[1.76,3,15.2],data:{type:"video",url:"https://player.vimeo.com/video/87651855"}},{name:"surgery2",position:[-10.3,3,-6.92],data:{type:"video",url:"https://www.youtube.com/embed/MbDzrNM5qYg"}}]},PAD.Helpers={degRad:function e(t){return t*Math.PI/180},loadModels:function e(t,n){var i=new THREE.ObjectLoader;n.forEach(function(e){i.load(e.path,function(n){n.children.forEach(function(i){var o=new THREE.MeshPhongMaterial({color:16777215,flatShading:!0,side:THREE.DoubleSide});i.material=e.material||o,i.name=name+e.name,i.castShadow=!0,i.receiveShadow=n.receiveShadow||!1,t.add(i)})})})},loadGeometry:function e(t,n){n.forEach(function(e){var n=new THREE.MeshPhongMaterial({color:16777215,flatShading:!0,side:THREE.DoubleSide}),i=new THREE.Mesh(e.geometry,e.material||n);i.position.set(e.position[0],e.position[1],e.position[2]),i.rotation.set(PAD.Helpers.degRad(e.rotation[0]),PAD.Helpers.degRad(e.rotation[1]),PAD.Helpers.degRad(e.rotation[2])),i.name=e.name,i.receiveShadow=e.receiveShadow||!0,i.castShadow=e.castShadow||!1,t.add(i)})}},PAD.Events=function(){function e(e,t){i[e]=i[e]||[],i[e].push(t)}function t(e,t){if(i[e])for(var n=0;n<i[e].length;n++)if(i[e][n]===t){i[e].splice(n,1);break}}function n(e,t){i[e]&&i[e].forEach(function(e){e(t)})}var i={};return{on:e,off:t,emit:n}}(),PAD.Canvas=function(){function e(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}var t=document.getElementById("stage"),n=t.offsetWidth,i=t.offsetHeight,o=new THREE.Scene,a=new THREE.PerspectiveCamera(45,n/i,.01,1e3),s=new THREE.Color(PAD.Options.bgColor),r=new THREE.Color(PAD.Options.bgColor),c=new THREE.WebGLRenderer,l=new THREE.OrbitControls(a,t),d=function e(){n=t.offsetWidth,i=t.offsetHeight,a.aspect=n/i,a.updateProjectionMatrix(),c.setSize(n,i),PAD.Events.emit("windowResize")},m=function e(){PAD.Events.emit("sceneUpdate")},p=function e(){c.render(o,a),PAD.Events.emit("sceneRender")},u=function e(){requestAnimationFrame(e),m(),p()};return o.background=s,o.name="Scene",PAD.Options.fog&&(o.fog=new THREE.Fog(r,0,2*PAD.Options.maxDistance)),a.position.set(0,0,50),a.name="Camera",l.minDistance=PAD.Options.minDistance,l.maxDistance=PAD.Options.maxDistance,l.maxPolarAngle=PAD.Helpers.degRad(PAD.Options.maxPolarAngle),l.minPolarAngle=PAD.Helpers.degRad(PAD.Options.minPolarAngle),l.enableKeys=!0,l.update(),c.setSize(n,i),c.shadowMap.enabled=!0,c.shadowMapSoft=!0,t.appendChild(c.domElement),window.addEventListener("resize",d,!1),u(),document.getElementById("fullscreen").addEventListener("click",e),{scene:o,camera:a,controls:l,renderer:c,stage:t}}(),PAD.SceneLights=function(e,t){var n=PAD.Options.showLights,i=new THREE.Group,o;i.name="SceneLights";var a=function e(t){var n=new THREE.DirectionalLight(t.color);n.position.set(t.position[0],t.position[1],t.position[2]),n.castShadow=t.shadow,n.name=t.name||null,i.add(n)},s=function e(t){var n=new THREE.AmbientLight(t.color||4210752,t.intensity||1);n.name=t.name||"Ambient",i.add(n)},r=function e(t){var a=new THREE.PointLight(t.color,t.intensity,t.distance||0,t.decay||2);a.position.set(t.position[0],t.position[1],t.position[2]),n&&a.add(new THREE.Mesh(o,new THREE.MeshBasicMaterial({color:t.color}))),a.castShadow=t.shadow,a.name=t.name||"Point"+t.color,i.add(a)},c=function e(t){var n=new THREE.HemisphereLight(t.sky,t.ground,t.intensity||1);n.name=t.name||"Sky",i.add(n)};n&&(o=new THREE.SphereBufferGeometry(.25,16,8)),t.forEach(function(e){switch(e.type){case"Directional":a(e);break;case"Ambient":s(e);break;case"Point":r(e);break;case"Hemisphere":c(e);break;default:break}}),e.add(i)},PAD.Hotspots=function(e,t){var n=PAD.Options.hotspotColor,i=new THREE.ConeBufferGeometry(.4,1.2,16),o=new THREE.Group,a=document.querySelector(".counter span"),s=0,r=function e(t){a.innerHTML=parseInt(a.innerHTML)+t},c=function e(t){r(t)},l=function e(t){r(-t)},d=function e(t){0==t.clicked&&(l(1),t.clicked=!0)},m=function t(){e.rotation.y+=PAD.Helpers.degRad(.07)},p=function e(t){t.scale.set(1.5,1.5,1.5),t.intensity=3*t.intensity,PAD.Media(t),PAD.Events.off("sceneUpdate",m)},u=function e(t){t.scale.set(.3,.3,.3),t.intensity=t.intensity/6,d(t.userData)},h=function e(t){t.scale.set(.3,.3,.3),t.intensity=t.intensity/6,PAD.Events.on("sceneUpdate",m),d(t.userData)};t.forEach(function(e){var t=0,a=.01+.005*s,r=new THREE.PointLight(n,0,2*e.position[1],1),c=new THREE.MeshLambertMaterial({color:n,emissive:n,emissiveIntensity:.6}),l=new THREE.Mesh(i,c);l.rotation.x=PAD.Helpers.degRad(180),r.position.set(e.position[0],e.position[1],e.position[2]),r.add(l),r.castShadow=!0,r.name="hotspot-"+e.name,r.userData=e.data,r.userData.clicked=!1,PAD.Events.on("sceneUpdate",function(){t+=a,l.position.y=Math.sin(t)}),o.add(r),s++}),o.name="hotspots",c(s),e.add(o),PAD.Raycaster(o,e.name),PAD.Events.on("sceneUpdate",m),PAD.Events.on(e.name+"_prevItem",u),PAD.Events.on(e.name+"_newItem",p),PAD.Events.on(e.name+"_noItem",h)},PAD.Raycaster=function(e,t){function n(t){var n=new THREE.Raycaster,i={x:0,y:0},o=new THREE.Vector3,a=PAD.Canvas.camera,s=PAD.Canvas.stage,r=s.getBoundingClientRect(),c=r.top+document.body.scrollTop,l=r.left+document.body.scrollLeft,d=o.clone().unproject(a);return i.x=(t.clientX-l)/s.offsetWidth*2-1,i.y=-((t.clientY-c)/s.offsetHeight*2-1),d.set(i.x,i.y,.5),d.unproject(a),n.set(a.position,d.sub(a.position).normalize()),n.intersectObjects(e.children,!0)}function i(e){e.preventDefault();var i=n(e);if(i.length>0){var a=i[0].object;o==a?PAD.Events.emit(t+"_currentItem",a.parent):o!=a&&(o&&PAD.Events.emit(t+"_prevItem",o.parent),o=a,PAD.Events.emit(t+"_newItem",a.parent))}else o&&PAD.Events.emit(t+"_noItem",o.parent),o=null}var o,a=PAD.Canvas.renderer;PAD.Events.on("sceneRender",function(){a.domElement.addEventListener("click",i),a.domElement.addEventListener("touchend",i)})},PAD.Texture=function(e){var t=PAD.Canvas.scene.getObjectByName("floor");if(null==e||""==e)return t.material.map=null,void(t.material.needsUpdate=!0);var n=document.getElementById("texture"),i=new THREE.VideoTexture(n,THREE.UVMapping);i.minFilter=THREE.LinearFilter,i.magFilter=THREE.LinearFilter,i.format=THREE.RGBFormat,n.src=e,n.play(),t.material.map=i,t.material.needsUpdate=!0},PAD.Media=function(e){function t(){var e=document.getElementById("videoStage"),t=e.querySelector("iframe"),n=e.querySelector(".close");t.src=o.url+"?autoplay=1&portrait=0&controls=0&showinfo=0&rel=1&modestbranding=1",e.classList.remove("hidden"),n.addEventListener("click",function(n){n.preventDefault(),t.src="",e.classList.add("hidden"),PAD.Canvas.renderer.domElement.click()})}function n(){var e=document.getElementById("imageStage"),t=e.querySelector("figure img"),n=e.querySelector("figure figcaption"),i=e.querySelector(".close");t.src=o.url,n.innerHTML=o.caption,e.classList.remove("hidden"),i.addEventListener("click",function(i){i.preventDefault(),t.src="",n.innerHTML="",e.classList.add("hidden"),PAD.Canvas.renderer.domElement.click()})}function i(){document.querySelector(".content").innerHTML="<h1>"+o.title+"</h1>"+o.description,setTimeout(function(){PAD.Canvas.renderer.domElement.click()},2e3)}var o=e.userData;switch(o.type){case"video":t();break;case"image":n();break;case"text":i();break;default:break}PAD.Texture(o.floor)},PAD.Clinics=function(){var e={};for(var t in PAD.Data){var n=PAD.Data[t],i=new THREE.Group;i.name=t,n.models&&PAD.Helpers.loadModels(i,n.models),n.geometry&&PAD.Helpers.loadGeometry(i,n.geometry),n.geometry&&PAD.SceneLights(i,n.sceneLights),n.hotspots&&PAD.Hotspots(i,n.hotspots),e[t]=i}return delete PAD.Data,e}(),function(){var e=document.querySelectorAll(".clinic"),t=PAD.Canvas.scene,n;PAD.Clinics.Global&&t.add(PAD.Clinics.Global),e.forEach(function(e){e.addEventListener("click",function(i){i.preventDefault();var o=e.dataset.clinic,a=PAD.Clinics[o],s=t.getObjectByName(n);s!=a&&(s&&t.remove(s),a&&t.add(a),n=o)})}),e[1].click()}();
//# sourceMappingURL=./main.js.map