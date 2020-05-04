function renderMenuPage() {
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
        navTabs.appendChild(homeTab);

        const menuTab = document.createElement('div');
        menuTab.innerText = 'Menu';
        menuTab.classList.add('navTabs')
        menuTab.setAttribute('id', 'selectedTab')
        navTabs.appendChild(menuTab);

        const contactTab = document.createElement('div');
        contactTab.innerText = 'Contact Us';
        contactTab.classList.add('navTabs')
        navTabs.appendChild(contactTab);

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent')
    
        const menuBlurb = document.createElement('p');
        menuBlurb.innerText = 'Menu:';
        homeContent.appendChild(menuBlurb);

        const menu = document.createElement('div');
        menu.classList.add('homeContent');

        const menuArr = [
            ['Sushi', '$10.99','<img src="images/sushi.jpg">'],
            ['Cinnamon Rolls', '$20.99', '<img src="images/cinnamon-rolls.jpg">'],
            ['Unseasoned Tofu', '$15.99', '<img src="images/tofu.jpg">'],
            ['Peanut Butter','$7.99/jar', '<img src="images/peanut-butter.jpg">'],
            ['Boiled Child\'s Sneaker', '$43.99', '<img src="images/shoe.jpg">']
        ]
        
        for (let i = 0; i < menuArr.length; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < menuArr[i].length; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.innerHTML = menuArr[i][j];

                if (j == 2) {
                    cell.classList.add('itemImg');
                }

                row.appendChild(cell);
            }
            menu.appendChild(row);
        }
        
        homeContent.appendChild(menu)
    
    content.appendChild(header);
    content.appendChild(navTabs);
    content.appendChild(homeContent);
}

export { renderMenuPage }