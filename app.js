




document.getElementById('btn').addEventListener('click', findGithubProfile)




function findGithubProfile(){
  let username = document.getElementById('github-username').value

    let url = 'https://api.github.com/users/'+username
    fetch(url)
    .then(res => res.json())
    .then(data =>{

      
    if(data.message){
     document.getElementById('user-result').innerHTML = `
     
     <h2> ...User Not Found <i class="far fa-frown-open"></i></h2>
         `
    }

if(data.name === null){
  document.getElementById('user-result').innerHTML =`
  <div class="card" style="width: 18rem;">
  <a target="_blank" href="https://www.github.com/${username}"><img src="${data.avatar_url}" class="card-img-top" alt="..."></a>
  <div class="card-body">
  <h5 class="card-title">Followers: ${data.followers}</h5>
  <h5 class="card-title">Following: ${data.following}</h5>
</div>
</div>
  `
  

 }else{

           console.log(data)
           document.getElementById('user-result').innerHTML=`
           
            <div class="card" style="width: 18rem;">
            <a target="_blank" href="https://www.github.com/${username}"><img src="${data.avatar_url}" class="card-img-top" alt="..."></a>
  <div class="card-body">
    <h5 class="card-title"id="card-title-name">${data.name}</h5>
    <h5 class="card-title">Followers: ${data.followers}</h5>
    <h5 class="card-title">Following: ${data.following}</h5>
  </div>
</div>
            
          `
    }
  
    }).catch(e => {
     
      
    })
}
