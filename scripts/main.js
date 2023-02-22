let profile = {
    profile_avatar:document.querySelector(".profile-avatar"),
    profile_name:document.querySelector(".profile-name"),
    profile_username:document.querySelector(".profile-username"),
    number_repository:document.querySelector("#number-repository"),
    number_follow:document.querySelector("#number-follow"),
    number_followers:document.querySelector("#number-followers"),
    profile_link:document.querySelector(".profile-link")
}

let endpoint = "https://api.github.com/users/gustavoalmei";
    
fetch(endpoint)
    .then((data)=> data.json())
    .then(function(data){
        profile.profile_avatar.src = data.avatar_url;
        profile.profile_name.innerHTML = data.name;
        profile.profile_username.innerHTML = `@${data.login}`;
        profile.number_repository.innerHTML = new Intl.NumberFormat('pt-BR', {notation: "compact"}).format(data.public_repos);
        profile.number_followers.innerHTML = new Intl.NumberFormat('pt-BR', {notation: "compact"}).format(data.followers);
        profile.number_follow.innerHTML = new Intl.NumberFormat('pt-BR', {notation: "compact"}).format(data.following);
        profile.profile_link.href = data.html_url;  
    })
    .catch((err)=>{
        let error = new Error("Erro ao tentar conectar ao servidor, tente novamente mais tarde.")
        console.log(error)
    })