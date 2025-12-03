export const apiResponse = {
  "network": {
    "name": "Aemetis Biogas Network",
    "max_nitrogen_percent": 2.25,
    "timezone": "America/Los_Angeles"
  },
  "defaults": {
    "composition": {
      "methane": 60,
      "co2": 35,
      "nitrogen": 3,
      "oxygen": 1
    },
    "temperature_f": 60,
    "pressure_psig": 0
  },
  "pipe_diameters": {
    "4inch": {
      "internal_diameter_inches": 3.137
    },
    "8inch": {
      "internal_diameter_inches": 6.013
    }
  },
  "plants": [
    {
      "id": "com.aemetis.wickstrom_dairy",
      "name": "Wickstrom",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 108.40162201351589,
      "available_capacity": 541.5983779864841,
      "gas_composition": {
        "methane": 72.28830814149644,
        "co2": 26.227871715757583,
        "nitrogen": 1.3883119262258212,
        "oxygen": 0.08805833586802085
      },
      "psig": 88.93872768614027,
      "temperature": 74.18808639102512,
      "flow_velocity": 4.904720005239004,
      "transit_time_minutes": 4.844313227792948,
      "coordinates": {
        "x": 2000,
        "y": 2000
      }
    },
    {
      "id": "com.aemetis.hilmar_dairy",
      "name": "Hilmar",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 16.838477428489263,
      "available_capacity": 633.1615225715108,
      "gas_composition": {
        "methane": 75.36705534193251,
        "co2": 22.66485829194387,
        "nitrogen": 1.9190277357896168,
        "oxygen": 0
      },
      "psig": 86.63042212168375,
      "temperature": 47.796405403349134,
      "flow_velocity": 0.7407282421988611,
      "transit_time_minutes": 53.460902047486265,
      "coordinates": {
        "x": 1700,
        "y": 1800
      }
    },
    {
      "id": "com.aemetis.borba_dairy",
      "name": "Borba",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 0,
      "available_capacity": 650,
      "gas_composition": {
        "methane": 60,
        "co2": 35,
        "nitrogen": 3,
        "oxygen": 1
      },
      "psig": 0,
      "temperature": 60,
      "flow_velocity": 0,
      "transit_time_minutes": null,
      "coordinates": {
        "x": 750,
        "y": 1900
      }
    },
    {
      "id": "com.aemetis.albert_mendis_dairy",
      "name": "Albert Mendes",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 84.56916214247882,
      "available_capacity": 565.4308378575212,
      "gas_composition": {
        "methane": 77.35908349310898,
        "co2": 20.454167821533847,
        "nitrogen": 2.1057514968134354,
        "oxygen": 0.07000000029802322
      },
      "psig": 96.53879952861323,
      "temperature": 73.28333192800409,
      "flow_velocity": 3.558935017927525,
      "transit_time_minutes": 74.17949433472239,
      "coordinates": {
        "x": 300,
        "y": 1100
      }
    },
    {
      "id": "com.aemetis.ac_machado_dairy",
      "name": "AC Machado",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 70.50228069941203,
      "available_capacity": 579.497719300588,
      "gas_composition": {
        "methane": 70.84500663757325,
        "co2": 27.53965035120646,
        "nitrogen": 1.5639019177357356,
        "oxygen": 0.03999999910593033
      },
      "psig": 92.73374714109633,
      "temperature": 71.0307421069675,
      "flow_velocity": 3.059062995510671,
      "transit_time_minutes": 86.30093606683918,
      "coordinates": {
        "x": 700,
        "y": 1200
      }
    },
    {
      "id": "com.aemetis.k_r_blount_dairy",
      "name": "K&R",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 53.907684081395466,
      "available_capacity": 596.0923159186045,
      "gas_composition": {
        "methane": 72.62378166198731,
        "co2": 26.023261643515692,
        "nitrogen": 1.3126624614000322,
        "oxygen": 0.032952777041225796
      },
      "psig": 75.50416387769911,
      "temperature": 60,
      "flow_velocity": 2.727933298063767,
      "transit_time_minutes": 96.77655981815316,
      "coordinates": {
        "x": 500,
        "y": 1300
      }
    },
    {
      "id": "com.aemetis.alamo_dairy",
      "name": "Alamo",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 32.22087232145683,
      "available_capacity": 617.7791276785432,
      "gas_composition": {
        "methane": 73.3277458185872,
        "co2": 24.312251561533206,
        "nitrogen": 2.2619576605539473,
        "oxygen": 0.09000000357627869
      },
      "psig": 90.50865015403303,
      "temperature": 50.8341432286318,
      "flow_velocity": 1.373321048751699,
      "transit_time_minutes": 320.39121544080655,
      "coordinates": {
        "x": 150,
        "y": 800
      }
    },
    {
      "id": "com.aemetis.trinkler_dairy",
      "name": "Trinkler",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 40.85081512875027,
      "available_capacity": 609.1491848712498,
      "gas_composition": {
        "methane": 72.06819375356038,
        "co2": 26.097558658917745,
        "nitrogen": 1.636274989247322,
        "oxygen": 0.1899999976158142
      },
      "psig": 104.07213046603732,
      "temperature": 59.53229438039992,
      "flow_velocity": 1.5685741112653864,
      "transit_time_minutes": 213.18724923378707,
      "coordinates": {
        "x": 300,
        "y": 250
      }
    },
    {
      "id": "com.aemetis.ss_dairy",
      "name": "SS",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 84.73645188649496,
      "available_capacity": 565.2635481135051,
      "gas_composition": {
        "methane": 72.22756420983208,
        "co2": 25.488883215056525,
        "nitrogen": 2.13445247762733,
        "oxygen": 0.13988888735572497
      },
      "psig": 94.19228877385457,
      "temperature": 60,
      "flow_velocity": 3.5520805578688486,
      "transit_time_minutes": 4.954842581205287,
      "coordinates": {
        "x": 1700,
        "y": 1000
      }
    },
    {
      "id": "com.aemetis.peterson_dairy",
      "name": "Petersen",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 6.367674917380015,
      "available_capacity": 643.63232508262,
      "gas_composition": {
        "methane": 75.88034694459704,
        "co2": 20.425124797291225,
        "nitrogen": 3.326966901421547,
        "oxygen": 0
      },
      "psig": 70.51345775286356,
      "temperature": 43.10890797403123,
      "flow_velocity": 0.3300205748456437,
      "transit_time_minutes": 26.665004156531488,
      "coordinates": {
        "x": 1400,
        "y": 500
      }
    },
    {
      "id": "com.aemetis.ackerman_dairy",
      "name": "Ackerman",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 74.77713377952576,
      "available_capacity": 575.2228662204742,
      "gas_composition": {
        "methane": 72.48395042843289,
        "co2": 27.140621668497722,
        "nitrogen": 0.36389805199371444,
        "oxygen": 0.009437119452179307
      },
      "psig": 80.99861351648967,
      "temperature": 47.09109091652764,
      "flow_velocity": 3.478207308914913,
      "transit_time_minutes": 5.060077918555874,
      "coordinates": {
        "x": 1900,
        "y": 1200
      }
    },
    {
      "id": "com.aemetis.double_d_dairy",
      "name": "DoubleD",
      "min_flow_rate": 150,
      "max_flow_rate": 650,
      "flow_rate": 135.01228215111627,
      "available_capacity": 514.9877178488837,
      "gas_composition": {
        "methane": 73.60563390519884,
        "co2": 25.65728172938029,
        "nitrogen": 0.7194496984945403,
        "oxygen": 0.01559574798732582
      },
      "psig": 95.24002902348836,
      "temperature": 42.86340008629693,
      "flow_velocity": 5.420929666895524,
      "transit_time_minutes": 3.2466755854589837,
      "coordinates": {
        "x": 2100,
        "y": 1300
      }
    }
  ],
  "junctions": [
    {
      "id": "j1",
      "flow_rate": 108.40162201351589,
      "gas_composition": {
        "methane": 72.28830814149644,
        "co2": 26.227871715757587,
        "nitrogen": 1.3883119262258212,
        "oxygen": 0.08805833586802085
      },
      "flow_velocity": 1.3349372435236662,
      "transit_time_minutes": 44.82607724843145,
      "coordinates": {
        "x": 2000,
        "y": 1700
      }
    },
    {
      "id": "j2",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 11.454275050729992,
      "coordinates": {
        "x": 1850,
        "y": 1500
      }
    },
    {
      "id": "j3",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 314.99256389507474,
      "coordinates": {
        "x": 1700,
        "y": 1300
      }
    },
    {
      "id": "j4",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 257.7211886414248,
      "coordinates": {
        "x": 1250,
        "y": 1300
      }
    },
    {
      "id": "j8",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 71.58921906706244,
      "coordinates": {
        "x": 1000,
        "y": 1200
      }
    },
    {
      "id": "j9",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 148.9055756594899,
      "coordinates": {
        "x": 850,
        "y": 1100
      }
    },
    {
      "id": "j10",
      "flow_rate": 125.24009944200515,
      "gas_composition": {
        "methane": 72.70224437656447,
        "co2": 25.748826095532145,
        "nitrogen": 1.4596664382399271,
        "oxygen": 0.07621893053769675
      },
      "flow_velocity": 1.536544209218927,
      "transit_time_minutes": 172.38683951348636,
      "coordinates": {
        "x": 700,
        "y": 1000
      }
    },
    {
      "id": "j11",
      "flow_rate": 334.21922636529143,
      "gas_composition": {
        "methane": 73.47615479907947,
        "co2": 24.831124746570005,
        "nitrogen": 1.6214257354423693,
        "oxygen": 0.06002648947682006
      },
      "flow_velocity": 4.080263681443926,
      "transit_time_minutes": 22.21425061625534,
      "coordinates": {
        "x": 600,
        "y": 800
      }
    },
    {
      "id": "j14",
      "flow_rate": 366.4400986867483,
      "gas_composition": {
        "methane": 73.4631052806754,
        "co2": 24.785500518473746,
        "nitrogen": 1.6777473483084324,
        "oxygen": 0.06266204375782039
      },
      "flow_velocity": 4.454045959195842,
      "transit_time_minutes": 5.927195238184386,
      "coordinates": {
        "x": 950,
        "y": 600
      }
    },
    {
      "id": "j17",
      "flow_rate": 407.2909138154986,
      "gas_composition": {
        "methane": 73.32319724201743,
        "co2": 24.917098456741844,
        "nitrogen": 1.6735877178931908,
        "oxygen": 0.07543389560984246
      },
      "flow_velocity": 4.880971043220727,
      "transit_time_minutes": 14.423359486588204,
      "coordinates": {
        "x": 1200,
        "y": 450
      }
    },
    {
      "id": "j19",
      "flow_rate": 407.2909138154986,
      "gas_composition": {
        "methane": 73.32319724201743,
        "co2": 24.917098456741844,
        "nitrogen": 1.6735877178931908,
        "oxygen": 0.07543389560984246
      },
      "flow_velocity": 4.880971043220727,
      "transit_time_minutes": 19.832119294058785,
      "coordinates": {
        "x": 1500,
        "y": 350
      }
    },
    {
      "id": "j21",
      "flow_rate": 498.39504061937356,
      "gas_composition": {
        "methane": 73.16959026069436,
        "co2": 24.956921452646625,
        "nitrogen": 1.7730674912746625,
        "oxygen": 0.08542867560551384
      },
      "flow_velocity": 5.937578021733348,
      "transit_time_minutes": 22.231286817089345,
      "coordinates": {
        "x": 1750,
        "y": 450
      }
    },
    {
      "id": "j22",
      "flow_rate": 708.1844565500155,
      "gas_composition": {
        "methane": 73.18032343342946,
        "co2": 25.321018800562175,
        "nitrogen": 1.4234057723438005,
        "oxygen": 0.06409139045634407
      },
      "flow_velocity": 8.359691694183244,
      "transit_time_minutes": 10.526704000487396,
      "coordinates": {
        "x": 1950,
        "y": 650
      }
    }
  ],
  "hub": {
    "id": "hub",
    "flow_rate": 708.1844565500155,
    "gas_composition": {
      "methane": 73.18032343342946,
      "co2": 25.321018800562175,
      "nitrogen": 1.4234057723438005,
      "oxygen": 0.06409139045634407
    },
    "nitrogen_limit": 2.25,
    "coordinates": {
      "x": 2000,
      "y": 150
    }
  },
  "connections": [
    {
      "from": "com.aemetis.wickstrom_dairy",
      "to": "j1",
      "distance_miles": 0.27,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 4.844313227792948,
      "flow_velocity": 4.904720005239004
    },
    {
      "from": "j1",
      "to": "j2",
      "distance_miles": 0.68,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 44.82607724843145,
      "flow_velocity": 1.3349372435236662
    },
    {
      "from": "com.aemetis.hilmar_dairy",
      "to": "j2",
      "distance_miles": 0.45,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 53.460902047486265,
      "flow_velocity": 0.7407282421988611
    },
    {
      "from": "j2",
      "to": "j3",
      "distance_miles": 0.2,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 11.454275050729992,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "j3",
      "to": "j4",
      "distance_miles": 5.5,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 314.99256389507474,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "com.aemetis.borba_dairy",
      "to": "j4",
      "distance_miles": 3.06,
      "pipe_diameter": "4inch",
      "transit_time_minutes": null,
      "flow_velocity": 0
    },
    {
      "from": "com.aemetis.albert_mendis_dairy",
      "to": "j11",
      "distance_miles": 3,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 74.17949433472239,
      "flow_velocity": 3.558935017927525
    },
    {
      "from": "com.aemetis.ac_machado_dairy",
      "to": "j11",
      "distance_miles": 3,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 86.30093606683918,
      "flow_velocity": 3.059062995510671
    },
    {
      "from": "com.aemetis.k_r_blount_dairy",
      "to": "j11",
      "distance_miles": 3,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 96.77655981815316,
      "flow_velocity": 2.727933298063767
    },
    {
      "from": "com.aemetis.alamo_dairy",
      "to": "j14",
      "distance_miles": 5,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 320.39121544080655,
      "flow_velocity": 1.373321048751699
    },
    {
      "from": "com.aemetis.trinkler_dairy",
      "to": "j17",
      "distance_miles": 3.8,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 213.18724923378707,
      "flow_velocity": 1.5685741112653864
    },
    {
      "from": "com.aemetis.ss_dairy",
      "to": "j21",
      "distance_miles": 0.2,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 4.954842581205287,
      "flow_velocity": 3.5520805578688486
    },
    {
      "from": "com.aemetis.peterson_dairy",
      "to": "j21",
      "distance_miles": 0.1,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 26.665004156531488,
      "flow_velocity": 0.3300205748456437
    },
    {
      "from": "com.aemetis.ackerman_dairy",
      "to": "j22",
      "distance_miles": 0.2,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 5.060077918555874,
      "flow_velocity": 3.478207308914913
    },
    {
      "from": "com.aemetis.double_d_dairy",
      "to": "j22",
      "distance_miles": 0.2,
      "pipe_diameter": "4inch",
      "transit_time_minutes": 3.2466755854589837,
      "flow_velocity": 5.420929666895524
    },
    {
      "from": "j4",
      "to": "j8",
      "distance_miles": 4.5,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 257.7211886414248,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "j8",
      "to": "j9",
      "distance_miles": 1.25,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 71.58921906706244,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "j9",
      "to": "j10",
      "distance_miles": 2.6,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 148.9055756594899,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "j10",
      "to": "j11",
      "distance_miles": 3.01,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 172.38683951348636,
      "flow_velocity": 1.536544209218927
    },
    {
      "from": "j11",
      "to": "j14",
      "distance_miles": 1.03,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 22.21425061625534,
      "flow_velocity": 4.080263681443926
    },
    {
      "from": "j14",
      "to": "j17",
      "distance_miles": 0.3,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 5.927195238184386,
      "flow_velocity": 4.454045959195842
    },
    {
      "from": "j17",
      "to": "j19",
      "distance_miles": 0.8,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 14.423359486588204,
      "flow_velocity": 4.880971043220727
    },
    {
      "from": "j19",
      "to": "j21",
      "distance_miles": 1.1,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 19.832119294058785,
      "flow_velocity": 4.880971043220727
    },
    {
      "from": "j21",
      "to": "j22",
      "distance_miles": 1.5,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 22.231286817089345,
      "flow_velocity": 5.937578021733348
    },
    {
      "from": "j22",
      "to": "hub",
      "distance_miles": 1,
      "pipe_diameter": "8inch",
      "transit_time_minutes": 10.526704000487396,
      "flow_velocity": 8.359691694183244
    }
  ]
}