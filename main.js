let isDarkMode = false;

function onDarkModeClick(){
    const btn = document.getElementById('btn-dark');
    if (isDarkMode){ // switch to light mode
        document.getElementById('cv-wrapper').style['background-color'] = 'white';
        document.getElementById('cv-wrapper').style['color'] = 'black';

        btn.innerHTML = 'Switch to Dark Mode'
    }else{ // switch to dark mode
        document.getElementById('cv-wrapper').style['background-color'] = 'black';
        document.getElementById('cv-wrapper').style['color'] = 'white';

        btn.innerText = 'Switch to Light Mode'
    }
    isDarkMode = !isDarkMode;
}

function toggleHidden(divID){
    const div = document.getElementById(divID);
    const display = div.style['display']
    if (!display || display==='none'){
        div.style['display'] = 'block';
    }else{
        div.style['display'] = 'none';
    }
}

function expandAll(){
    for (const sect of document.getElementsByClassName('sect')){
        toggleHidden(sect.id);
    }
}

async function loadGitData(){
    const div = document.getElementById('github-div');
    div.innerText = 'Loading GitHub data...';

    const rawResp = await fetch('https://api.github.com/users/HomerSimpson321');
    const responseData = await rawResp.json();

    const gitUsername = responseData['login'];
    const gitLink = responseData['html_url'];
    const gitBio = responseData['bio'];
    const gitRepos = responseData['public_repos'];

    div.innerHTML = `
    <h2 class="section-title" onclick="toggleHidden('sect-github')">GitHub Information</h2>
    <div id="sect-github" class="sect">
        <p>Username: <a href="${gitLink}">${gitUsername}</a></p>
        <p>${gitBio}</p>
        <p>Number of repositories: <strong>${gitRepos}</strong></p>
    </div>
    `;

}


loadGitData();
