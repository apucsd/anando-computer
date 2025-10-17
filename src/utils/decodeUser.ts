import { jwtDecode } from "jwt-decode";

const decodeUser = (token: string) => {
      try {
            const decodedToken = jwtDecode(token);
            return decodedToken;
      } catch (error) {
            console.log(error);
            return null;
      }
};

export default decodeUser;
