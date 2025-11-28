export const apiResponse = {
  "network": { "name": "Aemetis Biogas Network", "max_nitrogen_percent": 2.25 },
  "defaults": {
    "composition": { "methane": 60.0, "co2": 35.0, "nitrogen": 3.0, "oxygen": 1.0 },
    "temperature_f": 60.0,
    "pressure_psig": 0.0
  },
  "pipe_diameters": {
    "4inch": { "internal_diameter_inches": 3.137 },
    "8inch": { "internal_diameter_inches": 6.013 }
  },
  "plants": [
    { "id": "com.aemetis.wickstrom_dairy", "name": "Wickstrom", "min_flow_rate": 150.0, "max_flow_rate": 650.0, "gas_composition": { "methane": 59.2, "co2": 38.5, "nitrogen": 1.5, "oxygen": 0.8 }, "psig": 0.0, "temperature": 60.0, "flow_velocity": 0.0 },
    { "id": "com.aemetis.hilmar_dairy", "name": "Hilmar", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.borba_dairy", "name": "Borba", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.albert_mendis_dairy", "name": "Albert Mendes", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.ac_machado_dairy", "name": "AC Machado", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.k_r_blount_dairy", "name": "K&R", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.alamo_dairy", "name": "Alamo", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.trinkler_dairy", "name": "Trinkler", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.ss_dairy", "name": "SS", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.peterson_dairy", "name": "Petersen", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.ackerman_dairy", "name": "Ackerman", "min_flow_rate": 150.0, "max_flow_rate": 650.0 },
    { "id": "com.aemetis.double_d_dairy", "name": "DoubleD", "min_flow_rate": 150.0, "max_flow_rate": 650.0 }
  ],
  "junctions": [
    { "id": "j1", "gas_composition": { "methane": 59.2, "co2": 38.5, "nitrogen": 1.5, "oxygen": 0.8 } },
    { "id": "j2", "gas_composition": { "methane": 60.8, "co2": 36.8, "nitrogen": 1.2, "oxygen": 1.2 } },
    { "id": "j3" },
    { "id": "j4" },
    { "id": "j8" },
    { "id": "j9" },
    { "id": "j10" },
    { "id": "j11" },
    { "id": "j14" },
    { "id": "j17" },
    { "id": "j19" },
    { "id": "j21" },
    { "id": "j22" }
  ],
  "hub": { "id": "hub" },
  "connections": [
    { "from": "com.aemetis.wickstrom_dairy", "to": "j1", "distance_miles": 0.27, "pipe_diameter": "4inch", "transit_time_minutes": 0.2 },
    { "from": "j1", "to": "j2", "distance_miles": 0.68, "pipe_diameter": "8inch" },
    { "from": "com.aemetis.hilmar_dairy", "to": "j2", "distance_miles": 0.45, "pipe_diameter": "4inch" },
    { "from": "j2", "to": "j3", "distance_miles": 0.2, "pipe_diameter": "8inch" },
    { "from": "j3", "to": "j4", "distance_miles": 5.5, "pipe_diameter": "8inch" },
    { "from": "com.aemetis.borba_dairy", "to": "j4", "distance_miles": 3.06, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.albert_mendis_dairy", "to": "j11", "distance_miles": 3.0, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.ac_machado_dairy", "to": "j11", "distance_miles": 3.0, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.k_r_blount_dairy", "to": "j11", "distance_miles": 3.0, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.alamo_dairy", "to": "j14", "distance_miles": 5.0, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.trinkler_dairy", "to": "j17", "distance_miles": 3.8, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.ss_dairy", "to": "j21", "distance_miles": 0.2, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.peterson_dairy", "to": "j21", "distance_miles": 0.1, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.ackerman_dairy", "to": "j22", "distance_miles": 0.2, "pipe_diameter": "4inch" },
    { "from": "com.aemetis.double_d_dairy", "to": "j22", "distance_miles": 0.2, "pipe_diameter": "4inch" },
    { "from": "j4", "to": "j8", "distance_miles": 4.5, "pipe_diameter": "8inch" },
    { "from": "j8", "to": "j9", "distance_miles": 1.25, "pipe_diameter": "8inch" },
    { "from": "j9", "to": "j10", "distance_miles": 2.6, "pipe_diameter": "8inch" },
    { "from": "j10", "to": "j11", "distance_miles": 3.01, "pipe_diameter": "8inch" },
    { "from": "j11", "to": "j14", "distance_miles": 1.03, "pipe_diameter": "8inch" },
    { "from": "j14", "to": "j17", "distance_miles": 0.3, "pipe_diameter": "8inch" },
    { "from": "j17", "to": "j19", "distance_miles": 0.8, "pipe_diameter": "8inch" },
    { "from": "j19", "to": "j21", "distance_miles": 1.1, "pipe_diameter": "8inch" },
    { "from": "j21", "to": "j22", "distance_miles": 1.5, "pipe_diameter": "8inch" },
    { "from": "j22", "to": "hub", "distance_miles": 1.0, "pipe_diameter": "8inch" }
  ]
};
