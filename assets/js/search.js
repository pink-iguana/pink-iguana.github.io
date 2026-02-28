(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  if (!searchInput || !searchResults) return;

  var documents = [];
  var index = null;

  // Load search index
  fetch('/assets/search.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      documents = data;
      index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('categories', { boost: 5 });
        this.field('content');
        var self = this;
        data.forEach(function (doc) {
          self.add(doc);
        });
      });
    });

  searchInput.addEventListener('input', function () {
    var query = this.value.trim();
    if (!query || !index) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    var results = index.search(query + '*');
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No episodes found for "' + query + '"</div>';
      searchResults.classList.add('active');
      return;
    }

    var html = results.slice(0, 8).map(function (result) {
      var doc = documents[parseInt(result.ref)];
      return '<a class="search-result-item" href="' + doc.url + '">' +
        '<div class="search-result-title">' + doc.title + '</div>' +
        '<div class="search-result-date">' + doc.date +
        (doc.categories.length ? ' · ' + doc.categories.join(', ') : '') +
        '</div></a>';
    }).join('');

    searchResults.innerHTML = html;
    searchResults.classList.add('active');
  });

  // Close results when clicking outside
  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('active');
    }
  });

  // Re-show results when focusing the input with text
  searchInput.addEventListener('focus', function () {
    if (this.value.trim() && searchResults.innerHTML) {
      searchResults.classList.add('active');
    }
  });
})();
