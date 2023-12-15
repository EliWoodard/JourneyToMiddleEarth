let renderer, camera, scene, squareSize;
let selectedObject = null;
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let offset = new THREE.Vector3();
let isPanning = false;
let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };
let cameraOffset = { x: 0, y: 0 };
let dragOffset = new THREE.Vector3();
let gridSize = 30;
// Selection Tab
let selectedTiles = [];
let mapOccupancy = {};
// Tiles
let tiles = [];
const tileMeshMap = {};
const tileDimensions = {
    'Images/Tiles/100A.png': { width: 12, height: 8}, // * 4
    'Images/Tiles/100B.png': { width: 12, height: 8},
    'Images/Tiles/101A.png': { width: 12, height: 8},
    'Images/Tiles/101B.png': { width: 12, height: 8},
    'Images/Tiles/102A.png': { width: 12, height: 8},
    'Images/Tiles/102B.png': { width: 12, height: 8},
    'Images/Tiles/103A.png': { width: 12, height: 8},
    'Images/Tiles/103B.png': { width: 12, height: 8},
    'Images/Tiles/104A.png': { width: 12, height: 8},
    'Images/Tiles/104B.png': { width: 12, height: 8},
    'Images/Tiles/200A.png': { width: 16, height: 6},
    'Images/Tiles/200B.png': { width: 16, height: 16},
    'Images/Tiles/201A.png': { width: 12, height: 14},
    'Images/Tiles/201B.png': { width: 12, height: 14},
    'Images/Tiles/202A.png': { width: 12, height: 16},
    'Images/Tiles/202B.png': { width: 12, height: 16},
    'Images/Tiles/203A.png': { width: 12, height: 18},
    'Images/Tiles/203B.png': { width: 12, height: 18},
    'Images/Tiles/204A.png': { width: 8, height: 18},
    'Images/Tiles/204B.png': { width: 8, height: 18},
    'Images/Tiles/205A.png': { width: 16, height: 14},
    'Images/Tiles/205B.png': { width: 16, height: 14},
    'Images/Tiles/206A.png': { width: 16, height: 14},
    'Images/Tiles/206B.png': { width: 16, height: 14},
    'Images/Tiles/207A.png': { width: 16, height: 10},
    'Images/Tiles/207B.png': { width: 16, height: 10},
    'Images/Tiles/208A.png': { width: 20, height: 12},
    'Images/Tiles/208B.png': { width: 20, height: 12},
    'Images/Tiles/209A.png': { width: 16, height: 12},
    'Images/Tiles/209B.png': { width: 16, height: 12},
    'Images/Tiles/210A.png': { width: 20, height: 12},
    'Images/Tiles/210B.png': { width: 20, height: 12},
    'Images/Tiles/211A.png': { width: 20, height: 14},
    'Images/Tiles/211B.png': { width: 20, height: 14},
    'Images/Tiles/212A.png': { width: 16, height: 12},
    'Images/Tiles/212B.png': { width: 16, height: 12},
    'Images/Tiles/213A.png': { width: 12, height: 14},
    'Images/Tiles/213B.png': { width: 12, height: 14},
    'Images/Tiles/214A.png': { width: 20, height: 14},
    'Images/Tiles/214B.png': { width: 20, height: 14},
    'Images/Tiles/215A.png': { width: 16, height: 12},
    'Images/Tiles/215B.png': { width: 16, height: 12},
    'Images/Tiles/216A.png': { width: 16, height: 12},
    'Images/Tiles/216B.png': { width: 16, height: 12}
};

