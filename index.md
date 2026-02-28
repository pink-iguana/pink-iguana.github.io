---
layout: default
title: About
---

<div class="home-intro">
  <h1>Shehzad Hathi</h1>
  <p class="tagline">Researcher &amp; Writer</p>
  <div class="bio">
    <p>
      Welcome! I'm Shehzad Hathi. I work at the intersection of
      [your research area — e.g., machine learning, economics, philosophy],
      with a particular focus on [your specific interests].
    </p>
    <p>
      I am currently [your current position — e.g., a PhD student / postdoctoral researcher / faculty]
      at [your institution]. My research aims to [brief description of your research goals and impact].
    </p>
    <p>
      Outside of research, I enjoy writing and sharing ideas through my
      <a href="{{ '/blog/' | relative_url }}">blog</a>, where I explore topics ranging from
      [blog topic 1] to [blog topic 2].
    </p>
  </div>
  <div class="home-links">
    <a class="btn btn-primary" href="{{ '/research/' | relative_url }}">My Research</a>
    <a class="btn btn-outline" href="{{ '/blog/' | relative_url }}">Read my Blog</a>
    {% if site.email %}
    <a class="btn btn-outline" href="mailto:{{ site.email }}">Contact Me</a>
    {% endif %}
  </div>
</div>

---

### Contact & Links

- **Email:** [{{ site.email }}](mailto:{{ site.email }})
{% if site.github_username %}- **GitHub:** [github.com/{{ site.github_username }}](https://github.com/{{ site.github_username }}){% endif %}
{% if site.linkedin_username %}- **LinkedIn:** [linkedin.com/in/{{ site.linkedin_username }}](https://linkedin.com/in/{{ site.linkedin_username }}){% endif %}
