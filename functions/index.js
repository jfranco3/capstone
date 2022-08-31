const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.addAdminRole = functions.https.onCall(async (data, context) => {
  try {
    const roles = {
      user1: false,
      allUsers: false,
    };
    roles[data.role] = true;
    // Tell our database to use data from our front-end to
    // create a claim/role
    await admin.auth().setCustomUserClaims(data.uid, roles);

    // The next 3 lines for testing purposes to see what is happening
    const userData = await admin.auth().getUserByEmail(data.email);
    // console.log("userDatauserData", userData);
    return { result: userData }; // Returning entire `userData` Object isn't
    // necessary in production; just return userData.metadata or a
    //  "success" string.
  } catch (error) {
    console.log(error);
    // See https://firebase.google.com/docs/functions/callable#handle_errors
  }
});

exports.testYelpAPI = functions.https.onCall(async () => {
  try {
    var url =
      "https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco";
    var bearer =
      "Bearer " +
      "sPU_FE4tC6e41h7PLR7JSV7iozl2NWs1BvJ4X-kvd2rkY-7_CBu9_OW1oDpsAzZ0IikzpkPlqp2RY3ng3oAu7JubwDfrOunjC3_v20XYEg4IbtY2GitbdmzIdB8FY3Yx";

    const yelpData = await axios.get(url, {
      // method: "GET",
      // withCredentials: true,
      // credentials: "include",
      headers: {
        Authorization: bearer,
        // "Content-Type": "application/json",
      },
    });
    // const data = await yelpData.json();
    // console.log("DATA", data);
    // console.log("yelpData", yelpData.data);

    const response1 = "successs";
    // const response2 = JSON.stringify(yelpData);
    // console.log(response2);
    const response3 = JSON.stringify(yelpData.data);
    console.log(response3);

    return { result: response3 };
  } catch (error) {
    console.log(error);
  }
});
