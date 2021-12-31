import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  let params = useParams();
  // let navigate = useNavigate();

  return (
    <div className="UserDetails">
      UserDetails Component {params.userId}
    </div>
  );
}

export default UserDetails;
