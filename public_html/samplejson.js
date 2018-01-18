/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var smallJSONData = {
    "mode": "NORMAL",
    "vertices": [{
            "xcoord": -100,
            "scope": "",
            "name": "TEST Story 3 title",
            "topic": "Test Story 3 topic",
            "description": "Test Story 3 question",
            "synopsis": "Test Story 3 synopsis",
            "region": "Test Story 3 region",
            "definitions": "",
            "ycoord": -100,
            "_id": "#19:2",
            "_type": "vertex",
            "_label": "Story"
        },
        {
            "xcoord": 260,
            "name": "Test Driver for story 3",
            "description": "Test description for story 3",
            "ycoord": 170,
            "_id": "#29:2",
            "_type": "vertex",
            "_label": "IndirectDriver"
        },
        {
            "name": "Scientific Article",
            "timeRefFrom": 2000,
            "mainSource": "Bing Search",
            "geogFocus": "EU",
            "rating": 9,
            "description": "Scientific background on a potential sources of marine litter to support decision-making.",
            "retrievals": 120,
            "language": "English",
            "title": "Review of the causes of Marine Litter",
            "knowledgeId": "MLT_1234",
            "timeRefTo": 2014,
            "xcoord": 890,
            "commPurpose": "educate, entertain",
            "resourceURL": "http:\/\/test.com\/report1.pdf",
            "impactFactor": 1.5,
            "englishTitle": "Review of the causes of Marine Litter",
            "likes": 2000,
            "participants": 35,
            "keyWords": "chemicals, marine environment",
            "accessLevel": "Open access",
            "entryDate": "Sun May 01 00:00:00 BST 2016",
            "author": "Other, A. N.",
            "hits": 99,
            "searchString": "Bing search string here",
            "pubYear": 2014,
            "countryOrigin": "Ireland",
            "searchResultsPosition": 5,
            "ycoord": 180,
            "commPractice": "one to many",
            "pubName": "Test publisher name",
            "pubOrgType": "Scientific Knowledge Producers",
            "pubOrgSector": "Professional",
            "targetAudienceStr": "Fishermen, Actor",
            "mediaGroup": "Print Media",
            "mediaDegree": "Second Degree Media",
            "_id": "#2178:2",
            "_type": "vertex",
            "ownedBy": "Owen Molloy",
            "ownerOrg": "NUIG",
            "_label": "IndirectDriver"
        },
        {
            "name": "Flyer",
            "timeRefFrom": 2010,
            "mainSource": "Google Scholar",
            "geogFocus": "EU",
            "rating": 2,
            "description": "Blah blah",
            "retrievals": 250,
            "language": "English",
            "title": "Blah blah",
            "knowledgeId": "TST_1234",
            "timeRefTo": 2014,
            "xcoord": 200,
            "commPurpose": "interpret, comment",
            "resourceURL": "http:\/\/Blahblah.com",
            "impactFactor": 1.7,
            "englishTitle": "Blah blah",
            "likes": 200,
            "participants": 15,
            "keyWords": "test test, test 2",
            "accessLevel": "Public",
            "entryDate": "Sun Mar 01 00:00:00 GMT 2015",
            "author": "Blah blah",
            "hits": 98,
            "searchString": "Academic search string here",
            "pubYear": 2014,
            "countryOrigin": "Ireland",
            "searchResultsPosition": 6,
            "ycoord": 200,
            "commPractice": "one to many",
            "pubName": "blah blah",
            "pubOrgType": "Scientific Knowledge Producers",
            "pubOrgSector": "Professional",
            "targetAudienceStr": "Quarrying Companies, Crop Producers",
            "mediaGroup": "Print Media",
            "mediaDegree": "Second Degree Media",
            "_id": "#2211:2",
            "_type": "vertex",
            "ownedBy": "Conor McCrossan",
            "ownerOrg": "NUIG",
            "_label": "Flyer"
        }],
    "edges": [{
            "description": "Story starts",
            "linkType": "S",
            "_id": "#16:81",
            "_type": "edge",
            "_outV": "#19:2",
            "_inV": "#29:2",
            "_label": null
        },
        {
            "description": "SUPPORTS",
            "linkType": "K",
            "_id": "#13:96",
            "_type": "edge",
            "_outV": "#29:2",
            "_inV": "#2178:2",
            "_label": null
        },
        {
            "edgeYcoord": 260,
            "description": "Invisible",
            "linkType": "Invisible",
            "edgeXcoord": 90,
            "_id": "#13:84",
            "_type": "edge",
            "_outV": "#19:2",
            "_inV": "#2211:2",
            "_label": null
        },
        {
            "edgeYcoord": 80,
            "description": "Invisible",
            "linkType": "Invisible",
            "edgeXcoord": 450,
            "_id": "#14:84",
            "_type": "edge",
            "_outV": "#19:2",
            "_inV": "#2178:2",
            "_label": null
        },
        {
            "description": "SUPPORTS",
            "linkType": "K",
            "_id": "#14:94",
            "_type": "edge",
            "_outV": "#19:2",
            "_inV": "#2211:2",
            "_label": null
        }]
};

