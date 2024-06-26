var APP_DATA = {
  scenes: [
    {
      id: "0-museo-1",
      name: "Museo", 
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 0.0073876370454897256,
        pitch: 0.004988716927911696,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: -0.23817464724527682,
          pitch: 0.10231538244980953,
          rotation: 12.566370614359176,
          target: "2-ingresso-museo-primo-locale-1",
          isRed: true,
        },
        {
          yaw: 1.5088723555172425,
          pitch: 0.2764355655316546,
          rotation: 4.71238898038469,
          target: "1-museo-2",
          isRed: false,
        },
      ],
      infoHotspots: [
        {
          "id": "",
          "yaw": 0.47983935090504026,
          "pitch": -0.24488264090410183,
          "title": "Museo Valdimagnino di Amagno",
          "text": "entrata"
        }
      ],
    },
    {
      id: "1-museo-2",
      name: "Museo",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -0.33247259182996913,
        pitch: 0.15215586630126765,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 0.7585240356298737,
          pitch: 0.06473834479165141,
          rotation: 5.497787143782138,
          target: "13-piazzetta-esterna-3",
          isRed: false,
        },
        {
          yaw: -1.763085814502526,
          pitch: 0.19675875920273,
          rotation: 1.5707963267948966,
          target: "0-museo-1",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": -1.3964035004162216,
          "pitch": -0.2144186852938219,
          "title": "Museo Valdimagnino di Amagno",
          "text": "Text"
        }
      ],
    },
    {
      id: "2-ingresso-museo-primo-locale-1",
      name: "Ingresso Museo - primo locale",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -1.9098935415135294,
        pitch: 0.2812820205300852,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 1.1,
          pitch: 0.2,
          rotation: 3.4,
          target: "0-museo-1",
          isRed: false,
        },
        {
          yaw: -1.7475782313745416,
          pitch: 0.4425969374781431,
          rotation: 11.780972450961727,
          target: "3-ingresso-museo-primo-locale-2",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": 2.0696263665191124,
          "pitch": -0.23645498179391033,
          "title": "Campane",
          "text": "campane e campanelle antiche"
        },
        {
          "yaw": -2.8455095414426914,
          "pitch": 0.6174025152499762,
          "title": "cose entrata",
          "text": "Text"
        }
      ],
    },
    {
      id: "3-ingresso-museo-primo-locale-2",
      name: "Ingresso Museo - primo locale",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 1.494929883643513,
        pitch: 0.277927618178321,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: -1,
          pitch: 0.5,
          rotation: 2,
          target: "2-ingresso-museo-primo-locale-1",
          isRed: false,
        },
        {
          yaw: 2.0633658797847385,
          pitch: 0.5653961158338117,
          rotation: 7.853981633974483,
          target: "5-museo-secondo-locale-1",
          isRed: true,
        },
        {
          yaw: 0.6875001061502992,
          pitch: 0.25264886457414804,
          rotation: 0.7853981633974483,
          target: "4-ingresso-al-tunnel-della-nevera",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": 0.6602894520743341,
          "pitch": 0.3955729112845354,
          "title": "Oggetti entrata i2",
          "text": "0"
        },
        {
          "yaw": 1.2722730725212834,
          "pitch": -0.18766926510757997,
          "title": "mappa su oggeto&nbsp;",
          "text": "Text"
        },
        {
          "yaw": -2.617942912404178,
          "pitch": -0.224065436581661,
          "title": "oggetti entrata i2",
          "text": "1"
        }
      ],
    },
    {
      id: "4-ingresso-al-tunnel-della-nevera",
      name: "Ingresso al tunnel della Nevera",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -2.883657100488371,
        pitch: 0.11433160168152412,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: -2.9895572951990594,
          pitch: 0.25555409802460716,
          rotation: 0,
          target: "7-proseguimento-tunnel",
          isRed: true,
        },
        {
          yaw: -0.6,
          pitch: 0.2,
          rotation: 3,
          target: "3-ingresso-museo-primo-locale-2",
          isRed: false,
        },
        {
          yaw: -1.4,
          pitch: 0.3,
          rotation: 0,
          target: "5-museo-secondo-locale-1",
          isRed: false,
        },
      ],
      infoHotspots: [
        {
          "yaw": -1.2306920914586392,
          "pitch": -0.1948963292575865,
          "title": "Oggetti seconda stanza",
          "text": "0"
        },
        {
          "yaw": 1.208816503897357,
          "pitch": -0.3406714748726614,
          "title": "Omaggio",
          "text": "Le persone che hanno conrtribuito alla costruzione di questo museo"
        }
      ],
    },
    {
      id: "5-museo-secondo-locale-1",
      name: "Museo - secondo locale",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.6346106268420115,
          pitch: 0.3294780074123391,
          rotation: 5.497787143782138,
          target: "3-ingresso-museo-primo-locale-2",
          isRed: true,
        },
        {
          yaw: -2.0929144475571064,
          pitch: 0.4481530042919637,
          rotation: 0.7853981633974483,
          target: "6-museo-secondo-locale-2",
          isRed: false,
        },
      ],
      infoHotspots: [
        {
          "yaw": 0.567023140974122,
          "pitch": -0.35435380978542597,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -2.9003265388186144,
          "pitch": -0.03171791431554638,
          "title": "Oggetti seconda stanza",
          "text": "1"
        }
      ],
    },
    {
      id: "6-museo-secondo-locale-2",
      name: "Museo - secondo locale",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.561814934065378,
          pitch: 0.4029667454707706,
          rotation: 0.7853981633974483,
          target: "5-museo-secondo-locale-1",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": -2.86482781122937,
          "pitch": 0.037348969514427566,
          "title": "cantina vini",
          "text": "Text"
        }
      ],
    },
    {
      id: "7-proseguimento-tunnel",
      name: "Proseguimento tunnel",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 3.036333285788925,
        pitch: 0.15215586630125344,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: -0.05,
          pitch: 0.3,
          rotation: 3,
          target: "4-ingresso-al-tunnel-della-nevera",
          isRed: false,
        },
        {
          yaw: 3.1060420809943405,
          pitch: 0.3208542954131417,
          rotation: 4.71238898038469,
          target: "8-svincolo-tunnel",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": 0.05126875333364467,
          "pitch": 0.01875466431265771,
          "title": "Aula museo",
          "text": "Text"
        }
      ],
    },
    {
      id: "8-svincolo-tunnel",
      name: "Svincolo Tunnel",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -2.809898127423267,
        pitch: 0.4400642649937794,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 2.4,
          pitch: 0.2,
          rotation: 3,
          target: "7-proseguimento-tunnel",
          isRed: false,
        },
        {
          yaw: -2.3842312723738512,
          pitch: 0.8399539928291748,
          rotation: 7.853981633974483,
          target: "9-nicchia",
          isRed: true,
        },
        {
          yaw: -2.3727164315862623,
          pitch: 0.3661397457099902,
          rotation: 0,
          target: "10-nevera",
          isRed: false,
        },
      ],
      infoHotspots: [
        {
          "yaw": -0.8869616198976615,
          "pitch": -0.23188891911749288,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.5533413390312987,
          "pitch": -0.19230845110633332,
          "title": "Museo",
          "text": "Text"
        }
      ],
    },
    {
      id: "9-nicchia",
      name: "Nicchia",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.35,
          pitch: 0.3,
          rotation: 0,
          target: "10-nevera",
          isRed: true,
        },
        {
          yaw: 1.772068458614073,
          pitch: -0.08755271039518853,
          rotation: 2.356194490192345,
          target: "8-svincolo-tunnel",
          isRed: false,
        },
      ],
      infoHotspots: [
        {
          "yaw": 0.13748274379255676,
          "pitch": 0.03552663226146535,
          "title": "Vini vari",
          "text": "Text"
        }
      ],
    },
    {
      id: "10-nevera",
      name: "Nevera",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 2.97670003046582,
        pitch: 0.6362944691244827,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 0.09453637654975111,
          pitch: 0.4148240557919394,
          rotation: 4.71238898038469,
          target: "9-nicchia",
          isRed: false,
        },
        {
          yaw: 0.10584313165782433,
          pitch: 0.053376538394326545,
          rotation: 2.356194490192345,
          target: "8-svincolo-tunnel",
          isRed: false,
        },
        {
          yaw: -3.068797817557371,
          pitch: -0.6256786159285639,
          rotation: 0,
          target: "11-piazzetta-esterna-1",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": 2.57093305124663,
          "pitch": 0.30190122157420163,
          "title": "Vini",
          "text": "tenuti al fresco, d'inverno venivano sommersi con la neve per tenerli buoni"
        },
        {
          "yaw": -2.7752216618608756,
          "pitch": -0.585480331577072,
          "title": "Botola",
          "text": "Chissà dove porta?"
        }
      ],
    },
    {
      id: "11-piazzetta-esterna-1",
      name: "Piazzetta esterna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -2.8050670781679656,
        pitch: 1.2501841038691754,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 0,
          pitch: 1.5,
          rotation: 0,
          target: "10-nevera",
          isRed: false,
        },
        {
          yaw: -2.8415641017869156,
          pitch: 0.36729967059663835,
          rotation: 0.7707963267948966,
          target: "12-piazzetta-esterna-2",
          isRed: true,
        },
      ],
      infoHotspots: [],
    },
    {
      id: "12-piazzetta-esterna-2",
      name: "Piazzetta esterna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 0.6178434109707948,
        pitch: 0.13968407398146887,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 2.9726404786367517,
          pitch: 0.12541071417435035,
          rotation: 3.141592653589793,
          target: "11-piazzetta-esterna-1",
          isRed: false,
        },
        {
          yaw: 1.3830260574836153,
          pitch: 0.24075843149433318,
          rotation: 3.9269908169872414,
          target: "14-porticato-1",
          isRed: true,
        },
        {
          yaw: -0.2921980901382035,
          pitch: 0.3223224212032427,
          rotation: 1.5707963267948966,
          target: "13-piazzetta-esterna-3",
          isRed: false, // TRUE / FALSE
        },
      ],
      infoHotspots: [
        {
          yaw: -0.4921980901382035,
          pitch: -0.3223224212032427,
          "title": "Cosa c'è in quel riquadro bianco?",
          "text": "Vai avanti per scoprire il mistero",
          isRed: false,
        },
      ],
    },
    {
      id: "13-piazzetta-esterna-3",
      name: "Piazzetta esterna",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 3.048399731506681,
        pitch: 0.3647925166301711,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 4.6,
          pitch: 0.2,
          rotation: 11,
          target: "12-piazzetta-esterna-2",
          isRed: false,
        },
        {
          yaw: 2.420318991846152,
          pitch: 0.25095531570031326,
          rotation: 0.7853981633974483,
          target: "1-museo-2",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": -3.132283050143341,
          "pitch": -0.049574861929396974,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 0.31532392460437464,
          "pitch": -0.2952245705925769,
          "title": "U-UN... UN FANTASMA!!!?",
          "text": "Contadino  "
        },
        {
          "yaw": -4.00000090034368578,
          "pitch": 0.12600622227910918,
          "title": "Ritorniamo all'inizio",
          "text": "Text"
        }
      ],
    },
    {
      id: "14-porticato-1",
      name: "Porticato",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -1.5403223239823056,
        pitch: 0.2319753371478157,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 0.006518183541572853,
          pitch: -0.10133365880838774,
          rotation: 3.9269908169872414,
          target: "15-porticato-2",
          isRed: true,
        },
        {
          yaw: -1.706518183541572853,
          pitch: 0.33133365880838774,
          rotation: 3.141592653589793,
          target: "12-piazzetta-esterna-2",
          isRed: false,
        },
      ],
      infoHotspots: [
        //pointer
      ],
    },
    {
      id: "15-porticato-2",
      name: "Scalette porticato",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 0.24564178763109368,
        pitch: -0.019954867711646784,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: -0.4,
          pitch: 0.4,
          rotation: 1,
          target: "14-porticato-1",
          isRed: false,
        },
        {
          yaw: 0.8723147566096277,
          pitch: -0.04103202549088891,
          rotation: 4.71238898038469,
          target: "16-porticato-3",
          isRed: true,
        },
      ],
      infoHotspots: [],
    },
    {
      id: "16-porticato-3",
      name: "Scalette porticato",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 2.8886703356943286,
        pitch: 0.27615089842306517,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 2.5352013986108695,
          pitch: 0.29458640795051494,
          rotation: 1.5707963267948966,
          target: "17-casa-del-maestro",
          isRed: true,
        },
      ],
      infoHotspots: [
        {
          "yaw": 0.15439878530581552,
          "pitch": -0.25511697907968767,
          "title": "Piano superiore",
          "text": "Text"
        }
      ],
    },
    {
      id: "17-casa-del-maestro",
      name: "Casa del Maestro",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 0.9770149992645507,
        pitch: 0.17211073401290022,
        fov: 1.4550425388027854,
      },
      linkHotspots: [
        {
          yaw: 2.35,
          pitch: 0.2,
          rotation: 10,
          target: "16-porticato-3",
          isRed: false,
        },
        {
          yaw: 0.380864005166174,
          pitch: 0.3367534292801828,
          rotation: 3.141592653589793,
          target: "13-piazzetta-esterna-3",
          isRed: true,
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "Nevera",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
  },
};
