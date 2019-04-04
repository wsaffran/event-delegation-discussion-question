document.addEventListener('DOMContentLoaded', () => {
  const catHeader = document.getElementById('cat-header')
  const catContainer = document.getElementById('cat-container')

  catContainer.innerHTML = renderCats()

  catHeader.addEventListener('click', (e) => {
    e.target.className = 'ui blue header center aligned'
  })

  catContainer.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'change-color') {
      e.target.className = 'ui header green'
    }

    if (e.target.dataset.action === 'like') {
      const catId = e.target.dataset.id
      const likeSpan = document.getElementById(`cat-${catId}`)
      const currentLikes = parseInt(likeSpan.innerText)
      const newLikes = currentLikes + 1
      likeSpan.innerText = newLikes
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
