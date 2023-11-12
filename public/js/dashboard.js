const blogpostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-blogpost').value.trim();
    const text = document.querySelector('#text-blogpost').value.trim();
  
    if (title && text) {
      const response = await fetch('/api/blogpost/', {
        method: 'POST',
        body: JSON.stringify({ title, text}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector('.blogpost-form').addEventListener('submit', blogpostFormHandler);