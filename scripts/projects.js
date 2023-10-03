//
//
//
// project filter swap

function toggleProject(button, projects) {
  let prevActive = document.querySelector('.filter.activeFilter')
  prevActive.classList.remove("activeFilter")
  prevActive.classList.add("inactiveFilter")

  button.classList.add("activeFilter")
  button.classList.remove("inactiveFilter")

  var allProjects = document.getElementsByClassName("projects")
  Array.from(allProjects).forEach((projectSection) => {
    if (projectSection == projects) {
      projectSection.classList.remove("hidden")
    } else {
      projectSection.classList.add("hidden")
    }
  })
}


//
//
//
// project details

function closeProjectDetails(closeButton) {
  let detailsBox = closeButton.closest(".box")
  detailsBox.classList.add('hidden')
  let projectBox = $(detailsBox).siblings()[0];
  projectBox.classList.remove('hidden')
}