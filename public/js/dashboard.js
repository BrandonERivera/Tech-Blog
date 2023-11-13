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

  const delFormHandler = async (event) =>{
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/blogpost/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete project');
        }
      }

}

const editFormHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const title = document.querySelector('#title-edit').value.trim();
    const text = document.querySelector('#text-edit').value.trim();  
    const id = event.target.getAttribute('data-id');

    if (title && text) {
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, text}),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
}
  let blogpostForm = document.querySelector('.blogpost-form')
  if(blogpostForm) blogpostForm.addEventListener('submit', blogpostFormHandler);
  let delform = document.querySelector('.del-btn')
  if(delform) delform.addEventListener('click', delFormHandler);
  let changeform = document.querySelector('.edit-form')
  if(changeform) changeform.addEventListener('submit',editFormHandler)