document.addEventListener("DOMContentLoaded", function () {
    const tilesButton = document.getElementById("tilesButton");
    const charactersButton = document.getElementById("charactersButton");
    const enemiesButton = document.getElementById("enemiesButton");
    const tokensButton = document.getElementById("tokensButton");
    const buttons = [tilesButton, charactersButton, enemiesButton, tokensButton];

    tilesButton.classList.add('active');

    displayTiles();

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Clear existing items in the selectableItems div
            selectableItems.innerHTML = '';

            // Populate selectableItems based on the active button
            switch(this.id) {
                case 'tilesButton':
                    displayTiles();
                    break;
                case 'charactersButton':
                    displayCharacters();
                    break;
                case 'enemiesButton':
                    displayEnemies();
                    break;
                case 'tokensButton':
                    displayTokens();
                    break;
            }
        });
    });

    // Create the scene
    scene = new THREE.Scene();
    let squareSize = 2;

    // Initialize and position the camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    /* Can use this to see 3d grid map */
    // const axesHelper = new THREE.AxesHelper(50);
    // scene.add(axesHelper);

    camera = new THREE.OrthographicCamera(-aspectRatio * 50, aspectRatio * 50, 50, -50, 1, 100);
    camera.position.set(gridSize * squareSize / 2, gridSize * squareSize / 2, 100);
    camera.lookAt(gridSize * squareSize / 2, gridSize * squareSize / 2, 5);
    // camera.position.set(gridSize * squareSize / 2, 100, gridSize * squareSize / 2);
    // camera.lookAt(new THREE.Vector3(gridSize * squareSize / 2, 0, gridSize * squareSize / 2));
    


    // Initialize the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const loader = new THREE.TextureLoader();
    loader.load(`Images/JourneyMapBackground.jpg`, function(texture) {
        scene.background = texture;
    });

    // Append the renderer's canvas to the 'mapBoard' div
    const mapBoard = document.getElementById('mapBoard');
    mapBoard.appendChild(renderer.domElement);
    resizeRendererToDisplaySize();

    isPanning = false;
    startPoint = { x: 0, y: 0 };
    endPoint = { x: 0, y: 0 };
    cameraOffset = { x: 0, y: 0 };

    mapBoard.addEventListener('wheel', (event) => {
        event.preventDefault();
        const zoomAmount = event.deltaY * 0.001;
        camera.zoom = Math.max(0.1, Math.min(5, camera.zoom - zoomAmount));
        camera.updateProjectionMatrix();
    });

    // createTile('Images/Tiles/0.png', { x: 0, y: 0.01, z: 0 }, 12, 8)

    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);
    renderer.domElement.addEventListener('mouseup', onMouseUp, false);

    tilesButton.addEventListener('click', function() {
        displayTiles();
        // Additional logic for 'tiles' button
    });
    
    charactersButton.addEventListener('click', function() {
        // Logic for displaying characters
    });
    
    enemiesButton.addEventListener('click', function() {
        // Logic for displaying enemies
    });
    
    tokensButton.addEventListener('click', function() {
        // Logic for displaying tokens
    });

    //Rotation
    document.addEventListener('keydown', onDocumentKeyDown, false);

    animate();
});

// Render loop
function animate() {
    requestAnimationFrame(animate);
    
    // Dragging Functionality
    if (selectedObject) {
      raycaster.setFromCamera(mouse, camera);
      const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const dragPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, dragPoint);
      selectedObject.position.x = dragPoint.x;
      selectedObject.position.y = dragPoint.y;
    }
  
    renderer.render(scene, camera);
}

function resizeRendererToDisplaySize() {
    const mapBoard = document.getElementById('mapBoard');
    const width = mapBoard.clientWidth;
    const height = mapBoard.clientHeight;

    if (width === 0 || height === 0) {
        setTimeout(resizeRendererToDisplaySize, 100);
        return;
    }

    if (renderer) {
        renderer.setSize(width, height, false);
    }

    if (camera) {
        const newAspectRatio = width / height;
        camera.left = -newAspectRatio * 50;
        camera.right = newAspectRatio * 50;
        camera.top = 50;
        camera.bottom = -50;
        camera.updateProjectionMatrix();
    }
}

window.addEventListener('resize', resizeRendererToDisplaySize);

// Tiles  
// Function to create a hexagon shape with a given size
function createTile(imagePath, position, width, height) {
    const loader = new THREE.TextureLoader();
    loader.load(imagePath, (texture) => {
        const tileGeometry = new THREE.PlaneGeometry(width, height);
        const tileMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
        const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);

        tileMesh.position.set(
            position.x + (width / 2), 
            position.y, 
            position.z + (height / 2)
        );

        scene.add(tileMesh);
        tiles.push(tileMesh);
        tileMeshMap[imagePath] = tileMesh; // Store the mesh
    }, undefined, (error) => {
        console.error('An error occurred while loading the texture:', error);
    });
}

// Mouse event listeners
let isMouseDown = false;

