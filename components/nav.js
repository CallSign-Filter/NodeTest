class NavBarMenu extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <a style="color: red; border-color: darkblue; background-color: whitesmoke" href="/fantasy.html" class="logo">B.C.C. Fantasy Football</a>
        </header>


        <nav id="nav">
            <ul class="links">
                <li id="nav2022"><a href="index.html">Fantasy 2022</a></li>
                <li id="nav2021"><a href="fantasy2021.html">2021</a></li>
                <li id="nav2020"><a href="fantasy2020.html">2020</a></li>
                <li id="nav2019"><a href="fantasy2019.html">2019</a></li>
                <li id="nav2018"><a href="fantasy2018.html">2018</a></li>
                <li id="nav2017"><a href="fantasy2017.html">2017</a></li>
                <li id="navMedal"><a href="medalCount.html">Medal Count</a></li>
                <li id="navSunday"><a href="sunday.html">Sunday Sign-up</a></li>
            </ul>
        </nav>
        `
    }

}

customElements.define('nav-bar-menu', NavBarMenu)

