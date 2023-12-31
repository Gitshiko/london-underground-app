export const data = [ 
{
	"stations": [
				{
					"name": "Acton Town",
					"contactDetails": {
						"address": "Acton Town Station, London Underground Ltd., Gunnersbury Lane, London, W3 8HN",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": [
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes",
							2,
							2,
							4,
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Gunnersbury Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "14, 14 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "14,14 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Acton Town Station",
						"description": "Acton Town Station, London Underground Ltd., Gunnersbury Lane, London, W3 8HN",
						"Point": {
							"coordinates": "-.280251203536110600,51.502749773000570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Aldgate",
					"contactDetails": {
						"address": "Aldgate Station, London Underground Ltd., Aldgate High St, London, EC3N 1AH",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"no",
							0,
							0,
							3,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Aldgate High Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 10, 14 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Northern",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "07:00",
										"to": "10:00"
									},
									{
										"from": "15:30",
										"to": "19:00"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Aldgate Station",
						"description": "Aldgate Station, London Underground Ltd., Aldgate High St, London, EC3N 1AH",
						"Point": {
							"coordinates": "-.075614184477749600,51.514271823083390000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Aldgate East",
					"contactDetails": {
						"address": "Aldgate East Station, London Underground Ltd., Whitechapel High St, London, E1 7PT",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							0,
							9,
							"no",
							1,
							2,
							8,
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Whitechapel High Street (North Side) and Commercial Street (West Side)",
								"entranceToBookingHall": "13, 13 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Leman Street (West) (Colchester Street)",
								"entranceToBookingHall": "16, 6, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Whitechapel High Street (South Side) and Leman Street (East Side)",
								"entranceToBookingHall": "12, 12 stairs down, subway, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 1 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Leman Street (East) (Colchester Street)",
								"entranceToBookingHall": "Ramp down, subway, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Braham Street (South Side)",
								"entranceToBookingHall": "15 stairs down, subway, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Braham Street (North Side) and Drum Street",
								"entranceToBookingHall": "Ramp down, subway, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Whitechapel High Street (South Side) and Braham Street (North Side)",
								"entranceToBookingHall": "Ramp down, or 13, 12 stairs down, then subway, 6 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "11, 11 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Commercial Road (North Side) and Manningtree Street",
								"entranceToBookingHall": "Ramp down, or 12, 13 stairs down, then subway, 6 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "11, 11 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Whitechapel High Street (South Side)",
								"entranceToBookingHall": "Ramp down or 11, 11 stairs down then 6 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "11, 11 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Whitechapel High Street (North Side)",
								"entranceToBookingHall": "15, 5, 5 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "11, 11 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Gallery (East)",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "08:00",
											"to": "19:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "13:30"
										}
									}
								]
							},
							{
								"entrance": "Main (West)",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:30",
											"to": "20:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:30",
											"to": "20:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Aldgate East Station",
						"description": "Aldgate East Station, London Underground Ltd., Whitechapel High St, London, E1 7PT",
						"Point": {
							"coordinates": "-.072287119975365420,51.515233413796480000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Alperton",
					"contactDetails": {
						"address": "Alperton Station, London Underground Ltd., Ealing Rd, Wembley, Middlesex, HA0 4LL",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							2,
							"no",
							"2 snack, 1 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Ealing Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "3 x 14 stairs up"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "14:00"
										},
										{
											"from": "15:30",
											"to": "20:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "18:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Alperton Station",
						"description": "Alperton Station, London Underground Ltd., Ealing Rd, Wembley, Middlesex, HA0 4LL",
						"Point": {
							"coordinates": "-.299486538678611470,51.540694766293470000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Amersham",
					"contactDetails": {
						"address": "Amersham Station, Stn Approach, Amersham, Bucks HP6 5AZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6d"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes",
							1,
							0,
							3,
							"yes",
							1,
							"2 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Chiltern Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Level (except certain trains)"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "14, 9 stairs up, footbridge, 9, 14 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Amersham Station",
						"description": "Amersham Station, Stn Approach, Amersham, Bucks HP6 5AZ",
						"Point": {
							"coordinates": "-.607478839102469000,51.674149710629730000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Angel",
					"contactDetails": {
						"address": "Angel Station, London Underground Ltd., City Rd, London, EC1V 1NE",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							6,
							10,
							"no",
							1,
							1,
							"3 in ticket halls, 2 on platforms",
							"no",
							"6 snack, 0 drink",
							"5 on platforms, 1 in ticket halls, 4 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Upper Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator down, escalator down, subway"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Angel Station",
						"description": "Angel Station, London Underground Ltd., City Rd, London, EC1V 1NE",
						"Point": {
							"coordinates": "-.105789913665305300,51.532498868904300000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Archway",
					"contactDetails": {
						"address": "Archway Station, London Underground Ltd., Junction Rd, London, N19 5RQ",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							7,
							"no",
							1,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Junction Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down, 10, 10 stairs down (or 17, 3 stairs down, 5, 4 x17 spiral stairs down, 20 stairs down)"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Highgate Hill",
								"entranceToBookingHall": "Ramp down (or 12, 14 stairs) down or 6 stairs down, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down, 10, 10 stairs down (or 17, 3 stairs down, 5, 4 x17 spiral stairs down, 20 stairs down)"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Archway Station",
						"description": "Archway Station, London Underground Ltd., Junction Rd, London, N19 5RQ",
						"Point": {
							"coordinates": "-.135113518210335370,51.565426754533750000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Arnos Grove",
					"contactDetails": {
						"address": "Arnos Grove Station, London Underground Ltd., Bowes Rd, London, N11 1AN",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							2,
							0,
							6,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bowes Road",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "8, 8, 7, 14 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "8, 8, 7, 14 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Arnos Grove Station",
						"description": "Arnos Grove Station, London Underground Ltd., Bowes Rd, London, N11 1AN",
						"Point": {
							"coordinates": "-.133516309581780070,51.616340261056756000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Arsenal",
					"contactDetails": {
						"address": "Arsenal Station, London Underground Ltd., Highbury Hill, London, N5 1LP",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Gillespie Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "8 stairs down, long steep subway down, 19 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "12:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:15",
										"to": "18:45"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Arsenal Station",
						"description": "Arsenal Station, London Underground Ltd., Highbury Hill, London, N5 1LP",
						"Point": {
							"coordinates": "-.105761988175557870,51.558498768776680000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Baker Street",
					"contactDetails": {
						"address": "Baker Street Station Marylebone Rd, London, NW1",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Circle",
							"Hammersmith & City",
							"Jubilee",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							6,
							21,
							"yes",
							2,
							2,
							37,
							"no",
							26,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Marylebone Road (North Side) and Baker Street",
								"entranceToBookingHall": "Level to Bakerloo Booking Hall or 18 or 16 stairs down to Metropolitan Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo Booking Hall",
										"pathDescription": "Escalator down, subway, escalator down"
									},
									{
										"pointName": "Metropolitan Booking Hall",
										"pathDescription": "9, 17 stairs down to platforms 1 & 2 9, 18 stairs down to platforms 3 & 4"
									},
									{
										"pointName": "Circle, Hammersmith & City",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "8, 21 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "8 stairs down, subway, 10, 10 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							},
							{
								"name": "Marylebone Road (South Side) - This Entrance is for Ticket Holders Only",
								"entranceToBookingHall": "14, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway, 21 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "10, 10 stairs down"
											}
										]
									},
									{
										"pointName": "All other Lines",
										"pathDescription": "Subway, 8 stairs up, then as Metropolitan Booking Hall"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Bakerloo",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "07:00",
											"to": "22:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "22:00"
										}
									},
									{
										"timeInterval": {
											"from": "08:30",
											"to": "21:30"
										}
									}
								]
							},
							{
								"entrance": "Metropolitain",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "10:00",
											"to": "19:30"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Baker Street Station",
						"description": "Baker Street Station Marylebone Rd, London, NW1",
						"Point": {
							"coordinates": "-.156900356057780880,51.523061248142790000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Balham",
					"contactDetails": {
						"address": "Balham Underground Station, London Underground Ltd., Balham High Rd, London, SW12 9BW",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							6,
							"no",
							1,
							0,
							5,
							"no",
							"2 snack, 0 drink",
							"5 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Balham High Road (East) & Balham Station Road",
								"entranceToBookingHall": "21, 10 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Balham High Road (West)",
								"entranceToBookingHall": "5, 14, 11 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Chestnut Grove",
								"entranceToBookingHall": "7, 14, 11 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Balham Station",
						"description": "Balham Underground Station, London Underground Ltd., Balham High Rd, London, SW12 9BW",
						"Point": {
							"coordinates": "-.153207552666472820,51.443328979635250000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bank",
					"contactDetails": {
						"address": "Bank/Monument Complex, London Underground Ltd., Princes St, London, EC3V 3LA",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Circle",
							"District",
							"Northern",
							"Waterloo & City"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							5,
							15,
							29,
							"no",
							2,
							3,
							14,
							"no",
							10,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bank Central Booking Hall Walbrook & Queen Victoria Street (South)",
								"entranceToBookingHall": "18 stairs down, subway (ramp down), ramp up, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Poultry (South) & Queen Victoria Street (North)",
								"entranceToBookingHall": "20 stairs down, subway (ramp down), ramp up, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Poultry (North)",
								"entranceToBookingHall": "15, 4 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Princes Street (West) & Mansion House Street",
								"entranceToBookingHall": "16, 4 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Princes Street (East) & Threadneedle Street (North)",
								"entranceToBookingHall": "9, 11 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Threadneedle Street (South)",
								"entranceToBookingHall": "19 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cornhill (North)",
								"entranceToBookingHall": "19 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cornhill (South) & Lombard Street (North)",
								"entranceToBookingHall": "16, 6 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Mansion House Place",
								"entranceToBookingHall": "20 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Bank Northern Booking Hall Lombard Street",
								"entranceToBookingHall": "9, 16 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Subway to Central Booking Hall, escalator down, or lift (or 8 x 14, 6, 10 stairs) down, subway, 1, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "King William Street",
								"entranceToBookingHall": "Lift (or 9, 16 stairs) down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Subway to Central Booking Hall, escalator down, or lift (or 8 x 14, 6, 10 stairs) down, subway, 1, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Subway, lift, subway, lift, subway, or 8 x 14, 6, 10 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Lift (or 8 x 14, 6, 10 stairs) down, 21 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Lift, long subway, or subway to Central Booking Hall then as that entrance (see above)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then escalator (or 6 x 14 stairs ) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Monument Circle / District Booking Hall King William Street (South)",
								"entranceToBookingHall": "16 stairs down or 16, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Fish Street Hill",
								"entranceToBookingHall": "1 or 2 steps up, 6 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Great Tower Street",
								"entranceToBookingHall": "16 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cannon Street",
								"entranceToBookingHall": "19, 5 stairs down, 5 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Monument Circle / District Booking Hall",
								"entranceToBookingHall": "19, 5 stairs down, 5 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Central",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "19:00"
										}
									},
									{
										"timeInterval": {
											"from": "10:00",
											"to": "19:00"
										}
									}
								]
							},
							{
								"entrance": "Monument",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "22:00"
										}
									},
									{
										"timeInterval": {
											"from": "10:00",
											"to": "17:30"
										}
									},
									{
										"timeInterval": {
											"from": "11:00",
											"to": "18:00"
										}
									}
								]
							},
							{
								"entrance": "Northern"
							}
						]
					},
					"Placemark": {
						"name": "Bank Station",
						"description": "Bank/Monument Complex, London Underground Ltd., Princes St, London, EC3V 3LA",
						"Point": {
							"coordinates": "-.088915809045260000,51.513302371519344000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Barbican",
					"contactDetails": {
						"address": "Barbican Station, London Underground Ltd., Aldersgate St, London, EC1A 4JA",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							8,
							"no",
							1,
							0,
							4,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Aldersgate Street",
							"entranceToBookingHall": "11, 12 stairs down",
							"bookingHallToPlatform": {
								"pointName": "Metropolitan, Circle, Hammersmith & City",
								"pathDescription": "",
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "15, 14 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "14, 14 stairs down Thameslink"
									},
									{
										"heading": "EASTBOUND",
										"pathDescription": "14, 14 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "14, 13 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "16:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Barbican Station",
						"description": "Barbican Station, London Underground Ltd., Aldersgate St, London, EC1A 4JA",
						"Point": {
							"coordinates": "-.097711123216248310,51.520145725324900000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Barking",
					"contactDetails": {
						"address": "Barking Station BR Station Parade, Longbridge Rd, Barking, Essex, IG11 8TU",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							7,
							"no",
							2,
							0,
							"0 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Parade (Longbridge Road)",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "10, 20 stairs down (or lift on request)"
							},
							"platformToTrain": [
								{
									"trainName": "District Eastbound",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "District Westbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Barking Station",
						"description": "Barking Station BR Station Parade, Longbridge Rd, Barking, Essex, IG11 8TU",
						"Point": {
							"coordinates": ".080863182849410430,51.539451208515715000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Barkingside",
					"contactDetails": {
						"address": "Barkingside Station, London Underground Ltd., Stn Rd, Barkingside, Milford, Essex, IG6 1NB",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach (off Station Road)",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Level"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "17, 6 stairs up, footbridge, 6, 17 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:00",
									"to": "09:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "Barkingside Station",
						"description": "Barkingside Station, London Underground Ltd., Stn Rd, Barkingside, Milford, Essex, IG6 1NB",
						"Point": {
							"coordinates": ".088511013821779280,51.585785960390545000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Barons Court",
					"contactDetails": {
						"address": "Barons Court Station, London Underground Ltd., Pallister Rd, London, W14",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"yes - male & female coin op",
							0,
							0,
							"0 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"canopies over platform, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Gliddon Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "13, 13 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "13, 14 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Barons Court Station",
						"description": "Barons Court Station, London Underground Ltd., Pallister Rd, London, W14",
						"Point": {
							"coordinates": "-.213606857361082370,51.490159942708935000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bayswater",
					"contactDetails": {
						"address": "Bayswater Station, London Underground Ltd., Queensway, London, W2 4QH",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"no",
							1,
							0,
							3,
							"no",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Queensway",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "5, 25 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bayswater Station",
						"description": "Bayswater Station, London Underground Ltd., Queensway, London, W2 4QH",
						"Point": {
							"coordinates": "-.188038262221618460,51.512233058741060000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Becontree",
					"contactDetails": {
						"address": "Becontree Station, London Underground Ltd., Gale St, Dagenham, Essex, RM9 4TP",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes M&F (open between 0500-1500)",
							0,
							0,
							1,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Gale Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "14:15"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Becontree Station",
						"description": "Becontree Station, London Underground Ltd., Gale St, Dagenham, Essex, RM9 4TP",
						"Point": {
							"coordinates": ".127400321155280580,51.540288535204700000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Belsize Park",
					"contactDetails": {
						"address": "Belsize Park Station, London Underground Ltd., Haverstock Hill, London, NW3 2AL",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							3,
							0,
							6,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Haverstock Hill (Entrance)",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift, 20 stairs down (or 19 stairs down, subway, 9 stairs down, 8, 9 x17 spiral stairs down, 20 stairs down)"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Haverstock Hill (Exit)",
								"entranceToBookingHall": "4 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift, 20 stairs down (or 19 stairs down, subway, 9 stairs down, 8, 9 x17 spiral stairs down, 20 stairs down)"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Belsize Park Station",
						"description": "Belsize Park Station, London Underground Ltd., Haverstock Hill, London, NW3 2AL",
						"Point": {
							"coordinates": "-.164232306333818050,51.550426627718240000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bermondsey",
					"contactDetails": {
						"address": "Bermondsey Station, London Underground Ltd., 142 - 154 Jamaica Rd, London, SE16 4RX",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							1,
							3,
							8,
							"no",
							1,
							2,
							4,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Jamaica Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 12 stairs, escalator) down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bermondsey Station",
						"description": "Bermondsey Station, London Underground Ltd., 142 - 154 Jamaica Rd, London, SE16 4RX",
						"Point": {
							"coordinates": "-.063651350918079250,51.497949119581570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bethnal Green",
					"contactDetails": {
						"address": "Bethnal Green Underground Station, London Underground Ltd., Cambridge Heath Rd, London, E2 0ET",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							6,
							"no",
							1,
							0,
							"4 in ticket halls, 2 on platforms",
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Roman Road",
								"entranceToBookingHall": "19, 7 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Cambridge Heath Road (East side)",
								"entranceToBookingHall": "10, 11 stairs down, subway, 5 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Cambridge Heath Road (West side)",
								"entranceToBookingHall": "18, 8 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bethnal Green Road",
								"entranceToBookingHall": "20, 8 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:05",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bethnal Green Station",
						"description": "Bethnal Green Underground Station, London Underground Ltd., Cambridge Heath Rd, London, E2 0ET",
						"Point": {
							"coordinates": "-.055431117145884300,51.527195236069566000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Blackfriars",
					"contactDetails": {
						"address": "Blackfriars Underground Station, London Underground Ltd., 179 Queen Victoria St, London, EC4V 4DD",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							9,
							"no",
							1,
							0,
							9,
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "National Rail Station",
								"entranceToBookingHall": "Escalator (or 3 x14 stairs) down, 9 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "New Bridge Street / Queen Victoria Street",
								"entranceToBookingHall": "18, 6 stairs down, subway, 6 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Victoria Street",
								"entranceToBookingHall": "16 stairs down, subway",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Blackfriars Bridge (East Side)",
								"entranceToBookingHall": "10, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Riverside Walk",
								"entranceToBookingHall": "18 stairs up, subway, very long subway, ramp down, 6 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs dow"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Blackfriars Bridge (West Side)",
								"entranceToBookingHall": "21 stairs down, ramped subway down, long subway, 6 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Victoria Embankment (North side)",
								"entranceToBookingHall": "17, 3 stairs down, subway, 6 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "New Bridge Street (West side)",
								"entranceToBookingHall": "16, 3 stairs down, subway, 6 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "10, 16 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 9 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Blackfriars Station",
						"description": "Blackfriars Underground Station, London Underground Ltd., 179 Queen Victoria St, London, EC4V 4DD",
						"Point": {
							"coordinates": "-.103606731219862620,51.511490522247490000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Blackhorse Road",
					"contactDetails": {
						"address": "Blackhorse Road Underground Station, London Underground Ltd., Blackhorse Rd, London, E17 6ND",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Blackhorse Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 4 x 17, 15, 3 stairs) down Silverlink Ramp up, 13, 12 stairs down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Forest Road / Blackhorse Road",
								"entranceToBookingHall": "7 stairs up",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 4 x 17, 15, 3 stairs) down Silverlink Ramp up, 13, 12 stairs down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Forest Road / Car Park",
								"entranceToBookingHall": "2, 9, 9 stairs up",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 4 x 17, 15, 3 stairs) down Silverlink Ramp up, 13, 12 stairs down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Blackhorse Road Station",
						"description": "Blackhorse Road Underground Station, London Underground Ltd., Blackhorse Rd, London, E17 6ND",
						"Point": {
							"coordinates": "-.040996340920370744,51.586951195438930000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bond Street",
					"contactDetails": {
						"address": "Bond Street Station, London Underground Ltd., Oxford St, London, W1R 1FE",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Jubilee"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							8,
							12,
							"no",
							2,
							2,
							27,
							"no",
							20,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Stratford Place / Oxford Street (North side)",
								"entranceToBookingHall": "19 stairs down, subway, 9 stairs down, subway, ramp up",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street (South Side)",
								"entranceToBookingHall": "5, 20, 5 stairs down, subway, ramp up",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "West One Shopping Centre",
								"entranceToBookingHall": "Escalator down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Gilbert Street",
								"entranceToBookingHall": "Through Arcade, escalator down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street",
								"entranceToBookingHall": "Through Arcade, escalator down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Davies Street",
								"entranceToBookingHall": "7 stairs up, through Arcade, escalator down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 21 stairs down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Escalator down, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bond Street Station",
						"description": "Bond Street Station, London Underground Ltd., Oxford St, London, W1R 1FE",
						"Point": {
							"coordinates": "-.149332354586202300,51.513804535388070000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Borough",
					"contactDetails": {
						"address": "Borough Station, London Underground Ltd., Borough High St, London, SE1 1JX",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							0,
							0,
							1,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Borough High Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift*"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* 10, 8 stairs down (*or 21, 6 stairs down, 3 x 25 spiral stairs down)"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Borough Station",
						"description": "Borough Station, London Underground Ltd., Borough High St, London, SE1 1JX",
						"Point": {
							"coordinates": "-.093702664758373440,51.501193998928510000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Boston Manor",
					"contactDetails": {
						"address": "Boston Manor Station, London Underground Ltd., Boston Manor Rd, Brentford, Middx, TW8 9LQ",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Boston Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "6, 12, 12 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "3, 13, 14 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:60",
											"to": "11:00"
										},
										{
											"from": "17:00",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:030",
										"to": "16:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Boston Manor Station",
						"description": "Boston Manor Station, London Underground Ltd., Boston Manor Rd, Brentford, Middx, TW8 9LQ",
						"Point": {
							"coordinates": "-.324763573796374050,51.495696382188164000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bounds Green",
					"contactDetails": {
						"address": "Bounds Green Station, London Underground Ltd., Bounds Green Rd, London, N11 2EU",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							1,
							0,
							"2 in ticket halls, 1 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bounds Green Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 15, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Brownlow Road",
								"entranceToBookingHall": "2 or 3 steps up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 15, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bounds Green Station",
						"description": "Bounds Green Station, London Underground Ltd., Bounds Green Rd, London, N11 2EU",
						"Point": {
							"coordinates": "-.124218963208536690,51.607090556952755000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Bow Road",
					"contactDetails": {
						"address": "Bow Road Station, London Underground Ltd., Bow Road, London, E3 4DH",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							4,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bow Road",
							"entranceToBookingHall": "2 steps up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "11, 19 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "16, 16 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bow Road Station",
						"description": "Bow Road Station, London Underground Ltd., Bow Road, London, E3 4DH",
						"Point": {
							"coordinates": "-.024823746874528683,51.526800254826064000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Brent Cross",
					"contactDetails": {
						"address": "Brent Cross Station, London Underground Ltd., Highfield Avenue, London, NW11 9UA",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Highfield Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "6, 7, 18 stairs up"
								},
								"platformToTrain": {
									"trainName": "Northern Northbound",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Heathfield Gardens",
								"entranceToBookingHall": "Footpath, 3 steps down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "6, 7, 18 stairs up"
								},
								"platformToTrain": {
									"trainName": "Northern Northbound",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:45",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "14:15"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "15:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Brent Cross Station",
						"description": "Brent Cross Station, London Underground Ltd., Highfield Avenue, London, NW11 9UA",
						"Point": {
							"coordinates": "-.213455833755365300,51.576800471443870000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Brixton",
					"contactDetails": {
						"address": "Brixton Underground Station, London Underground Ltd., Brixton Rd, London, SW9 8HE",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							9,
							"no",
							0,
							0,
							2,
							"no",
							"4 snack, 0 drink",
							"6 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Brixton Road",
							"entranceToBookingHall": "16, 13 stairs down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 3, 3 x 17, 16, 3 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Victoria",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:15"
									}
								},
								{
									"timeInterval": {
										"from": "06:40",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Brixton Station",
						"description": "Brixton Underground Station, London Underground Ltd., Brixton Rd, London, SW9 8HE",
						"Point": {
							"coordinates": "-.114635581578615600,51.462581333631725000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Buckhurst Hill",
					"contactDetails": {
						"address": "Buckhurst Hill Station, London Underground Ltd., Victoria Rd, Buckhurst Hill, Essex, IG9 5ET",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							1,
							"yes",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Victoria Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "12, 10, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "12:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "16:30"
									}
								},
								{
									"timeInterval": [
										{
											"from": "09:30",
											"to": "12:00"
										},
										{
											"from": "15:00",
											"to": "16:30"
										}
									]
								}
							]
						}
					},
					"Placemark": {
						"name": "Buckhurst Hill Station",
						"description": "Buckhurst Hill Station, London Underground Ltd., Victoria Rd, Buckhurst Hill, Essex, IG9 5ET",
						"Point": {
							"coordinates": ".046743856240495990,51.626517330409435000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Burnt Oak",
					"contactDetails": {
						"address": "Burnt Oak Station, London Underground Ltd., Watling Avenue, Edgware, Middx, HA8 0LA",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							3,
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Watling Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "5, 17 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:15",
											"to": "14:00"
										},
										{
											"from": "16:00",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Burnt Oak Station",
						"description": "Burnt Oak Station, London Underground Ltd., Watling Avenue, Edgware, Middx, HA8 0LA",
						"Point": {
							"coordinates": "-.264198758145630100,51.602681099702550000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Caledonian Road",
					"contactDetails": {
						"address": "Caledonian Road Underground Station, London Underground Ltd., Caledonian Rd, London, N7 9BA",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"4 snack, 0 drink",
							"4 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Caledonian Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 9, 10 stairs down, 13, 6 x 17 spiral stairs) down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Caledonian Road Station",
						"description": "Caledonian Road Underground Station, London Underground Ltd., Caledonian Rd, London, N7 9BA",
						"Point": {
							"coordinates": "-.118312333133271940,51.548421318403776000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Camden Town",
					"contactDetails": {
						"address": "Camden Town Station, London Underground Ltd., Camden High St, London, NW1 8NH",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							6,
							"no",
							0,
							0,
							"0 in ticket halls, 4 on platforms",
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Kentish Town Road",
								"entranceToBookingHall": "5 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Escalator down (or 21 stairs down, 14, 10, 3 x 17 spiral stairs down, 11 stairs up)"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Escalator down, 11, 11 stairs down (or 21 stairs down, 14, 10, 3 x 17 spiral stairs down, subway, 11 stairs down)"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Camden High Street",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Escalator down (or 21 stairs down, 14, 10, 3 x 17 spiral stairs down, 11 stairs up)"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Escalator down, 11, 11 stairs down (or 21 stairs down, 14, 10, 3 x 17 spiral stairs down, subway, 11 stairs down)"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Camden Town Station",
						"description": "Camden Town Station, London Underground Ltd., Camden High St, London, NW1 8NH",
						"Point": {
							"coordinates": "-.142726148730286300,51.539403522631090000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Canada Water",
					"contactDetails": {
						"address": "Canada Water Station, London Underground Ltd., Deal Porter Way, Surrey Quays, London, SE16",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"East London",
							"Jubilee"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							4,
							8,
							13,
							"yes",
							1,
							3,
							14,
							"no",
							8,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bus Station",
								"entranceToBookingHall": "Lift (or 12, 11, 12 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "East London",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift (or escalator) down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift down"
											}
										]
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift (or 2 x escalators) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "East London",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Surrey Quays Road",
								"entranceToBookingHall": "1 step up, 3 x12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "East London",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift (or escalator) down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift down"
											}
										]
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift (or 2 x escalators) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "East London",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Canada Water Station",
						"description": "Canada Water Station, London Underground Ltd., Deal Porter Way, Surrey Quays, London, SE16",
						"Point": {
							"coordinates": "-.049705986794378270,51.497888681995114000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Canary Wharf",
					"contactDetails": {
						"address": "Canary Wharf Station, London Underground Ltd., Heron Quays Road, Canary Wharf, London, E14 4HJ",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							3,
							20,
							37,
							"yes",
							2,
							3,
							12,
							"no",
							5,
							"1 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "North Colonnade (Docklands)",
								"entranceToBookingHall": "Ramp up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator or 16, 16 stairs) up"
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "South Colonnade (Docklands)",
								"entranceToBookingHall": "6, 6 stairs (or ramp) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator or 16, 16 stairs) up"
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Heron Quays Road East Canopy (Jubilee Line)",
								"entranceToBookingHall": "Lift (or escalator) down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Heron Quays Road West Canopy (Jubilee Line)",
								"entranceToBookingHall": "Lift (or escalator) down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "West",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:30",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:30",
											"to": "23:30"
										}
									}
								]
							},
							{
								"entrance": "East",
								"timeIntervals": {
									"timeInterval": [
										{
											"from": "07:30",
											"to": "09:30"
										},
										{
											"from": "17:00",
											"to": "19:30"
										}
									]
								}
							}
						]
					},
					"Placemark": {
						"name": "Canary Wharf Station",
						"description": "Canary Wharf Station, London Underground Ltd., Heron Quays Road, Canary Wharf, London, E14 4HJ",
						"Point": {
							"coordinates": "-.019431816253263262,51.503550485647594000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Canning Town",
					"contactDetails": {
						"address": "Canning Town Station, London Underground Ltd., Silvertown Way, Canning Town, London, E16 1DQ",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							3,
							10,
							10,
							"no",
							1,
							3,
							9,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bus Station",
							"entranceToBookingHall": "Ramp up, subway",
							"bookingHallToPlatform": [
								{
									"pointName": "Docklands",
									"pathDescription": "Lift (or 2 x escalators) up"
								},
								{
									"pointName": "Jubilee",
									"pathDescription": "Lift (or escalator ) up"
								},
								{
									"pointName": "Silverlink",
									"pathDescription": "13, 13 stairs down"
								}
							],
							"platformToTrain": [
								{
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								},
								{
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Canning Town Station",
						"description": "Canning Town Station, London Underground Ltd., Silvertown Way, Canning Town, London, E16 1DQ",
						"Point": {
							"coordinates": ".008171036532588041,51.513837129289570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Cannon Street",
					"contactDetails": {
						"address": "Cannon Street Underground Station, London Underground Ltd., Cannon St, London, EC4N 6AP",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							8,
							"no",
							1,
							1,
							"2 in ticket halls, 2 on platforms",
							"no",
							6,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Cannon Street",
								"entranceToBookingHall": "1 step up, 11 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "4 stairs down, ramp down, 10, 10 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "12, 12 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle / District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Dowgate Hill",
								"entranceToBookingHall": "2 steps up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "4 stairs down, ramp down, 10, 10 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "12, 12 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle / District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Connex South Eastern Station",
								"entranceToBookingHall": "16, 17 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "4 stairs down, ramp down, 10, 10 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "12, 12 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle / District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "07:30",
										"to": "10:00"
									},
									{
										"from": "16:00",
										"to": "20:00"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Cannon Street Station",
						"description": "Cannon Street Underground Station, London Underground Ltd., Cannon St, London, EC4N 6AP",
						"Point": {
							"coordinates": "-.090694850680980680,51.511433722337300000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Canons Park",
					"contactDetails": {
						"address": "Canons Park Station, London Underground Ltd., Whitchurch Lane, Edgware, Middx, HA8 6RN",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							0,
							0,
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Whitchurch Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "17, 17, 9 stairs up"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:00",
									"to": "10:30"
								}
							}
						}
					},
					"Placemark": {
						"name": "Canons Park Station",
						"description": "Canons Park Station, London Underground Ltd., Whitchurch Lane, Edgware, Middx, HA8 6RN",
						"Point": {
							"coordinates": "-.294653740878426550,51.607759515215320000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chalfont & Latimer",
					"contactDetails": {
						"address": "Chalfont & Latimer Station, London Underground Ltd., Station Approach, Little Chalfont, Amersham, Bucks, HP7 9PR",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6c"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							2,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bedford Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Northbound and Chesham Branch",
										"pathDescription": "Level"
									},
									{
										"path": {
											"heading": "NORTHBOUND",
											"pathDescription": "9, 8 stairs down, ramp and subway, 10, 8, 1 stairs up"
										}
									}
								],
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Station Approach",
								"entranceToBookingHall": "1, 8, 10 stairs down, ramp and subway, 9, 8 stairs",
								"bookingHallToPlatform": [
									{
										"pointName": "Northbound / Chesham Branch",
										"pathDescription": "9, 8 stairs down, ramp and subway, 10, 8, 1 stairs up"
									},
									{
										"path": {
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										}
									}
								],
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "11:00"
										},
										{
											"from": "16:00",
											"to": "17:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "13:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chalfont & Latimer Station",
						"description": "Chalfont & Latimer Station, London Underground Ltd., Station Approach, Little Chalfont, Amersham, Bucks, HP7 9PR",
						"Point": {
							"coordinates": "-.560534956448776200,51.668025473926090000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chalk Farm",
					"contactDetails": {
						"address": "Chalk Farm Station, London Underground Ltd., Adelaide Rd, London, NW3 2BP",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							1,
							1,
							"3 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Haverstock Hill / Adelaide Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 3, 4, 12 stairs down, 17, 17 spiral stairs) down, then 20, 2 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chalk Farm Station",
						"description": "Chalk Farm Station, London Underground Ltd., Adelaide Rd, London, NW3 2BP",
						"Point": {
							"coordinates": "-.153728009451251480,51.544083102422630000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chancery Lane",
					"contactDetails": {
						"address": "Chancery Lane Station, London Underground Ltd., High Holborn, London, WC1V 6DR",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							5,
							10,
							"no",
							1,
							0,
							"4 in ticket halls, 2 on platforms",
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Holborn (South Side) / Chancery Lane",
								"entranceToBookingHall": "16, 6, 2 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Escalator down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Escalator down, escalator (or 3, 17, 6 stairs) down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Holborn / Gray's Inn Road (West side)",
								"entranceToBookingHall": "16, 10 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Escalator down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Escalator down, escalator (or 3, 17, 6 stairs) down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Holborn / Gray's Inn Road (East side)",
								"entranceToBookingHall": "19, 6 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Escalator down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Escalator down, escalator (or 3, 17, 6 stairs) down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "16:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chancery Lane Station",
						"description": "Chancery Lane Station, London Underground Ltd., High Holborn, London, WC1V 6DR",
						"Point": {
							"coordinates": "-.111677427383970640,51.518123230614440000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Charing Cross",
					"contactDetails": {
						"address": "Charing Cross Underground Station, London Underground Ltd., Trafalgar Square, London, WC2N 5DR",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Northern"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							10,
							17,
							"no",
							2,
							3,
							8,
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Main Booking Hall Connex Railway Station (Forecourt)",
								"entranceToBookingHall": "9, 9, 10 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Connex Railway Station (Concourse)",
								"entranceToBookingHall": "Escalator (or 12, 12, 11 stairs) down, subway, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Strand (North side)",
								"entranceToBookingHall": "15, 15 stairs down, subway, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Duncannon Street / Strand",
								"entranceToBookingHall": "14, 16 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "William IV Street",
								"entranceToBookingHall": "16, 13, 14 stairs down, subway, long subway, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down 1 2 3 4"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "The Courtyard",
								"entranceToBookingHall": "12, 12, 11 stairs down, subway, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Strand (South Side) / Villiers Street",
								"entranceToBookingHall": "15, 15 stairs down, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Villiers Street",
								"entranceToBookingHall": "9, 9 stairs down, ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Strand (South Side)",
								"entranceToBookingHall": "21, 16 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, very long subway, ramp down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Trafalgar Square (The Mall)",
								"entranceToBookingHall": "11, 12 stairs down, long subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, very long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Trafalgar Square / Strand (North Side)",
								"entranceToBookingHall": "9, 10, 8 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, very long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Trafalgar Square / Duncannon Street",
								"entranceToBookingHall": "10, 11, 8 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, very long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Trafalgar Square (Central Island)",
								"entranceToBookingHall": "21, 3, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 4 x 17, 8 stairs) down, very long subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Strand",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "22:00"
										}
									}
								]
							},
							{
								"entrance": "Trafalgar",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "13:30",
											"to": "19:00"
										}
									},
									{
										"timeInterval": {
											"from": "10:00",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "20:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Charing Cross Station",
						"description": "Charing Cross Underground Station, London Underground Ltd., Trafalgar Square, London, WC2N 5DR",
						"Point": {
							"coordinates": "-.124754686624366030,51.508593207603190000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chesham",
					"contactDetails": {
						"address": "Chesham Station, London Underground Ltd., Station Approach, Chesham, Bucks, HP5 1DH",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6d"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							2,
							"yes",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "07:00",
											"to": "10:00"
										},
										{
											"from": "16:00",
											"to": "17:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "10:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chesham Station",
						"description": "Chesham Station, London Underground Ltd., Station Approach, Chesham, Bucks, HP5 1DH",
						"Point": {
							"coordinates": "-.611219246324909900,51.705030454829610000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chigwell",
					"contactDetails": {
						"address": "Chigwell Station, London Underground Ltd., Station Rd, Chigwell, Essex, IG7 6NT",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (female only)",
							0,
							0,
							1,
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "High Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 16 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Chigwell Station",
						"description": "Chigwell Station, London Underground Ltd., Station Rd, Chigwell, Essex, IG7 6NT",
						"Point": {
							"coordinates": ".074526611263722940,51.617871925405100000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chiswick Park",
					"contactDetails": {
						"address": "Chiswick Park Station, London Underground Ltd., Bollo Lane, London, W4 5NE",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							2,
							0,
							2,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Acton Lane / Bollo Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "17, 17 stairs up"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "18, 17 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:45",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chiswick Park Station",
						"description": "Chiswick Park Station, London Underground Ltd., Bollo Lane, London, W4 5NE",
						"Point": {
							"coordinates": "-.267746873913726140,51.494300591745144000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Chorleywood",
					"contactDetails": {
						"address": "Chorleywood Station, London Underground Ltd., Station Approach, Chorleywood, Rickmansworth, Herts WD3 5ND",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6b"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							2,
							"yes",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Very steep ramp down, subway, very steep ramp up"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan Northbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Southbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "8 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Very steep ramp down, subway, very steep ramp up"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan Northbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Southbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "10:30"
										},
										{
											"from": "16:00",
											"to": "17:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "13:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Chorleywood Station",
						"description": "Chorleywood Station, London Underground Ltd., Station Approach, Chorleywood, Rickmansworth, Herts WD3 5ND",
						"Point": {
							"coordinates": "-.518365989763054100,51.654217860774500000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Clapham Common",
					"contactDetails": {
						"address": "Clapham Common Station, London Underground Ltd., The Pavement, London, SW4 7AJ",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							0,
							3,
							"no",
							"1 snack, 0 drink",
							"5 on platforms, 1 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall"
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Clapham Common / Clapham Park Road",
								"entranceToBookingHall": "17, 8 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 5 x14 stairs) down, 19 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Clapham High Street",
								"entranceToBookingHall": "9, 15 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 5 x14 stairs) down, 19 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "The Pavement",
								"entranceToBookingHall": "7, 15 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 5 x14 stairs) down, 19 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Clapham Common Station",
						"description": "Clapham Common Station, London Underground Ltd., The Pavement, London, SW4 7AJ",
						"Point": {
							"coordinates": "-.138311459464252400,51.461727933283946000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Clapham North",
					"contactDetails": {
						"address": "Clapham North Station, London Underground Ltd., Clapham High St, London, SW4 7TS",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							0,
							"2 in ticket halls, 1 on platforms",
							"no",
							"1 snack, 0 drink",
							"5 on platforms, 1 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bedford Road / Clapham Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 17, 2 stairs down, 17, 15, 16, 4 spiral stairs) down, 20 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Clapham North Station",
						"description": "Clapham North Station, London Underground Ltd., Clapham High St, London, SW4 7TS",
						"Point": {
							"coordinates": "-.129531053727598040,51.464843732027760000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Clapham South",
					"contactDetails": {
						"address": "Clapham South Station, London Underground Ltd., Balham Hill, London, SW12 9DU",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							6,
							"no",
							1,
							0,
							6,
							"no",
							4,
							"5 on platforms, 1 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Balham Hill / Nightingale Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 6 x17 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Clapham South Station",
						"description": "Clapham South Station, London Underground Ltd., Balham Hill, London, SW12 9DU",
						"Point": {
							"coordinates": "-.147982098639174410,51.452599834714476000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Cockfosters",
					"contactDetails": {
						"address": "Cockfosters Station, London Underground Ltd., Cockfosters Rd, Barnet, Herts, EN4 0DZ",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							"3 in ticket halls, 0 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Cockfosters Road (East Side)",
								"entranceToBookingHall": "11, 10 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Cockfosters Road (West Side)",
								"entranceToBookingHall": "10, 11 stairs down, ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "10, 10 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "14:00"
										},
										{
											"from": "16:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Cockfosters Station",
						"description": "Cockfosters Station, London Underground Ltd., Cockfosters Rd, Barnet, Herts, EN4 0DZ",
						"Point": {
							"coordinates": "-.149614715155877680,51.651687534574954000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Colindale",
					"contactDetails": {
						"address": "Colindale Station, London Underground Ltd., Colindale Avenue, London, NW9 5HR",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Colindale Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "4, 20 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:45",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Colindale Station",
						"description": "Colindale Station, London Underground Ltd., Colindale Avenue, London, NW9 5HR",
						"Point": {
							"coordinates": "-.250142587760251700,51.595286518799250000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Colliers Wood",
					"contactDetails": {
						"address": "Colliers Wood Station, London Underground Ltd., Colliers Wood High St, London, SW19 2HR",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							0,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Colliers Wood High Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 5 x15 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Colliers Wood Station",
						"description": "Colliers Wood Station, London Underground Ltd., Colliers Wood High St, London, SW19 2HR",
						"Point": {
							"coordinates": "-.177700936628786360,51.418071885122640000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Covent Garden",
					"contactDetails": {
						"address": "Covent Garden Station, London Underground Ltd., Long Acre, London, WC2E 9JT",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							4,
							0,
							10,
							"no",
							1,
							0,
							2,
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Long Acre",
							"entranceToBookingHall": "1 or 2 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 8, 7, 4 stairs down, 16, 17, 5, 8 x 17 spiral stairs) down, 19 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Covent Garden Station",
						"description": "Covent Garden Station, London Underground Ltd., Long Acre, London, WC2E 9JT",
						"Point": {
							"coordinates": "-.124159260603112690,51.512909586141590000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Croxley",
					"contactDetails": {
						"address": "Croxley Station, London Underground Ltd., Watford Road, Rickmansworth, Herts, WD3 3DY",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6a"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							"1 in ticket halls, 1 on platforms",
							"yes",
							"0 snack, 1 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Watford Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "20, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "5, 20, 20 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "20, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "07:00",
										"to": "10:00"
									},
									{
										"from": "16:00",
										"to": "17:30"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Croxley Station",
						"description": "Croxley Station, London Underground Ltd., Watford Road, Rickmansworth, Herts, WD3 3DY",
						"Point": {
							"coordinates": "-.441710992609101700,51.647046338116360000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Dagenham East",
					"contactDetails": {
						"address": "Dagenham East Station, London Underground Ltd., North Rainham Rd, Dagenham, Essex, RM10 8AA",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes M&F (open between 0500-1500)",
							1,
							0,
							1,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Rainham Road South",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 13 stairs down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:15",
											"to": "10:00"
										},
										{
											"from": "16:30",
											"to": "18:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "11:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Dagenham East Station",
						"description": "Dagenham East Station, London Underground Ltd., North Rainham Rd, Dagenham, Essex, RM10 8AA",
						"Point": {
							"coordinates": ".165874869677022780,51.544116734223610000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Dagenham Heathway",
					"contactDetails": {
						"address": "Dagenham Heathway Station, London Underground Ltd., Heathway, Dagenham, Essex, RM9 5AN",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes M&F (open between 0500-1500)",
							0,
							0,
							1,
							"no",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Heathway",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "15:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Dagenham Heathway Station",
						"description": "Dagenham Heathway Station, London Underground Ltd., Heathway, Dagenham, Essex, RM9 5AN",
						"Point": {
							"coordinates": ".147684194913217710,51.541627413616190000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Debden",
					"contactDetails": {
						"address": "Debden Station, London Underground Ltd., Chigwell Lane, Loughton, Essex, IG10 3TG",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Chigwell Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Level"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "15, 6 stairs up, footbridge, 6, 15 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "12:00"
										},
										{
											"from": "15:00",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "12:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Debden Station",
						"description": "Debden Station, London Underground Ltd., Chigwell Lane, Loughton, Essex, IG10 3TG",
						"Point": {
							"coordinates": ".083837809879712370,51.645434322048956000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Dollis Hill",
					"contactDetails": {
						"address": "Dollis Hill Station, London Underground Ltd., Hamilton Rd, London, NW10 5NB",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female, disabled/baby-changing facilities)",
							0,
							0,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Burnley Road",
								"entranceToBookingHall": "4, 5 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "12, 13 stairs up"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Chapter Road",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "12, 13 stairs up"
								},
								"platformToTrain": {
									"trainName": "",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Dollis Hill Station",
						"description": "Dollis Hill Station, London Underground Ltd., Hamilton Rd, London, NW10 5NB",
						"Point": {
							"coordinates": "-.238797558508156870,51.551903559056100000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ealing Broadway",
					"contactDetails": {
						"address": "Ealing Broadway Station, The Broadway, London, W5 2NU",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"District"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							0,
							"no",
							1,
							0,
							0,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "The Broadway / Haven Green",
							"entranceToBookingHall": "9 stairs down",
							"bookingHallToPlatform": [
								{
									"pointName": "Central",
									"pathDescription": "12, 11 stairs down"
								},
								{
									"pointName": "District",
									"pathDescription": "Platforms 7 & 8: 3, 11, 11 stairs down Platform 9 : 3, 8, 11 stairs down"
								}
							],
							"platformToTrain": [
								{
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District: Platforms 7 & 8",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Platform 9",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Ealing Broadway Station",
						"description": "Ealing Broadway Station, The Broadway, London, W5 2NU",
						"Point": {
							"coordinates": "-.301500096369187100,51.514913033739160000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ealing Common",
					"contactDetails": {
						"address": "Ealing Common Station, London Underground Ltd., Uxbridge Rd, London, W5 3LD",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Uxbridge Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "9, 20 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ealing Common Station",
						"description": "Ealing Common Station, London Underground Ltd., Uxbridge Rd, London, W5 3LD",
						"Point": {
							"coordinates": "-.288260381056999100,51.510124738537850000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Earl's Court",
					"contactDetails": {
						"address": "Earl's Court Station, London Underground Ltd., Earl's Court Rd, London, SW5 9QA",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": "1+2"
					},
					"facilities": {
						"facility": [
							3,
							8,
							4,
							20,
							"no",
							3,
							3,
							12,
							"no",
							"10k",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"canopies over platform (full), routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Earl's Court Road",
								"entranceToBookingHall": "8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "14, 13 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "14, 14 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Lift down or as Eastbound District line then either 19, 4 stairs down, escalator down or 4 stairs down, 11, 4 x 17 spiral stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Warwick Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Walkway, 11, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Walkway, then as above"
									}
								],
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Exhibition Hall",
								"entranceToBookingHall": "15 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "District and Piccadilly",
										"pathDescription": "Escalator (or 4, 3 x 17, 3 stairs) down, long ramp down, long ramp up, then"
									},
									{
										"pointName": "District",
										"pathDescription": "4, 19 stairs up"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:45",
											"to": "23:30"
										}
									}
								]
							},
							{
								"entrance": "Warwick Rd",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:15",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "21:00"
										}
									}
								]
							},
							{
								"entrance": "Exhibition"
							}
						]
					},
					"Placemark": {
						"name": "Earl's Court Station",
						"description": "Earl's Court Station, London Underground Ltd., Earl's Court Rd, London, SW5 9QA",
						"Point": {
							"coordinates": "-.193545854058733800,51.491803907898900000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "East Acton",
					"contactDetails": {
						"address": "East Acton Station, London Underground Ltd., Erconwald St, London, W12 0BP",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							1,
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Erconwald Street",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "18, 19 stairs up"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "11, 14, 16 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "17:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "East Acton Station",
						"description": "East Acton Station, London Underground Ltd., Erconwald St, London, W12 0BP",
						"Point": {
							"coordinates": "-.247513203550207700,51.516582199054170000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "East Finchley",
					"contactDetails": {
						"address": "East Finchley Station, London Underground Ltd., High Rd, London, N2 0NW",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"no",
							2,
							0,
							"3 in ticket halls, 0 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Great North Road",
								"entranceToBookingHall": "Level (or 5 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 15 stairs up"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "The Causeway",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 15 stairs up"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "East Finchley Station",
						"description": "East Finchley Station, London Underground Ltd., High Rd, London, N2 0NW",
						"Point": {
							"coordinates": "-.164738305623223720,51.587271719132026000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "East Ham",
					"contactDetails": {
						"address": "East Ham Station, London Underground Ltd., High Street North, London, E6 2JA",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							8,
							"Local authority facility nearby",
							1,
							0,
							4,
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform, taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "High Street North",
							"entranceToBookingHall": "Level or 2 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 17 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:15",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "East Ham Station",
						"description": "East Ham Station, London Underground Ltd., High Street North, London, E6 2JA",
						"Point": {
							"coordinates": ".051475548835470040,51.538926036547580000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "East Putney",
					"contactDetails": {
						"address": "East Putney Station, Upper Richmond Rd, London, SW15",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": "2+3"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							5,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Upper Richmond Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "12, 13 stairs up"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "15, 16 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "East Putney Station",
						"description": "East Putney Station, Upper Richmond Rd, London, SW15",
						"Point": {
							"coordinates": "-.211003174222271470,51.458804746350000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Eastcote",
					"contactDetails": {
						"address": "Eastcote Station, London Underground Ltd., Field End Rd, Ruislip, Middx, HA5 1QZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							"1 in ticket halls, 1 on platforms",
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Field End Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 15 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Eastcote Station",
						"description": "Eastcote Station, London Underground Ltd., Field End Rd, Ruislip, Middx, HA5 1QZ",
						"Point": {
							"coordinates": "-.396844627186990200,51.576493044501650000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Edgware",
					"contactDetails": {
						"address": "Edgware Station, London Underground Ltd., Station Rd, Edgware, Middx, HA8 7AW",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							2,
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Platform 1: 13, 15 stairs down Platforms 2 & 3: 10, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "The Bus Station",
								"entranceToBookingHall": "2 steps up, footpath",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Platform 1: 13, 15 stairs down Platforms 2 & 3: 10, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Edgware Station",
						"description": "Edgware Station, London Underground Ltd., Station Rd, Edgware, Middx, HA8 7AW",
						"Point": {
							"coordinates": "-.274976006045290200,51.613623079849460000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Elephant & Castle",
					"contactDetails": {
						"address": "Elephant & Castle Underground Station, London Underground Ltd., London Rd, London, SE1 6LW",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Northern"
						]
					},
					"zones": {
						"zone": "1+2"
					},
					"facilities": {
						"facility": [
							2,
							5,
							0,
							11,
							"no",
							2,
							0,
							6,
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "London Road / Elephant & Castle (North Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Lift *, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Lift *, 20 stairs down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "18 stairs up, subway, 5 stairs down, subway, 20 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "18 stairs up, subway, 15 stairs up * or 15,3 stairs down, 4, 5 x 17 spiral stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Elephant & Castle (South Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Lift#, subway, along Northern Line platform, 20 stairs down, subway, 5 stairs up, subway, 18 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift#, subway"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Lift#, subway, 9, 6 stairs up, 20 stairs down(\n\t\t\t\t\t\t\t\t) # 9, 2, 9, 2, 9, 5 stairs down, subway, 8, 23, 23 spiral stairs down, 9, 12 stairs down\n\t\t\t\t\t\t\t\t# or 9, 2, 9, 2, 9, 5 stairs down, subway, 8, 23, 23 spiral stairs down, 9, 12 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Bakerloo",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:30",
											"to": "22:30"
										}
									},
									{
										"timeInterval": {
											"from": "06:30",
											"to": "22:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "22:00"
										}
									}
								]
							},
							{
								"entrance": "Northern",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "23:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Elephant & Castle Station",
						"description": "Elephant & Castle Underground Station, London Underground Ltd., London Rd, London, SE1 6LW",
						"Point": {
							"coordinates": "-.100729603883341970,51.495777047270740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Elm Park",
					"contactDetails": {
						"address": "Elm Park Station, London Underground Ltd., The Broadway, Hornchurch, Essex, RM12 4RW",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes M&F (open between 0500-1500)",
							0,
							0,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "The Broadway / Station Parade",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "11:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Elm Park Station",
						"description": "Elm Park Station, London Underground Ltd., The Broadway, Hornchurch, Essex, RM12 4RW",
						"Point": {
							"coordinates": ".199180459239238080,51.549801253986864000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Embankment",
					"contactDetails": {
						"address": "Embankment Station, London Underground Ltd., Villiers St, London, WC2N 6NS",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Circle",
							"District",
							"Northern"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							10,
							9,
							"no",
							1,
							3,
							"11 in ticket halls, 6 on platforms",
							"no",
							28,
							"1 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Villiers Street",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "6 stairs down, escalator down, escalator down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "19, stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down (or as Circle / District then 9, 9, 5 stairs down from the Eastbound platform or 10, 10 stairs down from the Westbound platform)"
											}
										]
									},
									{
										"pointName": "Circle / District",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "15, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "16, 14 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Escalator# down, 6 stairs down, escalator* down, or 5 stairs down, escalator down, escalator* down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "6 stairs down, escalator* down, escalator# down\n\t\t\t\t\t\t\t\tor 18, 18, 18 spiral stairs down * or 21, 11, 22 stairs down\n\t\t\t\t\t\t\t\t# or 18,18,18 spiral staris down\n\t\t\t\t\t\t\t\t* or 21,11,22 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Victoria Embankment",
								"entranceToBookingHall": "4 steps up",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "6 stairs down, escalator down, escalator down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "19, stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down (or as Circle / District then 9, 9, 5 stairs down from the Eastbound platform or 10, 10 stairs down from the Westbound platform)"
											}
										]
									},
									{
										"pointName": "Circle / District",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "15, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "16, 14 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Escalator# down, 6 stairs down, escalator* down, or 5 stairs down, escalator down, escalator* down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "6 stairs down, escalator* down, escalator# down\n\t\t\t\t\t\t\t\tor 18, 18, 18 spiral stairs down * or 21, 11, 22 stairs down\n\t\t\t\t\t\t\t\t# or 18,18,18 spiral staris down\n\t\t\t\t\t\t\t\t* or 21,11,22 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Embankment Station",
						"description": "Embankment Station, London Underground Ltd., Villiers St, London, WC2N 6NS",
						"Point": {
							"coordinates": "-.122360215814178660,51.507241796748396000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Epping",
					"contactDetails": {
						"address": "Epping Station, London Underground Ltd., Station Rd, Epping, Essex, CM16 4HW",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male,female)",
							1,
							0,
							2,
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level (Some peak hour trains 10, 11 stairs up, 11, 10 stairs down)"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "18:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Epping Station",
						"description": "Epping Station, London Underground Ltd., Station Rd, Epping, Essex, CM16 4HW",
						"Point": {
							"coordinates": ".113866915583570900,51.693624607565480000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Euston",
					"contactDetails": {
						"address": "Euston Underground Station, London Underground Ltd., Eversholt St, London, NW1 2DU",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": [
							"Northern",
							"Victoria"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							10,
							16,
							"no",
							1,
							2,
							"6 in ticket halls, 6 on platforms",
							"no",
							26,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Silverlink and Virgin West Coast Main Line (Main Concourse)",
								"entranceToBookingHall": "Escalator (or 3, 17, 17, 8 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern (Charing Cross Branch)",
										"pathDescription": "Escalator down, 14, 13 stairs down"
									},
									{
										"pointName": "Northern (City Branch) and Victoria",
										"pathDescription": "Escalator down, subway escalator down or 8 stairs down, 3 x 17 spiral stairs down, 5 stairs down, subway,",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 12 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 11 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Silverlink and Virgin West Coast Main Line Platforms 8 -11",
								"entranceToBookingHall": "12, 12 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern (Charing Cross Branch)",
										"pathDescription": "Escalator down, 14, 13 stairs down"
									},
									{
										"pointName": "Northern (City Branch) and Victoria",
										"pathDescription": "Escalator down, subway escalator down or 8 stairs down, 3 x 17 spiral stairs down, 5 stairs down, subway,",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 12 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 11 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Car Park (Level 1)",
								"entranceToBookingHall": "Ramp up",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern (Charing Cross Branch)",
										"pathDescription": "Escalator down, 14, 13 stairs down"
									},
									{
										"pointName": "Northern (City Branch) and Victoria",
										"pathDescription": "Escalator down, subway escalator down or 8 stairs down, 3 x 17 spiral stairs down, 5 stairs down, subway,",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 12 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 11 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Euston Station",
						"description": "Euston Underground Station, London Underground Ltd., Eversholt St, London, NW1 2DU",
						"Point": {
							"coordinates": "-.133289718799315530,51.528596260899460000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Euston Square",
					"contactDetails": {
						"address": "Euston Square Station, London Underground Ltd., Euston Rd, London, NW1 2BN",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							9,
							"no",
							1,
							2,
							5,
							"no",
							8,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Euston Road (North side)",
								"entranceToBookingHall": "9, 15 stairs down, subway, ramp up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "16, 5 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "4, 18 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Euston Road / Gower Street",
								"entranceToBookingHall": "13, 15 stairs down, subway, 4 steps up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "16, 5 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "4, 18 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "13:30",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Euston Square Station",
						"description": "Euston Square Station, London Underground Ltd., Euston Rd, London, NW1 2BN",
						"Point": {
							"coordinates": "-.135836140694320340,51.525561006016105000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Fairlop",
					"contactDetails": {
						"address": "Fairlop Station, London Underground Ltd., Forest Rd, Ilford, Essex, IG6 3HD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Forest Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "17, 18 stairs up"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:00",
									"to": "09:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "Fairlop Station",
						"description": "Fairlop Station, London Underground Ltd., Forest Rd, Ilford, Essex, IG6 3HD",
						"Point": {
							"coordinates": ".090929226191151620,51.595680931861040000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Farringdon",
					"contactDetails": {
						"address": "Farringdon Station, London Underground Ltd., Cowcross St, London, EC1M 6BY",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							15,
							"yes",
							1,
							0,
							10,
							"no",
							6,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Cowcross Street",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "12, 16 stairs down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "As above then 5 or 8 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "16, 17 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Turnmill Street",
								"entranceToBookingHall": "No access to booking hall",
								"bookingHallToPlatform": {
									"pointName": "Circle, Hammersmith & City and Metropolitan",
									"pathDescription": "",
									"path": {
										"heading": "EASTBOUND",
										"pathDescription": "1 step up, 5, 11, 12 stairs down"
									}
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:00",
										"to": "00:45"
									}
								},
								{
									"timeInterval": {
										"from": "05:00",
										"to": "00:45"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Farringdon Station",
						"description": "Farringdon Station, London Underground Ltd., Cowcross St, London, EC1M 6BY",
						"Point": {
							"coordinates": "-.105065254236880330,51.520444754930790000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Finchley Central",
					"contactDetails": {
						"address": "Finchley Central Station, London Underground Ltd., Regents Park Road, London, N3 2RY",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes Male/Female",
							1,
							0,
							"0 in ticket halls, 3 on platforms",
							"yes",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Ballards Lane",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "10, 14 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 10 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Station Road",
								"entranceToBookingHall": "Ramped subway down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "10, 14 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 10 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Finchley Central Station",
						"description": "Finchley Central Station, London Underground Ltd., Regents Park Road, London, N3 2RY",
						"Point": {
							"coordinates": "-.192447107072110800,51.600976420785250000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Finchley Road",
					"contactDetails": {
						"address": "Finchley Road Underground Station, London Underground Ltd., Finchley Road, London, NW3 6OP",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Jubilee",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							2,
							10,
							"no",
							"2 snack, 4 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Finchley Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 13 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Jubilee Eastbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Jubilee Westbound",
									"platformToTrainSteps": "LEVEL_100"
								},
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Finchley Road Station",
						"description": "Finchley Road Underground Station, London Underground Ltd., Finchley Road, London, NW3 6OP",
						"Point": {
							"coordinates": "-.180494175915812260,51.547064834336794000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Finsbury Park",
					"contactDetails": {
						"address": "Finsbury Park Underground Station, London Underground Ltd., Wells Terrace, London, N4 3JU",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": [
							"Piccadilly",
							"Victoria"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							0,
							"no",
							1,
							2,
							"5 in ticket halls, 4 on platforms",
							"no",
							"8 snack, 0 drink",
							"12 on platforms, 0 in ticket halls, 5 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Wells Terrace",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Piccadilly and Victoria",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Long subway 16, 17 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Long subway 16, 16 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Seven Sisters Road",
								"entranceToBookingHall": "Long subway",
								"bookingHallToPlatform": {
									"pointName": "Piccadilly and Victoria",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Long subway 16, 17 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Long subway 16, 16 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Station Place",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Piccadilly and Victoria",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 16, 17 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 16, 16 stairs down W.A.G.N. 12 stairs up, subway, then"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "13, 14 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "14, 12 stairs up"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Finsbury Park Station",
						"description": "Finsbury Park Underground Station, London Underground Ltd., Wells Terrace, London, N4 3JU",
						"Point": {
							"coordinates": "-.106512100282158470,51.564401648484590000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Fulham Broadway",
					"contactDetails": {
						"address": "Fulham Broadway Station, London Underground Ltd., Fulham Broadway, London, SW6 1BY",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							7,
							"no",
							1,
							2,
							3,
							"no",
							0,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"canopies over platform (part), post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Fulham Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "13, 14 stairs down"
								},
								"platformToTrain": {
									"trainName": "District Eastbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Chelsea F.C.",
								"entranceToBookingHall": "Ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "13, 14 stairs down"
								},
								"platformToTrain": {
									"trainName": "District Eastbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:15"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Fulham Broadway Station",
						"description": "Fulham Broadway Station, London Underground Ltd., Fulham Broadway, London, SW6 1BY",
						"Point": {
							"coordinates": "-.194956844603215860,51.480529784298170000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Gants Hill",
					"contactDetails": {
						"address": "Gants Hill Station, London Underground Ltd., Cranbrook Rd, Ilford, Essex, IG2 6UD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							5,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Woodford Avenue (South Side)",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Woodford Avenue (North Side)",
								"entranceToBookingHall": "Ramp down, ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Cranbrook Road (East Side)",
								"entranceToBookingHall": "11, 10 (or 12, 10) stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Cranbrook Road (West Side)",
								"entranceToBookingHall": "12, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Eastern Avenue (North Side))",
								"entranceToBookingHall": "Ramp (or 10, 10 stairs) down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Eastern Avenue (South Side)",
								"entranceToBookingHall": "Ramp (or 9 stairs) down, ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Perth Road",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Clarence Avenue",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Gants Hill Station",
						"description": "Gants Hill Station, London Underground Ltd., Cranbrook Rd, Ilford, Essex, IG2 6UD",
						"Point": {
							"coordinates": ".066115533982912160,51.576487548031560000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Gloucester Road",
					"contactDetails": {
						"address": "Gloucester Road Station, London Underground Ltd., Gloucester Rd, London, SW7 4SF",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							8,
							"no",
							1,
							0,
							9,
							"no",
							17,
							"0 on platforms, 2 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Gloucester Road",
							"entranceToBookingHall": "Level or 1 step up",
							"bookingHallToPlatform": [
								{
									"pointName": "Circle and Eastbound District",
									"pathDescription": "12, 12, 12 stairs down"
								},
								{
									"pointName": "Westbound District",
									"pathDescription": "17, 12, 11 stairs down"
								},
								{
									"pointName": "Piccadilly",
									"pathDescription": "Lift (or 19 stairs down, 4 x 17 spiral stairs down), subway, 12, 15 stairs down"
								}
							],
							"platformToTrain": [
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Gloucester Road Station",
						"description": "Gloucester Road Station, London Underground Ltd., Gloucester Rd, London, SW7 4SF",
						"Point": {
							"coordinates": "-.182989526482896930,51.494239783916480000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Golders Green",
					"contactDetails": {
						"address": "Golders Green Station, London Underground Ltd., North End Rd, London, NW11 7RN",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							10,
							"no",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "North End Road / Bus Station",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Subway, 3 x 11 stairs up"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Golders Green Station",
						"description": "Golders Green Station, London Underground Ltd., North End Rd, London, NW11 7RN",
						"Point": {
							"coordinates": "-.193993261252232000,51.572221393232800000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Goldhawk Road",
					"contactDetails": {
						"address": "Goldhawk Road Station, London Underground Ltd., Goldhawk Rd, London, W12 8EG",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Hammersmith & City"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							2,
							"no",
							2,
							"4 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Goldhawk Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "3 x 14 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "5, 12, 12, 13 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Wells Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "3 x 14 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "5, 12, 12, 13 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "11:30",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:30",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Goldhawk Road Station",
						"description": "Goldhawk Road Station, London Underground Ltd., Goldhawk Rd, London, W12 8EG",
						"Point": {
							"coordinates": "-.226748329203583370,51.501952197301270000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Goodge Street",
					"contactDetails": {
						"address": "Goodge Street Station, London Underground Ltd., 75 Tottenham Court Rd, London, W1P 9PA",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							4,
							0,
							8,
							"no",
							1,
							0,
							6,
							"no",
							10,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Tottenham Court Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 9, 8 stairs down, subway, 7 x 17, 10 spiral stairs down, subway), 20 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Goodge Street Station",
						"description": "Goodge Street Station, London Underground Ltd., 75 Tottenham Court Rd, London, W1P 9PA",
						"Point": {
							"coordinates": "-.134662152092394320,51.520424996045500000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Grange Hill",
					"contactDetails": {
						"address": "Grange Hill Station, London Underground Ltd., Manor Rd, Chigwell, Essex IG7 5QB",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							1,
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Manor Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 17 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Grange Hill Station",
						"description": "Grange Hill Station, London Underground Ltd., Manor Rd, Chigwell, Essex IG7 5QB",
						"Point": {
							"coordinates": ".092146407242701880,51.613349857801460000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Great Portland Street",
					"contactDetails": {
						"address": "Great Portland Street Station, London Underground Ltd., Euston Rd, London, NW1",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							8,
							"no",
							1,
							0,
							5,
							"no",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Marylebone ( South Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "19 stairs down, ramp down, 12, 6, 5 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "19 stairs down, ramp down, 16, 6 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Great Portland Street (East Side)",
								"entranceToBookingHall": "Ramp up^",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "19 stairs down, ramp down, 12, 6, 5 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "19 stairs down, ramp down, 16, 6 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Great Portland Street Station",
						"description": "Great Portland Street Station, London Underground Ltd., Euston Rd, London, NW1",
						"Point": {
							"coordinates": "-.143956086447368930,51.523720314628890000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Green Park",
					"contactDetails": {
						"address": "Green Park Station, London Underground Ltd., Piccadilly, London, W1V 9HG",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": [
							"Jubilee",
							"Piccadilly",
							"Victoria"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							11,
							13,
							"no",
							3,
							1,
							20,
							"no",
							29,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Piccadilly (South Side)",
								"entranceToBookingHall": "18, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Jubilee",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Piccadilly (South Side)",
								"entranceToBookingHall": "19, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Jubilee",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Piccadilly (North Side)",
								"entranceToBookingHall": "19, 7 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Jubilee",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Stratton Street",
								"entranceToBookingHall": "1 step up, 17, 4, 7 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Jubilee",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Green Park",
								"entranceToBookingHall": "16, 14 stairs down, subway, 6 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Jubilee",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "escalator down"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": 21.3
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Green Park Station",
						"description": "Green Park Station, London Underground Ltd., Piccadilly, London, W1V 9HG",
						"Point": {
							"coordinates": "-.142927422207874380,51.506850108502306000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Greenford",
					"contactDetails": {
						"address": "Greenford Station, London Underground Ltd., Oldfield Lane, Greenford, Middx, UB6 8PX",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							1,
							3,
							"no",
							1,
							2,
							4,
							"yes",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Oldfield Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 17, 17, 3 stairs up or (escalator up only)"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "17:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "17:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Greenford Station",
						"description": "Greenford Station, London Underground Ltd., Oldfield Lane, Greenford, Middx, UB6 8PX",
						"Point": {
							"coordinates": "-.346444146567460000,51.542302026759124000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hainault",
					"contactDetails": {
						"address": "Hainault Station, London Underground Ltd., New North Rd, Ilford, Essex, IG6 3BD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							"2 snack, 3 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "New North Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "4, 17, 18 stairs up"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "10:30"
										},
										{
											"from": "17:00",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "16:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hainault Station",
						"description": "Hainault Station, London Underground Ltd., New North Rd, Ilford, Essex, IG6 3BD",
						"Point": {
							"coordinates": ".093119014044497110,51.603727217978240000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hampstead",
					"contactDetails": {
						"address": "Hampstead Station, London Underground Ltd., Hampstead High St, London, NW3 1QG",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							4,
							0,
							6,
							"yes",
							1,
							1,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Hampstead High Street",
								"entranceToBookingHall": "3 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 19, 3 stairs down, 16, 15 x 17 spiral stairs down, 18 stairs down), 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Heath Street (Exit only)",
								"entranceToBookingHall": "6 stairs up, 1 step down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 19, 3 stairs down, 16, 15 x 17 spiral stairs down, 18 stairs down), 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hampstead Station",
						"description": "Hampstead Station, London Underground Ltd., Hampstead High St, London, NW3 1QG",
						"Point": {
							"coordinates": "-.178219762924764630,51.556688476264430000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hanger Lane",
					"contactDetails": {
						"address": "Hanger Lane Station, London Underground Ltd., Hanger Lane, London, W5 1DL",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							2,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Hanger Lane / Western Avenue (North West)",
								"entranceToBookingHall": "19 stairs down (or ramp or 10, 10 stairs down)",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 15 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Hanger Lane / Western Avenue (North East)",
								"entranceToBookingHall": "9, 8 stairs down, ramp down, subway or ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 15 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Hanger Lane / Western Avenue (South West)",
								"entranceToBookingHall": "13, 12 stairs (or ramp) down, ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 15 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Hanger Lane / Western Avenue (South East) and Ashbourne Parade",
								"entranceToBookingHall": "12, 11 stairs (or ramp) down, ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 15 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "13:00"
										},
										{
											"from": "16:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "16:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hanger Lane Station",
						"description": "Hanger Lane Station, London Underground Ltd., Hanger Lane, London, W5 1DL",
						"Point": {
							"coordinates": "-.293007522620696200,51.530006403588040000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hatton Cross",
					"contactDetails": {
						"address": "Hatton Cross Station, London Underground Ltd., Great South West Rd, Feltham, Middx,",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							9,
							"yes",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Great South West Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 11, 13 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bus Station",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 11, 13 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Station opens on Sundays at 6.40am",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "9, 11, 13 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hatton Cross Station",
						"description": "Hatton Cross Station, London Underground Ltd., Great South West Rd, Feltham, Middx,",
						"Point": {
							"coordinates": "-.423409349454662700,51.466614173462760000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Heathrow Terminal 4",
					"contactDetails": {
						"address": "Heathrow T4 Station, London Underground Ltd., Hthrw Airport complex, Trmnl 4, Hounslow, Middx",
						"phone": ""
					},
					"servingLines": "",
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							"4 in ticket halls, 1 on platforms",
							"no",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, subway to street."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Terminal 4",
							"entranceToBookingHall": "Lift (or escalator or 15, 9 stairs) down, ramp down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "05:45",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Heathrow Terminal 4 Station",
						"description": "Heathrow T4 Station, London Underground Ltd., Hthrw Airport complex, Trmnl 4, Hounslow, Middx",
						"Point": {
							"coordinates": "-.446058766977937300,51.458553104092005000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hendon Central",
					"contactDetails": {
						"address": "Hendon Central Station, London Underground Ltd., Queens Rd, London, NW4 3AS",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							4,
							"no",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Watford Way",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "5, 13 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:45",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hendon Central Station",
						"description": "Hendon Central Station, London Underground Ltd., Queens Rd, London, NW4 3AS",
						"Point": {
							"coordinates": "-.226496207803293200,51.583293830072000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "High Barnet",
					"contactDetails": {
						"address": "High Barnet Station, London Underground Ltd., Barnet Hill, Barnet, Herts, EN5 5RP",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							1,
							"yes",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Great North Road",
							"entranceToBookingHall": "Long steep ramps up and down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "15:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "High Barnet Station",
						"description": "High Barnet Station, London Underground Ltd., Barnet Hill, Barnet, Herts, EN5 5RP",
						"Point": {
							"coordinates": "-.194751021947520400,51.650601170588565000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "High Street Kensington",
					"contactDetails": {
						"address": "High Street Kensington Station, London Underground Ltd., Kensington High St, London, W8 5SA",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							10,
							"no",
							3,
							0,
							10,
							"no",
							9,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"canopies over platform, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Kensington High Street ( via Shopping Arcade)",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 15 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "High Street Kensington Station",
						"description": "High Street Kensington Station, London Underground Ltd., Kensington High St, London, W8 5SA",
						"Point": {
							"coordinates": "-.192503135590810750,51.500673420263205000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Highbury & Islington",
					"contactDetails": {
						"address": "Highbury & Islington Underground Station, London Underground Ltd., Holloway Rd, London, N5 1RA",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							7,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Holloway Road / Highbury Corner",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": [
								{
									"pointName": "Victoria and W.A.G.N.",
									"pathDescription": "Escalator (or 3, 3 x 17, 7 stairs) down, subway, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "7, 14, 7 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "17, 17 stairs down"
										}
									]
								},
								{
									"pointName": "Silverlink Eastbound",
									"pathDescription": "12, 13 stairs down",
									"path": {
										"heading": "WESTBOUND",
										"pathDescription": "12, 12 stairs down"
									}
								}
							],
							"platformToTrain": {
								"trainName": "Victoria",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Highbury & Islington Station",
						"description": "Highbury & Islington Underground Station, London Underground Ltd., Holloway Rd, London, N5 1RA",
						"Point": {
							"coordinates": "-.103964238784979300,51.546229491737870000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Highgate",
					"contactDetails": {
						"address": "Highgate Station, London Underground Ltd., Archway Rd, London, N6",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							4,
							"no",
							1,
							0,
							"3 in ticket halls, 2 on platforms",
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Priory Gardens and footpath from Wood Lane",
								"entranceToBookingHall": "16 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 6 x 17, 13 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Archway Road (East Side)",
								"entranceToBookingHall": "16, 17, 17 stairs (or long ramps) down, then 13, 14, 13, 12 stairs down (or escalator up exit only)",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 6 x 17, 13 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "13, 14, 13, 12 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 6 x 17, 13 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Highgate Station",
						"description": "Highgate Station, London Underground Ltd., Archway Rd, London, N6",
						"Point": {
							"coordinates": "-.146638422561128380,51.577597829618790000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hillingdon",
					"contactDetails": {
						"address": "Hillingdon Station, London Underground Ltd., Long Lane, Hillingdon, Uxbridge, Middlesex, UB10 9NR",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							2,
							"yes (disabled only)",
							3,
							"yes",
							0,
							0,
							1,
							"yes",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Long Lane",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or16, 16 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "Ramp up, lift (or 10, 16, 16 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or16, 16 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "11:30"
										},
										{
											"from": "15:15",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hillingdon Station",
						"description": "Hillingdon Station, London Underground Ltd., Long Lane, Hillingdon, Uxbridge, Middlesex, UB10 9NR",
						"Point": {
							"coordinates": "-.449926295661858930,51.553716844570935000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Holborn",
					"contactDetails": {
						"address": "Holborn Station, London Underground Ltd., Kingsway, London, WC2B 6AA",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							7,
							17,
							"no",
							1,
							1,
							13,
							"no",
							14,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Kingsway (Entrance only)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "19 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 22 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "High Holborn (Exit only)",
								"entranceToBookingHall": "Leve",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "19 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 22 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Holborn Station",
						"description": "Holborn Station, London Underground Ltd., Kingsway, London, WC2B 6AA",
						"Point": {
							"coordinates": "-.120008849244825100,51.517438783075970000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Holland Park",
					"contactDetails": {
						"address": "Holland Park Station, London Underground Ltd., Holland Park Avenue, London, W11 3RB",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							1,
							0,
							"0 in ticket halls, 2 on platforms",
							"no",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Lansdown Road",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift down, 21 stairs down (or 15, 3 stairs down,"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Holland Park Avenue",
								"entranceToBookingHall": "Ramp up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "16, 15, 15, 10, 16 spiral stairs down, 3, 20 stairs down)"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Holland Park Station",
						"description": "Holland Park Station, London Underground Ltd., Holland Park Avenue, London, W11 3RB",
						"Point": {
							"coordinates": "-.205728672749766300,51.507334043150680000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Holloway Road",
					"contactDetails": {
						"address": "Holloway Road Station, London Underground Ltd., Holloway Rd, London, N7 8HS",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							5,
							"no",
							0,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"4 on platforms, 0 in ticket halls, 2 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Holloway Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 4 stairs down, 11, 17 spiral stairs down, 14 stairs down), 19 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": 20
									}
								},
								{
									"timeInterval": {
										"from": 9,
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Holloway Road Station",
						"description": "Holloway Road Station, London Underground Ltd., Holloway Rd, London, N7 8HS",
						"Point": {
							"coordinates": "-.112925632539152260,51.552750537878600000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hornchurch",
					"contactDetails": {
						"address": "Hornchurch Station, London Underground Ltd., Station Lane, Hornchurch, Essex, RM12 6LS",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes M&F (open between 0500-1500)",
							1,
							0,
							1,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"canopies over platform, taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Lane / Suttons Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "10:00"
									}
								},
								{
									"timeInterval": {
										"from": "12:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hornchurch Station",
						"description": "Hornchurch Station, London Underground Ltd., Station Lane, Hornchurch, Essex, RM12 6LS",
						"Point": {
							"coordinates": ".219018986707928050,51.554005256006330000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hounslow Central",
					"contactDetails": {
						"address": "Hounslow Central Station, London Underground Ltd., Lampton Rd, Hounslow, Middx, TW3 1JG",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Lampton Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "5, 17, 16 stairs up"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hounslow Central Station",
						"description": "Hounslow Central Station, London Underground Ltd., Lampton Rd, Hounslow, Middx, TW3 1JG",
						"Point": {
							"coordinates": "-.366922420319065300,51.471083300365436000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hounslow East",
					"contactDetails": {
						"address": "Hounslow East Station, London Underground Ltd., Kingsley Rd, Hounslow, Middx, TW3 4AB",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							1,
							1,
							"1 in ticket halls, 1 on platforms",
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Kingsley Road",
								"entranceToBookingHall": "1, 15, 15, 9 stairs up",
								"bookingHallToPlatform": {
									"pointName": "Westbound only",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Kingsley Road",
								"entranceToBookingHall": "15 stairs up",
								"bookingHallToPlatform": {
									"pointName": "Eastbound only",
									"pathDescription": "17, 7 stairs up"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hounslow East Station",
						"description": "Hounslow East Station, London Underground Ltd., Kingsley Rd, Hounslow, Middx, TW3 4AB",
						"Point": {
							"coordinates": "-.356695318244920060,51.473170615833226000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hounslow West",
					"contactDetails": {
						"address": "Hounslow West Station, London Underground Ltd., Bath Rd, Hounslow, Middx, TW3 3DH",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							"4 in ticket halls, 2 on platforms",
							"yes",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bath Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Long walkway, 13, 14 stairs down (stairlift on request)"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hounslow West Station",
						"description": "Hounslow West Station, London Underground Ltd., Bath Rd, Hounslow, Middx, TW3 3DH",
						"Point": {
							"coordinates": "-.385731868407531600,51.473034798965720000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hyde Park Corner",
					"contactDetails": {
						"address": "Hyde Park Corner Station, London Underground Ltd., Knightsbridge, London, SW1X 7LY",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							2,
							6,
							"no",
							6,
							"1 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Hyde Park Corner (North Side)",
								"entranceToBookingHall": "14, 14 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 7 x 17 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Knightsbridge (North Side)",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 7 x 17 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Knightsbridge (South Side)",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 7 x 17 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Apsley Way / Hyde Park Corner (South Side)",
								"entranceToBookingHall": "14, 14 stairs (or ramp) down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 7 x 17 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Grosvenor Place (West Side)",
								"entranceToBookingHall": "21, 5 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 7 x 17 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hyde Park Corner Station",
						"description": "Hyde Park Corner Station, London Underground Ltd., Knightsbridge, London, SW1X 7LY",
						"Point": {
							"coordinates": "-.152748811981766980,51.502760411212570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ickenham",
					"contactDetails": {
						"address": "Ickenham Station, London Underground Ltd., Glebe Avenue, Uxbridge, Middx, UB10 8PD",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							"0 in ticket halls, 1 on platforms",
							"yes",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Globe Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "WESTBOUND",
											"pathDescription": "13, 16 stairs down"
										},
										{
											"heading": "EASTBOUND",
											"pathDescription": "13, 15 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "11, 12 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "WESTBOUND",
											"pathDescription": "13, 16 stairs down"
										},
										{
											"heading": "EASTBOUND",
											"pathDescription": "13, 15 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "07:15",
											"to": "10:00"
										},
										{
											"from": "15:15",
											"to": "16:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "10:30",
										"to": "13:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ickenham Station",
						"description": "Ickenham Station, London Underground Ltd., Glebe Avenue, Uxbridge, Middx, UB10 8PD",
						"Point": {
							"coordinates": "-.442026555689012170,51.561984742559240000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kennington",
					"contactDetails": {
						"address": "Kennington Station, London Underground Ltd., Kennington Park Rd, London, SE11 4QJ",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							0,
							0,
							2,
							"no",
							0,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Kennington Park Road / Braganza Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down, subway, 19 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down, 16, 18 stairs down * (or 21 stairs down, 19, 19, 17 spiral stairs down, 3 stairs down)() or 21 stairs down, 19, 19, 17 spiral stairs down, 3 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Kennington Station",
						"description": "Kennington Station, London Underground Ltd., Kennington Park Rd, London, SE11 4QJ",
						"Point": {
							"coordinates": "-.105485152526283220,51.488119530611540000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kentish Town",
					"contactDetails": {
						"address": "Kentish Town Underground Station, London Underground Ltd., Kentish Town Rd, London, NW5 2AA",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							0,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Kentish Town Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": [
								{
									"pointName": "Northern",
									"pathDescription": "Escalator# down then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 11 stairs down"
										}
									]
								},
								{
									"pointName": "Thameslink",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "9 stairs up, 3 x 12 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "9 stairs up, 12, 12, 11 stairs down (\n\t\t\t\t\t\t\t\t) # or 15, 4, 18 stairs down, 4 x 17 spiral stairs down * or 16, 4 x 17 spiral stairs up, 18, 4, 16 stairs up"
										}
									]
								}
							],
							"platformToTrain": {
								"trainName": "Nothern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:15",
										"to": "23:45"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Kentish Town Station",
						"description": "Kentish Town Underground Station, London Underground Ltd., Kentish Town Rd, London, NW5 2AA",
						"Point": {
							"coordinates": "-.140464192953272140,51.550303762237870000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kilburn",
					"contactDetails": {
						"address": "Kilburn Station, London Underground Ltd., Shootup Hill, London, NW6 7QL",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							2,
							"3 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Shoot Up Hill / Christchurch Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 14, 15 stairs up"
							},
							"platformToTrain": [
								{
									"trainName": "Jubilee Southbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Northbound",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Kilburn Station",
						"description": "Kilburn Station, London Underground Ltd., Shootup Hill, London, NW6 7QL",
						"Point": {
							"coordinates": "-.204633341254655960,51.546879502456840000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kilburn Park",
					"contactDetails": {
						"address": "Kilburn Park Station, London Underground Ltd., Cambridge Avenue, London, NW6 5AD",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							3,
							"no",
							1,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Cambridge Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 4 x 15 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Kilburn Park Station",
						"description": "Kilburn Park Station, London Underground Ltd., Cambridge Avenue, London, NW6 5AD",
						"Point": {
							"coordinates": "-.193965947368527200,51.535069084357000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kingsbury",
					"contactDetails": {
						"address": "Kingsbury Station, London Underground Ltd., Kingsbury Rd, London, NW9 9EG",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							0,
							3,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Kingsbury Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "12, 11, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "14:00"
										},
										{
											"from": "15:30",
											"to": "20:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Kingsbury Station",
						"description": "Kingsbury Station, London Underground Ltd., Kingsbury Rd, London, NW9 9EG",
						"Point": {
							"coordinates": "-.278799057434066500,51.584756866190325000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Knightsbridge",
					"contactDetails": {
						"address": "Knightsbridge Station, London Underground Ltd., Sloane St, London, SW1",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							5,
							13,
							"no",
							1,
							1,
							12,
							"no",
							13,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Knightsbridge (North side)",
								"entranceToBookingHall": "21, 8 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Knightsbridge (South Side)",
								"entranceToBookingHall": "4, 18, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Sloane Street / Brompton Road (East Side)",
								"entranceToBookingHall": "6, 13, 7 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Brompton Road (West Side)",
								"entranceToBookingHall": "15, 5, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "East",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "07:00",
											"to": "21:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "21:00"
										}
									}
								]
							},
							{
								"entrance": "West",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "08:00",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "11:30",
											"to": "18:30"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Knightsbridge Station",
						"description": "Knightsbridge Station, London Underground Ltd., Sloane St, London, SW1",
						"Point": {
							"coordinates": "-.160507091328832150,51.501551433201136000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ladbroke Grove",
					"contactDetails": {
						"address": "Ladbroke Grove Station, London Underground Ltd., Ladbroke Grove, London, W10 6HJ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Hammersmith & City"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							3,
							"no",
							1,
							"0 on platforms, 1 in ticket halls, 4 elsewhere",
							"no",
							"yes",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Ladbroke Grove",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "5, 10, 13, 14 stairs up"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "5, 10, 19, 7 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Hammersmith & City",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ladbroke Grove Station",
						"description": "Ladbroke Grove Station, London Underground Ltd., Ladbroke Grove, London, W10 6HJ",
						"Point": {
							"coordinates": "-.210861917848587150,51.517188449881736000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Lambeth North",
					"contactDetails": {
						"address": "Lambeth North Station, London Underground Ltd., 110 Westminster Bridge Rd, London, SE1 7XG",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							1,
							0,
							3,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Westminster Bridge Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift down, 20 stairs down (or 13, 3 stairs down, 3 x 17, 16 spiral stairs down, 1 step up, 1, 20 stairs down)"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Lambeth North Station",
						"description": "Lambeth North Station, London Underground Ltd., 110 Westminster Bridge Rd, London, SE1 7XG",
						"Point": {
							"coordinates": "-.111760270277701970,51.499058148698570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Lancaster Gate",
					"contactDetails": {
						"address": "Lancaster Gate Station, London Underground Ltd., Bayswater Rd, London, W2",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							5,
							"no",
							0,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bayswater Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift down, subway, 20 stairs down, (or 16, 5, 7 stairs down, 15, 3, 2, 15, 15 spiral stairs down, 13, 13 stairs down)"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Lancaster Gate Station",
						"description": "Lancaster Gate Station, London Underground Ltd., Bayswater Rd, London, W2",
						"Point": {
							"coordinates": "-.175428659257816700,51.511821534588610000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Latimer Road",
					"contactDetails": {
						"address": "Latimer Road Station, London Underground Ltd., Bramley Rd, London, W10 6SZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Hammersmith & City"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							3,
							"no",
							4,
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bramley Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 9, 20 stairs up"
							},
							"platformToTrain": {
								"trainName": "Hammersmith & City",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "11:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "13:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:30",
										"to": "13:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Latimer Road Station",
						"description": "Latimer Road Station, London Underground Ltd., Bramley Rd, London, W10 6SZ",
						"Point": {
							"coordinates": "-.217779301792146050,51.513543593897175000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Leicester Square",
					"contactDetails": {
						"address": "Leicester Square Station, London Underground Ltd., Cranbourn St, London, WC2H 0AP",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": [
							"Northern",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							6,
							15,
							"no",
							1,
							1,
							12,
							"no",
							18,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Charing Cross Road (East Side)",
								"entranceToBookingHall": "20, 13 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Charing Cross Road (West Side)",
								"entranceToBookingHall": "7, 13, 11 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Cranbourn Street",
								"entranceToBookingHall": "18, 13 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Charing Cross Road",
								"entranceToBookingHall": "19, 11 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Leicester Square Station",
						"description": "Leicester Square Station, London Underground Ltd., Cranbourn St, London, WC2H 0AP",
						"Point": {
							"coordinates": "-.128235532172760460,51.511221028367200000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Leyton",
					"contactDetails": {
						"address": "Leyton Underground Station, London Underground Ltd., High Rd, Leyton, London, E10 5PS",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							2,
							0,
							0,
							5,
							"yes",
							0,
							0,
							3,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Leyton High Road",
								"entranceToBookingHall": "2 steps up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 13 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "13, 14 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 13 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Leyton Station",
						"description": "Leyton Underground Station, London Underground Ltd., High Rd, Leyton, London, E10 5PS",
						"Point": {
							"coordinates": "-.005619879781309080,51.556432927054910000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Leytonstone",
					"contactDetails": {
						"address": "Leytonstone Station, London Underground Ltd., Church Lane, London, E11 1HE",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"yes (male, female)",
							1,
							0,
							5,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Fairlop Road",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 15 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Church Lane",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 15 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Leytonstone Station",
						"description": "Leytonstone Station, London Underground Ltd., Church Lane, London, E11 1HE",
						"Point": {
							"coordinates": ".008215047486340644,51.568185263674590000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Liverpool Street",
					"contactDetails": {
						"address": "Liverpool Street Underground Station Central, London Underground Ltd., Liverpool Street, London, EC2M 7PP",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Circle",
							"Hammersmith & City",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							3,
							0,
							9,
							42,
							"no",
							4,
							5,
							12,
							"no",
							23,
							"12 on platforms, 0 in ticket halls, 8 elsewhere",
							"yes",
							"yes",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bishopsgate (East Side)",
								"entranceToBookingHall": "16, 16 stairs down, steep ramp down, steep ramp up, 7 stairs up, to National Rail Station, lift (or 10 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Bishopsgate (West Side)",
								"entranceToBookingHall": "Walkway, lift (or 15, 15 stairs) down, or escalator (or 15, 15 stairs) down, to National Rail Station, lift (or 10 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Blomfield Street / Eldon Street (Octagon Centre)",
								"entranceToBookingHall": "Level to National Rail Station, lift (or 10 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Old Broad Street",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Liverpool Street (South Side) The Arcade",
								"entranceToBookingHall": "4, 14 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Bus Station / Liverpool Street (North Side)",
								"entranceToBookingHall": "Lift (or escalator (or 12, 16 stairs) down, 10 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle, Hammersmith & City and Metropolitan",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "ramp (or 3 steps) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "7, 7, 10 stairs up, 10, 8, 8 stairs down (or 14, 4 stairs up, 4, 8, 9 stairs down)"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "00:30"
										}
									}
								]
							},
							{
								"entrance": "Central",
								"timeIntervals": {
									"timeInterval": {
										"from": "07:00",
										"to": "20:00"
									}
								}
							},
							{
								"entrance": "Broad Street"
							}
						]
					},
					"Placemark": {
						"name": "Liverpool Street Station",
						"description": "Liverpool Street Underground Station Central, London Underground Ltd., Liverpool Street, London, EC2M 7PP",
						"Point": {
							"coordinates": "-.082965709456943840,51.517351230751740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "London Bridge",
					"contactDetails": {
						"address": "London Bridge Underground Station, London Underground Ltd., 21 Duke St Hill, London, SE1 2SW",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Jubilee",
							"Northern"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							3,
							17,
							36,
							"no",
							2,
							4,
							15,
							"no",
							8,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Northern Line Booking Hall Station Approach",
								"entranceToBookingHall": "18, 18 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Northern",
									"pathDescription": "Subway, lift* down, subway or escalator down, subway, ramp down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Bus Station",
								"entranceToBookingHall": "11, 11, 16 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Northern",
									"pathDescription": "Subway, lift* down, subway or escalator down, subway, ramp down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Railway Approach",
								"entranceToBookingHall": "18, 9 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Northern",
									"pathDescription": "Subway, lift* down, subway or escalator down, subway, ramp down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Duke Street Hill",
								"entranceToBookingHall": "10, 10, 12, 13 up, across Station Approach, 18, 18 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Northern",
									"pathDescription": "Subway, lift* down, subway or escalator down, subway, ramp down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Borough High Street",
								"entranceToBookingHall": "Lift (not yet in service) down",
								"bookingHallToPlatform": {
									"pointName": "Northern",
									"pathDescription": "Subway, lift* down, subway or escalator down, subway, ramp down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Jubilee Booking Hall - Duke Street Hill",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Jubilee",
									"pathDescription": "Lift (not yet in service) (or escalator, escalator) down"
								},
								"platformToTrain": [
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "07:15",
											"to": "23:30"
										}
									}
								]
							},
							{
								"entrance": "Borough",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "21:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:30",
											"to": "22:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "20:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "London Bridge Station",
						"description": "London Bridge Underground Station, London Underground Ltd., 21 Duke St Hill, London, SE1 2SW",
						"Point": {
							"coordinates": "-.086922404191941930,51.505499353249796000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Loughton",
					"contactDetails": {
						"address": "Loughton Station, London Underground Ltd., Old Station Rd, Roding Rd, Loughton, Essex, IG10 4PD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female)",
							1,
							0,
							2,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "12, 17 stairs up"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "17:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Loughton Station",
						"description": "Loughton Station, London Underground Ltd., Old Station Rd, Roding Rd, Loughton, Essex, IG10 4PD",
						"Point": {
							"coordinates": ".055311997154570370,51.641512759080584000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Maida Vale",
					"contactDetails": {
						"address": "Maida Vale Station, London Underground Ltd., Elgin Avenue, London, W9 1JS",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							3,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Randolph Avenue / Elgin Avenue",
							"entranceToBookingHall": "19, 7 stairs down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 4 x16 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Maida Vale Station",
						"description": "Maida Vale Station, London Underground Ltd., Elgin Avenue, London, W9 1JS",
						"Point": {
							"coordinates": "-.185625902229911570,51.529760016810314000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Manor House",
					"contactDetails": {
						"address": "Manor House Station, London Underground Ltd., Green Lanes, London, N4 1BZ",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							7,
							"no",
							1,
							0,
							"4 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Green Lanes / Finsbury Park",
								"entranceToBookingHall": "19, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Green Lanes / Manor House Corner",
								"entranceToBookingHall": "17, 16 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Green Lanes (West Side)",
								"entranceToBookingHall": "18 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Green Lanes (East Side)",
								"entranceToBookingHall": "17, 8 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Seven Sisters Road (North Side)",
								"entranceToBookingHall": "18, 9 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Seven Sisters Road / Woodberry down",
								"entranceToBookingHall": "19, 8 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Seven Sisters Road (South Side)",
								"entranceToBookingHall": "19, 8 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": 22
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Manor House Station",
						"description": "Manor House Station, London Underground Ltd., Green Lanes, London, N4 1BZ",
						"Point": {
							"coordinates": "-.095712466704881360,51.570756005284366000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Mansion House",
					"contactDetails": {
						"address": "Mansion House Station, London Underground Ltd., 38 Cannon St, London, EC4N 6JD",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							8,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							"6 snack, 0 drink",
							"5 on platforms, 0 in ticket halls, 2 elsewhere",
							"yes",
							"no",
							"taxi ranks outside station, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Garlick Hill",
								"entranceToBookingHall": "9, 15 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Victoria Street (West Side)",
								"entranceToBookingHall": "9, 15 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Victoria Street / Cannon Street (North Side)",
								"entranceToBookingHall": "20, 4 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Victoria Street / Cannon Street (South Side)",
								"entranceToBookingHall": "7, 12, 4 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Cannon Street (South Side)",
								"entranceToBookingHall": "13, 12, 4 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Bow Lane",
								"entranceToBookingHall": "13, 12, 4 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "21 stairs down or ramp up, subway 11, 12 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "6, 17 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "12:30",
									"to": "20:30"
								}
							}
						}
					},
					"Placemark": {
						"name": "Mansion House Station",
						"description": "Mansion House Station, London Underground Ltd., 38 Cannon St, London, EC4N 6JD",
						"Point": {
							"coordinates": "-.094187135312932570,51.512021200956030000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Marble Arch",
					"contactDetails": {
						"address": "Marble Arch Station, London Underground Ltd., Oxford St, London, W1R 1DD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							9,
							"no",
							2,
							0,
							"9 in ticket halls, 2 on platforms",
							"no",
							9,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Oxford Street (North Side)",
								"entranceToBookingHall": "15, 13 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Park Lane (East Side) for Oxford Street",
								"entranceToBookingHall": "19, 8 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Marble Arch Island",
								"entranceToBookingHall": "13, 14 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Park Lane / Hyde Park",
								"entranceToBookingHall": "Ramp (or 14, 15 stairs) down, subway, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Park Lane / Speakers Corner",
								"entranceToBookingHall": "14, 15 stairs down, long subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Park Lane (East Side)",
								"entranceToBookingHall": "Ramp (or 10 stairs) down, ramp down, long subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Park Lane Island",
								"entranceToBookingHall": "16, 17 stairs down, long subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "Very long subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 16 stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Marble Arch Station",
						"description": "Marble Arch Station, London Underground Ltd., Oxford St, London, W1R 1DD",
						"Point": {
							"coordinates": "-.158438046626587060,51.513543293181170000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Marylebone",
					"contactDetails": {
						"address": "Marylebone Underground Station, London Underground Ltd., Harewood Row, London, NW1 6JP",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							6,
							"no",
							1,
							0,
							"0 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"taxi ranks outside station, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Chiltern Railway Station",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 3, 6 x 17, 16 stairs) down, 19 stairs down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Marylebone Station",
						"description": "Marylebone Underground Station, London Underground Ltd., Harewood Row, London, NW1 6JP",
						"Point": {
							"coordinates": "-.163104487142123720,51.522223341970424000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Mile End",
					"contactDetails": {
						"address": "Mile End Station, London Underground Ltd., Mile End Rd, London, E3 4DH",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							7,
							"no",
							1,
							0,
							5,
							"no",
							8,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Mile End Road",
							"entranceToBookingHall": "1 step up, 7, 15 stairs down",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "4, 19 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "12, 11 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Mile End Station",
						"description": "Mile End Station, London Underground Ltd., Mile End Rd, London, E3 4DH",
						"Point": {
							"coordinates": "-.033404170381106150,51.525091871834480000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Mill Hill East",
					"contactDetails": {
						"address": "Mill Hill East Station, London Underground Ltd., Bittacy Hill, London, NW7 1BS",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							0,
							"yes Male/Female",
							0,
							0,
							"1 in ticket halls, 0 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bittacy Hill",
							"entranceToBookingHall": "Ramp up or 5 stairs up, 2 steps down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 11 stairs up"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:15",
									"to": "10:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "Mill Hill East Station",
						"description": "Mill Hill East Station, London Underground Ltd., Bittacy Hill, London, NW7 1BS",
						"Point": {
							"coordinates": "-.209894419946043500,51.608258895239280000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Monument",
					"contactDetails": {
						"address": "Monument Station, London Underground Ltd., King William St, London, EC4R 9AA",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							15,
							"no",
							1,
							2,
							"6 in ticket halls, 2 on platforms",
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Poultry (North)",
								"entranceToBookingHall": "15, 4 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Princes Street (West) & Mansion House Street",
								"entranceToBookingHall": "16, 4 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Princes Street (East) & Threadneedle Street (North)",
								"entranceToBookingHall": "9, 11 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Threadneedle Street (South)",
								"entranceToBookingHall": "19 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cornhill (North)",
								"entranceToBookingHall": "19 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cornhill (South) & Lombard Street (North)",
								"entranceToBookingHall": "16, 6 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Mansion House Place",
								"entranceToBookingHall": "20 stairs down, subway, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Bank Central Booking Hall Walbrook & Queen Victoria Street (South)",
								"entranceToBookingHall": "18 stairs down, subway (ramp down), ramp up, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Poultry (South) & Queen Victoria Street (North)",
								"entranceToBookingHall": "20 stairs down, subway (ramp down), ramp up, 2 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Escalator down, 12, 11, 10, stairs up, 12, 12 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Escalator down along the Central Line platforms, 16, 8, 13, stairs down, subway, 21 stairs down, or subway to Northern Booking Hall then as that entrance (see below)"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "2 stairs up, steep ramp down, then Travalator (or 8 x 5, 11 stairs down with a long ramp down)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then along the Southbound platform escalator (or 6 x 14 stairs) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Bank Northern Booking Hall Lombard Street",
								"entranceToBookingHall": "9, 16 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Subway to Central Booking Hall, escalator down, or lift (or 8 x 14, 6, 10 stairs) down, subway, 1, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Subway, lift, subway, lift, subway, or 8 x 14, 6, 10 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Lift (or 8 x 14, 6, 10 stairs) down, 21 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Lift, long subway, or subway to Central Booking Hall then as that entrance (see above)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then escalator (or 6 x 14 stairs ) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "King William Street",
								"entranceToBookingHall": "Lift (or 9, 16 stairs) down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central Line",
										"pathDescription": "Subway to Central Booking Hall, escalator down, or lift (or 8 x 14, 6, 10 stairs) down, subway, 1, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "Subway, lift, subway, lift, subway, or 8 x 14, 6, 10 stairs down, escalator (or 10, 16, 10 stairs) down, escalator (or 14, 3 x 15, 14 stairs) down"
									},
									{
										"pointName": "Northern Line",
										"pathDescription": "Lift (or 8 x 14, 6, 10 stairs) down, 21 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Lift, long subway, or subway to Central Booking Hall then as that entrance (see above)"
									},
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "As the Northern Line then escalator (or 6 x 14 stairs ) up, subway, 15, 14 stairs up."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Monument Circle / District Booking Hall King William Street (South)",
								"entranceToBookingHall": "16 stairs down or 16, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Fish Street Hill",
								"entranceToBookingHall": "1 or 2 steps up, 6 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Great Tower Street",
								"entranceToBookingHall": "16 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cannon Street",
								"entranceToBookingHall": "19, 5 stairs down, 5 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Monument Circle / District Booking Hall",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle / District (Monument)",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "7, 15 stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "12, 12 stairs down"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "As the District then 14, 15 stairs down, subway, escalator (or 6 x 14 stairs) down"
									},
									{
										"pointName": "Central",
										"pathDescription": "As Northern then 21 stairs up, subway, 13, 8, 16 stairs up"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "As Northern then 21 stairs up, long subway"
									},
									{
										"pointName": "Docklands",
										"pathDescription": "12, 12 stairs down, escalator (or 13, 4 x 14, 13 stairs) down, subway, escalator (or 6 x 14 stairs ) down, subway."
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Monument Station",
						"description": "Monument Station, London Underground Ltd., King William St, London, EC4R 9AA",
						"Point": {
							"coordinates": "-.088942732741562510,51.513347819184280000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Moor Park",
					"contactDetails": {
						"address": "Moor Park Station, London Underground Ltd., Sandy Lodge Lane, Rickmansworth, Herts, HA6 2JQ.",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6+6a"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							3,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "South Approach",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 14 stairs up"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Sandy Lodge Lane",
								"entranceToBookingHall": "1 step up, 14, 14 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 14 stairs up"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "06:30",
										"to": "10:00"
									},
									{
										"from": "15:30",
										"to": "17:30"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Moor Park Station",
						"description": "Moor Park Station, London Underground Ltd., Sandy Lodge Lane, Rickmansworth, Herts, HA6 2JQ.",
						"Point": {
							"coordinates": "-.432666848603920740,51.629731090477620000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Moorgate",
					"contactDetails": {
						"address": "Moorgate Station, London Underground Ltd., Moorfields, London, EC2Y 9AE",
						"phone": ""
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"Hammersmith & City",
							"Metropolitan",
							"Northern"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							6,
							25,
							"no",
							2,
							2,
							24,
							"no",
							14,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Moorfields (East Side)",
								"entranceToBookingHall": "2 steps up, through Arcade, 8, 9, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Eastbound Circle, Hammersmith & City, Metropolitan",
										"pathDescription": "Subway"
									},
									{
										"pointName": "Westbound Circle, Hammersmith & City, Metropolitan and Thameslink",
										"pathDescription": "Subway, 14, 17 stairs down, subway, 8, 9, 10 stairs up"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down (or 9, 16, 17 stairs down, 3 x15, 22 spiral stairs down, 23 stairs down)"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator down (or 9, 16, 17 stairs down, 15, 15 spiral stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Moorgate (West Side)",
								"entranceToBookingHall": "Through Arcade, 8, 9, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Eastbound Circle, Hammersmith & City, Metropolitan",
										"pathDescription": "Subway"
									},
									{
										"pointName": "Westbound Circle, Hammersmith & City, Metropolitan and Thameslink",
										"pathDescription": "Subway, 14, 17 stairs down, subway, 8, 9, 10 stairs up"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down (or 9, 16, 17 stairs down, 3 x15, 22 spiral stairs down, 23 stairs down)"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator down (or 9, 16, 17 stairs down, 15, 15 spiral stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Moorgate (East Side)",
								"entranceToBookingHall": "13, 6, 10 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Eastbound Circle, Hammersmith & City, Metropolitan",
										"pathDescription": "Subway"
									},
									{
										"pointName": "Westbound Circle, Hammersmith & City, Metropolitan and Thameslink",
										"pathDescription": "Subway, 14, 17 stairs down, subway, 8, 9, 10 stairs up"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down (or 9, 16, 17 stairs down, 3 x15, 22 spiral stairs down, 23 stairs down)"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator down (or 9, 16, 17 stairs down, 15, 15 spiral stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Moorfields (West Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Eastbound Circle, Hammersmith & City and Metropolitan and Thameslink",
										"pathDescription": "7, 16, 7 stairs down"
									},
									{
										"pointName": "Westbound Circle, Hammersmith & City and Metropolitan and Thameslink",
										"pathDescription": "11, 15, 4 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "7, 16, 7 stairs down, subway, then escalator down, subway, 20 stairs down (or 9, 16, 17 stairs down, 3 x 15, 22 spiral stairs down, 23 stairs down)"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "7, 16, 7 stairs down, subway, then escalator down (or 9, 16, 17 stairs down, 15, 15 spiral stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "22:00"
										}
									},
									{
										"timeInterval": {
											"from": "11:00",
											"to": "15:30"
										}
									}
								]
							},
							{
								"entrance": "Metropolitan"
							}
						]
					},
					"Placemark": {
						"name": "Moorgate Station",
						"description": "Moorgate Station, London Underground Ltd., Moorfields, London, EC2Y 9AE",
						"Point": {
							"coordinates": "-.089006315013091150,51.518367249884620000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Morden",
					"contactDetails": {
						"address": "Morden Underground Station, London Underground Ltd., London Rd, Morden, Surrey, SM4 5AZ",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"no",
							1,
							0,
							4,
							"yes",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "London Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Platform 1: 8, 20 stairs down Platforms 2 & 3: 15, 15 stairs down Platforms 4 & 5: 18, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Morden Station",
						"description": "Morden Underground Station, London Underground Ltd., London Rd, Morden, Surrey, SM4 5AZ",
						"Point": {
							"coordinates": "-.194790700834515200,51.402336940766870000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Mornington Crescent",
					"contactDetails": {
						"address": "Mornington Crescent Station, London Underground Ltd., Eversholt St, London, NW1 2JA",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							0,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"4 on platforms, 1 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Eversholt Street",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 18, 16 stairs down, 17, 15 spiral stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Hampstead Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 18, 16 stairs down, 17, 15 spiral stairs) down, 20 stairs down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "12:30",
										"to": "17:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Mornington Crescent Station",
						"description": "Mornington Crescent Station, London Underground Ltd., Eversholt St, London, NW1 2JA",
						"Point": {
							"coordinates": "-.138842529989899570,51.534206610602570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Neasden",
					"contactDetails": {
						"address": "Neasden Station, London Underground Ltd., Neasden Lane, London, NW10 1PH",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female, disabled/baby-changing facilities)",
							0,
							0,
							1,
							"no",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Neasden Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "8, 10, 15 stairs down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:00",
											"to": "14:30"
										},
										{
											"from": "15:30",
											"to": "20:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Neasden Station",
						"description": "Neasden Station, London Underground Ltd., Neasden Lane, London, NW10 1PH",
						"Point": {
							"coordinates": "-.249782872822431580,51.553965717461770000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Newbury Park",
					"contactDetails": {
						"address": "Newbury Park Station, London Underground Ltd., Eastern Avenue, Ilford, Essex, IG2 7RN",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							1,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Eastern Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Newbury Park Station",
						"description": "Newbury Park Station, London Underground Ltd., Eastern Avenue, Ilford, Essex, IG2 7RN",
						"Point": {
							"coordinates": ".090337313681270550,51.575572493610600000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "North Acton",
					"contactDetails": {
						"address": "North Acton Station, London Underground Ltd., Victoria Rd, London, W3 6UP",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Victoria Road",
								"entranceToBookingHall": "Long Footpath",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "13, 13 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "13, 15 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Chase Road",
								"entranceToBookingHall": "Long Footpath",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "13, 13 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "13, 15 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "North Acton Station",
						"description": "North Acton Station, London Underground Ltd., Victoria Rd, London, W3 6UP",
						"Point": {
							"coordinates": "-.259737385737795140,51.523365556364130000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "North Ealing",
					"contactDetails": {
						"address": "North Ealing Station, London Underground Ltd., Station Road, London, W5 3AF",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							"1 in ticket halls, 0 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "9 stairs up, footbridge, 11, 12 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "14 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:00",
									"to": "10:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "North Ealing Station",
						"description": "North Ealing Station, London Underground Ltd., Station Road, London, W5 3AF",
						"Point": {
							"coordinates": "-.289004979762560500,51.517555160358675000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "North Greenwich",
					"contactDetails": {
						"address": "North Greenwich Station, London Underground Ltd., 5 Millenium Way, London, SE10 0PH",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							4,
							9,
							13,
							"yes",
							1,
							3,
							9,
							"yes",
							8,
							"1 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bus Station (entry only)",
								"entranceToBookingHall": "Lift down, or 12, 12 stairs, escalator (or 13, 13, 13 stairs) down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Bus Station (exit only)",
								"entranceToBookingHall": "Lift or escalator (or 12, 12, 13, 13, 13 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Bus Station ( entry only)",
								"entranceToBookingHall": "Lift down, or 12, 12 escalator ( or 13, 13, 13 stairs) down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Bus Station (exit only)",
								"entranceToBookingHall": "Lift or escalator (or 12, 12, 13, 13, 13 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "North Greenwich Station",
						"description": "North Greenwich Station, London Underground Ltd., 5 Millenium Way, London, SE10 0PH",
						"Point": {
							"coordinates": ".003607416938325964,51.500181823992640000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "North Harrow",
					"contactDetails": {
						"address": "North Harrow Station, London Underground Ltd., Station Rd, North Harrow, Middx, HA2 7SR",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							1,
							"no",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 15, 14 stairs up"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 14, 14 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:00",
										"to": "16:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "North Harrow Station",
						"description": "North Harrow Station, London Underground Ltd., Station Rd, North Harrow, Middx, HA2 7SR",
						"Point": {
							"coordinates": "-.362223573258194200,51.584791846729885000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Northfields",
					"contactDetails": {
						"address": "Northfields Station, London Underground Ltd., Northfield Avenue, London, W13 9QU",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes",
							2,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Northfield Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 15 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Northfields Station",
						"description": "Northfields Station, London Underground Ltd., Northfield Avenue, London, W13 9QU",
						"Point": {
							"coordinates": "-.314156832664969850,51.499276482193580000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Northolt",
					"contactDetails": {
						"address": "Northolt Underground Station, London Underground Ltd., Mandeville Rd, Northolt, Middx, UB5 4AA",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female)",
							1,
							0,
							"2 in ticket halls, 1 on platforms",
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Mandeville Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "18:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Northolt Station",
						"description": "Northolt Underground Station, London Underground Ltd., Mandeville Rd, Northolt, Middx, UB5 4AA",
						"Point": {
							"coordinates": "-.368459834282661160,51.548150439002740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Northwick Park",
					"contactDetails": {
						"address": "Northwick Park Station, London Underground Ltd., Northwick Avenue, Harrow, Middx, HA3 0AT",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							3,
							"no",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Northwick Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 14 stairs up"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Northwick Park Hospital",
								"entranceToBookingHall": "Footpath, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 14 stairs up"
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "16:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Northwick Park Station",
						"description": "Northwick Park Station, London Underground Ltd., Northwick Avenue, Harrow, Middx, HA3 0AT",
						"Point": {
							"coordinates": "-.318206356876206400,51.578592841487520000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Northwood",
					"contactDetails": {
						"address": "Northwood Station, London Underground Ltd., Station Approach, Green Lane, Northwood, Middx, HA6 2XL",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							1,
							"yes",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Green Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "13:30"
										},
										{
											"from": "15:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "16:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Northwood Station",
						"description": "Northwood Station, London Underground Ltd., Station Approach, Green Lane, Northwood, Middx, HA6 2XL",
						"Point": {
							"coordinates": "-.423860793851574430,51.611159228903716000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Northwood Hills",
					"contactDetails": {
						"address": "Northwood Hills Station, London Underground Ltd., Joel St, Northwood, Middx, HA6 1NZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							1,
							"no",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Joel Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "17, 14 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "10, 10, 10 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "11:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Northwood Hills Station",
						"description": "Northwood Hills Station, London Underground Ltd., Joel St, Northwood, Middx, HA6 1NZ",
						"Point": {
							"coordinates": "-.409298630674160700,51.600494576500000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Notting Hill Gate",
					"contactDetails": {
						"address": "Notting Hill Gate Station, London Underground Ltd., Notting Hill Gate, London, W11 3HT",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							6,
							6,
							"yes",
							1,
							0,
							11,
							"no",
							10,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Notting Hill Gate (North Side)",
								"entranceToBookingHall": "18, 11 stairs down, 4 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9, 15 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9, 14 stairs down"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Escalator (or 3, 17, 17, 16 stairs) down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "Escalator (or 3, 17, 17, 17, 10 stairs) down, escalator (or 16, 13, 3 stairs) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "Escalator (or 3, 17, 17, 17, 10 stairs) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Notting Hill Gate (South Side)",
								"entranceToBookingHall": "17, 9 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9, 15 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9, 14 stairs down"
											}
										]
									},
									{
										"pointName": "Central",
										"pathDescription": "Escalator (or 3, 17, 17, 16 stairs) down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "Escalator (or 3, 17, 17, 17, 10 stairs) down, escalator (or 16, 13, 3 stairs) down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "Escalator (or 3, 17, 17, 17, 10 stairs) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Notting Hill Gate Station",
						"description": "Notting Hill Gate Station, London Underground Ltd., Notting Hill Gate, London, W11 3HT",
						"Point": {
							"coordinates": "-.196537685407762500,51.509063533643740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Oakwood",
					"contactDetails": {
						"address": "Oakwood Station, London Underground Ltd., Bramley Rd, London, N14 4UT",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							4,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bramley Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Oakwood Station",
						"description": "Oakwood Station, London Underground Ltd., Bramley Rd, London, N14 4UT",
						"Point": {
							"coordinates": "-.131841721300937210,51.647583649194110000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Old Street",
					"contactDetails": {
						"address": "Old Street Station, London Underground Ltd., Old St, London, EC1V 9NR",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							7,
							"no",
							1,
							1,
							"5 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "City Road (North East Corner of the roundabout)",
								"entranceToBookingHall": "13, 13 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Old Street (North East Corner)",
								"entranceToBookingHall": "Ramp down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Old Street ( South East Corner)",
								"entranceToBookingHall": "Ramp down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "City Road (South East Corner)",
								"entranceToBookingHall": "13, 13 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "City Road ( South West Corner)",
								"entranceToBookingHall": "11, 11 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Old Street (South West Corner)",
								"entranceToBookingHall": "Ramp down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Old Street (North West Corner )",
								"entranceToBookingHall": "Ramp down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "City Road (North West Corner)",
								"entranceToBookingHall": "12, 13 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 16, 15 or 11, 18 or 12, 17 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "Escalator (or 9 stairs, 10, 6 x 15 spiral stairs) down, subway, then 18, 18 or 17, 17 stairs up"
									}
								],
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Old Street Station",
						"description": "Old Street Station, London Underground Ltd., Old St, London, EC1V 9NR",
						"Point": {
							"coordinates": "-.087549731436462540,51.525601323369810000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Osterley",
					"contactDetails": {
						"address": "Osterley Station, London Underground Ltd., Great West Rd, Isleworth, Middx, TW7 4PU",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							"2 in ticket halls, 0 on platforms",
							"yes",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Great West Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "14, 13 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "14, 14 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "1, 8, 1 or 10, 8, 1 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "14, 13 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "14, 14 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Osterley Station",
						"description": "Osterley Station, London Underground Ltd., Great West Rd, Isleworth, Middx, TW7 4PU",
						"Point": {
							"coordinates": "-.351994404645611300,51.480928804588714000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Oval",
					"contactDetails": {
						"address": "Oval Station, London Underground Ltd., 318 Kennington Park Rd, London, SE11 4PP",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							6,
							"no",
							1,
							0,
							4,
							"no",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Clapham Road / Harleyford Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Escalator down (or 20 stairs down, 26, 26, 28 spiral stairs down, 4 steps up)"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Escalator down, 21 stairs down (or 20 stairs down, 26, 26, 28 spiral stairs down, 21 stairs down)"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Oval Station",
						"description": "Oval Station, London Underground Ltd., 318 Kennington Park Rd, London, SE11 4PP",
						"Point": {
							"coordinates": "-.112893408798067650,51.482105452338025000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Oxford Circus",
					"contactDetails": {
						"address": "Oxford Circus Station, London Underground Ltd., Oxford St, London, W1R 1AB",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Central",
							"Victoria"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							14,
							42,
							"no",
							4,
							3,
							41,
							"no",
							42,
							"18 on platforms, 0 in ticket halls, 18 elsewhere",
							"no",
							"no",
							"canopies over platform, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Oxford Street (North West Corner of Junction)",
								"entranceToBookingHall": "19, 13 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street (North East Corner)",
								"entranceToBookingHall": "18, 13 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street (South West Corner)",
								"entranceToBookingHall": "19, 12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street (South East Corner)",
								"entranceToBookingHall": "19, 12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Argyll Street (West Side) Exit Only",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Argyll Street (East Side) Exit Only",
								"entranceToBookingHall": "9, 13 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street (South East Corner) Exit Only",
								"entranceToBookingHall": "22 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Bakerloo and Victoria",
										"pathDescription": "Escalator down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Bull Ring",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:45",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Oxford Circus Station",
						"description": "Oxford Circus Station, London Underground Ltd., Oxford St, London, W1R 1AB",
						"Point": {
							"coordinates": "-.141768983668966370,51.515123799037090000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Paddington",
					"contactDetails": {
						"address": "Paddington Underground Stations, London Underground Ltd., Praed St, London, W2",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							3,
							0,
							4,
							24,
							"no",
							1,
							0,
							16,
							"no",
							20,
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"yes",
							"electronic whiteboards in ticket hall, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Praed Street",
								"entranceToBookingHall": "10 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Circle and District Only",
									"pathDescription": "10, 5, 16 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "National Rail Station Platforms 1 - 8",
								"entranceToBookingHall": "Escalator (or 11, 10 stairs) down",
								"bookingHallToPlatform": {
									"pointName": "Circle and District Only",
									"pathDescription": "",
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Short subway"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "16, 5, 10 stairs up, 10, 5, 16 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Heathrow Express Check -in Area",
								"entranceToBookingHall": "Lift* down",
								"bookingHallToPlatform": {
									"pointName": "Circle and District Only",
									"pathDescription": "",
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Short subway"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "16, 5, 10 stairs up, 10, 5, 16 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "National Rail Station (Platform 8)",
								"entranceToBookingHall": "13, 13 stairs up, footbridge",
								"bookingHallToPlatform": {
									"pointName": "Hammersmith & City Only",
									"pathDescription": "14, 14 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Praed Street / London Street",
								"entranceToBookingHall": "12, 13, 13 stairs down",
								"bookingHallToPlatform": {
									"pointName": "Bakerloo Only",
									"pathDescription": "Escalator (or 4 x 18 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "National Rail Station Platforms 1 - 8",
								"entranceToBookingHall": "Escalator (or 11, 10 stairs) down",
								"bookingHallToPlatform": {
									"pointName": "Bakerloo Only",
									"pathDescription": "Escalator (or 4 x 18 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "National Rail Station Platforms 10 - 11",
								"entranceToBookingHall": "16 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "Bakerloo Only",
									"pathDescription": "Escalator (or 4 x 18 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Heathrow Express Check - in Area",
								"entranceToBookingHall": "Lift (Only open until 9.30pm) down",
								"bookingHallToPlatform": {
									"pointName": "Bakerloo Only",
									"pathDescription": "Escalator (or 4 x 18 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "00:00"
										}
									}
								]
							},
							{
								"entrance": "Pread Street",
								"timeIntervals": {
									"timeInterval": {
										"from": "07:00",
										"to": "10:00"
									}
								}
							},
							{
								"entrance": "Bakerloo",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "21:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:30",
											"to": "21:30"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Paddington Station",
						"description": "Paddington Underground Stations, London Underground Ltd., Praed St, London, W2",
						"Point": {
							"coordinates": "-.175390006010324200,51.515310415793490000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Park Royal",
					"contactDetails": {
						"address": "Park Royal Station, London Underground Ltd., Western Avenue, London, W5 3EL",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							2,
							"no",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"subway to street."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Western Avenue / Hanger Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "16, 16 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "17, 17 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "07:00",
										"to": "10:00"
									},
									{
										"from": "16:00",
										"to": "19:00"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Park Royal Station",
						"description": "Park Royal Station, London Underground Ltd., Western Avenue, London, W5 3EL",
						"Point": {
							"coordinates": "-.284228015904849400,51.526901379245410000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Parsons Green",
					"contactDetails": {
						"address": "Parsons Green Station, London Underground Ltd., Parsons Green Lane, London, SW6 4HJ",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							2,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform (part), taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Beaconsfield Walk",
								"entranceToBookingHall": "5 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "6, 15, 21 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 11, 14 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Parsons Green Lane",
								"entranceToBookingHall": "Level (or 5 stairs down)",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "6, 15, 21 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 11, 14 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Parsons Green Station",
						"description": "Parsons Green Station, London Underground Ltd., Parsons Green Lane, London, SW6 4HJ",
						"Point": {
							"coordinates": "-.201234656583119650,51.475095330474790000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Perivale",
					"contactDetails": {
						"address": "Perivale Station, London Underground Ltd., Horsenden Lane, Greenford, Middx",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							3,
							"yes",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Horsenden Lane South",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 16, 16 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 16, 16 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "11:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Perivale Station",
						"description": "Perivale Station, London Underground Ltd., Horsenden Lane, Greenford, Middx",
						"Point": {
							"coordinates": "-.323852038492346400,51.536594089926690000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Piccadilly Circus",
					"contactDetails": {
						"address": "Piccadilly Circus Station, London Underground Ltd., Piccadilly Circus, London, W1V 9LB",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							11,
							16,
							"no",
							2,
							5,
							"14 in ticket halls, 4 on platforms",
							"no",
							32,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Glasshouse Street / Regent Street",
								"entranceToBookingHall": "22, 8, stairs down, subway (ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Regent Street (South Side)",
								"entranceToBookingHall": "19, 9 stairs down, subway, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Piccadilly (North Side)",
								"entranceToBookingHall": "19, 4 stairs down, subway, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Centre at the Circus Shopping Centre",
								"entranceToBookingHall": "Through Shopping Centre, escalator down, 7 stairs down, 4 stairs up, subway, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Piccadilly / Lower Regent Street",
								"entranceToBookingHall": "13, 12 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Lower Regent Street (East Side)",
								"entranceToBookingHall": "12, 12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Coventry Street",
								"entranceToBookingHall": "13, 13 stairs down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "London Pavillion Shopping Centre",
								"entranceToBookingHall": "Ramp up, escalator down, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, escalator down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "subway, 20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, escalator down, subway, 19 stairs down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "05:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Piccadilly Circus Station",
						"description": "Piccadilly Circus Station, London Underground Ltd., Piccadilly Circus, London, W1V 9LB",
						"Point": {
							"coordinates": "-.134006365558421630,51.510026995270750000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Pimlico",
					"contactDetails": {
						"address": "Pimlico Station, London Underground Ltd., Bessborough St, London, SW1V 2JA",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							7,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							2,
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bessborough Street (South Side)",
								"entranceToBookingHall": "Ramp (or 6 stairs) down, long ramp down, 9 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Bessborough Street (North Side)",
								"entranceToBookingHall": "Ramp (or 10, 9 stairs) down, ramp down, subway, 9 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Rampayne Street",
								"entranceToBookingHall": "18, 16 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 4 x 17, 16, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Pimlico Station",
						"description": "Pimlico Station, London Underground Ltd., Bessborough St, London, SW1V 2JA",
						"Point": {
							"coordinates": "-.133748665287791170,51.489193760110520000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Pinner",
					"contactDetails": {
						"address": "Pinner Station, London Underground Ltd., Station Approach, Pinner, Middx, HA5 5LZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes",
							0,
							0,
							1,
							"yes",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "17, 3 stairs down, subway, 10, 10 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Cecil Park",
								"entranceToBookingHall": "Subway, 13, 13 stairs up, along Northbound platform, 10, 10 stairs down, subway, 3, 17 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "17, 3 stairs down, subway, 10, 10 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "11:30"
										},
										{
											"from": "16:00",
											"to": "19:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "16:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Pinner Station",
						"description": "Pinner Station, London Underground Ltd., Station Approach, Pinner, Middx, HA5 5LZ",
						"Point": {
							"coordinates": "-.380919804150348800,51.592857630090860000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Plaistow",
					"contactDetails": {
						"address": "Plaistow Station, London Underground Ltd., Plaistow Rd, London, E15",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							2,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform, taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Plaistow Road",
							"entranceToBookingHall": "Level (or 1 step up)",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "2, 14, 14 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "15, 15 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Plaistow Station",
						"description": "Plaistow Station, London Underground Ltd., Plaistow Rd, London, E15",
						"Point": {
							"coordinates": ".017804698696490015,51.531218392483616000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Preston Road",
					"contactDetails": {
						"address": "Preston Road Station, London Underground Ltd., Preston Rd, Wembley, Middx, HA3 0PS",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							1,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Preston Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 15 stairs down"
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Preston Road Station",
						"description": "Preston Road Station, London Underground Ltd., Preston Rd, Wembley, Middx, HA3 0PS",
						"Point": {
							"coordinates": "-.295256300158967800,51.572037991815020000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Putney Bridge",
					"contactDetails": {
						"address": "Putney Bridge Station, London Underground Ltd., Station Approach, London, SW6 3UH",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							2,
							3,
							"no",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"canopies over platform (part), taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 18, 17 stairs up"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 18, 18 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Putney Bridge Station",
						"description": "Putney Bridge Station, London Underground Ltd., Station Approach, London, SW6 3UH",
						"Point": {
							"coordinates": "-.208976678487921420,51.467902222271880000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Queensbury",
					"contactDetails": {
						"address": "Queensbury Station, London Underground Ltd., Cumberland Rd, Harrow, Middx, HA8 5NP",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							0,
							0,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Queensbury Station Parade",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "8, 13, 16 stairs up"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "13:00"
										},
										{
											"from": "15:30",
											"to": "19:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "14:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Queensbury Station",
						"description": "Queensbury Station, London Underground Ltd., Cumberland Rd, Harrow, Middx, HA8 5NP",
						"Point": {
							"coordinates": "-.285785681643207800,51.594347148072560000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Queensway",
					"contactDetails": {
						"address": "Queensway Station, London Underground Ltd., Bayswater Rd, London, W2 4SS",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							1,
							0,
							5,
							"no",
							"3 snack, 4 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Queensway / Bayswater Road",
							"entranceToBookingHall": "2 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 19 stairs down, 16, 5 x 15, 16 spiral stairs down), 21 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Queensway Station",
						"description": "Queensway Station, London Underground Ltd., Bayswater Rd, London, W2 4SS",
						"Point": {
							"coordinates": "-.187434461364574480,51.510380051624610000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ravenscourt Park",
					"contactDetails": {
						"address": "Ravenscourt Park Station, London Underground Ltd., Ravenscourt Rd, London, W6 0UG",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							1,
							"no",
							"2 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Ravenscourt Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "15, 15, 15 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 3, 15 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Ravenscourt Place",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "15, 15, 15 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "17, 3, 15 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:15"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "17:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ravenscourt Park Station",
						"description": "Ravenscourt Park Station, London Underground Ltd., Ravenscourt Rd, London, W6 0UG",
						"Point": {
							"coordinates": "-.236258353945599400,51.494136531497860000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Rayners Lane",
					"contactDetails": {
						"address": "Rayners Lane Station, London Underground Ltd., Alexandra Avenue, Harrow, Middx",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes",
							1,
							0,
							"1 in ticket halls, 1 on platforms",
							"yes",
							3,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"electronic whiteboards in ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Imperial Drive / Rayners Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 18 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Rayners Lane Station",
						"description": "Rayners Lane Station, London Underground Ltd., Alexandra Avenue, Harrow, Middx",
						"Point": {
							"coordinates": "-.371005563517764870,51.574976703881340000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Redbridge",
					"contactDetails": {
						"address": "Redbridge Station, London Underground Ltd., Eastern Avenue, Ilford, Essex, IG4 5OQ",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							4,
							"yes",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Eastern Avenue / Redbridge Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "20, 8 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:00",
											"to": "13:00"
										},
										{
											"from": "16:30",
											"to": "19:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "16:00"
									}
								},
								{
									"timeInterval": [
										{
											"from": "09:00",
											"to": "15:00"
										},
										{
											"from": "16:00",
											"to": "20:00"
										}
									]
								}
							]
						}
					},
					"Placemark": {
						"name": "Redbridge Station",
						"description": "Redbridge Station, London Underground Ltd., Eastern Avenue, Ilford, Essex, IG4 5OQ",
						"Point": {
							"coordinates": ".045423116107576156,51.576301792400690000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Regent's Park",
					"contactDetails": {
						"address": "Regent's Park Station, London Underground Ltd., Marylebone Rd, London, NW1 5HA",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							4,
							"no",
							0,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Marylebone Road",
							"entranceToBookingHall": "20, 15 stairs down, ramp down",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down, 20 stairs down, 8 stairs up *(or 9 stairs down, 17, 7, 17, 7, 17, 7 spiral stairs down, 16 stairs down)"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": [
									{
										"from": "08:00",
										"to": "09:30"
									},
									{
										"from": "16:00",
										"to": "18:30"
									}
								]
							}
						}
					},
					"Placemark": {
						"name": "Regent's Park Station",
						"description": "Regent's Park Station, London Underground Ltd., Marylebone Rd, London, NW1 5HA",
						"Point": {
							"coordinates": "-.146862634752862040,51.523505503468370000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Rickmansworth",
					"contactDetails": {
						"address": "Rickmansworth Station, London Underground Ltd., Station Approach, Rickmansworth, Herts, WD3 1QY",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6a"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							4,
							"yes",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Rectory Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "14, 10, 2 stairs down, subway, 2, 10, 10 stairs up"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Level"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan Northbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Southbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "14:00"
										},
										{
											"from": "15:00",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "13:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Rickmansworth Station",
						"description": "Rickmansworth Station, London Underground Ltd., Station Approach, Rickmansworth, Herts, WD3 1QY",
						"Point": {
							"coordinates": "-.473712107018385900,51.640272706988570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Roding Valley",
					"contactDetails": {
						"address": "Roding Valley Station, London Underground Ltd., Station Way, Buckhurst Hill, Essex, IG9 6LN",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							0,
							"no",
							0,
							0,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Way",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Ramp down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "22 stairs up, footbridge, 24 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Station Approach / Cherry Tree Rise",
								"entranceToBookingHall": "2 steps up, along Westbound platform, 24 stairs up, footbridge, 22 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Ramp down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "22 stairs up, footbridge, 24 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Roding Valley Station",
						"description": "Roding Valley Station, London Underground Ltd., Station Way, Buckhurst Hill, Essex, IG9 6LN",
						"Point": {
							"coordinates": ".043864415463376070,51.617115241205420000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Rotherhithe",
					"contactDetails": {
						"address": "Rotherhithe Station, London Underground Ltd., Brunel Rd, London, SE16 4LF",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "East London"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							3,
							"no",
							0,
							0,
							"1 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Brunel Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 12, 13, 12 stairs) down, 15, 9, 15 stairs down"
							},
							"platformToTrain": {
								"trainName": "East London",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:00",
									"to": "10:30"
								}
							}
						}
					},
					"Placemark": {
						"name": "Rotherhithe Station",
						"description": "Rotherhithe Station, London Underground Ltd., Brunel Rd, London, SE16 4LF",
						"Point": {
							"coordinates": "-.052180998321318894,51.501005694266450000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Royal Oak",
					"contactDetails": {
						"address": "Royal Oak Station, London Underground Ltd., Lord Hills Bridge, London, W2 6ET",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Hammersmith & City"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							2,
							"no",
							2,
							"4 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Lord Hill's Bridge",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 20 stairs down"
							},
							"platformToTrain": {
								"trainName": "Hammersmith & City",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:30",
									"to": "10:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "Royal Oak Station",
						"description": "Royal Oak Station, London Underground Ltd., Lord Hills Bridge, London, W2 6ET",
						"Point": {
							"coordinates": "-.188230043028310500,51.519017120333290000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ruislip",
					"contactDetails": {
						"address": "Ruislip Station, London Underground Ltd., Station Approach, Ruislip, Middx, HA4 8LD",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							0,
							1,
							"yes",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Level"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "16, 6 stairs up, 6, 16 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:15",
										"to": "11:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ruislip Station",
						"description": "Ruislip Station, London Underground Ltd., Station Approach, Ruislip, Middx, HA4 8LD",
						"Point": {
							"coordinates": "-.421455074014979600,51.571449113222800000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ruislip Gardens",
					"contactDetails": {
						"address": "Ruislip Gardens Station, London Underground Ltd., West End Rd, Ruislip, Middx, HA4 6NF",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							2,
							"yes (male, female)",
							0,
							1,
							"0 in ticket halls, 1 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "West End Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "5, 16, 17 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "5, 16, 17 stairs up"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "10:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:00",
										"to": "13:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ruislip Gardens Station",
						"description": "Ruislip Gardens Station, London Underground Ltd., West End Rd, Ruislip, Middx, HA4 6NF",
						"Point": {
							"coordinates": "-.411039284928411100,51.560588503076744000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Ruislip Manor",
					"contactDetails": {
						"address": "Ruislip Manor Station, London Underground Ltd., Victoria Rd, Ruislip, Middx, HA4 9AA",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							1,
							"0 in ticket halls, 0 on platforms",
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Victoria Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "9, 12, 10, 14 stairs up"
							},
							"platformToTrain": [
								{
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "10:30"
										},
										{
											"from": "15:15",
											"to": "17:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "14:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Ruislip Manor Station",
						"description": "Ruislip Manor Station, London Underground Ltd., Victoria Rd, Ruislip, Middx, HA4 9AA",
						"Point": {
							"coordinates": "-.412345792093259500,51.573187677867050000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Russell Square",
					"contactDetails": {
						"address": "Russell Square Station, London Underground Ltd., Bernard St, London, WC1N 1LG",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							0,
							3,
							0,
							7,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bernard Street",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down, 20 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Lift* down, 19 stairs down (\n\t\t\t\t\t\t\t\t)* (or 15, 6 stairs down, 18, 6 x 17, 16, 5, 14 spiral stairs down)"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Russell Square Station",
						"description": "Russell Square Station, London Underground Ltd., Bernard St, London, WC1N 1LG",
						"Point": {
							"coordinates": "-.124310055647967780,51.522912845083240000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Seven Sisters",
					"contactDetails": {
						"address": "Seven Sisters Underground Station, London Underground Ltd., Seven Sisters Rd, London",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							2,
							0,
							4,
							13,
							"no",
							1,
							1,
							10,
							"no",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Seven Sisters Road",
								"entranceToBookingHall": "Level (or 1 step up)",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down, short subway, 19 stairs down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "",
										"path": {
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, ramp up, escalator (or 18, 16 stairs) up"
										}
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "",
										"path": {
											"heading": "SOUTHBOUND",
											"pathDescription": "Subway, ramp up, 17, 16 stairs up"
										}
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "High Road / West Green Road",
								"entranceToBookingHall": "10, 10, 13 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 17, 17, 14 stairs) down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 19 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "High Road / Seven Sisters Road",
								"entranceToBookingHall": "10, 10, 14 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 17, 17, 14 stairs) down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 19 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "High Road / Broad Lane",
								"entranceToBookingHall": "20, 11 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 17, 17, 14 stairs) down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 19 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "High Road / Earlsmead Road",
								"entranceToBookingHall": "19, 12 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "Victoria",
									"pathDescription": "Escalator (or 3, 17, 17, 14 stairs) down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "19 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Subway, 19 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "High Road",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:30",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "23:00"
										}
									}
								]
							},
							{
								"entrance": "Seven Sisters Road",
								"timeIntervals": [
									{
										"timeInterval": [
											{
												"from": "06:00",
												"to": "14:00"
											},
											{
												"from": "16:30",
												"to": "20:00"
											}
										]
									},
									{
										"timeInterval": [
											{
												"from": "07:00",
												"to": "15:00"
											},
											{
												"from": "17:00",
												"to": "19:00"
											}
										]
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "15:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Seven Sisters Station",
						"description": "Seven Sisters Underground Station, London Underground Ltd., Seven Sisters Rd, London",
						"Point": {
							"coordinates": "-.072491881494998600,51.583354184664740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Shadwell",
					"contactDetails": {
						"address": "Shadwell Station, London Underground Ltd., Cable St, London, E1 2QE",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "East London"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							0,
							0,
							"1 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Watney Street (DLR Station)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 3 x 16 stairs) up"
								},
								"platformToTrain": [
									{
										"trainName": "East London",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Cable Street (East London Line Station)",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 10, 11, 10, 9, 7, 9 stairs) down, then",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "7, 15 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "7, 16 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "East London",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Docklands",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "18:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Shadwell Station",
						"description": "Shadwell Station, London Underground Ltd., Cable St, London, E1 2QE",
						"Point": {
							"coordinates": "-.056904475684454184,51.511228978184640000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Sloane Square",
					"contactDetails": {
						"address": "Sloane Square Station, London Underground Ltd., Sloane Square, London, SW1W 8BB",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							7,
							"no",
							2,
							0,
							"3 in ticket halls, 2 on platforms",
							"no",
							9,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Sloane Square",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "20, 14, 16 stairs down*"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "12, 7, 12, 17 stairs down* (\n\t\t\t\t\t\t\t\t)*( Escalator up only from platforms)"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Circle",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Sloane Square Station",
						"description": "Sloane Square Station, London Underground Ltd., Sloane Square, London, SW1W 8BB",
						"Point": {
							"coordinates": "-.156486231690913330,51.492287824097220000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Snaresbrook",
					"contactDetails": {
						"address": "Snaresbrook Station, London Underground Ltd., Station Approach, London, E11 1QE",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							"3 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach / Car Park",
								"entranceToBookingHall": "3 steps up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "10, 11 stairs up, footbridge, 11, 10 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Central Eastbound",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "High Street (South Side)",
								"entranceToBookingHall": "12, 7, 8, 9 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "10, 11 stairs up, footbridge, 11, 10 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Central Eastbound",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "High Street (North Side)",
								"entranceToBookingHall": "15, 9, 16, 3 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "10, 11 stairs up, footbridge, 11, 10 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Central Eastbound",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "High Street (South Side)",
								"entranceToBookingHall": "9, 20, 2 stairs up, along Westbound platform, 10, 11 stairs up, footbridge, 11, 10 down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": ""
								},
								"platformToTrain": [
									{
										"trainName": "Central Eastbound",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:00",
											"to": "13:30"
										},
										{
											"from": "16:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "18:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Snaresbrook Station",
						"description": "Snaresbrook Station, London Underground Ltd., Station Approach, London, E11 1QE",
						"Point": {
							"coordinates": ".021490462438689930,51.580827019760860000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Ealing",
					"contactDetails": {
						"address": "South Ealing Station, London Underground Ltd., South Ealing Rd, London, W5 4QB",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "South Ealing Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "South Ealing Station",
						"description": "South Ealing Station, London Underground Ltd., South Ealing Rd, London, W5 4QB",
						"Point": {
							"coordinates": "-.307018839246706250,51.501367936344180000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Harrow",
					"contactDetails": {
						"address": "South Harrow Station, London Underground Ltd., South Hill Ave, Harrow, Middx, HA2 8HN",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							1,
							0,
							3,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Northolt Road",
							"entranceToBookingHall": "2 or 3 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "20, 20 stairs up"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "13:00"
										},
										{
											"from": 1600,
											"to": "19:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "South Harrow Station",
						"description": "South Harrow Station, London Underground Ltd., South Hill Ave, Harrow, Middx, HA2 8HN",
						"Point": {
							"coordinates": "-.352211570870426400,51.564677570548550000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Kensington",
					"contactDetails": {
						"address": "South Kensington Station, London Underground Ltd., Pelham St, London, SW7 2NB",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							5,
							10,
							"no",
							2,
							2,
							21,
							"no",
							26,
							"12 on platforms, 0 in ticket halls, 4 elsewhere",
							"no",
							"no",
							"canopies over platform (Dist / Circ), taxi ranks outside station, post office style queuing for tickets, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Pelham Street",
								"entranceToBookingHall": "Slight ramp up, through Arcade, 13, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "13, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, escalator down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "17 stairs up"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Thurloe Street",
								"entranceToBookingHall": "Through Arcade, 13, 3 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "13, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, escalator down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "17 stairs up"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Exhibition Road / Science Museum",
								"entranceToBookingHall": "10, 14 stairs down, very long subway, 8 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "13, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, escalator down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "17 stairs up"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Cromwell Road / Natural History Museum",
								"entranceToBookingHall": "15, 16 stairs down, long subway, 8 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "13, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, escalator down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "17 stairs up"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Exhibition Road / Ismaili Centre",
								"entranceToBookingHall": "14, 14 stairs down, subway, 8 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "13, 12 stairs down"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down, subway, escalator down, then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "17 stairs up"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "South Kensington Station",
						"description": "South Kensington Station, London Underground Ltd., Pelham St, London, SW7 2NB",
						"Point": {
							"coordinates": "-.173922310883827400,51.493999872763690000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Ruislip",
					"contactDetails": {
						"address": "South Ruislip Station, London Underground Ltd., Station Approach, Ruislip, Middx, HA4 6DP",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							"1 in ticket halls, 1 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 16 stairs up"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "South Ruislip Station",
						"description": "South Ruislip Station, London Underground Ltd., Station Approach, Ruislip, Middx, HA4 6DP",
						"Point": {
							"coordinates": "-.398658757175952700,51.556516957971670000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Wimbledon",
					"contactDetails": {
						"address": "South Wimbledon Station, London Underground Ltd., High St, London, SW19 1DE",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							0,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Morden Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 5 x 15 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:00",
											"to": "13:30"
										},
										{
											"from": "15:30",
											"to": "20:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "South Wimbledon Station",
						"description": "South Wimbledon Station, London Underground Ltd., High St, London, SW19 1DE",
						"Point": {
							"coordinates": "-.191979094023124400,51.415280365884330000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Woodford",
					"contactDetails": {
						"address": "South Woodford Station, London Underground Ltd., George Lane, London, E18 1JJ",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							2,
							0,
							0,
							7,
							"yes (male, female)",
							1,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "George Lane (East)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "7, 15, 8 stairs up, footbridge, 8, 15 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "7 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "George Lane (West)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "15, 8 stairs up, footbridge, 8, 15 down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Eastbound",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "16:30"
										}
									}
								]
							},
							{
								"entrance": "Westbound",
								"timeIntervals": {
									"timeInterval": {
										"from": "06:30",
										"to": "10:30"
									}
								}
							}
						]
					},
					"Placemark": {
						"name": "South Woodford Station",
						"description": "South Woodford Station, London Underground Ltd., George Lane, London, E18 1JJ",
						"Point": {
							"coordinates": ".027317133742799650,51.591725648273090000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Southfields",
					"contactDetails": {
						"address": "Southfields Station, Wimbledon Park Rd, London, SW18",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							2,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform (part), taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Wimbledon Park Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "10, 10, 10 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "District Eastbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Westbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:45"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Southfields Station",
						"description": "Southfields Station, Wimbledon Park Rd, London, SW18",
						"Point": {
							"coordinates": "-.206537544055385570,51.444931327018910000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Southgate",
					"contactDetails": {
						"address": "Southgate Station, London Underground Ltd., High St, London, N14",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							7,
							"no",
							1,
							0,
							"0 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Parade (Southgate Circus)",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 3, 3 x 17, 5 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Southgate Station",
						"description": "Southgate Station, London Underground Ltd., High St, London, N14",
						"Point": {
							"coordinates": "-.127758393371046300,51.632319710071860000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Southwark",
					"contactDetails": {
						"address": "Southwark Station, London Underground Ltd., 68 - 70 Blackfriars Rd, London, SE1 8NW",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							2,
							8,
							19,
							"no",
							1,
							0,
							7,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "The Cut",
							"entranceToBookingHall": "Lift (or 15, 7 stairs) down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 2 x escalators, 14 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "07:00",
											"to": "20:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "17:00"
										}
									},
									{
										"timeInterval": {
											"from": "10:30",
											"to": "19:00"
										}
									}
								]
							},
							{
								"entrance": "West"
							}
						]
					},
					"Placemark": {
						"name": "Southwark Station",
						"description": "Southwark Station, London Underground Ltd., 68 - 70 Blackfriars Rd, London, SE1 8NW",
						"Point": {
							"coordinates": "-.105091836006184110,51.503843006939000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stamford Brook",
					"contactDetails": {
						"address": "Stamford Brook Station, London Underground Ltd., Goldhawk Rd, London, W6",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							2,
							"no",
							"2 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Prebend Gardens",
								"entranceToBookingHall": "Level footpath",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "4, 10, 16, 15 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "4, 13, 13, 15 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Goldhawk Road",
								"entranceToBookingHall": "Level footpath",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "4, 10, 16, 15 stairs up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "4, 13, 13, 15 stairs up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Station opens at 6.55am on Sundays",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": ""
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "18:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Stamford Brook Station",
						"description": "Stamford Brook Station, London Underground Ltd., Goldhawk Rd, London, W6",
						"Point": {
							"coordinates": "-.245453795237972340,51.494796231456820000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stanmore",
					"contactDetails": {
						"address": "Stanmore Station, London Underground Ltd., London Rd, Stanmore, Middx, HA7 4PD",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							0,
							3,
							"yes",
							"3 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"taxi ranks outside station, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "London Road (Main Entrance)",
								"entranceToBookingHall": "16, 16, 16 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "London Road (Bus Station)",
								"entranceToBookingHall": "10, 15 stairs down, footpath, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "Ramp (or 16 stairs) up, footpath, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Stanmore Station",
						"description": "Stanmore Station, London Underground Ltd., London Rd, Stanmore, Middx, HA7 4PD",
						"Point": {
							"coordinates": "-.303108171358637650,51.619618336838600000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stepney Green",
					"contactDetails": {
						"address": "Stepney Green Station, London Underground Ltd., Mile End Rd, London, E1 4AQ",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"4 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Mile End Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "9, 15, 20 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "9, 15 stairs down, subway, 20 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Stepney Green Station",
						"description": "Stepney Green Station, London Underground Ltd., Mile End Rd, London, E1 4AQ",
						"Point": {
							"coordinates": "-.046458666350820540,51.521910629627830000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stockwell",
					"contactDetails": {
						"address": "Stockwell Station, London Underground Ltd., Clapham Rd, London, SW9 9AE",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": [
							"Northern",
							"Victoria"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							7,
							"no",
							1,
							0,
							13,
							"no",
							9,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Clapham Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Escalator (or 3, 4 x 17, 7 stairs) down, 19 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "Escalator (or 3, 4 x 17, 7 stairs) down, subway, 17 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:15",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:45",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Stockwell Station",
						"description": "Stockwell Station, London Underground Ltd., Clapham Rd, London, SW9 9AE",
						"Point": {
							"coordinates": "-.122909311662102960,51.472166538615750000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stratford",
					"contactDetails": {
						"address": "Stratford Station BR Station St, London, E15 1DE",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Jubilee"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							2,
							5,
							2,
							23,
							"yes",
							2,
							2,
							13,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Bus Station",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": [
								{
									"pointName": "Central and First Great Eastern",
									"pathDescription": "Long ramp down, subway, then",
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Lift* (or 14, 14 stairs) up"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Lift* (or 15, 15 stairs) up"
										}
									]
								},
								{
									"pointName": "Docklands",
									"pathDescription": "As Westbound Central Line"
								},
								{
									"pointName": "Jubilee",
									"pathDescription": "Lift (or escalator or 14, 14 stairs) up, footbridge, lift (or escalator or 14, 14 stairs) down"
								},
								{
									"pointName": "Silverlink",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "As Jubilee then ramp down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Ramp down"
										}
									]
								}
							],
							"platformToTrain": [
								{
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								},
								{
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:15",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "05:15",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:15",
											"to": "23:30"
										}
									}
								]
							},
							{
								"entrance": "Jubilee",
								"timeIntervals": {
									"timeInterval": {
										"from": "07:00",
										"to": "10:30"
									}
								}
							}
						]
					},
					"Placemark": {
						"name": "Stratford Station",
						"description": "Stratford Station BR Station St, London, E15 1DE",
						"Point": {
							"coordinates": "-.003195329570308264,51.541309265966866000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Sudbury Hill",
					"contactDetails": {
						"address": "Sudbury Hill Underground Station, London Underground Ltd., Greenford Rd, Harrow, Middx, HA1 3RA",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							2,
							0,
							3,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Greenford Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Piccadilly",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "12:30"
										},
										{
											"from": "16:00",
											"to": "20:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "15:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Sudbury Hill Station",
						"description": "Sudbury Hill Underground Station, London Underground Ltd., Greenford Rd, Harrow, Middx, HA1 3RA",
						"Point": {
							"coordinates": "-.336215632044355560,51.556996189234300000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Sudbury Town",
					"contactDetails": {
						"address": "Sudbury Town Station, London Underground Ltd., Station Approach, Wembley, Middx, HA0 2LA",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"yes",
							1,
							0,
							1,
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Ramp (or 14 stairs) up, walkway, ramp (or 11, 8 stairs) down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Orchard Gate",
								"entranceToBookingHall": "Ramp (or 11, 8 stairs) up, walkway, ramp (or 14 stairs) down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Ramp (or 14 stairs) up, walkway, ramp (or 11, 8 stairs) down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Piccadilly Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "11:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Sudbury Town Station",
						"description": "Sudbury Town Station, London Underground Ltd., Station Approach, Wembley, Middx, HA0 2LA",
						"Point": {
							"coordinates": "-.315482697033724100,51.550782456897100000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Surrey Quays",
					"contactDetails": {
						"address": "Surrey Quays Station, London Underground Ltd., Lower Rd, London, SE16 2UF",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "East London"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							4,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Lower Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "15, 10 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Footbridge, 13, 12 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "East London",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Rotherhithe Old Road",
								"entranceToBookingHall": "5 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "15, 10 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Footbridge, 13, 12 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "East London",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "07:00",
											"to": "13:30"
										},
										{
											"from": "16:00",
											"to": "18:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "15:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "18:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Surrey Quays Station",
						"description": "Surrey Quays Station, London Underground Ltd., Lower Rd, London, SE16 2UF",
						"Point": {
							"coordinates": "-.047514931071433080,51.493193457463170000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Swiss Cottage",
					"contactDetails": {
						"address": "Swiss Cottage Station, London Underground Ltd., Finchley Rd, London, NW3 6HY",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							1,
							2,
							6,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Eton Avenue",
								"entranceToBookingHall": "13, 13, 9, 3 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 17, 6 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Avenue Road (East Side)",
								"entranceToBookingHall": "5, 16, 5, 3 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 17, 6 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Avenue Road / Finchley Road",
								"entranceToBookingHall": "11, 11 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 17, 6 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Finchley Road (West Side)",
								"entranceToBookingHall": "9, 9 stairs down, subway, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 17, 6 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Belsize Road",
								"entranceToBookingHall": "Ramp up, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 3 x 17, 6 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Swiss Cottage Station",
						"description": "Swiss Cottage Station, London Underground Ltd., Finchley Rd, London, NW3 6HY",
						"Point": {
							"coordinates": "-.174759253028733900,51.543315320154384000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Temple",
					"contactDetails": {
						"address": "Temple Station, London Underground Ltd., Victoria Embankment, London, WC2R 2PH",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"no",
							1,
							0,
							4,
							"no",
							"6 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Victoria Embankment",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "16, 7, 6 (or 16, 13) stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "19, 4, 5 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle and District Eastbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Temple Place",
								"entranceToBookingHall": "10 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "16, 7, 6 (or 16, 13) stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "19, 4, 5 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle and District Eastbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Station Closed on Sundays",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": ""
								},
								"platformToTrain": [
									{
										"trainName": "Circle and District Eastbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "08:00",
									"to": "20:30"
								}
							}
						}
					},
					"Placemark": {
						"name": "Temple Station",
						"description": "Temple Station, London Underground Ltd., Victoria Embankment, London, WC2R 2PH",
						"Point": {
							"coordinates": "-.113703089738369980,51.510969984944460000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Theydon Bois",
					"contactDetails": {
						"address": "Theydon Bois Station, London Underground Ltd., Coppice Row, Theydon Bois, Essex, CM16 7EU",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							2,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Level"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "16, 6 stairs up, footbridge, 6, 16 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Theydon Bois Station",
						"description": "Theydon Bois Station, London Underground Ltd., Coppice Row, Theydon Bois, Essex, CM16 7EU",
						"Point": {
							"coordinates": ".103125376663494610,51.671711317303384000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tooting Bec",
					"contactDetails": {
						"address": "Tooting Bec Station, London Underground Ltd., Balham High Rd, London, SW17 9AH",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							0,
							3,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, taxi ranks outside station."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Tooting Bec Road / Balham High Road",
								"entranceToBookingHall": "Short ramp up, 20, 12 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Trinity Road / Balham High Road",
								"entranceToBookingHall": "19, 13 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Tooting Bec Station",
						"description": "Tooting Bec Station, London Underground Ltd., Balham High Rd, London, SW17 9AH",
						"Point": {
							"coordinates": "-.159700539935752140,51.435759628808380000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tooting Broadway",
					"contactDetails": {
						"address": "Tooting Broadway Station, London Underground Ltd., Tooting High St, London, SW17 0SU",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							8,
							"no",
							1,
							2,
							3,
							"no",
							0,
							"6 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Tooting Broadway / Tooting High Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Tooting Broadway Station",
						"description": "Tooting Broadway Station, London Underground Ltd., Tooting High St, London, SW17 0SU",
						"Point": {
							"coordinates": "-.167976763305219070,51.427435389662655000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tottenham Court Road",
					"contactDetails": {
						"address": "Tottenham Court Road Station, London Underground Ltd., Oxford St, London, W1",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": [
							"Central",
							"Northern"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							6,
							13,
							"no",
							1,
							0,
							15,
							"no",
							26,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Oxford Street / Tottenham Court Road",
								"entranceToBookingHall": "19, 17 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Oxford Street / Charing Cross Road",
								"entranceToBookingHall": "9, 8, 13, 10 stairs down, subway, ramp up",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Tottenham Court Road / New Oxford Street",
								"entranceToBookingHall": "19, 19 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Charing Cross Road / Andrew Borde Street",
								"entranceToBookingHall": "13, 13 stairs down, subway, ramp up, 20 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "New Oxford Street ( South Side)",
								"entranceToBookingHall": "10, 10 stairs down, subway, 20 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Centre Point Piazza",
								"entranceToBookingHall": "8, 14, 6 stairs down, subway, ramp up, 20 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Centre Point",
								"entranceToBookingHall": "8, 13 stairs down, subway, 20 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Central",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator down, 9, 14 stairs down, (or 17, 17, 20 stairs down or 9, 8 stairs down, subway, 14, 5 x 17 spiral stairs down, subway, 20 stairs down)"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Central",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Tottenham Court Road Station",
						"description": "Tottenham Court Road Station, London Underground Ltd., Oxford St, London, W1",
						"Point": {
							"coordinates": "-.130870518140944360,51.516209552513860000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tottenham Hale",
					"contactDetails": {
						"address": "Tottenham Hale Underground Station, London Underground Ltd., Station Rd, London, N17 9LR",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							5,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"yes",
							"3 snack, 0 drink",
							"6 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Ferry Lane (North Side)",
								"entranceToBookingHall": "4, 9 stairs down, across forecourt, 7 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Lift (or escalator or 3, 5 x 17, 11 stairs) down"
									},
									{
										"pointName": "Stansted Skytrain and W.A.G.N.",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "8 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "5, 14 stairs up, 12, 6, 10 stairs down"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Ferry Lane (South Side)",
								"entranceToBookingHall": "10, 14 (or 8) stairs down, subway, 14, 5 (or 10) stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Lift (or escalator or 3, 5 x 17, 11 stairs) down"
									},
									{
										"pointName": "Stansted Skytrain and W.A.G.N.",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "8 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "5, 14 stairs up, 12, 6, 10 stairs down"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Station Road / Bus Station",
								"entranceToBookingHall": "Ramp (or 7 stairs) up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Lift (or escalator or 3, 5 x 17, 11 stairs) down"
									},
									{
										"pointName": "Stansted Skytrain and W.A.G.N.",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "8 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "5, 14 stairs up, 12, 6, 10 stairs down"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Tottenham Hale Station",
						"description": "Tottenham Hale Underground Station, London Underground Ltd., Station Rd, London, N17 9LR",
						"Point": {
							"coordinates": "-.060281116367504950,51.588045301521500000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Totteridge & Whetstone",
					"contactDetails": {
						"address": "Totteridge & Whetstone Station, London Underground Ltd., Totteridge Lane, London, N20 9QP",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Totteridge Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "16, 15 stairs down"
							},
							"platformToTrain": {
								"trainName": "Northern",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Totteridge & Whetstone Station",
						"description": "Totteridge & Whetstone Station, London Underground Ltd., Totteridge Lane, London, N20 9QP",
						"Point": {
							"coordinates": "-.179261212923982800,51.630207704762380000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tower Hill",
					"contactDetails": {
						"address": "Tower Hill Station, London Underground Ltd., Trinity Square, London, EC3N 4DJ",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							0,
							15,
							"no",
							2,
							3,
							13,
							"no",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Jubilee Walk",
								"entranceToBookingHall": "6, 3 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 14 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Trinity Square (Exit Only)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "12, 10, 15 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "12, 9, 15 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "23:30"
										}
									},
									{
										"timeInterval": {
											"from": "06:30",
											"to": "22:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "19:30"
										}
									}
								]
							},
							{
								"entrance": "Exit"
							}
						]
					},
					"Placemark": {
						"name": "Tower Hill Station",
						"description": "Tower Hill Station, London Underground Ltd., Trinity Square, London, EC3N 4DJ",
						"Point": {
							"coordinates": "-.076353695174605170,51.510065953884120000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tufnell Park",
					"contactDetails": {
						"address": "Tufnell Park Station, London Underground Ltd., Fortress Rd, London, N19 5QB",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							0,
							"no",
							0,
							0,
							"1 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Brecknock Road",
								"entranceToBookingHall": "1 step up, 3 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift* down, 11 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift* down, 11 stairs down(\n\t\t\t\t\t\t\t\t) * (or 16 stairs, 18, 4 x 17, 14 spiral stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Tufnell Park Road (exit from lifts only)",
								"entranceToBookingHall": "2 steps down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift* down, 11 stairs up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift* down, 11 stairs down(\n\t\t\t\t\t\t\t\t) * (or 16 stairs, 18, 4 x 17, 14 spiral stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Tufnell Park Station",
						"description": "Tufnell Park Station, London Underground Ltd., Fortress Rd, London, N19 5QB",
						"Point": {
							"coordinates": "-.137924881080636940,51.556666819988955000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Turnham Green",
					"contactDetails": {
						"address": "Turnham Green Station, London Underground Ltd., Turnham Green Terrace, London, W4 1LR",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"District",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"1 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform, taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Turnham Green Terrace",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "19, 19 stairs up"
								},
								"platformToTrain": [
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							},
							{
								"name": "Piccadilly Trains only stop before 6.45am and after 10.30pm Mon - Sat and All Day on Sunday",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": ""
								},
								"platformToTrain": [
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Turnham Green Station",
						"description": "Turnham Green Station, London Underground Ltd., Turnham Green Terrace, London, W4 1LR",
						"Point": {
							"coordinates": "-.254532982987942970,51.495111725298166000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Turnpike Lane",
					"contactDetails": {
						"address": "Turnpike Lane Station, London Underground Ltd., Westbury Avenue, London, N15 3NX",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							7,
							"no",
							1,
							0,
							"7 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Green Lanes / Langham Road",
								"entranceToBookingHall": "5, 16, 3 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bus Station",
								"entranceToBookingHall": "4, 16, 3 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "High Road / Wellington Corner",
								"entranceToBookingHall": "18, 5 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Turnpike Lane / Duckett's Common",
								"entranceToBookingHall": "20, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:15",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Turnpike Lane Station",
						"description": "Turnpike Lane Station, London Underground Ltd., Westbury Avenue, London, N15 3NX",
						"Point": {
							"coordinates": "-.102792275055815370,51.590296770154760000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Upminster",
					"contactDetails": {
						"address": "Upminster Station BR Station Rd, Upminster, Essex, RM14 2TD",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							0,
							"no",
							1,
							0,
							"0 in ticket halls, 0 on platforms",
							"yes",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Station Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 16 stairs down (Lift on request to Platform 3)"
							},
							"platformToTrain": [
								{
									"trainName": "District Eastbound Platform 4",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "District Westbound Platforms 3 & 5",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Upminster Station",
						"description": "Upminster Station BR Station Rd, Upminster, Essex, RM14 2TD",
						"Point": {
							"coordinates": ".251087116066800950,51.558889076169990000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Upminster Bridge",
					"contactDetails": {
						"address": "Upminster Bridge Station, London Underground Ltd., Upminster Rd, Hornchurch, Essex, RM12 6PL",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes M&F (open between 0500-1500)",
							1,
							0,
							1,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Upminster Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Subway, 13, 13 stairs up"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Upminster Bridge Station",
						"description": "Upminster Bridge Station, London Underground Ltd., Upminster Rd, Hornchurch, Essex, RM12 6PL",
						"Point": {
							"coordinates": ".235771220399919740,51.558750507947340000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Upney",
					"contactDetails": {
						"address": "Upney Station, London Underground Ltd., Upney Lane, Barking, Essex, IG11 9LS",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							"0 in ticket halls, 0 on platforms",
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Upney Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "10:30"
									}
								},
								{
									"timeInterval": {
										"from": "11:30",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Upney Station",
						"description": "Upney Station, London Underground Ltd., Upney Lane, Barking, Essex, IG11 9LS",
						"Point": {
							"coordinates": ".101565625591421570,51.538335312488270000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Upton Park",
					"contactDetails": {
						"address": "Upton Park Station, London Underground Ltd., Green St, London, E13 9AP",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							2,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Green Street",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 16 stairs down"
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "21:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Upton Park Station",
						"description": "Upton Park Station, London Underground Ltd., Green St, London, E13 9AP",
						"Point": {
							"coordinates": ".035273180129164805,51.535233303921100000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Uxbridge",
					"contactDetails": {
						"address": "Uxbridge Station, London Underground Ltd., High St, Uxbridge, Middx, UB8 1JZ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": [
							"Metropolitan",
							"Piccadilly"
						]
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							2,
							1,
							4,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"electronic whiteboards in ticket hall, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "High Street",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Bus Station",
								"entranceToBookingHall": "Ramp (or 7 stairs) down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": [
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Uxbridge Station",
						"description": "Uxbridge Station, London Underground Ltd., High St, Uxbridge, Middx, UB8 1JZ",
						"Point": {
							"coordinates": "-.478139472136282440,51.546496370460570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Vauxhall",
					"contactDetails": {
						"address": "Vauxhall Underground Station, London Underground Ltd., Vauxhall Cross, London, SE1",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": "1+2"
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							8,
							"no",
							1,
							3,
							"2 in ticket halls, 4 on platforms",
							"no",
							2,
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Vauxhall Bridge Road (West Side)",
								"entranceToBookingHall": "20, 16 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bondway / South Lambeth Road",
								"entranceToBookingHall": "10, 10 stairs down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bondway (West Side)",
								"entranceToBookingHall": "Ramp down, subway, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Kennington Lane",
								"entranceToBookingHall": "Ramp down, subway, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "South West Trains Station",
								"entranceToBookingHall": "19 stairs down, subway, ramp down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Wandsworth Road (West Side)",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x 17, 3 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:45",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Vauxhall Station",
						"description": "Vauxhall Underground Station, London Underground Ltd., Vauxhall Cross, London, SE1",
						"Point": {
							"coordinates": "-.123748951030590600,51.485733376040270000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Victoria",
					"contactDetails": {
						"address": "Victoria Underground Station, London Underground Ltd., Victoria St, London, SW1E 5ND",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Victoria"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							2,
							0,
							6,
							33,
							"yes",
							2,
							1,
							16,
							"no",
							21,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"canopies over platform, taxi ranks outside station, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Victoria Street",
								"entranceToBookingHall": "17 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "16, 7 (or 23) stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "24 stairs down"
											}
										]
									},
									{
										"pointName": "Victoria",
										"pathDescription": "4 stairs down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Terminus Place",
								"entranceToBookingHall": "1 step up, 17 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "16, 7 (or 23) stairs down"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "24 stairs down"
											}
										]
									},
									{
										"pointName": "Victoria",
										"pathDescription": "4 stairs down, subway, escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Wilton Road",
								"entranceToBookingHall": "19, 7 stairs down, short subway",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "Subway, 4 stairs up then as above"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Connex Platforms 1 - 8",
								"entranceToBookingHall": "11, 12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "Subway, 4 stairs up then as above"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Connex and Gatwick Express Platforms 9 - 19",
								"entranceToBookingHall": "12, 12 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Circle and District",
										"pathDescription": "Subway, 4 stairs up then as above"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Victoria Line",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "05:30",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "06:45",
											"to": "00:00"
										}
									}
								]
							},
							{
								"entrance": "District Line",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "23:00"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "08:45",
											"to": "21:45"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Victoria Station",
						"description": "Victoria Underground Station, London Underground Ltd., Victoria St, London, SW1E 5ND",
						"Point": {
							"coordinates": "-.143844854340144740,51.496342174731000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Walthamstow Central",
					"contactDetails": {
						"address": "Walthamstow Central Station BR Hoe St, London, E17 7LP",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": "Victoria"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							2,
							0,
							2,
							7,
							"no",
							0,
							0,
							2,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"electronic whiteboards in ticket hall, post office style queuing for tickets, subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Selborne Road",
								"entranceToBookingHall": "Ramp down",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "20, 10 stairs down, escalator (or 3, 3 x 17, 13 stairs) down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Level"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20, 10 stairs down, subway, 10, 20 stairs up"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park / Priory Avenue",
								"entranceToBookingHall": "Along Southbound W.A.G.N. platform, 20, 10 stairs down, subway, 10, 20 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "20, 10 stairs down, escalator (or 3, 3 x 17, 13 stairs) down"
									},
									{
										"pointName": "W.A.G.N.",
										"pathDescription": "",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Level"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20, 10 stairs down, subway, 10, 20 stairs up"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Victoria",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": [
										{
											"from": "09:00",
											"to": "11:00"
										},
										{
											"from": "12:30",
											"to": "23:00"
										}
									]
								}
							]
						}
					},
					"Placemark": {
						"name": "Walthamstow Central Station",
						"description": "Walthamstow Central Station BR Hoe St, London, E17 7LP",
						"Point": {
							"coordinates": "-.019918639025007567,51.582954705002570000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wanstead",
					"contactDetails": {
						"address": "Wanstead Underground Station, London Underground Ltd., The Green, London, E11 2NT",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							3,
							"no",
							1,
							0,
							4,
							"yes",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Eastern Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 12 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "2 steps down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 3, 5 x 17, 12 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "12:30"
										},
										{
											"from": "15:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "16:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Wanstead Station",
						"description": "Wanstead Underground Station, London Underground Ltd., The Green, London, E11 2NT",
						"Point": {
							"coordinates": ".028745919335254173,51.575521336921070000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wapping",
					"contactDetails": {
						"address": "Wapping Station, London Underground Ltd., Wapping High St, London, E1 9NQ",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "East London"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							2,
							0,
							3,
							"no",
							0,
							0,
							"0 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Wapping High Street",
							"entranceToBookingHall": "Slight ramp up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "2 steps up, lift down, 4, 21 stairs down or",
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "2 steps up, 3 x 15, 12, 15, 12 stairs down, 4 steps up, 4, 21 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "2 steps up, 3 x 15, 12, 15, 12, 21 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "East London",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "11:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "15:00"
									}
								},
								{
									"timeInterval": {
										"from": "10:30",
										"to": "13:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Wapping Station",
						"description": "Wapping Station, London Underground Ltd., Wapping High St, London, E1 9NQ",
						"Point": {
							"coordinates": "-.055846250896647850,51.504268283481814000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Warren Street",
					"contactDetails": {
						"address": "Warren Street Station, London Underground Ltd., Tottenham Court Rd, London, NW1 3AA",
						"phone": "0845 330 9877"
					},
					"servingLines": {
						"servingLine": [
							"Northern",
							"Victoria"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							0,
							7,
							10,
							"yes",
							1,
							0,
							6,
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 5 elsewhere",
							"no",
							"no",
							"canopies over platform, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Tottenham Court Road (West Side)",
								"entranceToBookingHall": "2 steps up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down, subway, escalator (or 3, 4 x 17, 16, 3 stairs) down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, escalator (or 3, 17, 17, 4 stairs) down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Subway, 20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Warren Street / Tottenham Court Road",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down, subway, escalator (or 3, 4 x 17, 16, 3 stairs) down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, escalator (or 3, 17, 17, 4 stairs) down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Subway, 20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Warren Street (Exit Only)",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": [
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator down, subway, escalator (or 3, 4 x 17, 16, 3 stairs) down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, escalator (or 3, 17, 17, 4 stairs) down, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "20 stairs down"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "Subway, 20 stairs down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Warren Street Station",
						"description": "Warren Street Station, London Underground Ltd., Tottenham Court Rd, London, NW1 3AA",
						"Point": {
							"coordinates": "-.138272313383213400,51.524511517547950000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Warwick Avenue",
					"contactDetails": {
						"address": "Warwick Avenue Station, London Underground Ltd., Warwick Avenue, London, W9 2PT",
						"phone": "0845 330 9872"
					},
					"servingLines": {
						"servingLine": "Bakerloo"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							2,
							4,
							"no",
							1,
							0,
							"2 in ticket halls, 2 on platforms",
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"taxi ranks outside station, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Warwick Avenue (North Side)",
								"entranceToBookingHall": "14, 13 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x15 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Warwick Avenue (South Side)",
								"entranceToBookingHall": "11, 12 stairs down, subway, 8 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator (or 4 x15 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Warwick Avenue Station",
						"description": "Warwick Avenue Station, London Underground Ltd., Warwick Avenue, London, W9 2PT",
						"Point": {
							"coordinates": "-.183678270688914820,51.523272522746110000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Waterloo",
					"contactDetails": {
						"address": "Waterloo Underground Station, London Underground Ltd., York Rd, London, SE1 7ND",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Bakerloo",
							"Jubilee",
							"Northern",
							"Waterloo & City"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							3,
							0,
							23,
							46,
							"no",
							2,
							5,
							24,
							"no",
							17,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"taxi ranks outside station, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "South West Trains Station Platform 7",
								"entranceToBookingHall": "13, 13 stairs down, subway, 3 stairs up, 13, 13 stairs down, long subway, 6 (or 5) stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, subway, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "South West Trains Station Platform 12",
								"entranceToBookingHall": "10, 10, 8 stairs down, subway, 13, 13 stairs down, long subway, 6 (or 5) stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, subway, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "South West Trains Station Platform 15",
								"entranceToBookingHall": "Escalator (or 3, 17, 17, 8 stairs) down, 6 (or 5) stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, subway, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Eurostar Station",
								"entranceToBookingHall": "Lift (or escalator) up then as platform 15",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator down, subway, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "York Road (South Side)",
								"entranceToBookingHall": "York Road (South Side) Entrance",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 3, 5 x17 stairs) down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, escalator up, through barrier, 6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Waterloo Road",
								"entranceToBookingHall": "10 stairs up, ramp up, 13, 13 stairs down, long subway, 6 (or 5) stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 3, 5 x17 stairs) down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, escalator up, through barrier, 6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "York Road (North Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": [
									{
										"pointName": "Bakerloo",
										"pathDescription": "Escalator (or 3, 5 x17 stairs) down then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "11 stairs down, ramp up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "9 stairs up"
											}
										]
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, 20 stairs down"
									},
									{
										"pointName": "Waterloo & City",
										"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, subway, escalator up, through barrier, 6 (or 5) stairs down, subway, ramp (or 14, 14 stairs) down"
									}
								],
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Waterloo Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Jubilee",
									"pathDescription": "Lift down (or 2 x escalator down)"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "South West Trains Station Platform 4",
								"entranceToBookingHall": "Lift down, along street, level",
								"bookingHallToPlatform": {
									"pointName": "Jubilee",
									"pathDescription": "Lift down (or 2 x escalator down)"
								},
								"platformToTrain": [
									{
										"trainName": "Bakerloo",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Waterloo & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main & Auxiliary Window",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:45"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "07:30",
											"to": "00:00"
										}
									}
								]
							},
							{
								"entrance": "International",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "08:00",
											"to": "23:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "23:30"
										}
									},
									{
										"timeInterval": {
											"from": "14:30",
											"to": "00:00"
										}
									}
								]
							},
							{
								"entrance": "Waterloo Road",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "07:30",
											"to": "23:30"
										}
									}
								]
							},
							{
								"entrance": "Shell Building",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "08:00",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "19:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Waterloo Station",
						"description": "Waterloo Underground Station, London Underground Ltd., York Rd, London, SE1 7ND",
						"Point": {
							"coordinates": "-.114069435807659030,51.503502207173680000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Watford",
					"contactDetails": {
						"address": "Watford Station, London Underground Ltd., Cassiobury Park Avenue, Watford, Herts, WD1 7LE",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": "6a"
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes",
							0,
							1,
							"1 in ticket halls, 1 on platforms",
							"yes",
							"0 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Cassiobury Park Avenue",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "12:30"
										},
										{
											"from": "15:00",
											"to": "18:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "14:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Watford Station",
						"description": "Watford Station, London Underground Ltd., Cassiobury Park Avenue, Watford, Herts, WD1 7LE",
						"Point": {
							"coordinates": "-.417280631945957540,51.657420971906490000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wembley Park",
					"contactDetails": {
						"address": "Wembley Park Station, London Underground Ltd., Bridge Road, Wembley, Middlesex, HA9 9AA",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Jubilee",
							"Metropolitan"
						]
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							15,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							1,
							7,
							"yes",
							7,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"taxi ranks outside station, post office style queuing for tickets."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bridge Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "14, 15 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "14, 14 stairs down or 13, 13 stairs down (special trains and and some early and late trains)"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							},
							{
								"name": "Stadium Way",
								"entranceToBookingHall": "Ramp up, subway, 18, 18 stairs up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "14, 15 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "14, 14 stairs down or 13, 13 stairs down (special trains and and some early and late trains)"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_300"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Wembley Park Station",
						"description": "Wembley Park Station, London Underground Ltd., Bridge Road, Wembley, Middlesex, HA9 9AA",
						"Point": {
							"coordinates": "-.279251008726512000,51.563260483955110000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Acton",
					"contactDetails": {
						"address": "West Acton Station, London Underground Ltd., Station Parade, London, W3 6UP",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							2,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Noel Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "19, 18 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "13:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "15:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Acton Station",
						"description": "West Acton Station, London Underground Ltd., Station Parade, London, W3 6UP",
						"Point": {
							"coordinates": "-.280993289991878060,51.517860586187880000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Brompton",
					"contactDetails": {
						"address": "West Brompton Station, London Underground Ltd., Old Brompton Rd, London, SW5 9JX",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							0,
							0,
							1,
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"canopies over platform (part)."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Old Brompton Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": [
								{
									"pointName": "District",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "26 stairs (or ramp down, 23 stairs) down (or via Connex and Silverlink see below)"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "27 stairs (or ramp down, 23 stairs) down"
										}
									]
								},
								{
									"pointName": "Connex and Silverlink",
									"pathDescription": "Ramp down, footbridge, lift (or 12, 12 stairs) down"
								}
							],
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "11:00"
										},
										{
											"from": "15:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "18:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Brompton Station",
						"description": "West Brompton Station, London Underground Ltd., Old Brompton Rd, London, SW5 9JX",
						"Point": {
							"coordinates": "-.195540834373956750,51.487256950006746000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Finchley",
					"contactDetails": {
						"address": "West Finchley Station, London Underground Ltd., Nether Street, London, N3 1NT",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							"1 in ticket halls, 0 on platforms",
							"no",
							"0 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Nether Street",
								"entranceToBookingHall": "Ramp down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 6 stairs up, footbridge, 6, 16 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Wentworth Street",
								"entranceToBookingHall": "Ramp down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 6 stairs up, footbridge, 6, 16 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:15",
									"to": "10:00"
								}
							}
						}
					},
					"Placemark": {
						"name": "West Finchley Station",
						"description": "West Finchley Station, London Underground Ltd., Nether Street, London, N3 1NT",
						"Point": {
							"coordinates": "-.188468869728233300,51.609485709772600000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Ham",
					"contactDetails": {
						"address": "West Ham Underground Station, London Underground Ltd., Manor Rd, London, E15 3BN",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Hammersmith & City",
							"Jubilee"
						]
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							2,
							6,
							4,
							"no",
							1,
							0,
							10,
							"no",
							4,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Manor Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": [
								{
									"pointName": "District / Hammersmith & City",
									"pathDescription": "Lift (or 14, 14, 14 stairs) up"
								},
								{
									"pointName": "Jubilee",
									"pathDescription": "Lift (or escalator*) up, footbridge, lift (or escalator*) down"
								},
								{
									"pointName": "c2c",
									"pathDescription": "Lift (or 12, 16 or 9, 9, 9 stairs ) up"
								},
								{
									"pointName": "Silverlink",
									"pathDescription": "Lift (or escalator*) up, footbridge, 12, 11, 12 stairs down (*or 12, 12, 12 stairs)"
								}
							],
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Jubilee",
									"platformToTrainSteps": "LEVEL_100"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Ham Station",
						"description": "West Ham Underground Station, London Underground Ltd., Manor Rd, London, E15 3BN",
						"Point": {
							"coordinates": ".005039507096672237,51.528181772941785000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Hampstead",
					"contactDetails": {
						"address": "West Hampstead Underground Station, London Underground Ltd., West End Lane, London, NW6 2LX",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							0,
							3,
							"no",
							"2 snack, 2 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "West End Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 16 stairs down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:15",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "21:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Hampstead Station",
						"description": "West Hampstead Underground Station, London Underground Ltd., West End Lane, London, NW6 2LX",
						"Point": {
							"coordinates": "-.190749850256434300,51.546701979094905000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Harrow",
					"contactDetails": {
						"address": "West Harrow Station, London Underground Ltd., Vaughan Rd, Harrow, Middx, HA1 4HE",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Metropolitan"
					},
					"zones": {
						"zone": 5
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							2,
							"yes",
							0,
							0,
							1,
							"no",
							1,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Vaughan Road",
							"entranceToBookingHall": "6 stairs up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "12, 5, 5, 9 stairs up"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "6 stairs down, along street, 5, 4, 15, 10 stairs up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Metropolitan",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": {
								"timeInterval": {
									"from": "07:15",
									"to": "10:30"
								}
							}
						}
					},
					"Placemark": {
						"name": "West Harrow Station",
						"description": "West Harrow Station, London Underground Ltd., Vaughan Rd, Harrow, Middx, HA1 4HE",
						"Point": {
							"coordinates": "-.352920630985434100,51.579778193709345000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Kensington",
					"contactDetails": {
						"address": "West Kensington Station, London Underground Ltd., North End Rd, London, W14 9NL",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							3,
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"canopies over platform, post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "North End Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "13, 16 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "15, 15 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "20:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "17:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Kensington Station",
						"description": "West Kensington Station, London Underground Ltd., North End Rd, London, W14 9NL",
						"Point": {
							"coordinates": "-.206477114705301220,51.490491685732100000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West Ruislip",
					"contactDetails": {
						"address": "West Ruislip Station, London Underground Ltd., Ickenham Rd, West Ruislip, Middlesex",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 6
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							1,
							0,
							2,
							"yes",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Ickenham Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "16, 21 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park",
								"entranceToBookingHall": "12, 12 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "16, 21 stairs down"
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "10:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "13:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "West Ruislip Station",
						"description": "West Ruislip Station, London Underground Ltd., Ickenham Rd, West Ruislip, Middlesex",
						"Point": {
							"coordinates": "-.437886436759924000,51.569528862920430000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Westbourne Park",
					"contactDetails": {
						"address": "Westbourne Park Station, London Underground Ltd., Western Rd, London, W11 1AB",
						"phone": "0845 330 9878"
					},
					"servingLines": {
						"servingLine": "Hammersmith & City"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"no",
							1,
							0,
							2,
							"no",
							3,
							"4 on platforms, 0 in ticket halls, 1 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Great Western Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "17, 16 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "16, 18 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Hammersmith & City",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "07:00",
											"to": "14:00"
										},
										{
											"from": "15:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "11:00",
										"to": "17:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Westbourne Park Station",
						"description": "Westbourne Park Station, London Underground Ltd., Western Rd, London, W11 1AB",
						"Point": {
							"coordinates": "-.200883771467904430,51.520920849526010000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Westminster",
					"contactDetails": {
						"address": "Westminster Station, London Underground Ltd., Bridge St, London, SW1A 2JR",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"Jubilee"
						]
					},
					"zones": {
						"zone": 1
					},
					"facilities": {
						"facility": [
							1,
							5,
							17,
							15,
							"no",
							1,
							4,
							21,
							"no",
							10,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"subway to street, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Bridge Street (North Side)",
								"entranceToBookingHall": "Lift (or 16 stairs) down",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Lift (or 14, 14 stairs) down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift down (or 2 x escalators down), then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "lift (or escalator) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Westminster Bridge / Houses of Parliament",
								"entranceToBookingHall": "13, 14, 15 stairs down, subway, 11 stairs up, subway (ramp up), 5 stairs (or ramp) up, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Lift (or 14, 14 stairs) down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift down (or 2 x escalators down), then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "lift (or escalator) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Westminster Pier",
								"entranceToBookingHall": "Subway, 5 stairs (or ramp) up, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Lift (or 14, 14 stairs) down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift down (or 2 x escalators down), then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "lift (or escalator) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Parliament Street (East Side)",
								"entranceToBookingHall": "10, 12 stairs down, long subway, 12 stairs up, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Lift (or 14, 14 stairs) down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift down (or 2 x escalators down), then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "lift (or escalator) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							},
							{
								"name": "Parliament Street (West Side)",
								"entranceToBookingHall": "12, 12 stairs down, subway, 4 stairs up, long subway, 12 stairs up, subway",
								"bookingHallToPlatform": [
									{
										"pointName": "District",
										"pathDescription": "Lift (or 14, 14 stairs) down"
									},
									{
										"pointName": "Jubilee",
										"pathDescription": "Lift down (or 2 x escalators down), then",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "subway"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "lift (or escalator) down"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Jubilee",
										"platformToTrainSteps": "LEVEL_100"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "00:30"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "00:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Westminster Station",
						"description": "Westminster Station, London Underground Ltd., Bridge St, London, SW1A 2JR",
						"Point": {
							"coordinates": "-.124818265200698930,51.501084583446460000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "White City",
					"contactDetails": {
						"address": "White City Station, London Underground Ltd., Wood Lane, London, W12 7RH",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							4,
							"yes (male, female)",
							1,
							1,
							5,
							"no",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Wood Lane",
							"entranceToBookingHall": "5 stairs up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "Central",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:30",
										"to": "17:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "White City Station",
						"description": "White City Station, London Underground Ltd., Wood Lane, London, W12 7RH",
						"Point": {
							"coordinates": "-.224254319227984920,51.511978113587034000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Whitechapel",
					"contactDetails": {
						"address": "Whitechapel Station, London Underground Ltd., 277 Whitechapel Rd, London, E1 1BY",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": [
							"Circle",
							"District",
							"East London",
							"Hammersmith & City"
						]
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							5,
							"no",
							1,
							0,
							"3 in ticket halls, 2 on platforms",
							"no",
							8,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"no",
							"canopies over platform, taxi ranks outside station, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Whitechapel Road",
							"entranceToBookingHall": "7 stairs down",
							"bookingHallToPlatform": [
								{
									"pointName": "District and Hammersmith & City",
									"pathDescription": "",
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "7 stairs down, 12 stairs up, 3, 21 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "7 stairs down, 12 stairs up, 12,12 stairs down"
										}
									]
								},
								{
									"pointName": "East London",
									"pathDescription": "",
									"path": {
										"heading": "NORTHBOUND",
										"pathDescription": "10, 13, 13 stairs down"
									}
								}
							],
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "East London",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "22:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Whitechapel Station",
						"description": "Whitechapel Station, London Underground Ltd., 277 Whitechapel Rd, London, E1 1BY",
						"Point": {
							"coordinates": "-.059984982962259466,51.519455246890790000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Willesden Green",
					"contactDetails": {
						"address": "Willesden Green Station, London Underground Ltd., Walm Lane, London, NW2 4QT",
						"phone": "0845 330 9871"
					},
					"servingLines": {
						"servingLine": "Jubilee"
					},
					"zones": {
						"zone": 2
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							6,
							"yes (male, female, disabled/baby-changing facilities)",
							1,
							3,
							3,
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": {
							"name": "Walm Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 16 stairs down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Willesden Green Station",
						"description": "Willesden Green Station, London Underground Ltd., Walm Lane, London, NW2 4QT",
						"Point": {
							"coordinates": "-.222410152080799300,51.549308888247985000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wimbledon Park",
					"contactDetails": {
						"address": "Wimbledon Park Station, Arthur Rd, London, SW19",
						"phone": "0845 330 9874"
					},
					"servingLines": {
						"servingLine": "District"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"no",
							1,
							0,
							"1 in ticket halls, 0 on platforms",
							"no",
							2,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							"canopies over platform (part)."
						]
					},
					"entrances": {
						"entrance": {
							"name": "Arthur Road",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "10, 10, 11 stairs down"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "07:00",
											"to": "10:00"
										},
										{
											"from": "16:30",
											"to": "18:30"
										}
									]
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "15:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:30",
										"to": "16:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Wimbledon Park Station",
						"description": "Wimbledon Park Station, Arthur Rd, London, SW19",
						"Point": {
							"coordinates": "-.199595272173123170,51.434464186025440000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wood Green",
					"contactDetails": {
						"address": "Wood Green Station, London Underground Ltd., High Rd, Wood Green, London, N22 4HH",
						"phone": "0845 330 9875"
					},
					"servingLines": {
						"servingLine": "Piccadilly"
					},
					"zones": {
						"zone": 3
					},
					"facilities": {
						"facility": [
							1,
							0,
							3,
							7,
							"no",
							1,
							0,
							"4 in ticket halls, 2 on platforms",
							"no",
							"2 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"no",
							"post office style queuing for tickets, routeways platform to ticket hall."
						]
					},
					"entrances": {
						"entrance": {
							"name": "High Road",
							"entranceToBookingHall": "Level ( or 3 steps up or down)",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator down"
							},
							"platformToTrain": [
								{
									"trainName": "Piccadilly Eastbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Westbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:15",
										"to": "23:30"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Wood Green Station",
						"description": "Wood Green Station, London Underground Ltd., High Rd, Wood Green, London, N22 4HH",
						"Point": {
							"coordinates": "-.109626380548445640,51.597476031308410000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Woodford",
					"contactDetails": {
						"address": "Woodford Station, London Underground Ltd., Snakes Lane, Woodford Green, Essex",
						"phone": "0845 330 9873"
					},
					"servingLines": {
						"servingLine": "Central"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							2,
							0,
							0,
							6,
							"yes (male, female)",
							1,
							2,
							1,
							"yes",
							5,
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"yes",
							"yes",
							"post office style queuing for tickets, subway to street."
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "The Broadway",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "16, 6 up, footbridge, 6, 16 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Snakes Lane East / Maderia Grove",
								"entranceToBookingHall": "16, 6 stairs up, footbridge, 6, 16 stairs down, then along Eastbound platform",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "As entry to Booking Hall"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Level from Snakes Lane East"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Eastbound",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "08:00",
											"to": "19:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "16:30"
										}
									}
								]
							},
							{
								"entrance": "Westbound",
								"timeIntervals": {
									"timeInterval": {
										"from": "06:30",
										"to": "10:30"
									}
								}
							}
						]
					},
					"Placemark": {
						"name": "Woodford Station",
						"description": "Woodford Station, London Underground Ltd., Snakes Lane, Woodford Green, Essex",
						"Point": {
							"coordinates": ".034037144154079255,51.607033365181010000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Woodside Park",
					"contactDetails": {
						"address": "Woodside Park Station, London Underground Ltd., Woodside Park Rd, London, N12 8SE",
						"phone": "0845 330 9879"
					},
					"servingLines": {
						"servingLine": "Northern"
					},
					"zones": {
						"zone": 4
					},
					"facilities": {
						"facility": [
							1,
							0,
							0,
							3,
							"yes (male, female)",
							0,
							0,
							1,
							"yes",
							"1 snack, 0 drink",
							"0 on platforms, 0 in ticket halls, 0 elsewhere",
							"no",
							"yes",
							""
						]
					},
					"entrances": {
						"entrance": [
							{
								"name": "Woodside Park Road Car Park",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 10 stairs up, footbridge, 11, 10 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Holden Road Car Park",
								"entranceToBookingHall": "14, 13 stairs up, footbridge, 10, 11 stairs down then along Southbound Platform",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Level from Holden Road"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "As entry to Booking Hall"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Northern",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": [
										{
											"from": "06:30",
											"to": "13:00"
										},
										{
											"from": "17:30",
											"to": "19:00"
										}
									]
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "14:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "14:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Woodside Park Station",
						"description": "Woodside Park Station, London Underground Ltd., Woodside Park Rd, London, N12 8SE",
						"Point": {
							"coordinates": "-.185421027508838540,51.617811407382945000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "All Saints",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "East India Dock Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 11 stairs down)"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "All Saints Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.012751749577122285,51.511010078082435000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Beckton",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Woolwich Manor Way",
							"entranceToBookingHall": "Ramp (or 10 stairs) up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Beckton Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".060942442359961540,51.515133282604730000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Beckton Park",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Strait Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp (or 12 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Beckton Park Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".054897746701542370,51.508943792676580000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Blackwall",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Ditchburn Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 9, 16, 4, 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Blackwall Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.007108496961494498,51.508216114618390000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Bow Church",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Bow Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 11 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Bow Church Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.020691424393872180,51.527333106708156000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Bromley-By-Bow",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "St. Leonard's Street",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "13, 8, 6 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "13, 14 stairs down"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Hammersmith & City",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "16:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Bromley-By-Bow Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.011661937058285864,51.524769937557340000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Crossharbour & London Arena",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Crossharbour",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift, (or 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Crossharbour & London Arena Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.014614325661385941,51.495698374116300000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Custom House",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Victoria Dock Road",
								"entranceToBookingHall": "Ramp (8 stairs) up",
								"bookingHallToPlatform": [
									{
										"pointName": "Dlocklands",
										"pathDescription": "lift (or 16, 16 stairs) up, footbridge, lift (or 16, 14 stairs) down ()"
									},
									{
										"pointName": "Silverlink",
										"pathDescription": "()",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "Level ()"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "Lift (or 16, 14 stairs) up, footbridge, Lift (or 16, 16 stairs) down"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "ExCel West Park & Ride",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": [
									{
										"pointName": "Dlocklands",
										"pathDescription": "lift (or 16, 16 stairs) up, footbridge, lift (or 16, 14 stairs) down ()"
									},
									{
										"pointName": "Silverlink",
										"pathDescription": "()",
										"path": [
											{
												"heading": "EASTBOUND",
												"pathDescription": "Level ()"
											},
											{
												"heading": "WESTBOUND",
												"pathDescription": "Lift (or 16, 14 stairs) up, footbridge, Lift (or 16, 16 stairs) down"
											}
										]
									}
								],
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Custom House Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".027684411363851222,51.509543816964380000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Cutty Sark",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Creek Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (2 x escalators) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Greenwich Church Street",
								"entranceToBookingHall": "",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (2 x escalators) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Cutty Sark Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.010858772708086980,51.481694371850814000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Cyprus",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Strait Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp (or 12 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Cyprus Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".063538519717122620,51.508791930274770000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Deptford Bridge",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Deptford Bridge (North Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 5 x 10 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Deptford Bridge (South Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 5, 5 x 10 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Deptford Bridge Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.021550621322944774,51.474284721273506000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Devons Road",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Devons Road",
							"entranceToBookingHall": "Ramp (or 4 steps) down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 9 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Devons Road Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.017224616322978142,51.522175080544790000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "East India",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Aspen Way",
								"entranceToBookingHall": "Lift (or 3 x 14 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or escalator or 14, 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "South Side",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 15, 16 stairs) up, walkway, lift (or 14, 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "East India Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.002748663563422358,51.509041249107980000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Edgware Road Bakerloo",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Edgware Road / Marylebone Road",
							"entranceToBookingHall": "2 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 8 stairs down, 6 x 17 spiral stairs down, 5, 11 stairs) down, then",
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "19 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "2, 16 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Edgware Road Bakerloo Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.170135073011915440,51.520183893832000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Edgware Road Circle",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Chapel Street",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "9, 12, 13 stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "9, 13, 13 stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Marylebone Road (South Side)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "10, 11, 14 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "20:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Edgware Road Circle Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.167666130737583900,51.519920474367346000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Elverson Road",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Elverson Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": {
										"heading": "NORTHBOUND",
										"pathDescription": "ramp down"
									}
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Connington Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": {
										"heading": "NORTHBOUND",
										"pathDescription": "ramp down"
									}
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Elverson Road Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.017467307436164158,51.468819427590320000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Gallions Reach",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Slip road off Eastern Access Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 12, 16, 12 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Gallions Reach Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".072220032947865110,51.509538091545025000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Greenwich",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Greenwich High Road",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift (or 10, 7, 14 stairs) up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift (or 12, 12, 7 stairs) up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Tarves Way",
								"entranceToBookingHall": "Ramp down, subway",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift (or 10, 7, 14 stairs) up"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "Lift (or 12, 12, 7 stairs) up"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Greenwich Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.014198816568398007,51.477757816350250000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Gunnersbury",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Chiswick High Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 14 stairs down"
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Grange Road / Wellesley Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "15, 14 stairs down"
								},
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Gunnersbury Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.275175034795658400,51.491793104326040000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hammersmith",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Hammersmith Broadway (South Side) (District & Piccadilly)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Walkway, lift (or 13, 13 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Caroline Street (East Side) (District & Piccadilly)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Walkway, lift (or 13, 13 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Queen Caroline Street / Hammersmith Bridge Road (District & Piccadilly)",
								"entranceToBookingHall": "13, 13 stairs down, subway, 8, 20 stairs up, walkway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Walkway, lift (or 13, 13 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Hammersmith Bridge Road (North Side) (District & Piccadilly)",
								"entranceToBookingHall": "13, 14 stairs down, subway, 8, 20 stairs up, walkway",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Walkway, lift (or 13, 13 stairs) down"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Butterwick Bus and Coach Station (District & Piccadilly)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "14, 13 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Beadon Road (Hammersmith & City)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Hammersmith Broadway (North Side) (Hammersmith & City)",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": [
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "19:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Hammersmith Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.224930071064953470,51.493497772006556000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Hammersmith (D & P)",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:00",
											"to": "00:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:00",
											"to": "00:30"
										}
									},
									{
										"timeInterval": {
											"from": "06:30",
											"to": "00:00"
										}
									}
								]
							},
							{
								"entrance": "Butterwick",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:00",
											"to": "23:15"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "23:30"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "23:00"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "Hammersmith (D & P) Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.222401730524214160,51.492569079748954000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Harlesden",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Acton Lane",
							"entranceToBookingHall": "13 stairs down, 1 step up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 13 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "13, 12 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Harlesden Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.257502755154927540,51.536192910154740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Harrow & Wealdstone",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "The Bridge, High Street Wealdstone",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 10, 17 stairs up, 14, 15 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "11, 10, 17 stairs up, 14, 14 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_300"
								}
							},
							{
								"name": "Sandridge Close",
								"entranceToBookingHall": "1 step up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "1 step down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "1 step down, 14, 14 stairs up, footbridge, 14, 15 stairs down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_300"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Harrow & Wealdstone Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.335231166241641700,51.592208827964880000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Harrow on the Hill",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach off Lowlands Road",
								"entranceToBookingHall": "13, 14 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan",
										"pathDescription": "",
										"path": {
											"heading": "NORTHBOUND",
											"pathDescription": "15, 15 stairs down"
										}
									},
									{
										"pointName": "Metropolitan Southbound and Chiltern Railway",
										"pathDescription": "5, 12, 12 stairs down"
									}
								],
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "College Road Bus Station",
								"entranceToBookingHall": "6 stairs (or ramp) up, ramp up, 16, 15 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan",
										"pathDescription": "",
										"path": {
											"heading": "NORTHBOUND",
											"pathDescription": "15, 15 stairs down"
										}
									},
									{
										"pointName": "Metropolitan Southbound and Chiltern Railway",
										"pathDescription": "5, 12, 12 stairs down"
									}
								],
								"platformToTrain": {
									"trainName": "Metropolitan",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "22:15"
									}
								},
								{
									"timeInterval": {
										"from": "07:00",
										"to": "22:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:45",
										"to": "22:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Harrow on the Hill Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.337015904256826800,51.579328867281140000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Heathrow Terminals 1, 2, 3",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Terminal 1",
								"entranceToBookingHall": "Lift (or escalator or ramp or 16, 4, 12 stairs) down, then long subway (or travalator)",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down or lift on request"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Terminal 2",
								"entranceToBookingHall": "Escalator or ramp or 14, 15 stairs down, ramp down, long subway (or travalator)",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down or lift on request"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Terminal 3 (Arrivals)",
								"entranceToBookingHall": "11, 11 stairs (or ramp) down, very long subway or 3 x travalators",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down or lift on request"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Terminal 3 (Departures)",
								"entranceToBookingHall": "Ramp down, very long subway (or 2 x travalators) (There is an escalator up only from the subway to Departures)",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down or lift on request"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Bus Station",
								"entranceToBookingHall": "Lift or escalator or 9, 11, 11, 4 stairs down",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Escalator down or lift on request"
								},
								"platformToTrain": {
									"trainName": "Piccadilly",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "05:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "05:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "05:45",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Heathrow Terminals 1, 2, 3 Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.452439130961683100,51.471219210060410000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Heron Quays",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Heron Quays",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift or 11 stairs up, 1 step down, 12, 12, 16, 16 stairs up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Heron Quays Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.021744064999687465,51.503067915299190000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Island Gardens",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Manchester Road",
							"entranceToBookingHall": "Ramp down",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 12, 8, 12, 12, 12 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Island Gardens Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.009489509781986224,51.486671636732005000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Kensal Green",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "College Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 20, 20 stairs down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Kensal Green Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.224716964703163850,51.530457666116990000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kensington (Olympia)",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Olympia Way",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Kensington (Olympia) Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.210382523117471270,51.497809167384910000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kenton",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Kenton Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "15, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Kenton Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.317164405857978500,51.581788462601410000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Kew Gardens",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Station Approach / Station Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Level"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "11, 11 stairs down, ramp down, subway, ramp up 15 stairs up (or 17, 7 stairs up, footbridge, 15, 17 stairs down), ramp (or 5 stairs) up"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "North Road",
								"entranceToBookingHall": "15 stairs down, ramp up, 11, 11 stairs up (or 17, 15 stairs up, footbridge, 7, 17 stairs down) then along Eastbound platform",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "From the North Road gate",
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "As entry to the Booking Hall"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Ramp (or 5 stairs) up"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "District Eastbound",
										"platformToTrainSteps": "LEVEL_300"
									},
									{
										"trainName": "Westbound",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Kew Gardens Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.285252328214689150,51.477029930152850000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "King's Cross St. Pancras",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Euston Road / King's Cross Forecourt",
								"entranceToBookingHall": "Metropolitan Line Booking Hall ()",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Pancras Road",
								"entranceToBookingHall": "16, 3 stairs down, subway then Subway, 11, 11 stairs down to Metropolitan Line Booking Hall or 7 stairs down to Northern, Piccadilly and Victoria Line Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "King's Cross National Rail Station ( Suburban Platforms 9 - 11 )",
								"entranceToBookingHall": "16 stairs down, subway, 5 stairs down",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "St. Pancras National Rail Station ( Platforms 1 - 4 )",
								"entranceToBookingHall": "7, 10, 12 stairs down, subway, 6, 13 stairs down, ramp down, ramp up, subway, 5 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "St. Pancras National Rail Station ( Platforms 5 - 7 )",
								"entranceToBookingHall": "7, 10, 11, 11, 6, 13 stairs down, ramp down, ramp up, subway, 5 stairs",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Euston Road / Crestfield Street",
								"entranceToBookingHall": "19, 5 stairs down, subway then Subway, 11, 11 stairs down to Metropolitan Line Booking Hall or 7 stairs down to Northern, Piccadilly and Victoria Line Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Euston Road / Belgrove Street",
								"entranceToBookingHall": "20, 5 stairs down, subway then Subway, 11, 11 stairs down to Metropolitan Line Booking Hall or 7 stairs down to Northern, Piccadilly and Victoria Line Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Euston Road / Pancras Road",
								"entranceToBookingHall": "18, 3 stairs down, subway then Subway, 11, 11 stairs down to Metropolitan Line Booking Hall or 7 stairs down to Northern, Piccadilly and Victoria Line Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "King's Cross National Rail Station ( Main Line Platforms 1 - 8 )",
								"entranceToBookingHall": "16, 5 stairs down then Subway, 11, 11 stairs down to Metropolitan Line Booking Hall or 7 stairs down to Northern, Piccadilly and Victoria Line Booking Hall",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "St. Pancras National Rail Station ( Forecourt / Taxi Rank )",
								"entranceToBookingHall": "12, 12, 12 stairs down, 16, 3 (or 18, 3 ) stairs down, subway, (or long ramp down, 1 step down, along the street, 18, 3 stairs down, subway)",
								"bookingHallToPlatform": [
									{
										"pointName": "Metropolitan, Circle, Hammersmith & City",
										"pathDescription": "Level () Victoria Line Booking Hall ()"
									},
									{
										"pointName": "Victoria",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down ()"
									},
									{
										"pointName": "Piccadilly",
										"pathDescription": "Escalator down"
									},
									{
										"pointName": "Northern",
										"pathDescription": "Escalator down, escalator (or 3, 17, 12 stairs) down"
									},
									{
										"pointName": "Thameslink",
										"pathDescription": "Escalator (or 3, 3 x 17, 11 stairs) down, along Victoria Line platform, 11, 10 stairs up, ramp up, then",
										"path": [
											{
												"heading": "NORTHBOUND",
												"pathDescription": "15, 15 stairs up"
											},
											{
												"heading": "NORTHBOUND",
												"pathDescription": "14, 14 stairs up"
											}
										]
									}
								],
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Thameslink Station Pentonville Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "Thameslink",
									"pathDescription": "",
									"path": [
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 7, 20 stairs down"
										},
										{
											"heading": "NORTHBOUND",
											"pathDescription": "16, 12, 12 (or 16, 14, 14) stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Hammersmith & City",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Metropolitan",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Northern",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Piccadilly",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "Victoria",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Main",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:00",
											"to": "01:00"
										}
									},
									{
										"timeInterval": {
											"from": "05:00",
											"to": "01:00"
										}
									},
									{
										"timeInterval": {
											"from": "06:30",
											"to": "00:30"
										}
									}
								]
							},
							{
								"entrance": "Met & Circle",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "05:00",
											"to": "00:50"
										}
									},
									{
										"timeInterval": {
											"from": "05:00",
											"to": "00:50"
										}
									},
									{
										"timeInterval": {
											"from": "07:00",
											"to": "00:15"
										}
									}
								]
							}
						]
					},
					"Placemark": {
						"name": "King's Cross St. Pancras Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.123857948142452990,51.530397237917526000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Lewisham",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Loampit Vale",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Ramp down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Lewisham Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.014706587477352798,51.466074537491664000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Limehouse",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Butcher Row",
							"entranceToBookingHall": "Level (or 6 stairs up)",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 7, 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Limehouse Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.039712576574314410,51.512498517496160000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Mudchute",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Eastferry Road",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": {
										"heading": "NORTHBOUND",
										"pathDescription": "Ramp down"
									}
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "Spindrift Avenue",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": {
										"heading": "NORTHBOUND",
										"pathDescription": "Ramp down or 12, 4 stairs down"
									}
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Mudchute Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.015091214701629630,51.490364179631120000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "New Cross",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Amersham Vale",
							"entranceToBookingHall": "Ramp up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "East London",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "New Cross Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.032594570758595160,51.476674202455730000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "New Cross Gate",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "New Cross Road",
							"entranceToBookingHall": "2 steps up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "11, 16 stairs down"
							},
							"platformToTrain": {
								"trainName": "East London",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "New Cross Gate Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.040299579158885705,51.475337384701450000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "North Wembley",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "East Lane",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "4, 15, 14 stairs down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "North Wembley Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.304155735382629300,51.562490285575436000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Poplar",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Castor Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 8, 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Poplar Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.017228773736863470,51.507488443277030000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Prince Regent",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Connaught Road",
								"entranceToBookingHall": "Lift (or 7, 16, 16, 16 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 12, 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							},
							{
								"name": "ExCel East Park & Ride",
								"entranceToBookingHall": "Ramp (or 9 stairs) down, lift (or 12, 13, 13, 12 stairs) up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Lift (or 12, 16 stairs) down"
								},
								"platformToTrain": {
									"trainName": "Docklands",
									"platformToTrainSteps": "LEVEL_100"
								}
							}
						]
					},
					"openingHours": "",
					"Placemark": {
						"name": "Prince Regent Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".033295484514232420,51.509320665460960000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Pudding Mill Lane",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Pudding Mill Lane",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Slight ramp up, lift (or 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Pudding Mill Lane Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.013174228379466220,51.534400840867900000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Queen's Park",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Salusbury Road",
							"entranceToBookingHall": "Slight ramp up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "15, 14 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "16, 14 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Queen's Park Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.204704090234202700,51.534100903446934000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Richmond",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Kew Road",
								"entranceToBookingHall": "Level (or 1 or 2 steps up)",
								"bookingHallToPlatform": [
									{
										"pointName": "District, Silverlink and Eastbound South West Trains",
										"pathDescription": "15, 9 stairs down or 1 step down from Car Park and Kew Road"
									},
									{
										"pointName": "Westbound South West Trains",
										"pathDescription": "12, 12 stairs down"
									}
								],
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Car Park / Footpath from Church Street",
								"entranceToBookingHall": "Level (or 9 stairs down), 9, 15 stairs up",
								"bookingHallToPlatform": [
									{
										"pointName": "District, Silverlink and Eastbound South West Trains",
										"pathDescription": "15, 9 stairs down or 1 step down from Car Park and Kew Road"
									},
									{
										"pointName": "Westbound South West Trains",
										"pathDescription": "12, 12 stairs down"
									}
								],
								"platformToTrain": {
									"trainName": "District",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Richmond Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.301754217686892100,51.463159640859740000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Royal Albert",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Royal Albert Dock Spine Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 16, 5 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Royal Albert Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".046216593557986540,51.508196344367040000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Royal Victoria",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Victoria Dock Road",
							"entranceToBookingHall": "Lift (or 16, 16 stairs) up",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Lift (or 16, 14 stairs) down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "Lift (or 16, 16, 8 stairs) down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Royal Victoria Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": ".018078557359541534,51.509062110622175000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Shepherd's Bush Central",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Shepherd's Bush Green",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Escalator* down, 20, 3 stairs down"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "Escalator* down, 11, 12 stairs down (\n\t\t\t\t\t\t\t\t) * (or 16, 10, 9, 9, 9, 10, 7 stairs down)"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Central Eastbound",
									"platformToTrainSteps": "LEVEL_300"
								},
								{
									"trainName": "Westbound",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:00",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "06:30",
										"to": "00:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "23:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Shepherd's Bush Central Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.226305459017774930,51.505560868490754000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Shepherd's Bush Hammersmith & City",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Uxbridge Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "14, 14, 14 stairs up"
							},
							"platformToTrain": [
								{
									"trainName": "Hammersmith & City Eastbound",
									"platformToTrainSteps": "LEVEL_200"
								},
								{
									"trainName": "Westbound",
									"platformToTrainSteps": "LEVEL_300"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:00"
									}
								},
								{
									"timeInterval": {
										"from": "09:00",
										"to": "16:30"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "Shepherd's Bush Hammersmith & City Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.226305459017774930,51.505560868490754000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Kenton",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "The Link",
								"entranceToBookingHall": "Short subway, 15, 15 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Windermere Grove",
								"entranceToBookingHall": "Subway, 15, 15 stairs up",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "Level"
								},
								"platformToTrain": {
									"trainName": "Bakerloo",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "South Kenton Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.308588675020215030,51.570171686871360000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "South Quay",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "South Quay",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 16, 6, 16, 16 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "South Quay Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.019101694079593993,51.500532011008650000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "St. James's Park",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "Broadway ( Daily until 10.30pm )",
								"entranceToBookingHall": "1 step up, 2 steps down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "9, 7, 14 (or 17, 16) stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "9, 7, 14 (or 16, 16) stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Petty France",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "9, 7, 14 (or 17, 16) stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "9, 7, 14 (or 16, 16) stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Tothill Street ( Mon - Sat only )",
								"entranceToBookingHall": "2 steps up",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "9, 7, 14 (or 17, 16) stairs down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "9, 7, 14 (or 16, 16) stairs down"
										}
									]
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							},
							{
								"name": "Palmer Street ( Mon - Fri 8.00am to 7.00pm, Sat & Sun Closed )",
								"entranceToBookingHall": "Level",
								"bookingHallToPlatform": {
									"pointName": "",
									"pathDescription": "16, 15 stairs down"
								},
								"platformToTrain": [
									{
										"trainName": "Circle",
										"platformToTrainSteps": "LEVEL_200"
									},
									{
										"trainName": "District",
										"platformToTrainSteps": "LEVEL_200"
									}
								]
							}
						]
					},
					"openingHours": {
						"openingHour": [
							{
								"entrance": "Park & Broadway",
								"timeIntervals": [
									{
										"timeInterval": {
											"from": "06:30",
											"to": "21:00"
										}
									},
									{
										"timeInterval": {
											"from": "09:00",
											"to": "17:30"
										}
									},
									{
										"timeInterval": {
											"from": "09:30",
											"to": "19:30"
										}
									}
								]
							},
							{
								"entrance": "Palmer Street"
							}
						]
					},
					"Placemark": {
						"name": "St. James's Park Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.134183744115531720,51.499345456140375000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "St. John's Wood",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Finchley Road / Acacia Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Escalator (or 3, 5 x 17, 12 stairs) down"
							},
							"platformToTrain": {
								"trainName": "Jubilee",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "06:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "07:30",
										"to": "21:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "20:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "St. John's Wood Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.174172356336729750,51.534564516315330000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "St. Paul's",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": [
							{
								"name": "St. Martin's le Grand / Cheapside",
								"entranceToBookingHall": "17, 8 stairs down, short subway",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, escalator (or 3, 17, 11 stairs) down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							},
							{
								"name": "Newgate Street",
								"entranceToBookingHall": "18, 10 stairs down",
								"bookingHallToPlatform": {
									"path": [
										{
											"heading": "EASTBOUND",
											"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down, escalator (or 3, 17, 11 stairs) down"
										},
										{
											"heading": "WESTBOUND",
											"pathDescription": "Escalator (or 3, 5 x 17, 11 stairs) down"
										}
									]
								},
								"platformToTrain": {
									"trainName": "Central",
									"platformToTrainSteps": "LEVEL_200"
								}
							}
						]
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Central",
							"timeIntervals": [
								{
									"timeInterval": {
										"from": "07:00",
										"to": "23:00"
									}
								},
								{
									"timeInterval": {
										"from": "08:30",
										"to": "19:30"
									}
								},
								{
									"timeInterval": {
										"from": "10:00",
										"to": "19:00"
									}
								}
							]
						}
					},
					"Placemark": {
						"name": "St. Paul's Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.097573654477604190,51.514801296733296000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Stonebridge Park",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "North Circular Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "14, 18 stairs up"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "19, 20 stairs up"
									}
								]
							},
							"platformToTrain": [
								{
									"trainName": "Bakerloo Northbound",
									"platformToTrainSteps": "LEVEL_100"
								},
								{
									"trainName": "Southbound",
									"platformToTrainSteps": "LEVEL_200"
								}
							]
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Stonebridge Park Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.275409247579834260,51.543922285834710000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Tower Gateway",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Minories",
							"entranceToBookingHall": "Lift (or escalator or 11, 3 x 16 stairs) up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Level"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Tower Gateway Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.074530960965560940,51.510566638763080000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Wembley Central",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "High Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "NORTHBOUND",
										"pathDescription": "16, 17 stairs down"
									},
									{
										"heading": "NORTHBOUND",
										"pathDescription": "16, 16 stairs down"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Wembley Central Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.296859445373195800,51.552329965978000000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "West India Quay",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Market Road",
							"entranceToBookingHall": "Ramp (or 11 stairs) up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Lift (or 4 x 11, 12 stairs) up"
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "West India Quay Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.020148081137071500,51.506638439327860000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Westferry",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "West India Dock Road / Limehouse Causeway",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"path": [
									{
										"heading": "EASTBOUND",
										"pathDescription": "Lift (or 14, 16, 16 stairs) up"
									},
									{
										"heading": "WESTBOUND",
										"pathDescription": "Lift (or 16, 16, 16 stairs) up"
									}
								]
							},
							"platformToTrain": {
								"trainName": "Docklands",
								"platformToTrainSteps": "LEVEL_100"
							}
						}
					},
					"openingHours": "",
					"Placemark": {
						"name": "Westferry Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.025791956499847963,51.509431782335305000,0"
						},
						"styleUrl": "#dlrStyle"
					}
				},
				{
					"name": "Willesden Junction",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Station Approach",
							"entranceToBookingHall": "1 step up",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "Across street, footbridge, 13, 13 stairs down"
							},
							"platformToTrain": {
								"trainName": "Bakerloo",
								"platformToTrainSteps": "LEVEL_300"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Willesden Junction Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.244288894517034600,51.532191497103640000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				},
				{
					"name": "Wimbledon",
					"contactDetails": {
						"address": "London Underground, 55 Broadway, London, SW1H 0BD",
						"phone": ""
					},
					"servingLines": "",
					"zones": "",
					"facilities": "",
					"entrances": {
						"entrance": {
							"name": "Wimbledon Hill Road",
							"entranceToBookingHall": "Level",
							"bookingHallToPlatform": {
								"pointName": "",
								"pathDescription": "13, 13 stairs down (or lift on request)"
							},
							"platformToTrain": {
								"trainName": "District",
								"platformToTrainSteps": "LEVEL_200"
							}
						}
					},
					"openingHours": {
						"openingHour": {
							"entrance": "Main entrance:"
						}
					},
					"Placemark": {
						"name": "Wimbledon Station",
						"description": "London Underground, 55 Broadway, London, SW1H 0BD",
						"Point": {
							"coordinates": "-.206381586903591980,51.421383719531770000,0"
						},
						"styleUrl": "#tubeStyle"
					}
				}
			]
}
]