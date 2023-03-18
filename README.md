# ThreeJS-TypeScript
ThreeJS-TypeScript learning path

# Usage
npm install

npm run dev

# Explanation of Scene-Renderer-3D Objects- Cameras - Canvases

A scene is the main environment that three.js created. The 3D Objects and cameras are child of Scenes. 
Scenes can have multiple objects and multiple cameras. 

Renderers get a parameter of HTML canvas element and draw 2D representation of 3D environments to HTML.
Renderers have render() function which has the the camera and scene inputs. Each renderer can render a cameras view to HTML 

3D objects are added to Scenes, their default positions is 0,0,0. 
3D objects has material and geometry properties.

ThreeJS has different type of cameras, Eg. Perspective cameras and Orthogonal cameras. 
Cameras has also a position.
Cameras has usefull LookAt function which rotates cameras to required objects' locations.

Canvases should be added to HTML code. 
Later they should be finded in JS code and connected to a Renderer objects.
Renderers renders cameras' perspectives to Canvases.
