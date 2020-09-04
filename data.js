var APP_DATA = {
  "scenes": [
    {
      "id": "0-kche",
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
          "yaw": 0.0857541567682496,
          "pitch": 0.17530455738531003,
          "rotation": 1.5707963267948966,
          "target": "1-wohnzimmer"
        },
        {
          "yaw": 0.09235236284238724,
          "pitch": 0.2626355863586056,
          "rotation": 1.5707963267948966,
          "target": "2-schlafzimmer"
        },
        {
          "yaw": 0.09261045022311265,
          "pitch": 0.34700605725241296,
          "rotation": 1.5707963267948966,
          "target": "3-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wohnzimmer",
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
      "linkHotspots": [
        {
          "yaw": 0.6774003977874639,
          "pitch": 0.29374024112345154,
          "rotation": 0.7853981633974483,
          "target": "3-bad"
        },
        {
          "yaw": 0.7169524537440513,
          "pitch": 0.15395094273461396,
          "rotation": 1.5707963267948966,
          "target": "2-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-schlafzimmer",
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
          "yaw": 0.26948430637459,
          "pitch": 0.1893559583028086,
          "rotation": 5.497787143782138,
          "target": "0-kche"
        },
        {
          "yaw": 0.13022904913398037,
          "pitch": 0.3478144583753071,
          "rotation": 4.71238898038469,
          "target": "1-wohnzimmer"
        },
        {
          "yaw": 0.4677877315798469,
          "pitch": 0.3883486261918492,
          "rotation": 1.5707963267948966,
          "target": "3-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bad",
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
          "yaw": 0.0729254258340859,
          "pitch": 0.33627652262191177,
          "rotation": 0,
          "target": "1-wohnzimmer"
        },
        {
          "yaw": -0.2147928841380562,
          "pitch": 0.34265642408482755,
          "rotation": 4.71238898038469,
          "target": "2-schlafzimmer"
        },
        {
          "yaw": 0.20094682019380627,
          "pitch": 0.07907031399781062,
          "rotation": 1.5707963267948966,
          "target": "0-kche"
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
