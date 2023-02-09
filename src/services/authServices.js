const dummyWaiting = async (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

export async function loginAxios() {
  // return api.get(ENDPOINT.auth);
  return await dummyWaiting({
    token: "nathan-ganteng-token",
    refresh_token: "nathan-gateng-refresh-token",
    expired_at: Date(),
  });
}
