export const NOTIFICATION_CONTENT = {
  introTitle: "Notification reminder",
  introBody: `In most Android phones there currently isn’t a feature within the settings of the phone where the user can enable a reminder to respond back to missed calls or messages during the period they were unable to. The proposed design would be to have a reminder feature alert integrated within the settings where the user can enable/disable as to whether they would like to be reminded to call/message back all the missed responses. This would be achieved by the user setting a scheduled timer which sends a singular ‘nudge’ to respond back to missed calls/messages.\n\nBelow is my research supporting my design as to why this feature would be necessary.\n\nWithin this 24/7 digital age replying back to calls and messages is seen as a must. According to the BBC people have cited confusion and anxiety when people don’t respond back as soon as possible. A person interviewed by the BBC quoted the following:\n\n`,
  introQuote: 'So when a text goes unanswered, “some people get really upset, because they’re projecting their own anxieties” onto the situation -Hancock',
  introBody2: "This can also be considered rude, these feelings could be misconstrued as the user on the other end could be unavailable to call or text back due to the circumstances that they are in. ",

  challengeTitle: "Challenge",
  challengeBody: `The reason why the reminder feature is integrated within the operating system as opposed to being in an app is that it would be very accessible and the simplicity would imitate a system update rather than an external app. This would feel familiar to the user as well as the fact that an external app would be easier for the user to ignore.

  The users this would impact the most are people who lead a busy lifestyle who struggle with digital communication within this 24/7 digital age. This would be for people who are constantly working or people who aren’t as tied to their phone so do not respond to messages and calls in a respectable time.

  Below are the summarised points:`,
  challengePoints:[
    "People are unable to repsond back to others in a respectable timeframe within this digital age ",
    "Design a feature within the operating system which can be enabled/disabled by the user to respond back to the reciever in a respectable timeframe ",
    "Key demographic of this app would be young people between the ages of 18-30 yrs old",
    ],

  researchTitle: "Research",
  surveyTitle: "User surveys",
  surveyBody: "I created a survey that was sent out to 10 users who used Android phones, more specifically, users who lead a busy lifestyle with a mixture of work, social and other my findings are as shown below:",
  surveyStats: [
    "48% tend to forget to respond to calls and messages",
    "22% found that they respond a day or more later to the message/call",
    "9% do not even respond back if the timeframe has been too long to call or message back",
    "72% said they would benefit from a feature that could help with missed calls and messages"
  ],
  userQuote: "Honestly I'm constantly on the move so I don't really check my calls and messages so I tend to forget the call or message I received at the time",
  surveySummary: "Furthermore, the results aren't entirely reliable as I was only able to use a small sample size. If this surevy was redone in order to gain better results a large sample siz wouldve been used. ",

  analysisTitle: "Competitive Analysis",
  analysisBody1: `I looked into Android phones and found that it was very hard to find a feature where it had a notification reminder. This feature however does exist on iPhones, within the UK around 45-55% of users tend to be Android users this would ultimately leave out half the UK population of having miscommunication issues.`,

  insightsTitle: "Insights",
  insightsItems: [
    "Users expressed that they’re not very good at getting back to calls and messages if not prompted to ",
    "Users would benefit from a feature to have timed reminders so they’re prompted to reply or call back",
  ],

  ideationTitle: "Ideation",
  ideationBody: `From considering the outputs attained from the research as well as the summarised insights. The features concluded to make this feature that could be enabled on Android phone user settings: 
• User gets to enable/disable notification reminder 
• User is able to adjust timer to remind them to reply or call back `,

  iteration1Title: "First Iteration",
  iteration1Body: `For the first design concept, the design was placed within the settings page. This would initially catch the users attention. The problem with this is that the user will be able to ignore the feature and it'd be more instinctive for the user to go into the notifications feature.
  
  Below is the first design concept:`,

  finalIterationTitle: "Final Iteration",
  finalIterationBody: `This design concept allowed the design to be integrated within the settings under notifications. The positives of having this design over the previous iteration, is that the design couldn't be ignored. This design allowed the user to simply enable or disable the feature.
  
  Below is the final design:`,
  finalUserflow: "Below is the user flow of the design, this would be the expected journey for a user to navigate to the feature:",
  finalflowBody: 'With the above user journey flow diagram added, the user would have to go into the Notifcations withhin the settings and then scroll down to find the feature where a singular prompt would appear when the timer is up to remind the user to respond back to calls and messages. Whilst the previous iteration the component would immediately be on the homepage of the settings, the reason why this is integrated within the notifications for simplicity sakes and making the design more intiuitive for the user to find.',
  finaliterationQuote: "I think the feature is really good, it'd really help me with my time management when it comes to reponding back to messages and calls.- Alex",

  flowDiagramIntro: "Below is a flow design of how the feature would operate:",
  flowDescription: `The flow of the design is to be intuitive and simple to use where the use won't feel that this added feature is unfamiliar to them. The flow diagram also incorporates edge cases such as unable to find settings and how the user would be able to find the feature within the settings.`,

  proposedAppTitle: "Proposed app design",
  proposedAppBody: "With both the research, ideation as well as keeping the UI as simple as possible whilst maintaining familiarity within the design. The user will be able to enable the feature to remind themselves to call or message back. Below is an example of the protoype of the design: ",
  proposedSummary: "The problem with the current design upon reflection is that the user can only create one timer that would remind of them responding back to calls/messages. The way this feature could be further personalised is by assigning more than one reminder timer that could be for high priority people.",

  visualIdentity: {
    title: "Design Language",
    description: "The concept of the design language of this feature is to mimic what’s already there so it isn’t unfamiliar UI and the user is still able to navigate as normally like it’s any other features on the page. Below is the summary of what is expected:",
    colors: [
      { hex: "#FFB3A9", label: "Pastel red" },
      { hex: "#312220", label: "Espresso brown" },
      { hex: "#DBC5C3", label: "Dusty pink" },
      { hex: "#A6908D", label: "Dusty mushroom" },
      { hex: "#2F1E1C", label: "Deep cocoa" },
      { hex: "#221715", label: "Dark charcoal" }
    ],
    typography: [
      { font: "Work Sans", usage: "Regular, Semi-bold, Light" }
    ]
  },

  nextStepsTitle: "Next steps",
  nextStepsBody: "This is still in working progress for the next steps I want to:",
  nextStepsItems: [
    "I want to be able to make a workable prototype of this working, also would like to test this out with android users",
    "Propose this design feature to Google designers",
  ],

  impactmeasureTitle: "Impact and Measure",
  impactmeasureBody: "For this step, I'll be stating ways how I would measure the success output of the design once the working progress is able to be estabilished:",
  impactmeasureItems: [
    "Track the interactions of the added feature",
    "The feature update should be part of the system update, demo to the user how this can be used and how it can help",
    "A feedback pop up asking user 'how useful is this feature?'",
  ],

  nextprojectTitle: "Next project"
};