var bigJSONData = {
    "mode": "NORMAL",
    "vertices": [{
            "xcoord": -920,
            "scope": "Limited to microplastics from cosmetics, not from other sources such as deterioration of larger plastics or discharge from factories or shipping etc.",
            "name": "TEST Microplastics and cosmetics in the EU",
            "topic": "Microplastics",
            "description": "How do microplastics get into the marine environment and what harm do they do?",
            "synopsis": "Investigating the causes and effects of microplastics in the marine environment, and evaluating effectiveness of various responses to reduce this form of marine pollution.",
            "region": "EU",
            "definitions": "Microplastics are defined here as particles of less than 5mm in size.",
            "ycoord": -880,
            "_id": "#17:3",
            "_type": "vertex",
            "_label": "Story"
        },
        {
            "xcoord": -780,
            "name": "Consumption Pattern",
            "description": "More and more personal care and cosmetic products contain microplastics",
            "ycoord": -650,
            "_id": "#93:2",
            "_type": "vertex",
            "_label": "ConsumptionPatterns"
        },
        {
            "note": "",
            "name": "Driver11",
            "weight": 0.1,
            "description": "drives",
            "_id": "#2377:21",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -450,
            "name": "Manufacture of Soap and Detergents, Cleaning and Polishing Preparations, Perfumes and Toilet Preparations",
            "description": "Manufacture of personal care and cosmetic products containing microplastics",
            "ycoord": -620,
            "_id": "#673:2",
            "_type": "vertex",
            "_label": "SoapPolishPerfumes"
        },
        {
            "note": "",
            "name": "ValueChain11",
            "weight": 0.4,
            "description": "microplastics flow",
            "_id": "#2380:21",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -260,
            "name": "Sale of cosmetic products",
            "description": "Sale of cosmetic products containing microplastics by retailer",
            "ycoord": -700,
            "_id": "#469:2",
            "_type": "vertex",
            "_label": "Retail"
        },
        {
            "note": "",
            "name": "ValueChain12",
            "weight": 0.5,
            "description": "microplastics flow",
            "_id": "#2377:22",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -30,
            "name": " Use of cosmetic products ",
            "description": "Use of cosmetic products containing microplastics by consumer",
            "ycoord": -700,
            "_id": "#261:2",
            "_type": "vertex",
            "_label": "ConsumptionHousehold"
        },
        {
            "note": "",
            "name": "ValueChain13",
            "weight": 0.6,
            "description": "microplastics flow",
            "_id": "#2378:22",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 130,
            "name": "Microplastics enter the sewerage system",
            "description": "Microplastics enter the sewerage system via domestic waste water",
            "ycoord": -560,
            "_id": "#441:2",
            "_type": "vertex",
            "_label": "Sewerage"
        },
        {
            "xcoord": 250,
            "name": "Citizen",
            "description": "Citizen in the role of householder",
            "ycoord": -680,
            "_id": "#1949:2",
            "_type": "vertex",
            "_label": "Citizen"
        },
        {
            "note": "",
            "name": "Activity11",
            "weight": 0.7,
            "description": "contributes to",
            "_id": "#2379:22",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 160,
            "name": "Contamination by Synthetic Compounds",
            "description": "Microplastics Released into the Sea via Sewerage",
            "ycoord": -370,
            "_id": "#957:2",
            "_type": "vertex",
            "_label": "SyntheticCompounds"
        },
        {
            "note": "",
            "name": "Pressure11",
            "weight": 0.8,
            "description": "causes state change",
            "_id": "#2380:22",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "speciesComposition": "Decrease",
            "xcoord": 130,
            "specificComponentAffected": "Northern krill, Meganyctiphanes norvegica",
            "name": "Zooplankton",
            "description": "Contamination of Zooplankton Communities causing changes in species composition",
            "ycoord": -70,
            "_id": "#1069:2",
            "_type": "vertex",
            "_label": "Zooplankton"
        },
        {
            "name": "Flyer",
            "timeRefFrom": 2014,
            "mainSource": "Google search",
            "geogFocus": "Global",
            "rating": 6,
            "description": "Not available",
            "retrievals": 1009,
            "language": "English, Estonian, Swedish, Belarusian, Russian, Finnish, Latvian, Lithuanian, Polish",
            "title": "Microplastics Polluting our Seas",
            "knowledgeId": "MPL_2345",
            "timeRefTo": 2014,
            "xcoord": 70,
            "commPurpose": "raise awareness",
            "resourceURL": "http:\/\/www.ccb.se\/evidence2015\/Mikroplastikccb-eng.pdf",
            "impactFactor": 1.3,
            "englishTitle": "Microplastics Polluting our Seas",
            "likes": 2000,
            "participants": 150,
            "keyWords": "microplastics, marine environment, global assessment",
            "accessLevel": "Public",
            "entryDate": "Fri May 01 00:00:00 BST 2015",
            "author": "Marijana Tobin, Nadja Ziebarth",
            "hits": 99,
            "searchString": "Another search string here",
            "pubYear": 2015,
            "countryOrigin": "Sweden",
            "searchResultsPosition": 3,
            "ycoord": -270,
            "commPractice": "one to many, many to many",
            "pubName": "Coalition Clean Baltic (CCB)",
            "pubOrgType": "Local NGOs",
            "pubOrgSector": "Social",
            "targetAudienceStr": "General Public",
            "mediaGroup": "Print Media",
            "mediaDegree": "Second Degree Media",
            "_id": "#2209:3",
            "_type": "vertex",
            "ownedBy": "Caroline Brennan",
            "ownerOrg": "NUIG",
            "_label": "Flyer"
        },
        {
            "note": "",
            "name": "Pressure12",
            "weight": 0.9,
            "description": "causes state change",
            "_id": "#2377:23",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 270,
            "specificComponentAffected": "Sea butterfly, Limacina helicina",
            "ecologicalStatus": "Decrease",
            "name": "Pelagic Invertebrates",
            "description": "Contamination of Pelagic Invertebrates threatening Ecological Status",
            "ycoord": -70,
            "_id": "#1057:2",
            "_type": "vertex",
            "_label": "PelagicInvertebrates"
        },
        {
            "note": "",
            "name": "Pressure13",
            "weight": 1,
            "description": "causes state change",
            "_id": "#2378:23",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 400,
            "specificComponentAffected": "Round goby, Neogobius melanostomus",
            "abundanceOfPopulation": "Decrease",
            "name": "Fish Populations",
            "description": "Contamination of Fish Populations reducing population abundance",
            "ycoord": -100,
            "_id": "#1041:2",
            "_type": "vertex",
            "_label": "FishPopulations"
        },
        {
            "note": "",
            "name": "State11",
            "weight": 0.2,
            "description": "impacts",
            "_id": "#2377:24",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 390,
            "impact": "Biochemical and Mechnical Reduction and Distortion of Digestive, Metabolic or Endocrine Functions",
            "name": "Impact",
            "description": "Description of Impact on Fish Populations",
            "ycoord": 110,
            "_id": "#1109:2",
            "_type": "vertex",
            "_label": "Impact"
        },
        {
            "note": "",
            "name": "Impact11",
            "weight": 0.3,
            "description": "causes",
            "_id": "#2378:24",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 80,
            "essImpact": "Biomass nutrition reduction and contamination by toxins",
            "name": "Biomass nutrition",
            "description": "Reduction in the amount of nutrition by biomass",
            "ycoord": 300,
            "_id": "#1141:2",
            "_type": "vertex",
            "_label": "BiomassNutrition"
        },
        {
            "note": "",
            "name": "Welfare11",
            "weight": 0.4,
            "description": "controlled by",
            "_id": "#2379:24",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -110,
            "name": "National Environmental Regulation",
            "description": "National Regulation to reduce or eliminate use of microplastics in personal care and cosmetic products",
            "ycoord": -90,
            "_id": "#1465:2",
            "_type": "vertex",
            "_label": "NationalEnvReg"
        },
        {
            "note": "",
            "name": "Response11",
            "weight": 0.8,
            "description": "affects",
            "_id": "#2379:25",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "note": "",
            "name": "Welfare12",
            "weight": 0.5,
            "description": "controlled by",
            "_id": "#2380:24",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -270,
            "name": "International Agreement",
            "description": "International agreement to reduce or eliminate use of microplastics in personal care and cosmetic products",
            "ycoord": -30,
            "_id": "#1497:2",
            "_type": "vertex",
            "_label": "InternationalAgreement"
        },
        {
            "note": "",
            "name": "Response12",
            "weight": 0.9,
            "description": "affects",
            "_id": "#2380:25",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "note": "",
            "name": "Welfare13",
            "weight": 0.6,
            "description": "controlled by",
            "_id": "#2377:25",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -580,
            "name": "Voluntarism",
            "description": "Voluntary Measure to reduce or eliminate use of microplastics in personal care and cosmetic products",
            "ycoord": 150,
            "_id": "#1509:2",
            "_type": "vertex",
            "_label": "Voluntarism"
        },
        {
            "note": "",
            "name": "Response13",
            "weight": 1,
            "description": "affects",
            "_id": "#2377:26",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "note": "",
            "name": "Welfare14",
            "weight": 0.7,
            "description": "controlled by",
            "_id": "#2378:25",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -400,
            "name": "Changing Values and Attitudes",
            "description": "Encouraging the consumer to reduce or eliminate use of personal care and cosmetic products containing microplastics",
            "ycoord": 70,
            "_id": "#1585:2",
            "_type": "vertex",
            "_label": "ChangingValues"
        },
        {
            "note": "",
            "name": "Response14",
            "weight": 0,
            "description": "affects",
            "_id": "#2378:26",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "note": "",
            "name": "Pressure14",
            "weight": 0,
            "description": "causes state change",
            "_id": "#2379:23",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 510,
            "specificComponentAffected": "test",
            "naturalAndActualRange": "Decrease",
            "name": "Marine Mammals",
            "description": "Contamination of Marine Mammal xxx threatening range",
            "ycoord": -160,
            "_id": "#1045:2",
            "_type": "vertex",
            "_label": "MarineMammals"
        },
        {
            "note": "",
            "name": "Pressure15",
            "weight": 0,
            "description": "causes state change",
            "_id": "#2380:23",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": 560,
            "specificComponentAffected": "Yelkouan shearwater, Puffinus yelkouan",
            "populationDynamics": "Decrease in young population",
            "name": "Seabirds",
            "description": "Contamination of Seabirds changing Population Dynamics",
            "ycoord": -260,
            "_id": "#1053:2",
            "_type": "vertex",
            "_label": "Seabirds"
        },
        {
            "xcoord": -20,
            "name": "Consumer",
            "description": "Consumer of cosmetic products",
            "ycoord": -830,
            "_id": "#1925:2",
            "_type": "vertex",
            "_label": "Consumer"
        },
        {
            "xcoord": -360,
            "name": "Retailers",
            "description": "Retailers of cosmetic products",
            "ycoord": -790,
            "_id": "#1785:2",
            "_type": "vertex",
            "_label": "Retailers"
        },
        {
            "xcoord": -270,
            "name": "Cosmetics Manufacturers",
            "description": "Manufacturers of cosmetic products containing microplastics",
            "ycoord": -580,
            "_id": "#1721:2",
            "_type": "vertex",
            "_label": "Manufacturers"
        },
        {
            "name": "Scientific Article",
            "timeRefFrom": 2000,
            "mainSource": "Google search",
            "geogFocus": "EU",
            "rating": 8,
            "description": "Scientific background on a potential source of plastic particulate marine litter to support decision-making.",
            "retrievals": 1200,
            "language": "English",
            "title": "Review of Microplastics in Cosmetics",
            "knowledgeId": "MPL_1234",
            "timeRefTo": 2014,
            "xcoord": -530,
            "commPurpose": "educate, inform",
            "resourceURL": "http:\/\/www.ivm.vu.nl\/en\/Images\/Plastic_ingredients_in_Cosmetics_07-2014_FINAL_tcm234-409859.pdf",
            "impactFactor": 1.3,
            "englishTitle": "Review of Microplastics in Cosmetics",
            "likes": 2000,
            "participants": 12,
            "keyWords": "toothpaste, cosmetics, microplastics",
            "accessLevel": "Public",
            "entryDate": "Fri May 01 00:00:00 BST 2015",
            "author": "Lesley, H.A.",
            "hits": 99,
            "searchString": "A search string here",
            "pubYear": 2014,
            "countryOrigin": "Netherlands",
            "searchResultsPosition": 7,
            "ycoord": -540,
            "commPractice": "one to many",
            "pubName": "IVM Institute for Environmental Studies",
            "pubOrgType": "Scientific Knowledge Producers",
            "pubOrgSector": "Professional",
            "targetAudienceStr": "Fishermen, School Pupil",
            "mediaGroup": "Print Media",
            "mediaDegree": "Second Degree Media",
            "_id": "#2177:2",
            "_type": "vertex",
            "ownedBy": "Caroline Brennan",
            "ownerOrg": "NUIG",
            "_label": "ScientificArticle"
        },
        {
            "name": "Website",
            "timeRefFrom": 2005,
            "mainSource": "Google Scholar",
            "geogFocus": "Global",
            "rating": 3,
            "description": "Not available",
            "retrievals": 3452,
            "language": "English",
            "title": "Microplastics - The Story of Stuff Project",
            "knowledgeId": "MPL_3456",
            "timeRefTo": 2010,
            "xcoord": -470,
            "commPurpose": "build consensus",
            "resourceURL": "http:\/\/storyofstuff.org\/plastic-microbeads-ban-the-bead\/",
            "impactFactor": 1.3,
            "englishTitle": "Microplastics - The Story of Stuff Project",
            "likes": 2000,
            "participants": 51,
            "keyWords": "Nanotoxicology, Cytotoxicity, Nanoparticles, Subcellular localization, Apoptosis",
            "accessLevel": "Public",
            "entryDate": "Fri May 01 00:00:00 BST 2015",
            "author": "Unspecified",
            "hits": 99,
            "searchString": "Academic search string here",
            "pubYear": 2015,
            "countryOrigin": "USA",
            "searchResultsPosition": 12,
            "ycoord": -470,
            "commPractice": "one to many, many to many",
            "pubName": "The Story of Stuff",
            "pubOrgType": "Administrators",
            "pubOrgSector": "Regulatory",
            "targetAudienceStr": "Fishermen, Actor",
            "mediaGroup": "Online Digital Media",
            "mediaDegree": "Third Degree Media",
            "_id": "#2305:2",
            "_type": "vertex",
            "ownedBy": "Caroline Brennan",
            "ownerOrg": "NUIG",
            "_label": "Website"
        },
        {
            "xcoord": -620,
            "name": "Material Availability",
            "description": "Plastic is cheap and its use is personal care and cosmetics products is increasing",
            "ycoord": -840,
            "_id": "#117:2",
            "_type": "vertex",
            "_label": "MaterialAvailability"
        },
        {
            "note": "",
            "name": "Driver12",
            "weight": 0.2,
            "description": "drives",
            "_id": "#2378:21",
            "_type": "vertex",
            "_label": "LinkEvidence"
        },
        {
            "xcoord": -470,
            "name": "Microplastics Manufacturers",
            "description": "Manufacturers of microplastics for use in the cosmetic industry",
            "ycoord": -800,
            "_id": "#1722:2",
            "_type": "vertex",
            "_label": "Manufacturers"
        },
        {
            "xcoord": -710,
            "name": "Material Science and Technology Developments",
            "description": "More and more forms of plastic are available",
            "ycoord": -750,
            "_id": "#149:2",
            "_type": "vertex",
            "_label": "MatScienceTechDev"
        },
        {
            "note": "",
            "name": "Driver13",
            "weight": 0.3,
            "description": "drives",
            "_id": "#2379:21",
            "_type": "vertex",
            "_label": "LinkEvidence"
        }],
    "edges": [{
            "description": "Story starts",
            "linkType": "S",
            "_id": "#14:64",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#93:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#13:65",
            "_type": "edge",
            "_outV": "#93:2",
            "_inV": "#2377:21",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#14:65",
            "_type": "edge",
            "_outV": "#2377:21",
            "_inV": "#673:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:64",
            "_type": "edge",
            "_outV": "#673:2",
            "_inV": "#2380:21",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:67",
            "_type": "edge",
            "_outV": "#2380:21",
            "_inV": "#469:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:67",
            "_type": "edge",
            "_outV": "#469:2",
            "_inV": "#2377:22",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:66",
            "_type": "edge",
            "_outV": "#2377:22",
            "_inV": "#261:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:65",
            "_type": "edge",
            "_outV": "#261:2",
            "_inV": "#2378:22",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:68",
            "_type": "edge",
            "_outV": "#2378:22",
            "_inV": "#441:2",
            "_label": null
        },
        {
            "linkType": "A",
            "_id": "#13:69",
            "_type": "edge",
            "_outV": "#441:2",
            "_inV": "#1949:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:69",
            "_type": "edge",
            "_outV": "#441:2",
            "_inV": "#2379:22",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:68",
            "_type": "edge",
            "_outV": "#2379:22",
            "_inV": "#957:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:67",
            "_type": "edge",
            "_outV": "#957:2",
            "_inV": "#2380:22",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:70",
            "_type": "edge",
            "_outV": "#2380:22",
            "_inV": "#1069:2",
            "_label": null
        },
        {
            "description": "Supported by",
            "linkType": "K",
            "relevance": 1,
            "_id": "#15:77",
            "_type": "edge",
            "_outV": "#2380:22",
            "_inV": "#2209:3",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:70",
            "_type": "edge",
            "_outV": "#957:2",
            "_inV": "#2377:23",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:69",
            "_type": "edge",
            "_outV": "#2377:23",
            "_inV": "#1057:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:68",
            "_type": "edge",
            "_outV": "#957:2",
            "_inV": "#2378:23",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:71",
            "_type": "edge",
            "_outV": "#2378:23",
            "_inV": "#1041:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:72",
            "_type": "edge",
            "_outV": "#1041:2",
            "_inV": "#2377:24",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:71",
            "_type": "edge",
            "_outV": "#2377:24",
            "_inV": "#1109:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:70",
            "_type": "edge",
            "_outV": "#1109:2",
            "_inV": "#2378:24",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:73",
            "_type": "edge",
            "_outV": "#2378:24",
            "_inV": "#1141:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:73",
            "_type": "edge",
            "_outV": "#1141:2",
            "_inV": "#2379:24",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:72",
            "_type": "edge",
            "_outV": "#2379:24",
            "_inV": "#1465:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:75",
            "_type": "edge",
            "_outV": "#1465:2",
            "_inV": "#2379:25",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:74",
            "_type": "edge",
            "_outV": "#2379:25",
            "_inV": "#673:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:71",
            "_type": "edge",
            "_outV": "#1141:2",
            "_inV": "#2380:24",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:74",
            "_type": "edge",
            "_outV": "#2380:24",
            "_inV": "#1497:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:73",
            "_type": "edge",
            "_outV": "#1497:2",
            "_inV": "#2380:25",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:76",
            "_type": "edge",
            "_outV": "#2380:25",
            "_inV": "#673:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:74",
            "_type": "edge",
            "_outV": "#1141:2",
            "_inV": "#2377:25",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:73",
            "_type": "edge",
            "_outV": "#2377:25",
            "_inV": "#1509:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:76",
            "_type": "edge",
            "_outV": "#1509:2",
            "_inV": "#2377:26",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:75",
            "_type": "edge",
            "_outV": "#2377:26",
            "_inV": "#93:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:72",
            "_type": "edge",
            "_outV": "#1141:2",
            "_inV": "#2378:25",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:75",
            "_type": "edge",
            "_outV": "#2378:25",
            "_inV": "#1585:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:74",
            "_type": "edge",
            "_outV": "#1585:2",
            "_inV": "#2378:26",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:77",
            "_type": "edge",
            "_outV": "#2378:26",
            "_inV": "#93:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#14:71",
            "_type": "edge",
            "_outV": "#957:2",
            "_inV": "#2379:23",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#15:70",
            "_type": "edge",
            "_outV": "#2379:23",
            "_inV": "#1045:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#16:69",
            "_type": "edge",
            "_outV": "#957:2",
            "_inV": "#2380:23",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#13:72",
            "_type": "edge",
            "_outV": "#2380:23",
            "_inV": "#1053:2",
            "_label": null
        },
        {
            "linkType": "A",
            "_id": "#16:66",
            "_type": "edge",
            "_outV": "#261:2",
            "_inV": "#1925:2",
            "_label": null
        },
        {
            "linkType": "A",
            "_id": "#15:67",
            "_type": "edge",
            "_outV": "#469:2",
            "_inV": "#1785:2",
            "_label": null
        },
        {
            "linkType": "A",
            "_id": "#14:68",
            "_type": "edge",
            "_outV": "#673:2",
            "_inV": "#1721:2",
            "_label": null
        },
        {
            "description": "Supported by",
            "linkType": "K",
            "relevance": 0.3,
            "_id": "#13:78",
            "_type": "edge",
            "_outV": "#673:2",
            "_inV": "#2177:2",
            "_label": null
        },
        {
            "description": "Supported by",
            "linkType": "K",
            "relevance": 0.7,
            "_id": "#14:78",
            "_type": "edge",
            "_outV": "#673:2",
            "_inV": "#2305:2",
            "_label": null
        },
        {
            "description": "Story starts",
            "linkType": "S",
            "_id": "#15:63",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#117:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#15:64",
            "_type": "edge",
            "_outV": "#117:2",
            "_inV": "#2378:21",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#16:63",
            "_type": "edge",
            "_outV": "#2378:21",
            "_inV": "#673:2",
            "_label": null
        },
        {
            "linkType": "A",
            "_id": "#15:65",
            "_type": "edge",
            "_outV": "#2378:21",
            "_inV": "#1722:2",
            "_label": null
        },
        {
            "description": "Story starts",
            "linkType": "S",
            "_id": "#16:62",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#149:2",
            "_label": null
        },
        {
            "linkType": "C1",
            "_id": "#13:66",
            "_type": "edge",
            "_outV": "#149:2",
            "_inV": "#2379:21",
            "_label": null
        },
        {
            "linkType": "C2",
            "_id": "#14:66",
            "_type": "edge",
            "_outV": "#2379:21",
            "_inV": "#673:2",
            "_label": null
        },
        {
            "edgeYcoord": -540,
            "description": "Invisible",
            "linkType": "Invisible",
            "edgeXcoord": -530,
            "_id": "#14:77",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#2177:2",
            "_label": null
        },
        {
            "edgeYcoord": -270,
            "description": "Invisible",
            "linkType": "Invisible",
            "edgeXcoord": 70,
            "_id": "#15:76",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#2209:3",
            "_label": null
        },
        {
            "edgeYcoord": -470,
            "description": "Invisible",
            "linkType": "Invisible",
            "edgeXcoord": -470,
            "_id": "#16:75",
            "_type": "edge",
            "_outV": "#17:3",
            "_inV": "#2305:2",
            "_label": null
        }]
}

