function toggleTheme() {
    const body = document.body;
    if(body.className === "dark" || body.className==="default"){
        body.classList.remove('default')
        body.classList.remove('dark')
        body.classList.add('light')
    } else{
        body.classList.remove('light')
        body.classList.add('dark')
    }
}