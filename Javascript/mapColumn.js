let renderer, camera, scene;

document.addEventListener("DOMContentLoaded", function () {
    // Create the scene
    scene = new THREE.Scene();
    const gridSize = 30;
    const squareSize = 1;

    // Initialize and position the camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(-aspectRatio * 50, aspectRatio * 50, 50, -50, 1, 100);
    camera.position.set(gridSize * squareSize / 2, gridSize * squareSize / 2, 100);
    camera.lookAt(gridSize * squareSize / 2, gridSize * squareSize / 2, 0);

    // Initialize the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x808080); // Gray background color

    // Append the renderer's canvas to the 'mapBoard' div
    const mapBoard = document.getElementById('mapBoard');
    mapBoard.appendChild(renderer.domElement);
    resizeRendererToDisplaySize();

    let isPanning = false;
    let startPoint = { x: 0, y: 0 };
    let endPoint = { x: 0, y: 0 };
    let cameraOffset = { x: 0, y: 0 };

    mapBoard.addEventListener('mousedown', (event) => {
        isPanning = true;
        startPoint = {
            x: event.clientX,
            y: event.clientY
        };
    });

    mapBoard.addEventListener('mousemove', (event) => {
        if (isPanning) {
            endPoint = {
                x: event.clientX,
                y: event.clientY
            };

            const dx = (endPoint.x - startPoint.x) / (window.innerWidth * 0.5) * aspectRatio * 100;
            const dy = (endPoint.y - startPoint.y) / (window.innerHeight * 0.5) * 100;

            camera.position.x = cameraOffset.x - dx;
            camera.position.y = cameraOffset.y + dy;
        }
    });

    mapBoard.addEventListener('mouseup', (event) => {
        isPanning = false;
        cameraOffset.x = camera.position.x;
        cameraOffset.y = camera.position.y;
    });

    mapBoard.addEventListener('wheel', (event) => {
        event.preventDefault();
        const zoomAmount = event.deltaY * 0.01;
        camera.zoom = Math.max(0.1, Math.min(5, camera.zoom - zoomAmount));
        camera.updateProjectionMatrix();
    });

    // Create a 10x10 grid of hollow white squares
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            createSquare(i * squareSize - gridSize * squareSize / 2, j * squareSize - gridSize * squareSize / 2);
        }
    }

    animate();
});

// Function to create a hollow square with a white border
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