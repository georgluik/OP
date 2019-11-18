// document meetodid
// elementide loomine

// loo element
const liElement = document.createElement('li');
// lisa klass
liElement.className = 'collection-item';
// lisa id
liElement.id = 'new-item';
// lisa atribuut
liElement.setAttribute('title', 'Uus element');

// lisa teksti väljund
liElement.textContent = 'Uus element';

// loome lingi elemendid
const link = document.createElement('a');
// lisame klassid
link.className = 'delete-item secondary-content';
// lisame kustutamise ikoon
link.innerHTML = '<i class="fa fa-remove"></i>';

// lisame link listi elemendi sisse
liElement.appendChild(link);

// leiame ul element DOM-ist
ulElement = document.querySelector('ul.collection');
// lisa liElement ul elemendile
ulElement.appendChild(liElement);
console.log(ulElement);