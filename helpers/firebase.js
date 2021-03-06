const admin = require("firebase-admin");

module.exports = admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "interview-organizer",
    private_key_id: process.env.FB_PRIVATE_KEY_ID,
    private_key: process.env.FB_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FB_CLIENT_EMAIL,
    client_id: process.env.FB_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8bozw%40interview-organizer.iam.gserviceaccount.com"
  }),
  databaseURL: "https://interview-organizer.firebaseio.com"
});
