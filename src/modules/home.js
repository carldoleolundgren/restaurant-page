function renderHome() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    
        const restaurantName = document.createElement('div');
        restaurantName.innerText = 'Giontello\'s Restaurant';
        header.appendChild(restaurantName);


    const headerTabs = document.createElement('div');
    
        const homeTab = document.createElement('div');
        homeTab.innerText = 'Home';
        headerTabs.appendChild(homeTab);

        const menuTab = document.createElement('div');
        menuTab.innerText = 'Menu';
        headerTabs.appendChild(menuTab);

        const contactTab = document.createElement('div');
        contactTab.innerText = 'Contact Us';
        headerTabs.appendChild(contactTab);

    const homeContent = document.createElement('div');
    
        const homeBlurb = document.createElement('p');
        homeBlurb.innerText = 'The best restaurant east of the Missisippi and north of the Mason-Dixon line.';
        homeContent.appendChild(homeBlurb);

        const homeImg = document.createElement('img');
        homeImg.setAttribute(
            'src',
            'https://live.staticflickr.com/7383/9515928240_16f207315a_b.jpg'
        );
        homeContent.appendChild(homeImg);
    
    content.appendChild(header);
    content.appendChild(headerTabs);
    content.appendChild(homeContent);
}

export { renderHome }