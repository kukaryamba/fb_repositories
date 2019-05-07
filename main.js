const BASE_URL = 'https://api.github.com/orgs/facebook/repos';
const container = document.getElementById('container');
const template = document.querySelector('#repository').content;
let page = 1;
function fetchRepos(page) {
  const url = `${BASE_URL}?page=${page}`;
  // fetch(url)
  //   .then(response => response.json())
  Promise.resolve(data)
    .then(data => renderRepos(data))
}

function fetchTopics(repoName) {
  const url = `https://api.github.com/repos/facebook/${repoName}/topics`;
  const options = {
    headers: {
      'Accept': 'application/vnd.github.mercy-preview+json'
    }
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const div = document.querySelector(`.${repoName.replace('.', '')}`);
      const topics = div.querySelector(".topics");
      topics.innerHTML = data.names.map(function(topic) {
          return `<a class='topic' href={https://github.com/topics/${topic}}>${topic}</a>`
      }).join('');   
    });
}

function renderRepos(repos) {
  repos.forEach(function (item) {
    const { name, description, language, html_url, stargazers_count, forks_count } = item;
    renderRepo(name, description, language, html_url, stargazers_count, forks_count);
    // fetchTopics(name);
  });
};

function renderRepo(name, description, language, html_url, stargazers_count, forks_count) {
  const htmlElement = template.cloneNode(true);
  htmlElement.querySelector('.repo__name').textContent = name;
  const descriptionNode = htmlElement.querySelector(".description")
  descriptionNode.textContent = description; 
    if(description === null) {
      descriptionNode.remove()
    };
  
  htmlElement.querySelector(".info__language").textContent = language;
  htmlElement.querySelector(".repo__link").href = html_url;
  htmlElement.querySelector(".info__star").textContent = stargazers_count;
  htmlElement.querySelector(".info__fork").textContent = forks_count;
  htmlElement.firstElementChild.classList.add(name.replace('.', ''));
  
  container.appendChild(htmlElement);
  
}
fetchRepos(1);

const htmlElement = template.cloneNode(true);

document.querySelector('#prev').addEventListener("click", function(){
  if (page === 1){
    return;
  }
  container.innerHTML='';
  fetchRepos(page - 1);
  page--;
  
});
document.querySelector('#next').addEventListener("click", function(){
  container.innerHTML='';
  fetchRepos(page + 1);
  page++;
});

// https://api.github.com/repos/facebook/Docusaurus/topics

// расписать цвета в css (брать из базы??) присваивать класс с цветом?