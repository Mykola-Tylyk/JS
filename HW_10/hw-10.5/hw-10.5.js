let pageViews = JSON.parse(localStorage.getItem('pageViews')) || [];
pageViews.push(new Date());
localStorage.setItem('pageViews',JSON.stringify(pageViews));