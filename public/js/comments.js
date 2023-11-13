const blogpostFormHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#text-comment').value.trim();
    const blogpost_id = event.target.getAttribute('data-id')
    if (text,blogpost_id) {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({text, blogpost_id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  let blogpostForm = document.querySelector('.comment-form')
  if(blogpostForm) blogpostForm.addEventListener('submit', blogpostFormHandler);