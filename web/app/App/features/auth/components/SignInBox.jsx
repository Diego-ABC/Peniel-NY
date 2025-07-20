import { Form } from "react-router-dom";

export default function SignInBox({ action = "" }) {
  return (
    <div className="card card-sm card-border border-base-300 bg-base-100">
      <div className="p-4 font-medium border-b-base-300 border-b-2 border-dashed">
        Sign in
      </div>
      <div className="card-body">
        <Form action={action} method="POST" className="contents">
          <input
            type="text"
            name="email"
            className="input"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="password"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
