export const GithubUser = async ({ username }: { username: string }) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return (
    <>
      {data?.login}
      {data?.avatarUrl}
    </>
  );
};
