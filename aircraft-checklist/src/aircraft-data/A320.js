const a320checkList = {
    name: 'pre flight flows',
    checkLists: [
      {
         task: "Download charts and NOTAMS",
         completed: false
      },
      {
        task: "Check weather & forecasts",
        completed: false
      },
      {
        task: "Load PAX, cargo & fuel",
        completed: false
      }
    ],
    next: {
        name: 'pre start checklist',
        checkLists: [
            {
                task: "parking brake set",
                completed: false
            },
            {
                task: "chocks removed",
                completed: false
            },
            {
                task: "GPU connected",
                completed: false
            },
            {
                task: "thrust levers idle",
                completed: false
            },
            {
                task: "engine master switches off",
                completed: false
            },
            {
                task: "batteries on",
                completed: false
            },
            {
                task: "generator switches on",
                completed: false
            },
            {
                task: "external power on",
                completed: false
            },
            {
                task: "ADIRS to NAV",
                completed: false
            },
            {
                task: "panel display brightness",
                completed: false
            },
            {
                task: "nav lights on",
                completed: false
            },
            {
                task: "landing gear lever down",
                completed: false
            },
            {
                task: "flaps up",
                completed: false
            },
            {
                task: "spoilers up",
                completed: false
            },
            {
                task: "fuel quantity",
                completed: false
            },
            {
                task: "seatbelt and no smoking signs on",
                completed: false
            },
        ],
        next: {
            name: 'clearance recieved checklist',
            checkLists: [
                {
                    task: "clearance recieved",
                    completed: false
                },
                {
                    task: "transponder set/standby",
                    completed: false
                },
                {
                    task: "beacon lights on",
                    completed: false
                },
                {
                    task: "emergency lights armed",
                    completed: false
                },
                {
                    task: "FMC set",
                    completed: false
                },
                {
                    task: "departure briefing completed",
                    completed: false
                },
                {
                    task: "doors closed",
                    completed: false
                },
            ],
            next: {
                name: 'startup checklist',
                checkLists: [
                    {
                        task: "APU",
                        completed: false
                    },
                    {
                        task: "APU bleed",
                        completed: false
                    },
                    {
                        task: "APU generator",
                        completed: false
                    },
                    {
                        task: "thrust levers idle",
                        completed: false
                    },
                    {
                        task: "fuel pump switches",
                        completed: false
                    },
                    {
                        task: "mode selector IGN/START",
                        completed: false
                    },
                    {
                        task: "engine master 1 or 2",
                        completed: false
                    },
                    {
                        task: "at N2 > 20% fuel flow",
                        completed: false
                    },
                    {
                        task: "generator switches on",
                        completed: false
                    },
                    {
                        task: "repeat for second engine",
                        completed: false
                    },
                    {
                        task: "hydraulic pumps on",
                        completed: false
                    },
                    {
                        task: "APU off",
                        completed: false
                    },
                    {
                        task: "mode selector NORM",
                        completed: false
                    },
                ],
                next: {
                    name: 'before taxi checklist',
                    checkLists: [
                        {
                            task: "probe/window heat",
                            completed: false
                        },
                        {
                            task: "HDG indicator/altimeter",
                            completed: false
                        },
                        {
                            task: "radios",
                            completed: false
                        },
                        {
                            task: "autopilot(set not activated)",
                            completed: false
                        },
                        {
                            task: "F/D",
                            completed: false
                        },
                        {
                            task: "autobrake set MAX",
                            completed: false
                        },
                        {
                            task: "elevator trim",
                            completed: false
                        },
                        {
                            task: "flight controls",
                            completed: false
                        },
                    ],
                    next: {
                        name: 'taxi checklist',
                        checkLists: [
                            {
                                task: "taxi lights on",
                                completed: false
                            },
                            {
                                task: "parking brake released",
                                completed: false
                            },
                            {
                                task: "brakes/gyro/turn coordinator",
                                completed: false
                            },
                            {
                                task: "T/O config",
                                completed: false
                            },
                            {
                                task: "T/O memo",
                                completed: false
                            },
                        ],
                        next: {
                            name: 'before takeoff checklist',
                            checkLists: [
                                {
                                    task: "parking brake set",
                                    completed: false
                                },
                                {
                                    task: "flight instruments",
                                    completed: false
                                },
                                {
                                    task: "engine instruments",
                                    completed: false
                                },
                                {
                                    task: "take-off data",
                                    completed: false
                                },
                                {
                                    task: "nav equipment",
                                    completed: false
                                },
                                {
                                    task: "landing lights on",
                                    completed: false
                                },
                                {
                                    task: "strobe light on",
                                    completed: false
                                },
                                {
                                    task: "pitot heat on",
                                    completed: false
                                },
                                {
                                    task: "de-ice(if required)",
                                    completed: false
                                },
                                {
                                    task: "transponder TA/RA",
                                    completed: false
                                },
                            ],
                            next: {
                                name: 'takeoff checklist',
                                checkLists: [
                                    {
                                        task: "takeoff thrust",
                                        completed: false
                                    },
                                    {
                                        task: "brakes released",
                                        completed: false
                                    },
                                    {
                                        task: "100KTS crosscheck",
                                        completed: false
                                    },
                                    {
                                        task: "V1, VR, V2",
                                        completed: false
                                    },
                                    {
                                        task: "pitch set",
                                        completed: false
                                    },
                                    {
                                        task: "positive rate(gear up)",
                                        completed: false
                                    },
                                    {
                                        task: "flaps(passing f speed)",
                                        completed: false
                                    },
                                    {
                                        task: "spoilers disarmed",
                                        completed: false
                                    },
                                    {
                                        task: "landing lights(as required)",
                                        completed: false
                                    },
                                ],
                                next: {
                                    name: 'climb-out checklist',
                                    checkLists: [
                                        {
                                            task: "thrust levers CLB",
                                            completed: false
                                        },
                                        {
                                            task: "AP1",
                                            completed: false
                                        },
                                        {
                                            task: "taxi lights off",
                                            completed: false
                                        },
                                        {
                                            task: "altimeter set to STD",
                                            completed: false
                                        },
                                        {
                                            task: "speed checked 250KIAS below 10,000ft",
                                            completed: false
                                        },
                                        {
                                            task: "landing lights off (above 10,000ft)",
                                            completed: false
                                        },
                                        {
                                            task: "seatbelt signs off",
                                            completed: false
                                        },
                                    ],
                                    next: {
                                        name: 'cruise checklist',
                                        checkLists: [
                                            {
                                                task: "engine and instruments monitor",
                                                completed: false
                                            },
                                            {
                                                task: "fuel quantity",
                                                completed: false
                                            },
                                            {
                                                task: "radios",
                                                completed: false
                                            },
                                            {
                                                task: "autopilot check and set",
                                                completed: false
                                            },
                                            {
                                                task: "lights(as required)",
                                                completed: false
                                            },
                                            {
                                                task: "ATIS",
                                                completed: false
                                            },
                                            {
                                                task: "Altimeter check",
                                                completed: false
                                            },
                                            {
                                                task: "de-ice(as required)",
                                                completed: false
                                            },
                                            {
                                                task: "TOD TCAS",
                                                completed: false
                                            },
                                            {
                                                task: "altimeter set local(at transition level)",
                                                completed: false
                                            },
                                            {
                                                task: "speed checked 250KIAS below 10,000ft",
                                                completed: false
                                            },
                                            {
                                                task: "landing lights on (below 10,000ft)",
                                                completed: false
                                            },
                                            {
                                                task: "flaps/landing gear checked UP",
                                                completed: false
                                            },
                                        ],
                                        next: {
                                            name: 'approach checklist',
                                            checkLists: [
                                                {
                                                    task: "seatbelt signs on",
                                                    completed: false
                                                },
                                                {
                                                    task: "radios set",
                                                    completed: false
                                                },
                                                {
                                                    task: "speed (establish 210KIAS)",
                                                    completed: false
                                                },
                                                {
                                                    task: "landing lights on",
                                                    completed: false
                                                },
                                                {
                                                    task: "taxi lights on",
                                                    completed: false
                                                },
                                                {
                                                    task: "GND spoilers armed",
                                                    completed: false
                                                },
                                                {
                                                    task: "auto brake set",
                                                    completed: false
                                                },
                                                {
                                                    task: "flaps (set 1)",
                                                    completed: false
                                                },
                                                {
                                                    task: "speed (establish 180KIAS)",
                                                    completed: false
                                                },
                                                {
                                                    task: "flaps (set 2 at 6 DME)",
                                                    completed: false
                                                },
                                                {
                                                    task: "speed (managed)",
                                                    completed: false
                                                },
                                                {
                                                    task: "landing gear down",
                                                    completed: false
                                                },
                                                {
                                                    task: "flaps (set 3 with 3 green)",
                                                    completed: false
                                                },
                                                {
                                                    task: "flaps (set FULL)",
                                                    completed: false
                                                },
                                                {
                                                    task: "speed (establish 145KIAS)",
                                                    completed: false
                                                },
                                                {
                                                    task: "parking brake (verify off)",
                                                    completed: false
                                                },
                                                {
                                                    task: "de-ice (as required)",
                                                    completed: false
                                                },
                                            ],
                                            next: {
                                                name: 'landing checklist',
                                                checkLists: [
                                                    {
                                                        task: "landing gear (checked down)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "autopilot (as required)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "go-around altitude set",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "auto thrust (as required)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "landing memo (no blue)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "landing speed (managed)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "AFTER TOUCHDOWN (thrust reversers)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "spoilers (verify extended)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "brakes (as required)",
                                                        completed: false
                                                    },
                                                    {
                                                        task: "at 60 KIAS (thrust reversers stowed)",
                                                        completed: false
                                                    },
                                                ],
                                                next: {
                                                    name: 'after landing checklist',
                                                    checkLists: [
                                                        {
                                                            task: "spoilers (disarmed)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "flaps (retracted)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "ENG MODE SEL (NORM)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "landing lights (off)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "strobe light (off)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "anti ice (as required)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "APU (start)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "brake temp (checked)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "transponder (off)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "TAXXING TO GATE (APU start/check run)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "APU GEN (on)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "elevator trim (set takeoff)",
                                                            completed: false
                                                        },
                                                        {
                                                            task: "TURNING ONTO STAND (taxi lights off)",
                                                            completed: false
                                                        },
                                                    ],
                                                    next: {
                                                        name: 'parking/shutdown checklist',
                                                        checkLists: [
                                                            {
                                                                task: "parking brake (set)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "thrust levers (idle)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "ground contact (verify)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "ground operators (as required)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "electrical power (established)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "ENG master 1 & 2 (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "parking brakes (as required)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "nav lights (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "exterior lights (as required)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "anti-ice (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "Passenger signs (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "doors (open)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "F/D (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "APU bleed (as required)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "fuel pumps (all off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "beacon lights (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "interior lights (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "ADIRS (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "avionics (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "no smoking signs (off)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "APU (as required)",
                                                                completed: false
                                                            },
                                                            {
                                                                task: "batteries (as required)",
                                                                completed: false
                                                            },
                                                        ]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
    
 }