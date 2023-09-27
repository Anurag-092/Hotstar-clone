// let movies =[
//     {
//     name: "Falcon and The Winter Solider",
//     des:"Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience",
//     image:'images/slider 2.png'
// },
// {
//     name: "Loki",
//     des:"The season sees an alternate version of Loki brought to the mysterious Time Variance Authority (TVA) to help fix the timeline and stop a greater threat, ending up trapped in a crime thriller of his own making, traveling through time and altering human history.",
//     image:"images/slider 1.png"
    

// },
// {
//     name:" Wanda Vision",
//     des:"It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes",
//     image:"images/slider 3.png"
// },
// {
//     name:"Raya and The Last Dragon",
//     des:"The film follows Raya, a warrior princess who must find the fabled last dragon in order to save her divided home world from a ravenous plague",
//     image:"images/slider 4.png"
// },
// {
//     name:"Luca",
//     des:"Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface",
//     image:"images/slider 5.png"

   
// }
// ];
// const carousel = document.querySelector('.carousel');
// let sliders=[];
// let slideindex= 0 ;
// const createSlide=()=>{
//     if(slideindex>=movies.length){
//         slideindex=0;
//     }
//     let slide = document.createElement('div');
//     var imgelement  = document.createElement('img');
//     let content  = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     // attaching elements
//     imgelement.appendChild(document.createTextNode(''));
//     h1.appendChild(document.createTextNode(movies[slideindex].name));
//     p.appendChild(document.createTextNode(movies[slideindex].des));
//      content.appendChild(h1);
//      content.appendChild(p);
//      slide.appendChild(imgelement);
//      carousel.appendChild(slide)
//      //carousel.appendChild(content)


//      imgelement.src=movies[slideindex].image;
//      slideindex++


//      slide.className='slider';
//      content.className='slide-content';
//      h1.className='movie-title';
//      p.className='movie-des';

//      sliders.push(slide);
//      if(sliders.length){
//         sliders[0].style.marginLeft= 'calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)';
//      }


    

// };
// for(let i=0;i<3;i++){

//     createSlide();
// }
// setInterval(()=>{
//     createSlide();

// },3000);
const videocards=[...document.querySelectorAll('.video-card')];
videocards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})
let cardcontainers =[...document.querySelectorAll('.card-container')];
let prebtn =[...document.querySelectorAll('.pre-btn')];
let nxtbtn=[...document.querySelectorAll('.nxt-btn')];
cardcontainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth-200;

    })
    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth+200;
    })
})
// // const button = document.getElementsByClassName("pre-btn");

// // button.onclick = () => {
// //   document.getElementsByClassName("card-container").scrollLeft += 20;
// // // };
// let carouselcontainers =[...document.querySelector('.carousel-container')];
// let preb=[...document.querySelectorAll('.pre')];
// let nxeb=[...document.querySelectorAll('.nxe')];
// carouselcontainers.forEach((item,i)=>{
//     let carouselDimension =item.getBoundingClientRect();
//     let carouselWidth = carouselDimension.width;
//     nxeb[i].addEventListener('click',()=>{
//         item.scrollLeft+=carouselWidth-20;
//     })
//     preb[i].addEventListener('click',()=>{
//         item.scrollLeft-=carouselWidth+20;
//     })
// })
//Filename: script.js
let rev = 0;
carousel(rev);

function previousReview() {
	rev = rev - 1;
	carousel(rev);
}

function nextReview() {
	rev = rev + 1;
	carousel(rev);
}

function carousel(review) {
	let reviews = document.getElementsByClassName("carousel");

	if (review >= reviews.length) {
		review = 0;
		rev = 0;
	}
	if (review < 0) {
		review = reviews.length - 1;
		rev = reviews.length - 1;
	}
	for (let i = 0; i < reviews.length; i++) {
		reviews[i].style.display = "none";
	}
	reviews[review].style.display = "block";
}
