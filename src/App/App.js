import React from 'react';

import ReactJson from "react-json-view";
import Header from "../screens/Header/Header";
import Footer from "../screens/Footer/Footer";
import Main from "../screens/Main/Main";
import C_studentRecord from "../components/studentRecord/C_studentRecord";


const studentRecord = {
    "studentInfo": {
        "studentInfoHeader": {
            "studentCRMId":"",
            "studentGender": "",
            "studentEmailId":"",
            "studentMobile":{
                "studentMobileCountryCode":"",
                "studentMobileNumber":""
            },
            "studentName": {
                "studentFirstName":"",
                "studentMiddleInitial":"",
                "studentLastName":""
            },
            "studentAddress":{
                "studentAddressLine1":"",
                "studentAddressLine2":"",
                "studentAddressLine3":"",
                "studentAddressCity":"",
                "studentAddressPostCode":"",
                "studentAddressStateOrProvince":"",
                "studentAddressCountry":""
            },
            "studentBirthDate":{
                "studentBirthYear":"",
                "studentBirthMonth":"",
                "studentBirthDay":""
            }
        },
        "studentCitizenship": {
            "studentCountryOfResidence": "",
            "studentCountryOfBirth": "",
            "studentCityOfBirth": "",
            "studentNationality": "",
            "studentNoOfYrsInUS": "",
            "studentNoOfYrsOutOfUS": "",
            "studentCitizenshipStatusUSA": ""
        },
        "parentsInfo": {
            "permanentHomeGuardian": "",
            "parents": [
                {
                    "parentType": "",
                    "parentLiving": "",
                    "parentMaritalStatus": "",
                    "parentPrefix": "",
                    "parentName": {
                        "parentFirstName": "",
                        "parentMiddleInitial": "",
                        "parentLastName": "",
                        "parentFormerLastName": ""
                    },
                    "parentCountryOfBirth": "",
                    "parentOccupation": "",
                    "parentEducationLevel": "",
                    "parentMobile": {
                        "mobileCountryCode": "",
                        "mobileNumber": ""
                    },
                    "parentEmailId": "",
                    "parentAddress": {
                        "addressLine1": "",
                        "addressLine2": "",
                        "addressLine3": "",
                        "addressCity": "",
                        "addressStateOrProvince": "",
                        "addressCountry": ""
                    }
                }
            ]
        },
        "siblings": [
            {
                "firstName": "",
                "middleInitial": "",
                "lastName": "",
                "age": "",
                "relationship": "",
                "educationLevel": ""
            }
        ],
        "academicPerformance": {
            "educationRecord":[
                {
                    "schoolName":"",
                    "schoolEntryDate": {
                        "schoolYearOfEntry":"",
                        "schoolMonthOfEntry":""
                    },
                    "schoolZipCode": "",
                    "boardingSchool": "",
                    "currentSchool": "",
                    "schoolLevel":"",
                    "gradeReportingUnitName":"",
                    "gradeOrCGPA": "",
                    "transcriptDoc": "",
                    "recommendationLetters": [
                        {
                            "recommendedBy": "",
                            "letterAttachment": ""
                        }
                    ],
                    "otherSchoolDocuments": [
                        {
                            "documentTitle": "",
                            "documentAttachment": ""
                        }
                    ]
                }
            ],
            "honorsReceived": [
                {
                    "honorTitle": "",
                    "gradeLevel": "",
                    "levelOfRecognition": ""
                }
            ],
            "testScores": {
                "SATTest": [
                    {
                        "SATTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "SATSectionScores": {
                            "scoreEBRW": "",
                            "scoreMath": ""
                        },
                        "scoreTotal": "",
                        "scoreEssay": {
                            "rater1": "",
                            "rater2": "",
                            "rater3": ""
                        }
                    }
                ],
                "subjectSATTest": [
                    {
                        "subjectSATTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "subjectSATSubject": "",
                        "subjectSATOverallScore": ""
                    }
                ],
                "ACTTest": [
                    {
                        "ACTTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "ACTSectionScores": {
                            "STEM": {
                                "scoreSTEM": "",
                                "scoreMath": "",
                                "scoreScience": ""
                            },
                            "ELA": {
                                "scoreELA": "",
                                "scoreEnglish": "",
                                "scoreReading": "",
                                "scoreWriting": ""
                            }
                        },
                        "ACTScoreComposite": ""
                    }
                ],
                "TOEFLTest": [
                    {
                        "TOEFLTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "TOEFLSectionScores": {
                            "scoreReading": "",
                            "scoreListening": "",
                            "scoreSpeaking": "",
                            "scoreWriting": ""
                        }
                    }
                ],
                "IELTSTest": [
                    {
                        "IELTSTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "IELTSSectionScores": {
                            "scoreReading": "",
                            "scoreListening": "",
                            "scoreSpeaking": "",
                            "scoreWriting": ""
                        }
                    }
                ],
                "advancedPlacementTest": [
                    {
                        "advancedPlacementTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "apSubject": "",
                        "overallScore": ""

                    }
                ],
                "ibSubjectsTest": [
                    {
                        "ibSubjectTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "ibSubject": "",
                        "ibLevel": "",
                        "overallScore": ""

                    }
                ],
                "cambridgeALevelSubjectsTest": [
                    {
                        "cambridgeTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "cambridgeSubject": "",
                        "overallScore": ""

                    }
                ],
                "GRETest": [
                    {
                        "GRETestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "GRESectionScores": {
                            "scoreVerbalReasoning": "",
                            "scoreQuantitativeReasoning": "",
                            "scoreAnalyticalWriting": ""
                        }
                    }
                ],
                "GMATTest": [
                    {
                        "GMATTestDate": {
                            "testYear": "",
                            "testMonth": "",
                            "testDay": ""
                        },
                        "GMATSectionScores": {
                            "scoreVerbal": "",
                            "scoreQuantitative": "",
                            "scoreAnalyticalWriting": "",
                            "scoreTotal": "",
                            "scoreAWA": "",
                            "scoreIntegratedReasoning": ""
                        }
                    }
                ]
            }
        },
        "workExperience": [
            {
                "employer": "",
                "startDate": "",
                "endDate": "",
                "currentEmployer": "",
                "jobTitle": "",
                "natureOfWork": "",
                "fullOrPartTime": "",
                "paidOrUnpaid": "",
                "recommendationOrExperienceLetter": ""
            }
        ],
        "extraCurricular": [
            {
                "area": "",
                "description": "",
                "relevantDocumentation": ""
            }
        ],
        "careerGoal": {
            "careerInterestStream": "",
            "specialization": "",
            "superSpecialization": "",
            "budget": "",
            "personalityTraits": "",
            "specialNeeds": ""
        }
    },
    "careerPaths": [
        {
            "pathNumber": "",
            "preparationThruFACT": "",
            "statingEduLvl": "",
            "plannedHighestEduLvl": "",
            "analysisForStudyLevelChosen": [
                {
                    "studyLevelforConfig": "",
                    "preAdmissionAndApplication": {
                        "studyCountryChoice": "",
                        "specificCollegeChoices": [
                            {
                                "collegeName": ""
                            }
                        ],
                        "preparation": {
                            "costPreAdmissionTotal": "",
                            "costOfPreparation": "",
                            "qualifyingExamsAndAttempts": [
                                {
                                    "examName": "",
                                    "numberOfAttempts": "",
                                    "costOfExam": ""
                                }
                            ],
                            "universityApplications": {
                                "numberOfUniversityApplications": "",
                                "totalApplicationFees": ""
                            },
                            "otherExamsNumber": "",
                            "costFACT": "",
                            "costVisaAndOther": ""
                        }
                    },
                    "costOfAttendance": {
                        "collegeTypePreferred": "",
                        "collegeRankingPreferred": "",
                        "programIsSTEM": "",
                        "scholarshipPercentage": "",
                        "tuitionWaiverPercentage": "",
                        "stipendAmount": "",
                        "assistantship": "",
                        "semester": [
                            {
                                "semesterNumber": "",
                                "options": {
                                    "campusJobHoursPerWeek": "",
                                    "housingOnCampusOrOff": "",
                                    "campusHousingLevel": "",
                                    "campusMealPlanLevel": "",
                                    "offCampusHousingLevel": "",
                                    "coopOrInternship": "",
                                    "medicalInsuranceLevel": "",
                                    "booksLevel": "",
                                    "lifeStyleLevel": "",
                                    "vacationTravel": ""
                                },
                                "eligibilityForWorkPermitOrPR": "",
                                "netCostForSemester": "",
                                "expenses": {
                                    "totalExpenses": "",
                                    "expensesHeads": {
                                        "tuition": "",
                                        "foodAndLiving": "",
                                        "travelAndMisc": ""
                                    }
                                },
                                "income": {
                                    "totalIncome": "",
                                    "incomeHeads": {
                                        "scholarshipsAndStipendsAndWaivers": "",
                                        "coopOrCampusEarnings": ""
                                    }
                                }
                            }
                        ]
                    },
                    "summaryOfStudyLevelChosen": {
                        "typeOfProgram": "",
                        "workPermitsOrVisas": "",
                        "totalCostOfEducation": "",
                        "visaStatusOnCompletion": ""
                    },
                    "summaryOfTimeLineOfStudyLevelChosen": {
                        "completionOfSchoolingOrPreReqDate": {
                            "completionOfSchoolingOrPreReqDateYear":"",
                            "completionOfSchoolingOrPreReqDateMonth":"",
                            "completionOfSchoolingOrPreReqDateDay":""
                        },
                        "competitiveTests": [
                            {
                                "testName": "",
                                "testDatePlanned": {
                                    "testDatePlannedYear":"",
                                    "testDatePlannedMonth":"",
                                    "testDatePlannedDay":""
                                }
                            }
                        ],
                        "otherTests": [
                            {
                                "otherTestName": "",
                                "otherTestDatePlanned": {
                                    "otherTestDatePlannedYear":"",
                                    "otherTestDatePlannedMonth":"",
                                    "otherTestDatePlannedDay":""
                                }
                            }
                        ],
                        "planYears": {
                            "planStart": "",
                            "planEnd": ""
                        },
                        "breaks": [
                            {
                                "years": {
                                    "breakStart":"",
                                    "breakEnd":""
                                },
                                "reason": ""
                            }
                        ],
                        "addYearsForVocationalAddOns": "",
                        "estimatedCompletion": "",
                        "remarksOrNotes": "",
                        "careerAdviser": {
                            "CAFirstName": "",
                            "CAMiddleInitial": "",
                            "CALastName": "",
                            "CAId": "",
                            "CAEmailId": ""
                        }
                    }
                }
            ]
        }
    ],
    "gtsRecord": {
        "collegeSettingPreferred": "",
        "collegeSizePreferred": "",
        "essayOption": "",
        "essay": "",
        "areasOfStudy": "",
        "major": "",
        "ferpaUnderstood": "",
        "ferpaAck": "",
        "selectOpt": "",
        "ferpaWaiver": "",
        "signature": "",
        "ferpaDate": ""
    }
}


function App() {
  return (
    <body >
      <Header />
      <Main/>
      <C_studentRecord P_studentRecord = {studentRecord}/>
      <Footer/>
      <ReactJson src={studentRecord} />
    </body>
  );
}

export default App;
