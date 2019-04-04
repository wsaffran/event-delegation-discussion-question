document.addEventListener('DOMContentLoaded', () => {
  const catContainer = document.getElementById('cat-container')

  catContainer.innerHTML = renderCats()

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
