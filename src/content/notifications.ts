export const NOTIFICATION_CONTENT = {
  introTitle: "Notification reminder",
  introBody: `Within this 24/7 digital age replying back to calls and messages is seen as a must. According to the BBC people have cited confusion and anxiety when people don't respond back as soon as possible. This can also be considered rude, these feelings could be misconstrued as the user on the other end could be unavailable to call or text back due to the circumstances that they are in. 

In most Android phones there currently isn't a feature where the user can able notifications after they receive a call or message that had been missed. This feature would allow the user to enable a reminder and choose a timer for when the notification to reply back or call back to. This feature should ultimately reduce feelings of anxiety, confusion and save the offending user from looking rude.`,

  challengeTitle: "Challenge",
  challengeBody: `Being an offender of this problem where failing to reply back to messages and calls this can lead to miscommunication and ultimately looking rude to the person on the receiving end. 

The purpose of creating a feature that reminds users to respond back to calls and message is to avoid confusion and anxiety for the person on the receiving end. Especially since we live in a 24/7 digital world.  

The users this would impact the most are people who lead a busy life who struggle with digital communication within this 24/7 digital age. This would people who are constantly working or people who aren’t as tied to their phone so do not respond to messages and calls in a respectable time.`,

  researchTitle: "Research",
  surveyTitle: "User Survey",
  surveyBody: `I created a survey that was sent out to phone users who used Android phones more specifically users who lead a busy lifestyle with a mixture of work, social and other my findings are as shown below:`, 
  surveyStats: [
    "48% tend to forget to respond to calls and messages",
    "22% found that they respond a day or more later to the message/call",
    "9% do not even respond back if the timeframe has been too long to call or message back ",
    "72% said they would benefit from a feature that could help with missed calls and messages"
  ],
  userQuote: `Honestly I'm constantly on the move so I don't really check my calls and messages so I tend to forget the call or message I received at the time`,

  analysisTitle: "Competitive Analysis",
  analysisBody1: `I looked at different apps currently on the market, such as iOS notifications, Android notifications, and other third-party apps like Notification History Log. I found that while these apps allow you to see previous notifications, they do not allow you to prioritize them or set reminders for them.`,

  insightsTitle: "Insights",
  insightsItems: [
    "Users find it difficult to stay on top of notifications.",
    "Users often forget to reply to messages.",
    "There is a need for a feature that allows users to prioritize notifications and set reminders."
  ],

  ideationTitle: "Ideation",
  ideationBody: `After gathering all the information from the research, I started to brainstorm ideas for the app. The result was to create a tool that would allow the user to categorize their notifications into three categories: 
• High priority (red)
• Medium priority (yellow)
• Low priority (green)
Each category would have a different color to represent the level of priority.`,

  iteration1Title: "First Iteration",
  iteration1Body: `In the first iteration, the user would enter the app and see a list of all their notifications. From there, they could choose which notification they want to prioritize. This would allow the user to easily see all their notifications in one place and then decide which ones are important.`,

  finalIterationTitle: "Final Iteration",
  finalIterationBody: `In the final iteration, I decided to simplify the process. Instead of the user having to enter the app to prioritize, the app would now allow the user to prioritize directly from the notification itself. This would make it easier for the user to stay on top of their notifications and would be less time-consuming.`,

  flowDiagramIntro: "Below is the flow design of how the system would operate:",
  flowDescription: `The design concept allowed the user to filter notifications based on the designated categories. The user could set reminders for when they want to be notified, and they could also see a history of all their notifications and when they were received. This was simply created to allow the user to feel in control and not having to go through a plethora of notifications to find what they're looking for.`,

  proposedAppTitle: "Proposed app design",
  proposedAppBody: "With this in mind, the final design focuses on a minimal UI that complements existing system notifications rather than cluttering the screen. The user is able to prioritize notifications from the lock screen and view their organized list in the app for later.",

  visualIdentity: {
    title: "Design Language",
    description: "The concept behind the design language for this feature was to be sleek, simple and easy to navigate. The purpose is for this to be very self-explanatory and easy for the user to navigate while matching modern OS aesthetics.",
    colors: [
      { hex: "#FFB3A1", label: "Pastel red" },
      { hex: "#4A3B37", label: "Espresso brown" },
      { hex: "#F3D8D3", label: "Sandy pink" },
      { hex: "#B79E98", label: "Dusty mushroom" },
      { hex: "#3A2B27", label: "Deep cocoa" },
      { hex: "#2B1F1C", label: "Dark charcoal" }
    ],
    typography: [
      { font: "Work Sans", usage: "Regular, Semi-bold, Bold" }
    ]
  },

  nextStepsTitle: "Next steps",
  nextStepsBody: "As this is still a work in progress for the next steps I would like to:",
  nextStepsItems: [
    "Test the app with users and gather feedback to improve the user experience.",
    "Look into ways to integrate the app with other apps and features.",
    "Finalize the design and look into ways to develop it into a fully functional app."
  ]
};
