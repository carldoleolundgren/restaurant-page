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
            ['Sushi', '$10.99','<img src="https://live.staticflickr.com/2788/4407068177_b519b5dcdb.jpg">'],
            ['Cinnamon Rolls', '$20.99', '<img src="https://live.staticflickr.com/8515/8487563545_62e331cf57_b.jpg">'],
            ['Unseasoned Tofu', '$15.99', '<img src="https://live.staticflickr.com/2175/2250506243_1a3d861f33_b.jpg">'],
            ['Peanut Butter','$7.99/jar', '<img src="https://farm4.staticflickr.com/3850/14360041550_45d7bf9975_b.jpg">'],
            ['Boiled Child\'s Sneaker', '$43.99', '<img src="https://api.creativecommons.engineering/t/600/https://live.staticflickr.com/8147/7699432298_8d04933a29_m.jpg">']
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