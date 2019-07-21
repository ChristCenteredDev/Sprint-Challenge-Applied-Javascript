// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    const axiosData = data.data.articles;
    const cards_container = document.querySelector('.cards-container');

    const topics = Object.keys(axiosData);

    for(let i = 0; i < topics.length; i++) {
      const topic = topics[i];

      axiosData[topic].forEach((card)=> {
        cards_container.appendChild(createCard(card));
      });
    }

    function createCard(array) {
      const headline = array.headline;
      const photo = array.authorPhoto;
      const name = array.authorName;

      const card = document.createElement('div');
      card.classList.add('card');

      const headlineDiv = document.createElement('div');
      headlineDiv.classList.add('headline');
      headlineDiv.textContent = headline;
      card.appendChild(headlineDiv);

      const authorDiv =  document.createElement('div');
      authorDiv.classList.add('author');
      card.appendChild(authorDiv);

      const imageDiv =  document.createElement('div');
      imageDiv.classList.add('img-container');
      authorDiv.appendChild(imageDiv);

      const img = document.createElement('img');
      img.src = photo;
      imageDiv.appendChild(img);

      const authorSpan = document.createElement('span');
      authorSpan.textContent = `By ${name}`;
      authorDiv.appendChild(authorSpan);

      return card;
    }
  })

  .catch(error => {
    console.log("ERROR", error);
  })