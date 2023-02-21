import { UserCredentials } from "../store/features/types";
import { useAppDispatch } from "../store/hooks";
import decode from "jwt-decode";
import { loginUserActionCreator } from "../store/features/userSlice";

interface useUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}
interface CustomTokenPayload {
  name: string;
  id: string;
}

const useUser = (): useUserStructure => {
  const apiUrl = process.env.REACT_APP_URL_API;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}user/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = await response.json();
    const tokenPayload: CustomTokenPayload = decode(token);
    const { name, id } = tokenPayload;

    dispatch(loginUserActionCreator({ name, id, token }));
    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
