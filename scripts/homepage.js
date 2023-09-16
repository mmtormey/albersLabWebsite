//
//
//
//
// diagram circles hovering
var circles = document.getElementsByClassName("hoverSVG")
for (const circle of circles) {
  circle.addEventListener('mouseenter', function (e) {
    for (const child of circle.children) {
      if (child.tagName == "text") {
        child.classList.add('hidden')
      } else if (child.classList.contains("imageCircle")) {
        child.classList.remove('hidden')
      }
    }
  });
  circle.addEventListener('mouseleave', function () {
    for (const child of circle.children) {
      if (child.tagName == "text") {
        child.classList.remove('hidden')
      } else if (child.classList.contains("imageCircle")) {
        child.classList.add('hidden')
      }
    }
  })
}


//
//
//
//
// show / hide lab box description

// OFN
var OFNButtonOpen = document.getElementById("OFN_open_button");
var OFNDetails = document.getElementById("OFNDetails");
var OFNButtonClose = document.getElementById("OFN_close_button");

OFNButtonOpen.addEventListener("click", function () {
  OFNButtonOpen.style.display = "none";
  OFNDetails.classList.remove('descriptionOnClick')
})

OFNButtonClose.addEventListener("click", function () {
  OFNButtonOpen.style.display = "flex";
  OFNDetails.classList.add('descriptionOnClick')
})

// NTS
var NTSButtonOpen = document.getElementById("NTS_open_button");
var NTSDetails = document.getElementById("NTSDetails");
var NTSButtonClose = document.getElementById("NTS_close_button");

NTSButtonOpen.addEventListener("click", function () {
  NTSButtonOpen.style.display = "none";
  NTSDetails.classList.remove('descriptionOnClick')
})

NTSButtonClose.addEventListener("click", function () {
  NTSButtonOpen.style.display = "flex";
  NTSDetails.classList.add('descriptionOnClick')
})


//
//
//
// slick-slider
$(document).ready(function () {
  $(".eventsSlider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    nextArrow: document.getElementById('teamRightButton'),
    prevArrow: document.getElementById('teamLeftButton'),
    // autoplay: true,
    // autoplaySpeed: 2000
  });

  $(".projectsScroller").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    nextArrow: document.getElementById('projectRightArrow'),
    prevArrow: document.getElementById('projectLeftArrow'),
    // autoplay: true,
    // autoplaySpeed: 2000
  });

});


//
//
//
// project name on hover

function css(element, style) {
  for (const property in style)
    element.style[property] = style[property];
}

$(document).ready(function () {
  var projects = $('.project')
  console.log(projects)
  // var projects = document.getElementsByClassName("project")

  for (const project of projects) {
    project.addEventListener('mouseover', () => {
      console.log("hovered")
      console.log(project.children[0])
      console.log(project.children[1])
      var projectImage = project.children[0];
      css(projectImage, {
        'transform': 'scale(1.3)',
        'transform-origin': '50% 50%'
      });
    })

    project.addEventListener('mouseout', () => {
      console.log("done hovering")
      var projectImage = project.children[0];
      css(projectImage, {
        'transform': 'scale(1)',
        'transform-origin': '50% 50%'
      });
    })
  }
})

