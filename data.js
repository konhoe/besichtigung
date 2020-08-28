var APP_DATA = {
  "scenes": [
    {
      "id": "0-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1089008666716822,
          "pitch": 0.31278965354627175,
          "rotation": 4.71238898038469,
          "target": "0-wohnzimmer"
        },
        {
          "yaw": 0.2606024047317561,
          "pitch": 0.018034357436087944,
          "rotation": 4.71238898038469,
          "target": "3-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09170230809641211,
          "pitch": 0.24236665367410026,
          "rotation": 0,
          "target": "0-wohnzimmer"
        },
        {
          "yaw": -0.26212275699096566,
          "pitch": 0.3565526013335578,
          "rotation": 4.71238898038469,
          "target": "1-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11575234471131957,
          "pitch": 0.32028830411336884,
          "rotation": 1.5707963267948966,
          "target": "0-wohnzimmer"
        },
        {
          "yaw": 0.10939360502245421,
          "pitch": 0.19531814169557293,
          "rotation": 1.5707963267948966,
          "target": "1-schlafzimmer"
        },
        {
          "yaw": 0.10049564119690402,
          "pitch": 0.06612718906286297,
          "rotation": 7.853981633974483,
          "target": "2-bad"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
