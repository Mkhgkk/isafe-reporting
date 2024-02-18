const data = [
  {
    reportNumber: 16,
    title: "Water Leakage in Basement",
    createdAt: new Date("2024-02-16"),
    description:
      "Discovered water leakage in the basement, potentially compromising the foundation. Urgently recommend a thorough inspection to identify and address the source of the leakage.",
    status: "rejected",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-16"),
    locationOfEvent: "Basement",
    severity: "serious",
    injuredObject: "Foundation",
    files: [
      { url: "https://someadress.com/files/snacks.png", name: "snacks.png" },
      {
        url: "https://someadress.com/files/photo123.png",
        name: "photo123.png",
      },
    ],
  },
  {
    reportNumber: 15,
    title: "Missing Hard Hats",
    createdAt: new Date("2024-02-15"),
    description:
      "Several workers observed without proper head protection (hard hats) on the construction site. Enforce strict adherence to safety gear requirements to mitigate the risk of head injuries.",
    status: "accepted",
    user: "0x74****44e",
    category: "accident",
    dateOfEvent: new Date("2024-02-15"),
    locationOfEvent: "Construction Site",
    severity: "moderate",
    injuredObject: "Workers' Heads",
  },
  {
    reportNumber: 14,
    title: "Faulty Scaffolding",
    createdAt: new Date("2024-02-14"),
    description:
      "Noticed unstable scaffolding on the exterior of the building. This poses a serious risk to workers and the public. Immediate inspection and repair are necessary to prevent accidents and injuries.",
    status: "pending",
    user: "0x74****44e",
    category: "incident",
    dateOfEvent: new Date("2024-02-14"),
    locationOfEvent: "Exterior of Building",
    severity: "serious",
    injuredObject: "Workers and Public",
    files: [
      { url: "https://someadress.com/files/snacks.png", name: "photo123.png" },
    ],
  },
  {
    reportNumber: 13,
    title: "Blocked Emergency Exit",
    createdAt: new Date("2024-02-13"),
    description:
      "Discovered the emergency exit on the third floor obstructed by construction materials. This is a violation of safety regulations. Urgently request clearing the exit route to ensure quick and safe evacuation in case of an emergency.",
    status: "rejected",
    user: "0x74****44e",
    category: "other",
    dateOfEvent: new Date("2024-02-13"),
    locationOfEvent: "Third Floor",
    severity: "fatal",
    injuredObject: "Emergency Exit",
  },
  {
    reportNumber: 12,
    title: "Inadequate Lighting in Stairwell",
    createdAt: new Date("2024-02-12"),
    description:
      "Observed poor lighting conditions in the stairwell, posing a safety risk for workers and visitors. Suggest installing additional lighting fixtures to improve visibility and prevent accidents.",
    status: "accepted",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-12"),
    locationOfEvent: "Stairwell",
    severity: "minor",
    injuredObject: "Workers and Visitors",
    files: [
      { url: "https://someadress.com/files/snacks.png", name: "photo123.png" },
      {
        url: "https://someadress.com/files/photo123.png",
        name: "photo123.png",
      },
      { url: "https://someadress.com/files/sn2acks.png", name: "photo123.png" },
      {
        url: "https://someadress.com/files/pho3to123.png",
        name: "photo123.png",
      },
    ],
  },

  {
    reportNumber: 11,
    title: "Cracked Support Beam",
    createdAt: new Date("2024-02-11"),
    description:
      "Identified a crack in one of the support beams on the second floor. The structural integrity may be compromised. Recommend immediate structural assessment and reinforcement to ensure the safety of the building.",
    status: "pending",
    user: "0x74****44e",
    category: "structural",
    dateOfEvent: new Date("2024-02-11"),
    locationOfEvent: "Second Floor",
    severity: "serious",
    injuredObject: "Support Beam",
  },
  {
    reportNumber: 10,
    title: "Manager Not Wearing Safety Gear",
    createdAt: new Date("2024-02-10"),
    description:
      "Witnessed a site manager not wearing the required safety gear while overseeing construction activities. This sets a poor example for other workers. Request immediate action to enforce safety protocols for all personnel on-site.",
    status: "pending",
    user: "0x74****44e",
    category: "accident",
    dateOfEvent: new Date("2024-02-10"),
    locationOfEvent: "Construction Site",
    severity: "minor",
    injuredObject: "Site Manager",
  },
  {
    reportNumber: 3,
    title: "Missing Safety Signage",
    createdAt: new Date("2024-02-03"),
    description:
      "Noticed the absence of proper safety signage near the construction zone. Lack of clear warnings may lead to accidents. Suggest placing prominent signs indicating potential hazards and safety protocols.",
    status: "accepted",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-03"),
    locationOfEvent: "Construction Zone",
    severity: "minor",
    injuredObject: "None",
  },
  {
    reportNumber: 2,
    title: "Unsafe Electrical Wiring",
    createdAt: new Date("2024-02-02"),
    description:
      "Observed unsafe electrical wiring near the construction site's temporary office. Exposed wires are a serious safety concern. Urgently recommend an electrician to inspect and rectify the issue to avoid electrical hazards.",
    status: "pending",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-02"),
    locationOfEvent: "Temporary Office",
    severity: "serious",
    injuredObject: "Electrical Wiring",
  },
  {
    reportNumber: 1,
    title: "Broken Tile in Lobby",
    createdAt: new Date("2024-02-01"),
    description:
      "While conducting a routine inspection, discovered a broken tile in the lobby area near the entrance. The broken tile poses a potential safety hazard for foot traffic. Recommend immediate replacement to prevent accidents.",
    status: "pending",
    user: "0x74****44e",
    category: "accident",
    dateOfEvent: new Date("2024-02-01"),
    locationOfEvent: "Lobby",
    severity: "minor",
    injuredObject: "Foot Traffic",
  },
  {
    reportNumber: 9,
    title: "Chemical Spill in Storage Room",
    createdAt: new Date("2024-02-09"),
    description:
      "Discovered a chemical spill in the storage room. The spilled substances are hazardous and require immediate containment and cleanup. All personnel should evacuate the area until it is safe.",
    status: "pending",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-09"),
    locationOfEvent: "Storage Room",
    severity: "serious",
    injuredObject: "None",
  },
  {
    reportNumber: 8,
    title: "Gas Leak in Utility Room",
    createdAt: new Date("2024-02-08"),
    description:
      "Detected a gas leak in the utility room. Gas leaks pose a significant risk of fire or explosion. Evacuate the area immediately and contact emergency services for professional assistance.",
    status: "pending",
    user: "0x74****44e",
    category: "environmentHazards",
    dateOfEvent: new Date("2024-02-08"),
    locationOfEvent: "Utility Room",
    severity: "serious",
    injuredObject: "None",
  },
  {
    reportNumber: 7,
    title: "Fall from Height Incident",
    createdAt: new Date("2024-02-07"),
    description:
      "Report of a worker falling from a height at the construction site. Immediate medical attention is required. Secure the area to prevent further accidents and investigate the cause of the fall.",
    status: "pending",
    user: "0x74****44e",
    category: "accident",
    dateOfEvent: new Date("2024-02-07"),
    locationOfEvent: "Construction Site",
    severity: "serious",
    injuredObject: "Worker",
  },
  {
    reportNumber: 6,
    title: "Collapsed Scaffolding",
    createdAt: new Date("2024-02-06"),
    description:
      "Received reports of collapsed scaffolding on the west side of the building. This poses an immediate danger to workers and bystanders. Rescue operations and structural assessment are required.",
    status: "accepted",
    user: "0x74****44e",
    category: "accident",
    dateOfEvent: new Date("2024-02-06"),
    locationOfEvent: "West Side of Building",
    severity: "fatal",
    injuredObject: "Workers and Bystanders",
  },
  {
    reportNumber: 5,
    title: "Excessive Noise Complaint",
    createdAt: new Date("2024-02-05"),
    description:
      "Residents in the vicinity have reported excessive noise levels from construction activities during non-permitted hours. Enforce noise control measures to maintain a peaceful environment for the community.",
    status: "accepted",
    user: "0x74****44e",
    category: "other",
    dateOfEvent: new Date("2024-02-05"),
    locationOfEvent: "Community Area",
    severity: "minor",
    injuredObject: "None",
  },
];

export default data;
