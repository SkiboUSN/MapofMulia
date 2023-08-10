var wms_layers = [];

var lyr_Mulia202308101333_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mulia 2023-08-10-13-33_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mulia202308101333_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1805052.522012, 1111509.956531, 2075365.419974, 3148068.530664]
                            })
                        });

lyr_Mulia202308101333_modified_0.setVisible(true);
var layersList = [lyr_Mulia202308101333_modified_0];
