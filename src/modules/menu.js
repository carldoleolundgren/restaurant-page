function renderMenuPage() {
    const content = document.querySelector('#content');
    content.setAttribute('id', 'content')

    const header = document.createElement('div');
    
        const restaurantName = document.createElement('h1');
        restaurantName.innerText = 'Giontello\'s Restaurant';
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

        const menuTable = document.createElement('div');
        
        const menuRow1 = document.createElement('div');
        menuRow1.classList.add('row');
            const cell1a = document.createElement('div');
            cell1a.classList.add('cell', 'itemName')
            cell1a.innerText = 'Sushi';
            menuRow1.appendChild(cell1a);
            
            const cell1b = document.createElement('div');
            cell1b.classList.add('cell', 'itemPrice')
            cell1b.innerText = '$10.99'
            menuRow1.appendChild(cell1b);

            const cell1c = document.createElement('div');
            cell1c.classList.add('cell', 'itemImg')
            cell1c.innerHTML = '<img src="https://live.staticflickr.com/2788/4407068177_b519b5dcdb.jpg">'
            menuRow1.appendChild(cell1c);

        const menuRow2 = document.createElement('div');
        menuRow2.classList.add('row');
            const cell2a = document.createElement('div');
            cell2a.classList.add('cell', 'itemName')
            cell2a.innerText = 'Cinnamon Rolls';
            menuRow1.appendChild(cell2a);
            
            const cell2b = document.createElement('div');
            cell2b.classList.add('cell', 'itemPrice')
            cell2b.innerText = '$22.99'
            menuRow1.appendChild(cell2b);

            const cell2c = document.createElement('div');
            cell2c.classList.add('cell', 'itemImg')
            cell2c.innerHTML = '<img src="https://live.staticflickr.com/8515/8487563545_62e331cf57_b.jpg">'
            menuRow1.appendChild(cell2c);

        menuTable.appendChild(menuRow1);
        
        homeContent.appendChild(menuTable)
        
    
    content.appendChild(header);
    content.appendChild(navTabs);
    content.appendChild(homeContent);
}

export { renderMenuPage }