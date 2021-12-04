import { withAuth } from "../../../src/commons/hocs/withAuth";
import LoginSuccessPage from "../../../src/componentds/units/sign/success";

// export default function SignUpPages() {
//   return withAuth(LoginSuccessPage)
// }

function SignUpPages() {
  return <LoginSuccessPage />;
}

export default withAuth(SignUpPages);