function onMouseDown(event) {
    event.preventDefault();
    isMouseDown = true;

    // Get the bounding rectangle of the renderer
    const rect = renderer.domElement.getBoundingClientRect();

    // Calculate mouse position relative to the canvas
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(tiles);

    if (intersects.length > 0) {
        selectedObject = intersects[0].object;
        isPanning = false;

        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const dragPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeZ, dragPoint);
        offset.copy(dragPoint).sub(selectedObject.position);
    } else {
        isPanning = true;
        startPoint.x = event.clientX;
        startPoint.y = event.clientY;
        cameraOffset.x = camera.position.x;
        cameraOffset.y = camera.position.y;
    }
}

function onMouseMove(event) {
    if (!isMouseDown) return;

    event.preventDefault();

    // Get the bounding rectangle of the renderer
    const rect = renderer.domElement.getBoundingClientRect();

    // Calculate mouse position relative to the canvas
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    if (selectedObject && !isPanning) {
        raycaster.setFromCamera(mouse, camera);
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const dragPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeZ, dragPoint);
        dragPoint.sub(offset);
        selectedObject.position.x = dragPoint.x;
        selectedObject.position.y = dragPoint.y;
    } else if (isPanning) {
        endPoint.x = event.clientX;
        endPoint.y = event.clientY;

        const dx = (endPoint.x - startPoint.x) / rect.width * (camera.right - camera.left);
        const dy = (endPoint.y - startPoint.y) / rect.height * (camera.top - camera.bottom);

        camera.position.x = cameraOffset.x - dx;
        camera.position.y = cameraOffset.y + dy;
    }
}

function onMouseUp(event) {
    isMouseDown = false;
    isPanning = false;
    selectedObject = null;
}

// Function to display tiles (with reset behavior)
function displayTiles() {
    const selectableItems = document.getElementById('selectableItems');
    selectableItems.innerHTML = ''; // Clear the container
    Object.keys(tileDimensions).forEach(tilePath => {
        const img = document.createElement('img');
        img.src = tilePath;
        img.classList.add('tile-image');
        if (selectedTiles.includes(tilePath)) {
            img.classList.add('selected-tile');
        }
        img.onclick = () => toggleTileSelection(tilePath, img);
        selectableItems.appendChild(img);
    });
}


// Function to handle tile selection
function toggleTileSelection(tilePath, imgElement) {
    const isSelected = imgElement.classList.contains('selected-tile');
    if (isSelected) {
        // Tile is already selected, deselect it
        imgElement.classList.remove('selected-tile');
        removeTileFromScene(tilePath); // Remove tile from scene
        const index = selectedTiles.indexOf(tilePath);
        if (index > -1) {
            selectedTiles.splice(index, 1); // Remove from selectedTiles array
        }
    } else {
        // New tile selection
        imgElement.classList.add('selected-tile');
        if (!selectedTiles.includes(tilePath)) {
            selectedTiles.push(tilePath);
            placeTileInScene(tilePath); // Place tile in scene only if it's not already there
        }
    }
}

// Function to place a tile in the scene
function placeTileInScene(tilePath) {
    if (!tileMeshMap[tilePath]) { // Check if tile is not already in the scene
        const { width, height } = tileDimensions[tilePath];
        const position = getBottomRightPosition(width, height);
        createTile(tilePath, position, width, height);
    }
}

// Function to calculate the bottom right position
function getBottomRightPosition(tileWidth, tileHeight) {
    // Assuming camera is Orthographic
    const camRight = camera.right / camera.zoom;
    const camTop = camera.top / camera.zoom;

    // Calculate position
    const x = camera.position.x + camRight - tileWidth / 2;
    const y = 0.01; // Adjust this if needed
    const z = 0;

    return { x, y, z };
}

// Function to remove a tile from the scene
function removeTileFromScene(tilePath) {
    const tileMesh = tileMeshMap[tilePath];
    if (tileMesh) {
        scene.remove(tileMesh);
        delete tileMeshMap[tilePath]; // Remove the reference
    }
}

// Function to handle keydown events
function onDocumentKeyDown(event) {
    switch (event.keyCode) {
        case 37: // Left arrow key
            rotateSelectedTile(-Math.PI / 60); // Rotate 60 degrees counter-clockwise
            break;
        case 39: // Right arrow key
            rotateSelectedTile(Math.PI / 60); // Rotate 60 degrees clockwise
            break;
    }
}

// Function to rotate the selected tile
function rotateSelectedTile(angle) {
    if (selectedObject) {
        selectedObject.rotation.z += angle;
    }
}