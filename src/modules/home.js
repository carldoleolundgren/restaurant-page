function renderHomePage() {
    const content = document.querySelector('#content');
    content.setAttribute('id', 'content')

    const header = document.createElement('div');
    
        const restaurantName = document.createElement('h1');
        restaurantName.innerText = 'Carl\'s Restaurant';
        header.appendChild(restaurantName);


    const navTabs = document.createElement('div');
    
        const homeTab = document.createElement('div');
        homeTab.innerText = 'Home';
        homeTab.classList.add('navTabs')
        homeTab.setAttribute('id', 'selectedTab')
        navTabs.appendChild(homeTab);

        const menuTab = document.createElement('div');
        menuTab.innerText = 'Menu';
        menuTab.classList.add('navTabs')
        navTabs.appendChild(menuTab);

        const contactTab = document.createElement('div');
        contactTab.innerText = 'Contact Us';
        contactTab.classList.add('navTabs')
        navTabs.appendChild(contactTab);

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    
        const homeBlurb = document.createElement('p');
        homeBlurb.innerText = 'Carl\'s Restaurant, where you eat what we feed you.';
        homeContent.appendChild(homeBlurb);

        const homeImg = document.createElement('img');
        homeImg.setAttribute(
            'src',
            'images/random-restaurant.jpg'
        );
        homeImg.setAttribute('id', 'homeImg')
        homeContent.appendChild(homeImg);
    
    content.appendChild(header);
    content.appendChild(navTabs);
    content.appendChild(homeContent);
}

export { renderHomePage }