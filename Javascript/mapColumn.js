let renderer, camera, scene, squareSize;
let selectedObject = null;
let tiles = [];
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let offset = new THREE.Vector3();
let isPanning = false;
let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };
let cameraOffset = { x: 0, y: 0 };
let dragOffset = new THREE.Vector3();

document.addEventListener("DOMContentLoaded", function () {
    // Create the scene
    scene = new THREE.Scene();
    const gridSize = 30;
    squareSize = 1;

    // Initialize and position the camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);

    camera = new THREE.OrthographicCamera(-aspectRatio * 50, aspectRatio * 50, 50, -50, 1, 100);
    camera.position.set(gridSize * squareSize / 2, gridSize * squareSize / 2, 100);
    camera.lookAt(gridSize * squareSize / 2, gridSize * squareSize / 2, 0);
    // camera.position.set(gridSize * squareSize / 2, 100, gridSize * squareSize / 2);
    // camera.lookAt(new THREE.Vector3(gridSize * squareSize / 2, 0, gridSize * squareSize / 2));
    


    // Initialize the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x808080); // Gray background color

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

    // Create a i by i grid of hollow white squares
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            createSquare(i * squareSize - gridSize * squareSize / 2, j * squareSize - gridSize * squareSize / 2);
        }
    }

    // Add tiles
    createTile('Images/Tiles/0.png', { x: 0, y: 0.01, z: 0 }, 12, 8)

    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);
    renderer.domElement.addEventListener('mouseup', onMouseUp, false);

    animate();
});

// Function to create a hollow square witah a white border
function createSquare(x, y) {
    const squareShape = new THREE.Shape()
        .moveTo(0, 0)
        .lineTo(0, 1)
        .lineTo(1, 1)
        .lineTo(1, 0)
        .lineTo(0, 0);

    const squareGeometry = new THREE.BufferGeometry().setFromPoints(squareShape.getPoints());
    const squareMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
    const squareMesh = new THREE.LineLoop(squareGeometry, squareMaterial);
    squareMesh.position.set(x, y, 0);
    scene.add(squareMesh);
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
  
    // Add the dragging functionality
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
        // Create a plane geometry for the tile with the correct dimensions
        const tileGeometry = new THREE.PlaneGeometry(width, height);
        // Create a basic material with the loaded texture
        const tileMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
        // Create a mesh with the geometry and material
        const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);

        // Position the tile
        tileMesh.position.set(
            position.x + (width / 2), 
            position.y, 
            position.z + (height / 2)
        );
        
        // Rotate the tile to lay flat on the XZ plane
       // tileMesh.rotation.x = -Math.PI / 2;

        // Add the tile mesh to the scene
        scene.add(tileMesh);
        // Keep track of the tile mesh
        tiles.push(tileMesh);
        console.log(`Tile rotation: ${tileMesh.rotation.x}, ${tileMesh.rotation.y}, ${tileMesh.rotation.z}`);

    }, undefined, (error) => {
        console.error('An error occurred while loading the texture:', error);
    });
}



// Mouse event listeners
function onMouseDown(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(tiles);

    if (intersects.length > 0) {
        // A tile was clicked, prepare to drag it
        selectedObject = intersects[0].object;
        isPanning = false;

        // Calculate the offset
        intersects[0].point.sub(selectedObject.position);
        dragOffset.copy(intersects[0].point);
    } else {
        // The background was clicked, prepare to pan
        isPanning = true;
        startPoint.x = event.clientX;
        startPoint.y = event.clientY;
        cameraOffset.x = camera.position.x;
        cameraOffset.y = camera.position.y;
    }
}

function onMouseMove(event) {
    event.preventDefault();

    if (selectedObject) {
        // Dragging logic
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const dragPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(planeZ, dragPoint);

        selectedObject.position.x = dragPoint.x - dragOffset.x;
        selectedObject.position.y = dragPoint.y - dragOffset.y;
    } else if (isPanning) {
        // Panning logic
        endPoint.x = event.clientX;
        endPoint.y = event.clientY;

        const dx = (endPoint.x - startPoint.x) / renderer.domElement.clientWidth * (camera.right - camera.left);
        const dy = (endPoint.y - startPoint.y) / renderer.domElement.clientHeight * (camera.top - camera.bottom);

        camera.position.x = cameraOffset.x - dx;
        camera.position.y = cameraOffset.y + dy;
    }
}

function onMouseUp(event) {
    isPanning = false;
    selectedObject = null;
}
