import { useCallback } from "react";
import { isEmpty } from "lodash";

interface LoginResult {
  accessToken: string;
  userId: string;
  orgId: string;
}

export function useEgulenLogin() {
  const login = useCallback(
    async (force: boolean = false): Promise<LoginResult> => {
      let accessToken = localStorage.getItem("ACCESS_TOKEN") || "";
      let userId = localStorage.getItem("USER_ID") || "";
      let orgId = localStorage.getItem("ORG_ID") || "";

      const isTokenInvalid =
        isEmpty(accessToken) || isEmpty(userId) || isEmpty(orgId);

      // ⛔ force === true бол шууд дахин login хийнэ
      if (!isTokenInvalid && !force) {
        return { accessToken, userId, orgId };
      }

      const loginRes = await fetch("/api/egulen/login", { method: "POST" });
      const loginData = await loginRes.json();

      if (!loginRes.ok || !loginData.success) throw new Error("Login failed");

      const user = loginData.success;
      accessToken = user.access_token;
      userId = user.id;
      orgId = user.organization?.id;
      const orgName = user.organization?.title || "";

      if (!accessToken || !userId || !orgId)
        throw new Error("Incomplete login data");

      localStorage.setItem("ACCESS_TOKEN", accessToken);
      localStorage.setItem("USER_ID", userId);
      localStorage.setItem("ORG_ID", orgId);
      localStorage.setItem("ORG_NAME", orgName);

      return { accessToken, userId, orgId };
    },
    []
  );

  return { login };
}
