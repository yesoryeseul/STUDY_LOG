import { NavigateFunction } from "react-router-dom";
import { AuthData } from "../store/auth.store";

type NextPageProps = {
  path: string;
  navigate: NavigateFunction;
  postData?: AuthData;
  apiUrl?: string;
};

export const onClickNextPage = async ({
  navigate,
  path,
  postData,
  apiUrl,
}: NextPageProps) => {
  if (postData && apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData), // 전송할 데이터
      });

      if (response.ok) {
        navigate(path);
      } else {
        console.error("POST 요청 실패");
      }
    } catch (error) {
      console.error("POST 요청 중 오류 발생", error);
    }
  } else {
    navigate(path);
  }
};
