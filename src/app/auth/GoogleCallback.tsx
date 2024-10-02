// GoogleCallback.js
import React, { useEffect } from "react";
import { useActionData, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { baseUrl } from "../../helpers/constant";
import { handleResponse } from "../../helpers/helperFunction";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code"); // Extract the authorization code from the URL

      if (code) {
        try {
          // First request to get the token
          const response = await axios.get(
            `${baseUrl}/auth/login/google/callback?code=${code}`,
          );

          const token = response.data?.token;

          if (token) {
            // Second request to get user data using the token
            const userResponse = await axios.get(`${baseUrl}/user/info`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            dispatch(
              setCredentials({
                token,
                data: userResponse?.data?.data?.user,
              }),
            );
            // Navigate to another page if needed
            navigate("/dashboard");
          }
        } catch (error: any) {
          handleResponse(error?.data);
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallback;
