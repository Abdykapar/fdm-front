import * as Cesium from 'cesium'

export const cesiumExample = () => {
	Cesium.Ion.defaultAccessToken = process.env.VUE_APP_CESIUM_TOKEN

	// STEP 4 CODE (replaces steps 2 and 3)
	// Keep your `Cesium.Ion.defaultAccessToken = 'your_token_here'` line from before here. 
	const viewer = new Cesium.Viewer('cesium', {
		terrainProvider: Cesium.createWorldTerrain()
	})

	viewer.entities.suspendEvents()
	
	const dataPoint = { longitude: -122.38985, latitude: 37.61864, height: -27.32 }
	// Mark this location with a red point.
	const pointEntity = viewer.entities.add({
		description: `First data point at (${dataPoint.longitude}, ${dataPoint.latitude})`,
		position: Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
		point: { pixelSize: 10, color: Cesium.Color.RED }
	})

	viewer.entities.resumeEvents()
	// // Fly the camera to this point.
	viewer.flyTo(pointEntity)
}