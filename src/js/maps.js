import { IS_MOBILE } from './utils';

export default function maps() {
    ymaps.ready(initMap);

    function initMap() {
        const elements = Array.from(document.querySelectorAll('.js-map'));

        elements.forEach(element => {
            const center = element.getAttribute('data-center')?.split(',');
            const coords = element.getAttribute('data-coords')?.split(',');
            const zoom = element.getAttribute('data-zoom');
            const mapElement = element.querySelector('.js-map-element');

            const mapInstance = new ymaps.Map(mapElement, {
                center: IS_MOBILE ? coords : center,
                zoom: zoom ? zoom : 12,
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        left: 10,
                        bottom: 40
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            const objectManager = new ymaps.ObjectManager({
                geoObjectOpenBalloonOnClick: false,
                clusterize: false
            });
            mapInstance.geoObjects.add(objectManager);

            const objectToAdd = {
                id: coords.join('-'),
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords
                },
                options: {
                    balloonShadow: false,
                    hideIconOnBalloonOpen: false,
                    iconColor: '#007c62'
                }
            };
            objectManager.add(objectToAdd);
        });
    }
}
