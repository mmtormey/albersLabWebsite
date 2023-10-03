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
    autoplay: true,
    autoplaySpeed: 2000
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
    autoplay: true,
    autoplaySpeed: 2000
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
  var projectVids = $('.projectVid')
  console.log(projects)
  // var projects = document.getElementsByClassName("project")

  for (const project of projects) {
    project.addEventListener('mouseover', () => {
      var projectImage = project.children[0];
      css(projectImage, {
        'transform': 'scale(1.3)',
        'transform-origin': '50% 50%'
      });
    })

    project.addEventListener('mouseout', () => {
      var projectImage = project.children[0];
      css(projectImage, {
        'transform': 'scale(1)',
        'transform-origin': '50% 50%'
      });
    })
  }

  // for (const project of projectVids) {
  //   project.addEventListener('mouseover', () => {
  //     var projectVideo = project.children[0];
  //     css(projectVideo, {
  //       'transform': 'scale(1.3)',
  //       'transform-origin': '50% 50%'
  //     });
  //   })

  //   project.addEventListener('mouseout', () => {
  //     var projectVideo = project.children[0];
  //     css(projectVideo, {
  //       'transform': 'scale(1)',
  //       'transform-origin': '50% 50%'
  //     });
  //   })
  // }
})

//
//
//
// appear on scroll


function appear() {
  const fullScreenSections = document.querySelectorAll('.appearFullSection');

  const observerFull = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observerFull.unobserve(entry.target);
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { rootMargin: "-40% 0px -40% 0px" });

  fullScreenSections.forEach(section => {
    console.log(observerFull.observe(section));
    observerFull.observe(section);
  });
}


// Call the parallax function on scroll
window.addEventListener('scroll', function () {
  appear();
});