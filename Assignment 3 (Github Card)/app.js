/*function searchUser() {
    const username = document.getElementById("usernameInput").value.trim();
    const card = document.getElementById("profileCard");
  
    if (!username) {
      alert("Please enter a GitHub username.");
      return;
    }
  
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then(data => {
        card.innerHTML = `
          <div class="profile-info">
            <h2>${data.name || "No name provided"}</h2>
            <p><strong>Username:</strong> <br>${data.login}</p>
            <p><strong>Bio:</strong> <br>${data.bio || "No bio available"}</p>
            <p><strong>Location:</strong> <br>${data.location || "Not specified"}</p>
            <p><strong>Public Repos:</strong> <br>${data.public_repos}</p>
            <p><a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>
          </div>
          <img src="${data.avatar_url}" alt="${data.login}'s avatar" />
        `;
        card.style.display = "flex";
        card.style.padding = "20px";
      })
      .catch(error => {
        card.innerHTML = `<p style="color:red;">${error.message}</p>`;
        card.style.display = "block";
      });
  }*/

async function searchUser() {
    const usernameInput = document.getElementById("usernameInput");
    const card = document.getElementById("profileCard");
    const username = usernameInput.value.trim();
    if (!username) {
      card.innerHTML = `<p style="color:red;">${"Please enter a GitHub username."}</p>`;
      card.style.display = "block";
      card.style.padding = "20px";
      return;
    }

    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    if(!userInfo.ok){
        card.innerHTML = `<p style="color:red;">${"User not found"}</p>`;
        card.style.display = "block";
        card.style.padding = "20px";
        return;
    }
        
    const data = await userInfo.json()
    card.innerHTML = `
          <img src="${data.avatar_url}" alt="${data.login}'s avatar" />
          <div class="profile-info">
            <h2>${data.name || "No name provided"}</h2>
            <p><strong>Username</strong> <br>${data.login}</p>
            <p><strong>Bio</strong> <br>${data.bio || "No bio available"}</p>
            <p><strong>Location</strong> <br>${data.location || "Not specified"}</p>
            <p><strong>Public Repos</strong> <br>${data.public_repos}</p>
            <p><a href="${data.html_url}" target="_blank">View GitHub Profile</a></p>
          </div>`;

    card.style.display = "flex";
    card.style.padding = "20px";
    usernameInput.value = "";
}
