import './gesture-handler';

import React from "react";

import { Authenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";

import outputs from "./amplify_outputs.json";
import SafeSteps from "./SafeSteps";

Amplify.configure(outputs);

const App = () => {
  return (
    <Authenticator.Provider>
      <SafeSteps/>
    </Authenticator.Provider>
  );
};

export default App;