var erd = joint.shapes.erd;

var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: document.getElementById('paper2'),
    width: 1000,
    height: 1000,
    gridSize: 1,
    model: graph,
    linkPinning: false,
//   linkConnectionPoint: function(linkView, elementView, magnet, reference) {
//        var element = elementView.model;
//        return element.getConnectionPoint(reference) || element.getBBox().center();
//    }
});
var createLink = function (elm1, elm2) {

    var myLink = new erd.Line({
        markup: [
            '<path class="connection" stroke="black" d="M 0 0 0 0"/>',
            '<path class="connection-wrap" d="M 0 0 0 0"/>',
            '<g class="labels"/>',
            '<g class="marker-vertices"/>',
            '<g class="marker-arrowheads"/>'
        ].join(''),
        source: {id: elm1.id},
        target: {id: elm2.id}
    });

    return myLink.addTo(graph);
};

var verticesCount;
var length = smallJSONData.vertices.length;
var storyAmount = 0;
for (verticesCount = 0; verticesCount < length; verticesCount++)
{
    var vertexType = (smallJSONData.vertices[verticesCount]['_label']);
    console.log(vertexType);
    if (vertexType === "Story")
    {
        storyAmount++;
    }
}
console.log("ssss-= ",storyAmount);
var edgesCount = 0;
var edgesLength = smallJSONData.edges.length;
var targetCanvasId;
var sourceCanvasId;

