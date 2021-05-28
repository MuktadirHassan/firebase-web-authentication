import EmailSignIn from "./EmailSignIn";
import FacebookSignIn from "./FacebookSignIn";
import GithubSignIn from "./GithubSignIn";
import GoogleSignIn from "./GoogleSignIn";

export default function Login() {
  return (
    <div className="max-w-sm mx-auto">
      <EmailSignIn></EmailSignIn>

      {/* Third Party SignIn */}
      <div className="flex">
        <GoogleSignIn></GoogleSignIn>
        <FacebookSignIn></FacebookSignIn>
        <GithubSignIn></GithubSignIn>
      </div>
    </div>
  );
}
