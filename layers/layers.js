var wms_layers = [];

var format_India_Boundary_0 = new ol.format.GeoJSON();
var features_India_Boundary_0 = format_India_Boundary_0.readFeatures(json_India_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_Boundary_0.addFeatures(features_India_Boundary_0);
var lyr_India_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_Boundary_0, 
                style: style_India_Boundary_0,
                popuplayertitle: "India_Boundary",
                interactive: true,
                title: '<img src="styles/legend/India_Boundary_0.png" /> India_Boundary'
            });

lyr_India_Boundary_0.setVisible(true);
var layersList = [lyr_India_Boundary_0];
lyr_India_Boundary_0.set('fieldAliases', {'Area': 'Area', });
lyr_India_Boundary_0.set('fieldImages', {'Area': '', });
lyr_India_Boundary_0.set('fieldLabels', {'Area': 'no label', });
lyr_India_Boundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});