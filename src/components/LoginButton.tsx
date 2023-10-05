import { useAxios } from "../utils/useAxios";
import { useAuth } from "../utils/useAuth";

const LoginButton = () => {
  const { axiosInstance } = useAxios();
  const { shortTermToken, setShortTermToken } = useAuth();

  const login = (event: any) => {
    const authorization = `Bearer ${process.env.REACT_APP_LONG_TERM_TOKEN}`;
    axiosInstance
      .post(
        "/sts/v1/token",
        {},
        {
          headers: {
            Authorization: authorization,
          },
        }
      )
      .then((res) => {
        setShortTermToken(res.data.result.access_token);
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        throw err;
      });
  };

  return (
    <>
      {shortTermToken ? (
        <button onClick={login}>Refresh Login</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  );
};

export default LoginButton;
