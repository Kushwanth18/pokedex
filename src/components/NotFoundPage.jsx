import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      404 NOT FOUND
      <Link to="/">GO to home</Link>
    </div>
  );
}
