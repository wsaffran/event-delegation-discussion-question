document.addEventListener('DOMContentLoaded', () => {
  const catContainer = document.getElementById('cat-container')
  const catHeader = document.getElementById('cat-header')

  catContainer.innerHTML = renderCats()

  catHeader.addEventListener('click', function(e) {
    if(e.target.className === 'ui blue header center aligned') {
      e.target.className = 'ui purple header center aligned'
    }
    else {
      e.target.className = 'ui blue header center aligned'
    }
  })

  catContainer.addEventListener('click', function(e) {
    if (e.target.className === 'ui header') {
      e.target.className = 'ui header green'
    } else if (e.target.className === 'ui header green') {
      e.target.className = 'ui header'
    } if (e.target.className === 'thumbs up icon') {
      let dataId = e.target.dataset.id
      let likes = document.getElementById(`cat-${dataId}`).innerText
      document.getElementById(`cat-${dataId}`).innerText = (parseInt(likes) + 1).toString()
    }
  })

})

function renderOneCat(cat) {
  return `<div class="ui card">
            <div class="image">
              <img src="${cat.photo}" height='100%'>
            </div>
            <div class="content">
              <div data-action='change-color' class="ui header">${cat.name}</div>
              <div class="meta">
                <span class="breed">Breed: ${cat.breed}</span>
              </div>
            </div>
            <div class="extra content">
              <a>
                <i data-action='like' data-id='${cat.id}' class="thumbs up icon"></i>
                <span id='cat-${cat.id}'>${cat.likes}</span> Likes
              </a>
            </div>
          </div>`
}

function renderCats() {
  return CATS.map(renderOneCat).join('')
}
