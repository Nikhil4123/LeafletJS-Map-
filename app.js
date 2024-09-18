document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([19.06826, 72.89673], 13);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const cords = [
        [19.09643, 72.88382],
        [19.09441, 72.88347],
        [19.09417, 72.88712],
        [19.09948, 72.89094],
        [19.09944, 72.88034],
        [19.08849, 72.89210]
    ];

    const details = [
        'Electrical Department  10-09-2024',
        'Pipeline Maintenance  14-09-2024',
        'Road Construction  05-06-2024',
        'Police Office Construction 26-06-2024',
        'School Construction  28-07-2024',
        'Municipality Kennel Maintenance  14-06-2024'
    ];

    const markers = [];

    for (let i = 0; i < cords.length; i++) {
        const marker = L.marker(cords[i]).addTo(map);
        
        const popupContent = `<strong>${details[i]}</strong>`;
        
        marker.bindPopup(popupContent);

        markers.push(marker);
    }

    function panToProject(index) {
        const targetCoords = cords[index];
        const targetMarker = markers[index];
        
        const zoomLevel = 16;

        map.flyTo(targetCoords, zoomLevel, {
            animate: true,
            duration: 0.8
        });

        targetMarker.openPopup();
    }

    document.querySelector('.project1').addEventListener('click', () => panToProject(0));
    document.querySelector('.project2').addEventListener('click', () => panToProject(1));
    document.querySelector('.project3').addEventListener('click', () => panToProject(2));
    document.querySelector('.project4').addEventListener('click', () => panToProject(3));
    document.querySelector('.project5').addEventListener('click', () => panToProject(4));
    document.querySelector('.project6').addEventListener('click', () => panToProject(5));
});
