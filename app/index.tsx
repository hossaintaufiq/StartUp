// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Welcome to the App</Text>
//     </View>
//   );
// }

import { registerRootComponent } from "expo"; // or 'react-native' for CLI
import App from "./App";

registerRootComponent(App);