for (verticesCount = 0; verticesCount < length; verticesCount++)
{
    //get x and y co ordinates

    //var xcoord = Math.abs(smallJSONData.vertices[verticesCount]['xcoord']);
    //var ycoord = Math.abs(smallJSONData.vertices[verticesCount]['ycoord']);
    var name = smallJSONData.vertices[verticesCount].name;
    var vertexTyped = (smallJSONData.vertices[verticesCount]['_label']);
    //console.log(vertexType);
   var storyCount = 1;
   var indirectDriverCount =1;
   

    if (vertexType === "Story")
    {
        var storyXcoord = 150;
        var storyYcoord = 150;
        console.log("x = ", storyXcoord, "y = ", storyYcoord * storyCount);
        var shapes = new erd.ISA({
            position: {x: storyXcoord, y: storyYcoord},
            attrs: {
                text: {
                    fill: '#fffff',
                    text: name,
                    'letter-spacing': 0,
                    style: {'text-shadow': '1px 0 1px #333333'}
                },
                '.outer, .inner': {
                    fill: '#31d0c6',
                    stroke: 'none',
                    filter: {name: 'dropShadow', args: {dx: 0.555, dy: 20, blur: 20, color: '#99'}}
                }
            }
        });
    }
    if (vertexType === "IndirectDriver")
    {
        idYcoord = 150*indirectDriverCount; 
        console.log("x = ", storyXcoord, "y = ", idYcoord);
        var shapes = new erd.ISA({
            position: {x: storyXcoord+250, y: idYcoord},
            attrs: {
                text: {
                    fill: '#fffff',
                    text: name,
                    'letter-spacing': 0,
                    style: {'text-shadow': '1px 0 1px #333333'}
                },
                '.outer, .inner': {
                    fill: '#31d0c6',
                    stroke: 'none',
                    filter: {name: 'dropShadow', args: {dx: 0.555, dy: 20, blur: 20, color: '#99'}}
                }
            }
        });
        console.log(indirectDriverCount);
        
    }
    graph.addCells(shapes);
//var oldshape;
//var newshape;
//var temp;
//temp = newshape;
//oldshape=temp;
//newshape = shapes;
//if (verticesCount>0)
//{
//createLink(oldshape,newshape);
//}
}

function getCanvasIdByDatabaseId(databaseId, graph)
{
    var returnValue = null;

    // Go through each of the elements in the graph and find the 
    // element that contains the databaseId
    _.each(graph.getElements(), function (el) {
        console.log(el);
        if (el.id === databaseId)
        {
            returnValue = el.get('id');
        }
    });

    return returnValue;

}
for (edgesCount; edgesCount < edgesLength; edgesCount++) {

    sourceCanvasId = ((smallJSONData.edges[edgesCount]._outV));
    targetCanvasId = ((smallJSONData.edges[edgesCount]._inV));

    sid = getCanvasIdByDatabaseId(sourceCanvasId, this.graph);
    tid = getCanvasIdByDatabaseId(targetCanvasId, this.graph);
    newCanvasEdge = new erd.Line({
        source: {id: sid},
        target: {id: tid}
    });

    newCanvasEdge.label(0, {attrs: {text: {text: ''}}});
    newCanvasEdge.label(1, {attrs: {text: {text: ''}}});
    newCanvasEdge.addTo(graph);
    //newCanvasEdge.set( { databaseId:smallJSONData.edges[edgesCount]._id } );

    //createLink(sourceCanvasId, targetCanvasId);


}
      